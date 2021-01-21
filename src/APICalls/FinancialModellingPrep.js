const API_KEY = process.env.REACT_APP_STOCK_API_KEY;
const API_KEY_TWO = process.env.REACT_APP_STOCK_API_KEY_TWO;
const API_KEY_THREE = process.env.REACT_APP_STOCK_API_KEY_THREE;

export const profileCall = async (symbol) => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/company/profile/${symbol}?apikey=${API_KEY}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const metricsCall = async (symbol) => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/company-key-metrics/${symbol}?apikey=${API_KEY}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const balanceCall = async (symbol) => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/${symbol}?apikey=${API_KEY_THREE}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const incomeCall = async (symbol) => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/financials/income-statement/${symbol}?apikey=${API_KEY_THREE}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const cashCall = async (symbol) => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/${symbol}?apikey=${API_KEY_TWO}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const growthCall = async (symbol) => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/financial-statement-growth/${symbol}?apikey=${API_KEY_TWO}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const historicalPriceCall = async (symbol) => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line&apikey=${API_KEY}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const symbolsListCall = async () => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/company/stock/list?apikey=${API_KEY}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const batchCall = async (symbols) => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=${API_KEY}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};
