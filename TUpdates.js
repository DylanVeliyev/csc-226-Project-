(async () => {
    let res = await fetch("https://football_api12.p.rapidapi.com/players/transfers", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "ebb95589f2msh2cbbe8cbe037d57p1a459ajsnd9bb03a75c47",
            "x-rapidapi-host": "football_api12.p.rapidapi.com"
        }
    });

    let p_res = await res.json();

    let container = document.getElementById("transfer-updates");
    container.innerHTML = "";

    p_res.forEach(transfer => {
        let transferInfo = document.createElement("div");
        transferInfo.classList.add("news-item");
        transferInfo.innerHTML = `${transfer.title} | Source: ${transfer.source}`;
        container.appendChild(transferInfo);
    });
})();
