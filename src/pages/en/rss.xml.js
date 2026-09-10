import rss from '@astrojs/rss';
import { getPosts } from '../../lib/posts';
import { UI } from '../../i18n/ui';

export async function GET(context) {
	const posts = await getPosts('en');
	return rss({
		title: UI.en['site.title'],
		description: UI.en['site.description'],
		site: context.site,
		customData: '<language>en-US</language>',
		items: posts.map((post) => ({
			title: post.title,
			description: post.description,
			pubDate: post.pubDate,
			categories: post.tags,
			link: post.href,
		})),
	});
}
