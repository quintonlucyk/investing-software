import { FETCH_DATA } from "./Types";

// export fetchPosts = async (symbol) => {

// };

export const fetchData = async symbol => dispatch =>{
  const profile = await profileCall(symbol);
  const metrics = await metricsCall(symbol);
  const balance = await balanceCall(symbol);
  const income = await incomeCall(symbol);
  const cash = await cashCall(symbol);
  const growth = await growthCall(symbol);
  dispatch({
    type: FETCH_DATA,
    payload: {
      profile: profile,
      metrics: metrics,
      balance: balance,
      income: income,
      cash: cash,
      growth: growth
    }
  });
};
