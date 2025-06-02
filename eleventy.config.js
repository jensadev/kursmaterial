import eleventyNavigationPlugin from "@11ty/eleventy-navigation"

export default async function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin)
    eleventyConfig.addPassthroughCopy("./css");

    return {
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true,
    }
}