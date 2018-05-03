import * as React from "react";
import TrailTable from "./TrailList";
import * as Models from "./definitions/definitions";

interface DashboardState {
    trails: Models.Trail[];
}

export default class DashboardBase extends React.Component<{}, DashboardState> {
    public render() {
        return (
            <div>
                <div>G.O.R.C. Trail Statuses</div>
                <TrailTable />
            </div>
        );
    }


    private setTrails(trails: Models.Trail[]) {
        this.setState({ trails });
    }
}
