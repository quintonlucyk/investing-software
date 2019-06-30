export const profileCall = async symbol => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/company/profile/${symbol}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { error: error };
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
    return { error: error };
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
    return { error: error };
  }
};