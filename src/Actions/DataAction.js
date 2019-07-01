import { FETCH_DATA } from "./Types";

import {
  profileCall,
  metricsCall,
  balanceCall,
  incomeCall,
  cashCall,
  growthCall
} from "../APICalls/FinancialModellingPrep";

export const fetchData = symbol => async dispatch => {
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

  // console.log("fetching");
  // const profile = await profileCall(symbol);
  // const metrics = await metricsCall(symbol);
  // const balance = await balanceCall(symbol);
  // const income = await incomeCall(symbol);
  // const cash = await cashCall(symbol);
  // const growth = await growthCall(symbol);
  // console.log("growthhh");
  // dispatch({
  //   type: FETCH_DATA,
  //   payload: {
  //     profile: profile,
  //     metrics: metrics,
  //     balance: balance,
  //     income: income,
  //     cash: cash,
  //     growth: growth
  //   }
  // });
};
