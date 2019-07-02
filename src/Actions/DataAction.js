import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_DATA_START
} from "./Types";

import {
  profileCall,
  metricsCall,
  balanceCall,
  incomeCall,
  cashCall,
  growthCall
} from "../APICalls/FinancialModellingPrep";

export const fetchData = symbol => async dispatch => {
  if (symbol !== "") {
    const profile = await profileCall(symbol);
    const metrics = await metricsCall(symbol);
    const balance = await balanceCall(symbol);
    const income = await incomeCall(symbol);
    const cash = await cashCall(symbol);
    const growth = await growthCall(symbol);

    dispatch({
      type: FETCH_DATA_START,
      payload: {
        error: false,
        loading: false,
        profile: profile,
        metrics: metrics,
        balance: balance,
        income: income,
        cash: cash,
        growth: growth
      }
    });
  } else {
    dispatch({
      type: FETCH_DATA_START,
      payload: {
        error: false,
        loading: false,
        profile: null,
        metrics: null,
        balance: null,
        income: null,
        cash: null,
        growth: null
      }
    });
  }
};
