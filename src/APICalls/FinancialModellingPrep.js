export const profileCall = async symbol => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/company/profile/${symbol}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const metricsCall = async symbol => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/company-key-metrics/${symbol}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const balanceCall = async symbol => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/${symbol}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const incomeCall = async symbol => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/financials/income-statement/${symbol}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const cashCall = async symbol => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/${symbol}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const growthCall = async symbol => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/financial-statement-growth/${symbol}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const historicalPriceCall = async symbol => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};

export const symbolListCall = async () => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/company/stock/list`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { apiError: error };
  }
};
