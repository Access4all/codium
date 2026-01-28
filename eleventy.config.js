module.exports = function (eleventyConfig) {
  eleventyConfig.setInputDirectory("views");
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.defaults = {
    layout: "_skeleton.njk",
  };

  eleventyConfig.setTemplateFormats(["njk", "html"]);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addCollection("navPages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("views/**/*.html");
  });

  eleventyConfig.addFilter("isInPath", function (item, currentUrl) {
    function checkPath(node) {
      if (node.url === currentUrl) return true;
      if (node.children) {
        return Object.values(node.children).some((child) => checkPath(child));
      }
      return false;
    }
    return checkPath(item);
  });

  eleventyConfig.addFilter("navTree", (pages) => {
    const tree = {};

    pages.forEach((page) => {
      const parts = page.url.split("/").filter(Boolean);
      let current = tree;

      parts.forEach((part, i) => {
        if (!current[part]) {
          current[part] = {
            url: i === parts.length - 1 ? page.url : null,
            title: i === parts.length - 1 ? page.data.title : part,
            children: {},
          };
        }
        current = current[part].children;
      });
    });

    return tree;
  });
};
