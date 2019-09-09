export const historicalAdjustedCall = async symbol => {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=DG61VKY2XF1OVBWJ`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};
