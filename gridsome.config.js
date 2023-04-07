module.exports = {
  siteName: 'Nick LoCascio',
  siteDescription: 'Software Engineer & Manager. Vue.js, Node.js, Python, AWS. 🏳️‍🌈',
  siteUrl: 'https://nlocascio.com',
  plugins: [
    {
      use: 'gridsome-plugin-gtag',
      options: {
          config: {
              id: process.env.GOOGLE_ANALYTICS_ID,
          },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
          cacheTime: 600000
        }
    },
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}
