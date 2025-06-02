export default async function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./css");

    return {
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true,
    }
}