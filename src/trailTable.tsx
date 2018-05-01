import * as React from "react";
import { TrailRow } from "./trailRow";
import { TrailCategoryRow } from "./trailCategoryRow";

interface TrailTableProps {
    trails: 
}

export class TrailTable extends React.Component<TrailTableProps, {}> {
    render() {
        let rows = [];
        let lastArea = null;
        this.props.trails.forEach(function(trail) {
            if (trail.area !== lastArea) {
                rows.push(<TrailCategoryRow area={trail.area} key={trail.area} />);
            }
            lastArea = trail.area;
            rows.push(<TrailRow key={trail.name} name={trail.name} status={trail.status} url={trail.url} />)
        }, this);
        return (
            <div style={styles.root}>
                <List>
                    {rows}
                </List>
            </div>
        );
    }
}