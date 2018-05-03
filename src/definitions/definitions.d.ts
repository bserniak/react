import { Dispatch } from "redux";

export interface Trail {
    status: number;
    url: string;
    area: string;
    name: string;
}

export interface TrailAppState {
    trails: Trail[];
}

export interface DispatchEnabled {
    dispatch: Dispatch<any>;
}
