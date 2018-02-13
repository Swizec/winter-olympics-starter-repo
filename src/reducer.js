import { combineReducers } from "redux";
import { createSelector } from "reselect";
import * as d3 from "d3";

const defaultDataState = {
    medals: null,
    population: null,
    gdp: null
};

// data reducer
const dataReducer = function(state = defaultDataState, action) {
    switch (action.type) {
        default:
            return state;
    }
};

const defaultMetaState = {
    loading: false,
    error: null,
    currentYear: null,
    years: null
};

// meta reducer
const metaReducer = function(state = defaultMetaState, action) {
    switch (action.type) {
        default:
            return state;
    }
};

// all medals selector
export const allMedalsSelector = createSelector(
    state => state.data.medals,
    medals => medals || []
);

// medals current year selector

// gdp selector
export const gdpSelector = state => state.data.gdp;
// max gdp

// population
export const populationSelector = state => state.data.population;
// max population

// all data loaded selector
export const allDataLoadedSelector = createSelector(
    allMedalsSelector,
    gdpSelector,
    populationSelector,
    (medals, gdp, population) => medals && gdp && population
);

// min year
// max year

// medals per country

// country gdp helper

// country population helper

const rootReducer = combineReducers({
    data: dataReducer,
    meta: metaReducer
});

export default rootReducer;
