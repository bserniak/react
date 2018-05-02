import * as React from "react";
import * as Models from "./definitions/definitions";
import * as _ from "lodash";

interface TrailListProps {
    trails: Models.Trail[];
}

export default class TrailList extends React.Component<TrailListProps, {}> {
    public render() {
        return (
            <div>
                {this.renderTrailsByArea()}
            </div>
        );
    }

    private renderTrailsByArea = () => {
        const byArea = _.groupBy(this.props.trails, (trail) => trail.area);
        const areas = _.keys(byArea).map((area) => ({name: area, trails: byArea[area]}));
        console.log({areas});

        const renderArea = (area: {name: string, trails: Models.Trail[]}) => {
            const renderTrail = (trail: Models.Trail) => {
                return (
                    <li key={trail.url}>
                        <a href={`https://gorctrails.org${trail.url}`}>
                            <span>{trail.status}</span>
                            <span>{trail.name}</span>
                        </a>
                    </li>
                );
            };

            return (
                <li key={area.name}>
                    <span>{area.name}</span>
                    <ul>
                        {area.trails.map((trail) => renderTrail(trail))}
                    </ul>
                </li>
            );
        };

        return (
            <ul>{areas.map((area) => renderArea(area))}</ul>
        );
    }
}
