local url_data = {
    yahoo = {
        base_url = "https://query1.finance.yahoo.com/v8/finance/chart/",
        assets = {
            stocks = {
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
                "^OMX"
            },
            Commodities = {
                "LBR=F",
                "OJ=F",
                "CT=F"
            },
            crypto = {
                "BTC-USD",
                "ETH-USD",
                "ADA-USD",
                "DOGE-USD",
                "SHIB-USD",
                "XMR-USD",
                "WOW-USD",
                "MATIC-USD",
                "HEX-USD",
                "PLS-USD",
                "PLSX-USD",
                "RLB-USD"
            },
            forex = {
                "SEK=X",
                "EUR=X",
                "GBP=X",
                "INR=X",
                "RUB=X"
            }
        },
        url_ending = "?interval=1d"
    }
}