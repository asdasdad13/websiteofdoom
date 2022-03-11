window.onload = function() {
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

    var date = new Date();
    var y = date.getFullYear();
    switch (date.getMonth())
    {
        case 0:
            m = "January";
            break;
        case 1:
            m = "February";
            break;
        case 2:
            m = "March";
            break;
        case 3:
            m = "April";
            break;
        case 4:
            m = "May";
            break;
        case 5:
            m = "June";
            break;
        case 6:
            m = "July";
            break;
        case 7:
            m = "July";
            break;
        case 8:
            m = "August";
            break;    
        case 9:
            m = "September";
            break;
        case 10:
            m = "October";
            break;
        case 11:
            m = "November";
            break;
        case 12:
            m = "December";
            break;
    }
    var d = date.getDate();
    switch (date.getDay())
    {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    document.getElementById("current_date").innerHTML = day + ', ' + m + ' ' + d + ', ' + y;
}