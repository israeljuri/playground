const express = require('express');
const RSS = require('rss');

const app = express();
const port = 3000;

app.get('/feed.xml', (req, res) => {
    const feed = new RSS({
        title: 'Your Podcast Title',
        description: 'A brief description of your podcast.',
        feed_url: 'https://playground-5pwm.onrender.com/feed.xml',
        site_url: 'https://playground-5pwm.onrender.com',
        image_url: 'https://playground-5pwm.onrender.com/assets/podcast-cover.jpeg',
        author: 'Your Name or Company',
        language: 'en-us',
        categories: ['Technology', 'Education'],
        pubDate: new Date(),
        custom_namespaces: {
            itunes: 'http://www.itunes.com/DTDs/Podcast-1.0.dtd',
        },
        custom_elements: [
            { 'itunes:owner': [{ 'itunes:name': 'Your Name' }, { 'itunes:email': 'your-email@example.com' }] },
            { 'itunes:category': { _attr: { text: 'Technology' } } },
            { 'itunes:explicit': 'no' },
        ],
    });

    feed.item({
        title: 'Episode Title',
        description: 'Description of this episode.',
        url: 'https://playground-5pwm.onrender.com/assets/episode1.mp3',
        guid: 'unique-episode-identifier',
        enclosure: {
            url: 'https://playground-5pwm.onrender.com/assets/episode1.mp3',
            size: 12345678,
            type: 'audio/mpeg',
        },
        date: new Date(),
        custom_elements: [
            { 'itunes:author': 'Episode Author' },
            { 'itunes:summary': 'A concise summary of the episode.' },
            { 'itunes:duration': '00:30:00' },
        ],
    });

    const xml = feed.xml({ indent: true });
    res.type('application/xml');
    res.send(xml);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`RSS feed available at http://localhost:${port}/feed.xml`);
});
