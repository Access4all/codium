module.exports = function (eleventyConfig) {
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.setLayoutsDirectory("_layouts");

    eleventyConfig.defaults = {
        layout: "_skeleton.njk"
    };

    // ✅ Explicitly set template engine to Nunjucks
    eleventyConfig.setTemplateFormats(["njk", "html"]);
    
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addCollection("navPages", function(collectionApi) {
        return collectionApi.getFilteredByGlob("views/*.html");
    });
};
