var btt = document.getElementById('btn-back-to-top')

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btt.style.display = "block";
    } else {
      btt.style.display = "none";
    }
  }

btt.addEventListener('click', backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function loadBreakingNews() {
    var breakingNewsList = document.getElementById('breaking-news-list');
    var headlines = ['Headline 1','Headline 2','Headline 3'];
    for (i in headlines)
    {
        var h = headlines[i];
        var new_li = document.createElement("li");
        new_li.innerHTML = h;
        new_li.className = 'd-inline';
        breakingNewsList.appendChild(new_li);
    }
}

function loadDate() {
    [day,m,d,y] = getDate(new Date());
    document.getElementById('current_date').innerHTML = day + ', ' + m + ' ' + d + ', ' + y;
}

function getDate(date) {
    var y = date.getFullYear();
    switch (date.getMonth())
    {
        case 0:
            m = "JANUARY";
            break;
        case 1:
            m = "FEBRUARY";
            break;
        case 2:
            m = "MARCH";
            break;
        case 3:
            m = "APRIL";
            break;
        case 4:
            m = "MAY";
            break;
        case 5:
            m = "JUNE";
            break;
        case 6:
            m = "JULY";
            break;
        case 7:
            m = "AUGUST";
            break;
        case 8:
            m = "SEPTEMBER";
            break;    
        case 9:
            m = "OCTOBER";
            break;
        case 10:
            m = "NOVEMBER";
            break;
        case 11:
            m = "DECEMBER";
            break;
    }
    var d = date.getDate();
    switch (date.getDay())
    {
        case 0:
            day = "SUNDAY";
            break;
        case 1:
            day = "MONDAY";
            break;
        case 2:
            day = "TUESDAY";
            break;
        case 3:
            day = "WEDNESDAY";
            break;
        case 4:
            day = "THURSDAY";
            break;
        case 5:
            day = "FRIDAY";
            break;
        case 6:
            day = "SATURDAY";
            break;
    }
    return [day,m,d,y];
}

var data = {
    articles: [ //assume records in this makeshift database are already sorted
        {
            headline: "Russians against war are fleeing state crackdowns",
            author: 'Arzu Geybullayeva',
            tagline: 'Turkey is one of a handful of countries welcoming Russians.',
            category: 'WORLD',
            related_geographical: ['Central Asia & Caucasus','Eastern & Central Europe','Middle East & North Africa','Armenia','Georgia','Russia','Turkey'],
            related_topics: ['Arts & Culture','Censorship','Economics & Business','Freedom of Speech','Human Rights','Media & Journalism','Migration & Immigration','Music','Politics','Protest','Refugees','War & Conflict','Russia invades Ukraine'],
            featured_top_1: true,
            featured_top_1_tagline: 'Turkey is one of a handful of countries welcoming Russians.',
            featured_bottom_3: false,
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
            tagline: 'Citizens rushed to grocery stores fearing price hikes and shortages.',
            category: 'BUSINESS',
            related_geographical: ['Eastern & Central Europe','Middle East & North Africa','Russia','Turkey','Ukraine'],
            related_topics: ['Economics & Business','Food','Politics','War & Conflict'],
            featured_top_1: false,
            featured_top_1_tagline: '',
            featured_bottom_3: true,
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
            featured_top_1: false,
            featured_top_1_tagline: '',
            featured_bottom_3: true,
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
            tagline: 'With little government support, Turkmen students turned to social media.',
            category: 'WORLD',
            related_geographical: ['Central Asia & Caucasus','Turkmenistan','Ukraine'],
            related_topics: ['Ukraine Invasion', 'Humanitarian Response','International Relations','Migration & Immigration','Refugees','War & Conflict','Youth'],
            featured_top_1: false,
            featured_top_1_tagline: '',
            featured_bottom_3: false,
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
            tagline: 'A dozen officials attended the party, in violation of pandemic-control rules.',
            category: 'POLITICS',
            related_geographical: ['East Asia','China','Hong Kong (China)'],
            related_topics: ['Governance','Health','Law','Politics','COVID-19'],
            featured_top_1: false,
            featured_top_1_tagline: '',
            featured_bottom_3: true,
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

loadBreakingNews();
loadDate();