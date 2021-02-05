const Y_FINANCE_API_KEY = process.env.REACT_APP_Y_FINANCE_STOCK_API_KEY;

export const statisticsCall = async (symbol) => {
  try {
    const res = await fetch(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics?symbol=${symbol}&region=US`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": Y_FINANCE_API_KEY,
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      }
    );

    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};
