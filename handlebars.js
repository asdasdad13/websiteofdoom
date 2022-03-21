var data = [
    {
        category: 'BUSINESS',
        articles:
        [
            {
                headline: "Oil prices break US$100, S'pore stocks sink as Russia launches military attack on Ukraine",
                feature: false,
                art_url: 'images/maria-lupan-hy97yy3e03A-unsplash.jpg',
                date: '24 FEB 2022'
            },
            {
                headline: "Nations vet 3,000-page handbook to halt climate crisis",
                feature: false,
                art_url: 'images/patrick-hendry-6xeDIZgoPaw-unsplash.jpg',
                date: '21 MAR 2022'
            }
        ]
    },
    {
        category: 'ASIA',
        articles:
        [
            {
                headline: "Hong Kong to lift flight ban on 9 countries in April, cut quarantine to 7 days for travellers",
                feature: true,
                feature_text: 'Up to 4 people will be allowed for public gatherings, up from the current 2.',
                art_url: 'images/marco-lopez-qK6HAkB91Yc-unsplash.jpg',
                date: '21 MAR 2022'
            }
            
        ]
    }
]

Handlebars.registerHelper('find_featured', function(options) {
    for (i in data)
    {
        var category_articles = data[i].articles;
        for (j in category_articles)
        {
            var article =  category_articles[j];
            if (article.feature) return options.fn(article);
        }
    }
});

function renderHTML(templateId, selector)
{
    var src = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(src);
    console.log(template)
    var html = template(data);
    console.log(html)

    document.querySelector(selector).innerHTML = html;
}

renderHTML('featured-news-template','#top-1-story .row');