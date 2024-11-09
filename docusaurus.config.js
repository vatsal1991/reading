module.exports = {
  title: 'DevOps Interview Questions',
  tagline: 'Comprehensive DevOps interview preparation guide',
  url: 'https://your-username.github.io',
  baseUrl: '/devops-interview-questions/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-username',
  projectName: 'devops-interview-questions',
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-username/devops-interview-questions/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}; 