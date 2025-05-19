(async () => {
    const url = "https://football_api12.p.rapidapi.com/players/news";  
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "ebb95589f2msh2cbbe8cbe037d57p1a459ajsnd9bb03a75c47",  
            "x-rapidapi-host": "football_api12.p.rapidapi.com"  
        }
    };

    let res = await fetch(url, options);
    let data = await res.json();

    let container = document.getElementById("latest-news");
    container.innerHTML = "<strong>Latest News</strong>"; 

    if (data.length > 0) {
        data.slice(0, 5).forEach(newsItem => {
            let newsInfo = document.createElement("div");
            newsInfo.className = "news-item";
            newsInfo.innerHTML = `<p>${newsItem.headLine}</p>`;
            container.appendChild(newsInfo);
        });
    } else {
        container.innerHTML += "<p>No news today</p>";
    }
})();





