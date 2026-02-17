const fs = require("fs");
const path = require("path");

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

  eleventyConfig.addShortcode("includeAllScripts", function (directory) {
    const jsDir = path.join(__dirname, directory);
    let scripts = "";

    function readDirectory(dir, basePath = "") {
      const files = fs.readdirSync(dir);

      files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          readDirectory(filePath, path.join(basePath, file));
        } else if (file.endsWith(".js")) {
          const scriptPath = path.join(basePath, file).replace(/\\/g, "/");
          scripts += `<script src="/${directory}/${scriptPath}"></script>\n    `;
        }
      });
    }

    readDirectory(jsDir);
    return scripts;
  });

  eleventyConfig.addShortcode("includeAllCSS", function (directory) {
    const jsDir = path.join(__dirname, directory);
    let scripts = "";

    function readDirectory(dir, basePath = "") {
      const files = fs.readdirSync(dir);

      files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          readDirectory(filePath, path.join(basePath, file));
        } else if (file.endsWith(".css")) {
          const scriptPath = path.join(basePath, file).replace(/\\/g, "/");
          scripts += `<link rel="stylesheet" href="/${directory}/${scriptPath}">\n    `;
        }
      });
    }

    readDirectory(jsDir);
    return scripts;
  });
};
