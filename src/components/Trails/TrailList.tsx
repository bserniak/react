import * as _ from "lodash";
import * as React from "react";
import * as Models from "../../definitions/definitions";
import * as Actions from "../../redux/actions";
import IconClosed from "../icons/IconClosed";
import IconOpen from "../icons/IconOpen";
import IconUnknown from "../icons/IconUnknown";
import IconWarning from "../icons/IconWarning";
import styles from "./TrailList.scss";
import ContentLoader from "../ContentLoader/ContentLoader";

export interface TrailListProps {
    trails: Models.Trail[];
}

export class TrailListView extends React.Component<TrailListProps, {}> {
    public render() {
        return (
            <React.Fragment>
                {this.renderTrailsByArea()}
            </React.Fragment>
        );
    }

    private renderTrailsByArea = () => {
        const byArea = _.groupBy(this.props.trails, "area");
        const areas = _.keys(byArea).map((area) => ({name: area, trails: byArea[area]}));

        const renderArea = (area: {name: string, trails: Models.Trail[]}) => {
            const renderTrail = (trail: Models.Trail, index: number) => {
                return (
                    <li id={trail.name} key={trail.name} className={styles.trail}>
                        <a href={`https://gorctrails.org${trail.url}`} className={styles.trailLink}>
                            <TrailStatus status={trail.status} />
                            <div id="trailName" className={styles.trailName}>{trail.name}</div>
                        </a>
                    </li>
                );
            };

            return (
                <li id={area.name} key={area.name} className={styles.area}>
                    <div id={`area_${area.name}`} className={styles.areaName}>{area.name}</div>
                    <ul className={styles.trails}>
                        {area.trails.map((trail, index) => renderTrail(trail, index))}
                    </ul>
                </li>
            );
        };

        return (
            <ul className={styles.areas}>{areas.map((area) => renderArea(area))}</ul>
        );
    }
}

export const TrailStatus = (props: {status: number}) => {

    if (props.status === 0) {
        return (
            <IconOpen />
        );
    }
    if (props.status === 1) {
        return (
            <IconWarning />
        );
    }
    if (props.status === 2) {
        return (
            <IconClosed />
        );
    }

    return (
        <IconUnknown />
    );
};

const mapStateToProps = (state: Models.TrailAppState): TrailListProps => {
    return {
        trails: state.trails,
    };
};

const TrailLoader = ContentLoader<TrailListProps, {}>({
    loadingAction: () => {
        return Actions.getTrails();
    },
    isLoaded: (props: TrailListProps) => {
        return !!props.trails;
    },
    mapStateToProps,
})(TrailListView);

export default TrailLoader;
