import * as React from "react";
import { TrailRow } from "./TrailRow";
import * as Models from "./definitions/definitions";
import * as _ from "lodash";

interface TrailTableProps {
    trails: Models.Trail[];
}

export class TrailTable extends React.Component<TrailTableProps, {}> {
    public render() {
        return (
            <div>
                {this.renderTrailsByArea}
            </div>
        );
    }

    private renderTrailsByArea = () => {
        const byArea = _.groupBy(this.props.trails, (trail) => trail.area);

        const renderTrail = (trail: Models.Trail) => {
            return (
                <a href={"https://gorctrails.org" + trail.url}>
                    <span>{trail.status}</span>
                    <span>{trail.name}</span>
                </a>
            )
        };

        return (
            <ul>{_.forOwn(byArea, (trails) => trails.map((trail) => renderTrail(trail)))}</ul>
        )
    }
}
