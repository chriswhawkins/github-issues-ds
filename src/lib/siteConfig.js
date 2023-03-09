export const SITE_URL = 'https://chriswhawkins.netlify.app';
export const APPROVED_POSTERS_GH_USERNAME = ['chriswhawkins'];
export const GH_USER_REPO = 'chriswhawkins/github-issues-ds'; // used for pulling github issues and offering comments
export const SITE_TITLE = 'Design System TestKit';
export const SITE_DESCRIPTION = "Design system powered by Github Issues";
export const DEFAULT_OG_IMAGE =
	'https://user-images.githubusercontent.com/6764957/147861359-3ad9438f-41d1-47c8-aa05-95c7d18497f0.png';
export const MY_TWITTER_HANDLE = 'chriswhawkins';
export const MY_YOUTUBE = 'https://youtube.com/chriswhawkins';
export const POST_CATEGORIES = ['Token', 'Element', 'Component', 'View']; // Other categories you can consider adding: Talks, Tutorials, Snippets, Podcasts, Notes...
export const GH_PUBLISHED_TAGS = ['Published'];

// auto generated variables
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const REPO_OWNER = GH_USER_REPO.split('/')[0];

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
