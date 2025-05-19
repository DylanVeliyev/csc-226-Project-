(async () => {
    let res = await fetch("https://football_api12.p.rapidapi.com/players/fixtures", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "ebb95589f2msh2cbbe8cbe037d57p1a459ajsnd9bb03a75c47",
            "x-rapidapi-host": "football_api12.p.rapidapi.com"
        }
    });

    let p_res = await res.json();

    let container = document.getElementById("live-score");
    container.innerHTML = ""; 

    if (p_res.length > 0) {
        p_res.forEach(match => {
            let matchInfo = document.createElement("div");
            matchInfo.className = "fixture-item";
            matchInfo.innerHTML = `
                <strong>${match.teamA} vs. ${match.teamB}</strong><br>
                Scoreline: ${match.scoreA} - ${match.scoreB}
            `;
            container.appendChild(matchInfo);
        });
    } else {
        container.innerHTML = '<p>No matches today</p>';
    }
})();


