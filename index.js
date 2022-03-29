var btt = document.getElementById('btn-back-to-top')
//for the back to top button
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() { //for the back to top button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btt.style.display = "block";
    } else {
      btt.style.display = "none";
    }
  }


function backToTop() { //for the back to top button
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function loadBreakingNews() { //loads lst of breaking news for the ticker
    var breakingNewsList = document.querySelector('#breaking-news ul');
    var headlines = ['Russians against war are fleeing state crackdowns', 'Has Turkey dodged its sunflower oil crisis?','Can Ukraine\'s internet sustain longer-term attacks and destruction from Russia?']; //random data
    for (i in headlines)
    {
        var new_li = document.createElement("li");
        var new_a = document.createElement('a');
        new_a.innerHTML = headlines[i];
        if (headlines[i] == 'Russians against war are fleeing state crackdowns') new_a.setAttribute('href', '/world/russians-against-war-are-fleeing-state-crackdowns.html');
        else new_a.setAttribute('href', '#');
        new_li.appendChild(new_a);
        breakingNewsList.appendChild(new_li);
    }
}

function loadDate() { //loads date that appears under navbar on homepage
    [day,m,d,y] = getDate(new Date());
    document.getElementById('current_date').innerHTML = day + ', ' + m + ' ' + d + ', ' + y;
}

function getDate(date) { //gets a date in human readable format
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

function updatedAgo(publishedTime) { //calculates the time since the articles were published
    var seconds = Math.floor((new Date() - publishedTime) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

function fillUpdatedAgos() { //load times into latest-news-col
    document.getElementsByClassName('updatedAt')[0].innerHTML = updatedAgo(new Date('2022-03-27T16:15:00Z'));
    document.getElementsByClassName('updatedAt')[1].innerHTML = updatedAgo(new Date('2022-03-26T20:04:00Z'));
    document.getElementsByClassName('updatedAt')[2].innerHTML = updatedAgo(new Date('2022-03-25T18:19:00Z'));
    document.getElementsByClassName('updatedAt')[3].innerHTML = updatedAgo(new Date('2022-03-25T14:05:00Z'));
    document.getElementsByClassName('updatedAt')[4].innerHTML = updatedAgo(new Date('2022-03-25T12:50:00Z'));
    document.getElementsByClassName('updatedAt')[5].innerHTML = updatedAgo(new Date('2022-03-17T10:31:00Z'));
}

var mapClrs = { //text and bg colour change in dark mode toggle
    dark: 'light',
    light: 'dark',
}

var mapIcons = { //change icon of dark mode button for each toggle
    'fa-sun': 'fa-moon',
    'fa-moon': 'fa-sun'
}

function darkMode() { //switches between dark and light mode by exchanging text-light -> text-dark, bg-light, bg-dark and vice versa
    var element = document.getElementById('page');
    element.outerHTML = element.outerHTML.replace(/dark|light/gi, function(matched) {
        //simultaneously changes function name for btn-dark-mode
        return mapClrs[matched];
    });
    document.body.classList.toggle("dark-mode");
    var icon = document.getElementById('btn-dark-mode').innerHTML;
    document.getElementById('btn-dark-mode').innerHTML = icon.replace(/fa-sun|fa-moon/gi, function(matched) {
        return mapIcons[matched];
    });
}

function insertDarkModeButton() { //for initialising the dark mode button
    var i = document.createElement('i');
    i.setAttribute('class','fa-solid fa-moon p-2')
    document.getElementById('btn-dark-mode').appendChild(i);
}

//call all functions below this line
loadBreakingNews();
loadDate();
insertDarkModeButton();
fillUpdatedAgos();