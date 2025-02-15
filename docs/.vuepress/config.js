import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
	lang: 'en-US',

	title: 'VuePress',
	description: 'My first VuePress Site',
	base: '/note/',

	theme: defaultTheme({
		logo: 'https://vuejs.press/images/hero.png',

		navbar: ['/', '/get-started'],
		sidebar: [
			{
				title: 'Python3',
				path: '/blogs/JavaScript字符串常用方法',
				collapsable: true,
			},
		],
	}),

	bundler: viteBundler(),
});
