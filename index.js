const RSS = require('rss');

const feed = new RSS({
    title: 'Your Podcast Title',
    description: 'A brief description of your podcast.',
    feed_url: 'https://your-domain.com/feed.xml', // The URL where your RSS feed will be accessible
    site_url: 'https://your-domain.com', // Your podcast's website URL
    image_url: 'https://your-domain.com/podcast-cover.jpg', // URL to your podcast's cover art (minimum 1400x1400, maximum 3000x3000 pixels)
    author: 'Your Name or Company',
    language: 'en-us', // Language of your podcast
    categories: ['Technology', 'Education'], // Relevant categories
    pubDate: new Date(), // Publication date of the feed
    custom_namespaces: {
        itunes: 'http://www.itunes.com/DTDs/Podcast-1.0.dtd',
    },
    custom_elements: [
        // iTunes specific tags for podcasting
        { 'itunes:owner': [{ 'itunes:name': 'Your Name' }, { 'itunes:email': 'your-email@example.com' }] },
        { 'itunes:category': { _attr: { text: 'Technology' } } },
        { 'itunes:explicit': 'no' }, // 'yes' or 'no'
    ],
});


console.log({feed});

feed.item({
    title: 'Episode Title',
    description: 'Description of this episode.',
    url: 'https://your-domain.com/episode1.mp3', // URL to the audio file
    guid: 'unique-episode-identifier', // Unique ID for the episode
    enclosure: {
        url: 'https://your-domain.com/episode1.mp3',
        size: 12345678, // Size of the audio file in bytes
        type: 'audio/mpeg', // MIME type of the audio file
    },
    date: new Date(), // Publication date of the episode
    custom_elements: [
        { 'itunes:author': 'Episode Author' },
        { 'itunes:summary': 'A concise summary of the episode.' },
        { 'itunes:duration': '00:30:00' }, // Duration in HH:MM:SS or seconds
    ],
});

console.log({feed});

const xml = feed.xml({ indent: true });

console.log({xml});