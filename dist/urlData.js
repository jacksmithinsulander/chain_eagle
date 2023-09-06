export const urlData = {
    yahoo: {
        base_url: "https://query1.finance.yahoo.com/v8/finance/chart/",
        assets: {
            stocks: [
                "SPY",
                "QQQ",
                "DOW",
                "TSLA",
                "NVDA",
                "AAPL",
                "AMZN",
                "FTCH",
                "AMD",
                "BBBYQ",
                "BB",
                "IBM",
                "GME",
                "^OMX",
                "MC.PA",
                "AMC",
                "^XAU",
            ],
            commodities: ["LBR=F", "OJ=F", "CT=F"],
            crypto: [
                "BTC-USD",
                "ETH-USD",
                "BNB-USD",
                "XRP-USD",
                "ADA-USD",
                "DOGE-USD",
                "SHIB-USD",
                "XMR-USD",
                "WOW-USD",
                "MATIC-USD",
                "HEX-USD",
                "PLS-USD",
                "PLSX-USD",
                "RLB-USD",
            ],
            forex: ["SEK=X", "EUR=X", "GBP=X", "INR=X", "RUB=X"],
        },
        url_ending: "?interval=1d",
    },
    pokemon: {
        base_url: "https://api.pokemontcg.io/v2/cards?q=name:",
        assets: {
            pokemons: [
                "charizard",
                "pikachu",
                "mew",
                "bulbasaur",
                "squirtle",
                "mewtwo",
                "magikarp",
                "lugia",
            ],
        },
    },
    // stockx: {
    //   base_url: "https://api.stockx.com/v2/catalog/products/",
    //   products: {
    //     // Add your products here if needed
    //   },
    // },
};
//# sourceMappingURL=urlData.js.map