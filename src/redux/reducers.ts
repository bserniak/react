import * as Models from "../definitions/definitions";
import * as actionTypes from "./actionTypes";

function mergedState<T>(state: T, newData: any): T {
    return Object.assign({}, state, newData);
}

export default (state: Models.TrailAppState, action: {type: string, trails: Models.Trail[]}) => {
    if (action.type === actionTypes.trailsLoaded) {
        return mergedState(state, {trails: action.trails});
    }

    return state || {};
};
