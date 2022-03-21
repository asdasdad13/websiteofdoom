var data = [
    {
        headline: "Nations vet 3,000-page handbook to halt climate crisis",
        category: 'ASIA',
        featured: false,
        art_url: 'images/patrick-hendry-6xeDIZgoPaw-unsplash.jpg',
        date: '21 MAR 2022',
        digital_date: new Date('03/21/2022 12:00:00 AM')
    },
    {
        headline: "Oil prices break US$100, S'pore stocks sink as Russia launches military attack on Ukraine",
        category: 'BUSINESS',
        featured: false,
        art_url: 'images/maria-lupan-hy97yy3e03A-unsplash.jpg',
        date: '24 FEB 2022',
        digital_date: new Date('02/24/2022 12:00:00 AM')
    },
    {
        headline: "Hong Kong to lift flight ban on 9 countries in April, cut quarantine to 7 days for travellers",
        category: 'ASIA',
        featured: true,
        featured_text: 'Up to 4 people will be allowed for public gatherings, up from the current 2.',
        art_url: 'images/marco-lopez-qK6HAkB91Yc-unsplash.jpg',
        date: '21 MAR 2022',
        digital_date: new Date('03/21/2022 12:00:00 AM')
    }
]

Handlebars.registerHelper('find_featured', function(options) {
    for (i in data) {
        var article = data[i]
        if (article.featured) return options.fn(article);
    }
});

Handlebars.registerHelper('sort', function(options) {
    data.sort((a,b) => a.digital_date - b.digital_date);
})

function renderHTML(templateId, selector) {
    var src = document.getElementById(templateId).innerHTML;
    var template = Handlebars.compile(src);
    var html = template(data);

    document.querySelector(selector).innerHTML = html;
}

renderHTML('featured-news-template','#top-1-story .row');
renderHTML('latest-news-template','#latest-news-list');