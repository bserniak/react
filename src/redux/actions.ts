import {Dispatch} from "redux";
import * as Models from "../definitions/definitions";
import trailService from "../services/trailService";
import * as actionTypes from "./actionTypes";

export const getTrails = () => {
    return async (dispatch: Dispatch<any>, state: () => Models.TrailAppState) => {
        const response = await trailService.getTrails();
        dispatch(trailsLoaded(response.trails));
    };
};

export const trailsLoaded = (trails: Models.Trail[]) => ({
    type: actionTypes.trailsLoaded, trails,
});
