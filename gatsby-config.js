module.exports = {
  siteMetadata: {
    title: "Desarrollador Fullstack - Santiago, Chile.",
    siteUrl: "https://www.ignacioquinteros.cl",
    description:
      "Mi nombre es Javier Ignacio Quinteros, pero tu puedes llamarme cuando quieras, osea, siempre que necesites un Desarrollador Fullstack.",
  },
  plugins: [
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./assets/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
