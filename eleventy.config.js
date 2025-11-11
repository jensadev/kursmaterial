import eleventyNavigationPlugin from "@11ty/eleventy-navigation"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import elasticlunr from "elasticlunr"
import eleventyPluginTOC from "@thedigitalman/eleventy-plugin-toc-a11y"
import emojiReadTime from "@11tyrocks/eleventy-plugin-emoji-readtime"
import markdownIt from "markdown-it"
import markdownItAnchor from "markdown-it-anchor"
import markdownItAbbr from "markdown-it-abbr"
import markdownItLinkAttributes from 'markdown-it-link-attributes'
import markdownItClass from '@toycode/markdown-it-class';

const slugifyString = str => {
    return slugify(str, {
        replacement: '-',
        remove: /[#,&,+()$~%.'":*¿?¡!<>{}]/g,
        lower: true
    });
}

const next = (array, current) => {
    const currentIndex = array.findIndex((page) => page.url === current);
    return array[currentIndex + 1];
}
const prev = (array, current) => {
    const currentIndex = array.findIndex((page) => page.url === current);
    return array[currentIndex - 1];
}

const searchFilter = async (collection) => {
    // what fields we'd like our index to consist of
    const index = elasticlunr(function () {
        this.addField("title")
        this.addField("summary")
        this.addField("tags")
        this.addField("keywords")
        this.addField("toc")
        this.setRef("id")
    })

    // loop through each page and add it to the index
    for (const page of collection) {
        const { data } = await page.template.read()

        // if the page is excluded from collections, skip it
        if (data.eleventyExcludeFromCollections) continue
        // if the page is not a markdown file, skip it
        if (!page.inputPath.endsWith(".md")) continue

        // Extract markdown headings (#, ##, ###) from rawInput
        const headings = [];
        const headingRegex = /^(#{1,3})\s+(.*)$/gm;
        let match;
        while ((match = headingRegex.exec(page.rawInput)) !== null) {
            headings.push(match[2].trim());
        }

        index.addDoc({
            id: page.url,
            title: data.title,
            summary: data.summary || "",
            tags: data.tags ? data.tags.toString() : "",
            keywords: data.keywords ? data.keywords.toString() : "",
            toc: headings.join(", ")
        })
    }

    return index.toJSON()
}

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin)
    eleventyConfig.addPassthroughCopy("./assets")

    eleventyConfig.addFilter("searchIndex", searchFilter)
    eleventyConfig.addFilter("next", next)
    eleventyConfig.addFilter("prev", prev)

    eleventyConfig.addCollection("search", collection => {
        return [...collection.getFilteredByGlob("./content/**/*.md")];
    })

    eleventyConfig.addPlugin(syntaxHighlight)
    eleventyConfig.addPlugin(eleventyPluginTOC, {
        headingText: "På den här sidan",
    })


    eleventyConfig.addShortcode("filename", (name) => {
        return `<span class="filename">${name}</span>`;
    })

    eleventyConfig.addFilter("filterByTag", (collection, tag) => {
        return collection.filter(page => {
            const tags = page.data && page.data.tags;
            if (!tags) return false;
            if (Array.isArray(tags)) {
                return tags.includes(tag);
            }
            return tags === tag;
        });
    });

    eleventyConfig.addFilter("orderByNavigation", (collection) => {
        return collection.slice().sort((a, b) => {
            const navA = a.data.eleventyNavigation || {};
            const navB = b.data.eleventyNavigation || {};
            const orderA = typeof navA.order === "number" ? navA.order : Number.POSITIVE_INFINITY;
            const orderB = typeof navB.order === "number" ? navB.order : Number.POSITIVE_INFINITY;
            return orderA - orderB;
        });
    });

    eleventyConfig.addPairedShortcode("alert", (content, className = "info") => {
        return `<div class="alert ${className}">${content}</div>`;
    });

    eleventyConfig.setLibrary('md',
        markdownIt({
            html: true,
            breaks: true,
            linkify: true,
            typographer: true,
        })
            .use(markdownItAnchor)
            .use(markdownItAbbr)
            .use(markdownItAnchor, {
                slugify: slugifyString,
                tabIndex: false,
                permalink: markdownItAnchor.permalink.headerLink({
                    class: 'heading-anchor'
                })
            })
            .use(markdownItClass, {})
            .use(markdownItLinkAttributes, [
                {
                    // match external links
                    matcher(href) {
                        return href.match(/^https?:\/\//);
                    },
                    attrs: {
                        rel: 'noopener'
                    }
                }
            ])
    )

    return {
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true,
    }
}