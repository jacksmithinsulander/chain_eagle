export interface UrlData {
  [key: string]: {
    base_url: string;
    assets: {
      [key: string]: string[];
    };
    url_ending?: string;
  };
}

export const urlData: UrlData = {
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
  stockx: {
    base_url: "https://api.stockx.com/v2/catalog/products/",
    assets: {
      sneakers: [
        "nike-dunk-low-retro-white-black-2021",
        "nike-air-force-1-low-white-07",
        "adidas-yeezy-slide-bone-2022",
        "adidas-yeezy-slide-black-onyx",
        "yeezy-slide-desert-sand",
        "air-jordan-1-retro-high-og-chicago-reimagined-lost-and-found",
        "nike-dunk-low-grey-fog"
      ],
    },
  },
};
