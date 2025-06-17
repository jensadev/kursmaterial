import eleventyNavigationPlugin from "@11ty/eleventy-navigation"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import elasticlunr from "elasticlunr"

const searchFilter = async (collection) => {
    // what fields we'd like our index to consist of
    const index = elasticlunr(function () {
        this.addField("title")
        this.addField("summary")
        this.addField("tags")
        this.addField("category")
        this.setRef("id")
    })

    // loop through each page and add it to the index
    for (const page of collection) {
        const { data } = await page.template.read()

        // if the page is excluded from collections, skip it
        if (data.eleventyExcludeFromCollections) continue
        // if the page is not a markdown file, skip it
        if (!page.inputPath.endsWith(".md")) continue

        index.addDoc({
            id: page.url,
            title: data.title,
            summary: data.summary || "",
            tags: data.tags ? data.tags.toString() : "",
            category: data.category || "",
        })
    }

    return index.toJSON()
}

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin)
    eleventyConfig.addPassthroughCopy("./css")
    eleventyConfig.addPassthroughCopy("./js")

    eleventyConfig.addFilter("searchIndex", searchFilter)

    eleventyConfig.addCollection("search", collection => {
        return [...collection.getFilteredByGlob("./content/**/*.md")];
    })

    eleventyConfig.addPlugin(syntaxHighlight)

    return {
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true,
    }
}