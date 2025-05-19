(async () => {
    const url = "https://football_api12.p.rapidapi.com/players/realmadrid";
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "ebb95589f2msh2cbbe8cbe037d57p1a459ajsnd9bb03a75c47",
            "x-rapidapi-host": "football_api12.p.rapidapi.com"
        }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    const container = document.getElementById('madrid-insights');
    container.innerHTML = ""; 

    if (data.length > 0) {
        data.slice(0, 5).forEach(insight => {
            let insightInfo = document.createElement("div");
            insightInfo.className = "insight-item";
            insightInfo.innerHTML = `<a href="${insight.url}" target="_blank">${insight.headLine}</a>`;
            container.appendChild(insightInfo);
        });
    } else {
        container.innerHTML = "<p>No insights today</p>";
    }
})();

