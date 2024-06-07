const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

module.exports = {
	title: 'Zenith Payments Documentation -- Title',
	tagline: 'Zenith Payments Docs -- Tagline',
	url: 'http://docs.zenithpayments.com.au/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	favicon: 'img/favicon.ico',
	organizationName: 'ianmenethil', // GitHub username
	projectName: 'ZenDocs', // Repository name
	i18n: { defaultLocale: 'en', locales: ['en'] },
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: './sidebars.js',
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
				},
				blog: false,
				theme: {
					customCss: ['./src/css/base.css', './src/css/layout.css', './src/css/components.css']
				}
			}
		]
	],
	themeConfig: {
		navbar: {
			title: 'Home',
			logo: { alt: 'Zenith Payments Logo', src: 'img/zenpaylogo.png' },
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Developer Guide'
				},
				{
					type: 'doc',
					docId: 'apis/introduction',
					position: 'left',
					label: 'APIs'
				},
				{
					type: 'doc',
					docId: 'jquery-plugin/introduction',
					position: 'left',
					label: 'jQuery Plugin'
				},
				{
					type: 'search',
					position: 'right'
				},
				{
					type: 'doc',
					docId: 'jquery-plugin/test-key',
					label: 'Goto Playground',
					position: 'right'
				},
				{
					href: 'https://github.com/zenithpayments/',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Zenith Payments Documentation',
							to: '/docs/intro'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Zenith Payments',
							href: 'https://zenithpayments.com.au/'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/zenithpayments/'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} `
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme
		}
	}
};
