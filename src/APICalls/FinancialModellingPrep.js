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

export const ratiosCall = async symbol => {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/financial-ratios/${symbol}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return { error: error };
  }
};
