module.exports = function (eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.setOutputDirectory("dist");
    eleventyConfig.setIncludesDirectory("_include");
    eleventyConfig.setLayoutsDirectory("_layout");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
};