import * as React from "react";
import TrailTable from "./TrailList";
import * as Models from "./definitions/definitions";

const DashboardBase = () => {
        return (
            <div id="dashboard">
                <h1>G.O.R.C. Trail Statuses</h1>
                <TrailTable />
            </div>
        );
};

export default DashboardBase;
