import * as React from "react";
import { TrailTable } from "./trailTable";
import { GetTrails } from "./Services";
import * as Models from "./definitions/definitions";

const styles = {
  root: {
    flexWrap: "wrap",
    background: "#37474F",
  },
};

interface SearchableTrailTableState {
    trails: Models.Trail[];
}

export class SearchableTrailTable extends React.Component<{}, SearchableTrailTableState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            trails: [],
        };
        this.setTrails = this.setTrails.bind(this);
    }

    public componentDidMount() {
        return GetTrails().then((response) => {
            this.setTrails(response.trails);
        });        
    }

    public render() {
        return (
            <div>
                <span>G.O.R.C. Trail Statuses</span>
                <TrailTable trails={this.state.trails}/>
            </div>
        );
    }


    private setTrails(trails: Models.Trail[]) {
        this.setState({ trails });
    }
}
