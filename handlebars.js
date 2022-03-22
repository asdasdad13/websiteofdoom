

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
            art: [
                {
                    url: 'images/IMG_1652.png',
                    caption: 'Russians against war charity concert in Istanbul. Photo courtesy of the author.'
                },
                {
                    url: 'images/IMG_1625-scaled.jpeg',
                    caption: 'Evgeniy, holding his sign outside the concert venue. Photo courtesy of the author.'
                }
            ],
            date: new Date('2022-03-18T16:29:00Z'),
        },
        {
            headline: "Turkmen students: Escaping from war-torn Ukraine",
            author: ['Oguljamal Yazliyeva','Shirin Rahman'],
            tagline: 'With little government support, Turkmen students turned to social media',
            category: 'WORLD',
            related_topics: ['Ukraine Invasion', 'Ukraine', 'Turkmenistan','Central Asia & Caucasus'],
            featured: true,
            featured_tagline: 'Russia\'s brazen invasion of Ukraine marks a dangerous new phase in the history of Eastern Europe, with serious implications for the post-Cold War ...',
            art: [
                {
                    url: 'images/',
                    caption: '.'
                }
            ],
            date: '',
        },
    ]
}

function renderHTML(templateId, selector) {
    var src = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(src);
    var html = template(data);

    document.querySelector(selector).innerHTML = html;
}

console.log(data.articles[0].body)
renderHTML('featured-news-template','#top-1-story .row');
renderHTML('latest-news-template','#latest-news-list');