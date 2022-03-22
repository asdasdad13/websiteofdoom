var data = {
    articles: [ //assume records in this makeshift database are already sorted
        {
            headline: "Russians against war are fleeing state crackdowns",
            author: 'Arzu Geybullayeva',
            tagline: 'Turkey is one of a handful of countries welcoming Russians',
            category: 'WORLD',
            related_topics: ['Ukraine Invasion', 'Ukraine', 'Russia', 'Turkey','Vladimir Putin'],
            featured: false,
            featured_tagline: '',
            art_url: 'images/IMG_1652.png',
            caption: 'Russians against war charity concert in Istanbul. Photo courtesy of the author.',
            date: new Date('2022-03-18T16:29:00Z')
        },
        {
            headline: "Russia invades Ukraine",
            author: '',
            tagline: '',
            category: 'WORLD',
            related_topics: ['Ukraine Invasion', 'Ukraine', 'Russia', 'Turkey','Vladimir Putin'],
            featured: true,
            featured_tagline: 'Russia\'s brazen invasion of Ukraine marks a dangerous new phase in the history of Eastern Europe, with serious implications for the post-Cold War ...',
            art_url: 'images/juli-kosolapova--KvnD87yD88-unsplash.jpg',
            caption: 'Image courtesy of Juli Kosolapova.',
            date: ''
        },
    ]
}

function renderHTML(templateId, selector) {
    var src = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(src);
    var html = template(data);

    document.querySelector(selector).innerHTML = html;
}
console.log('/articles/"Russia invades Ukraine.txt"')
renderHTML('featured-news-template','#top-1-story .row');
renderHTML('latest-news-template','#latest-news-list');