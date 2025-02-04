export const tempBlockList = {
  data: [
    {
      title: "Ticker Information",
      subtitle: "At a view glance of the selected equity",
    },
    {
      title: "Price Information Graph",
      subtitle:
        "Detailed graph on the price performance of selected equity, Powered by TradingView",
    },
    {
      title: "Earnings & Financials",
      subtitle:
        "Summary of earnings and financials of the selected equity over the last accounting period",
    },
    {
      title: "Ticker News",
      subtitle: "Latest news on the selected equity",
    },
    {
      title: "Analyst Ratings",
      subtitle: "See what other analysts are saying about the selected equity",
    },
    {
      title: "Dividends",
      subtitle: "Dividend information on the selected equity",
    },
    {
      title: "Insider Trades",
      subtitle: "Insider trades on the selected equity",
    },
    {
      title: "Institutional Holdings",
      subtitle: "Institutional holdings on the selected equity",
    },
    {
      title: "News",
      subtitle: "Latest news on the selected equity",
    },
    {
      title: "Management Team",
      subtitle: "Take a look on who is responsible for the selected equity",
    },
  ],
};

export type BlockType = (typeof tempBlockList.data)[number];
