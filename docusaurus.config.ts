import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skapp',
  tagline: 'Connecting and optimizing your business processes with ease',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://skapp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Skapp HQ', // Usually your GitHub org/user name.
  projectName: 'Skapp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['src/images', 'static'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/rootcodelabs/Skapp-docs/tree/dev',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/skapp-social-card.png',
    navbar: {
      title: 'skapp docs',
      logo: {
        alt: 'Skapp logo',
        src: 'img/logo.svg',
        srcDark: 'img/logoDark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/rootcodelabs/Skapp-docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'UD6X51OWIU',

      // Public API key: it is safe to commit it
      apiKey: 'e5aa8697f943783a0eb6b6dfa64208ca',

      indexName: 'skapp',

      // Optional: Algolia search parameters
      searchParameters: {},
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Skapp. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.jettwaveDark,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
