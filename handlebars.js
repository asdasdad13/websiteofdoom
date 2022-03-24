var data = {
    articles: [ //assume records in this makeshift database are already sorted
        {
            headline: "Russians against war are fleeing state crackdowns",
            author: 'Arzu Geybullayeva',
            tagline: 'Turkey is one of a handful of countries welcoming Russians',
            category: 'WORLD',
            related_geographical: ['Central Asia & Caucasus','Eastern & Central Europe','Middle East & North Africa','Armenia','Georgia','Russia','Turkey'],
            related_topics: ['Arts & Culture','Censorship','Economics & Business','Freedom of Speech','Human Rights','Media & Journalism','Migration & Immigration','Music','Politics','Protest','Refugees','War & Conflict','Russia invades Ukraine'],
            featured: true,
            featured_tagline: 'Turkey is one of a handful of countries welcoming Russians.',
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
            headline: "Has Turkey dodged its sunflower oil crisis?",
            author: ['Arzu Geybullayeva'],
            tagline: 'Citizens rushed to grocery stores fearing price hikes and shortages',
            category: 'BUSINESS',
            related_geographical: ['Eastern & Central Europe','Middle East & North Africa','Russia','Turkey','Ukraine'],
            related_topics: ['Economics & Business','Food','Politics','War & Conflict'],
            featured: false,
            featured_tagline: '',
            art: [
                {
                    url: 'images/audrius-sutkus-cJ7A2SwC9tU-unsplash.jpg',
                    caption: 'Photo courtesy of Audrius Sutkus, Public domain, via Unsplash'
                }
            ],
            date: new Date('2022-03-15T16:15:00Z'),
        },
        {
            headline: "Can Ukraine's internet sustain longer-term attacks and destruction from Russia?",
            author: ['Roman Shemakov'],
            tagline: 'Ukraine\'s telecommunication networks are key to defending against Russia\'s invasion.',
            category: 'TECH',
            related_geographical: ['Central Asia & Caucasus','Azerbaijan'],
            related_topics: ['Breaking News','Censorship','Freedom of Speech','Governance','Human Rights','Law','Politic','sProtest','Youth'],
            featured: false,
            featured_tagline: '',
            art: [
                {
                    url: 'images/Screen-Shot-2022-03-10-at-10.42.12-AM-800x396.png',
                    caption: 'Screenshot from Euronews YouTube channel showing how people in Kyiv seek shelter in the subway while staying informed via mobile internet.'
                }
            ],
            date: new Date('2022-03-10T09:51:00Z'),
        },
        {
            headline: "Turkmen students: Escaping from war-torn Ukraine",
            author: ['Oguljamal Yazliyeva','Shirin Rahman'],
            tagline: 'With little government support, Turkmen students turned to social media',
            category: 'WORLD',
            related_geographical: ['Central Asia & Caucasus','Turkmenistan','Ukraine'],
            related_topics: ['Ukraine Invasion', 'Humanitarian Response','International Relations','Migration & Immigration','Refugees','War & Conflict','Youth'],
            featured: false,
            featured_tagline: '',
            art: [
                {
                    url: 'images/04b4ef01-482a-4d28-a566-c38c28b401ed-800x434.jpg',
                    caption: 'Turkmen students from Kharkov in makeshift housing. Photo courtesy of Vasile Vlaşin.'
                }
            ],
            date: new Date('2022-03-10T00:59:00Z'),
        },
        {
            headline: "How one birthday party sparked an outpouring of anger and resentment in Hong Kong",
            author: ['Oiwan Lam'],
            tagline: 'A dozen officials attended the party, in violation of pandemic-control rules',
            category: 'POLITICS',
            related_geographical: ['East Asia','China','Hong Kong (China)'],
            related_topics: ['Governance','Health','Law','Politics','COVID-19'],
            featured: false,
            featured_tagline: '',
            art: [
                {
                    url: 'images/birthday-poster-800x479.jpg',
                    caption: 'Witman Hung\'s birthday party poster via inmediahk.net'
                }
            ],
            date: new Date('2022-01-10T10:24:00Z'),
        },
        {
            headline: "Turkmen students: Escaping from war-torn Ukraine",
            author: ['Oguljamal Yazliyeva','Shirin Rahman'],
            tagline: 'With little government support, Turkmen students turned to social media',
            category: 'WORLD',
            related_geographical: ['Central Asia & Caucasus','Turkmenistan','Ukraine'],
            related_topics: ['Ukraine Invasion', 'Humanitarian Response','International Relations','Migration & Immigration','Refugees','War & Conflict','Youth'],
            featured: false,
            featured_tagline: '',
            art: [
                {
                    url: 'images/04b4ef01-482a-4d28-a566-c38c28b401ed-800x434.jpg',
                    caption: 'Turkmen students from Kharkov in makeshift housing. Photo courtesy of Vasile Vlaşin.'
                }
            ],
            date: new Date('2022-03-10T00:59:00Z'),
        },
        {
            headline: "How one birthday party sparked an outpouring of anger and resentment in Hong Kong",
            author: ['Oiwan Lam'],
            tagline: 'A dozen officials attended the party, in violation of pandemic-control rules',
            category: 'POLITICS',
            related_geographical: ['East Asia','China','Hong Kong (China)'],
            related_topics: ['Governance','Health','Law','Politics','COVID-19'],
            featured: false,
            featured_tagline: '',
            art: [
                {
                    url: 'images/birthday-poster-800x479.jpg',
                    caption: 'Witman Hung\'s birthday party poster via inmediahk.net'
                }
            ],
            date: new Date('2022-01-10T10:24:00Z'),
        }
    ]
}

function renderHTML(templateId, selector) {
    var src = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(src);
    var html = template(data);

    document.querySelector(selector).innerHTML += html;
}

Handlebars.registerHelper('each_upto',function(limit,options) {
    var ar = [];
    for (i=0;ar.length<limit;i++) {
        var a = data.articles[i];
        if (!a.featured) ar.push(options.fn(a));
    }
    return ar.join('');
});

renderHTML('featured-news-template','#top-4-stories .row');
renderHTML('latest-news-template','#latest-news-col-articles');
renderHTML('bottom-3-stories-template','#bottom-3-stories');