import * as Models from "./definitions/definitions";
import * as _ from "lodash";

const service = {
    async getTrails(): Promise<{trails: Models.Trail[]}> {
        return fetch("http://trailstatusapi.azurewebsites.net/api/status")
            .then((response) => response.json());
    },
};

export default service;
