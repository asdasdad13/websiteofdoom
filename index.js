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
    var date = new Date();
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
    document.getElementById('current_date').innerHTML = day + ', ' + m + ' ' + d + ', ' + y;
}


loadBreakingNews();
loadDate();