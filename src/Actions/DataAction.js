import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_DATA_STARTED,
} from "./Types";

import {
  profileCall,
  metricsCall,
  balanceCall,
  incomeCall,
  cashCall,
  growthCall,
  //   historicalPriceCall,
} from "../APICalls/FinancialModellingPrep";

import { statisticsCall } from "../APICalls/yFinance";

// import { historicalAdjustedCall } from "../APICalls/AlphaVantage";

const fetchDataError = () => {
  return { type: FETCH_DATA_ERROR };
};

const fetchDataStarted = () => {
  return { type: FETCH_DATA_STARTED };
};

const fetchDataSuccess = (data) => {
  return { type: FETCH_DATA_SUCCESS, payload: data };
};

//start fetch
export const fetchData = (symbol) => async (dispatch) => {
  dispatch(fetchDataStarted());

  const profile = await profileCall(symbol);
  const metrics = await metricsCall(symbol);
  const balance = await balanceCall(symbol);
  const income = await incomeCall(symbol);
  const cash = await cashCall(symbol);
  const growth = await growthCall(symbol);
  const statistics = await statisticsCall(symbol);
  //   const historicalPrice = await historicalPriceCall(symbol);
  //   const historicalAdjusted = await historicalAdjustedCall(symbol);

  if (!profile.apiError) {
    dispatch(
      fetchDataSuccess({
        profile,
        metrics,
        balance,
        income,
        cash,
        growth,
        statistics,
        // historicalPrice,
        // historicalAdjusted,
      })
    );
  } else {
    dispatch(fetchDataError);
  }
};
