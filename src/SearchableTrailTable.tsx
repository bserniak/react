import * as React from "react";
import { TrailTable } from "./trailTable";
import { GetTrails } from "./services";

const styles = {
  root: {
    flexWrap: "wrap",
    background: "#37474F",
  }
};

interface SearchableTrailTableState {
    trails: any;
}

export class SearchableTrailTable extends React.Component<{}, SearchableTrailTableState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            trails: []
        }
        this.setTrails = this.setTrails.bind(this);
    }

    componentDidMount() {
        return GetTrails().then(trails => {
            this.setTrails(trails.trails);
        });        
    }

    setTrails(trails: any) {
        this.setState({
            trails: trails
        });
    }

    render() {
        return (
            <div>
                {/* <AppBar style={styles.root} showMenuIconButton={false} title="G.O.R.C. Trail Statuses" /> */}
                <TrailTable trails={this.state.trails}/>
            </div>
        );
    }
}
