import * as React from "react";
import * as Models from "./definitions/definitions";
import * as _ from "lodash";
import { ProviderProps, connect } from "react-redux";
import * as Actions from "./redux/actions";

interface TrailListProps {
    trails: Models.Trail[];
}

class TrailListView extends React.Component<TrailListProps, {}> {
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
                    <li key={`${index}-${trail.name}`}>
                        <a href={`https://gorctrails.org${trail.url}`}>
                            <div id={`trailStatus-${index}`}>{trail.status}</div>
                            <div id={`trailName-${index}`}>{trail.name}</div>
                        </a>
                    </li>
                );
            };

            return (
                <li key={area.name}>
                    <div id={`area-${area.name}`}>{area.name}</div>
                    <ul>
                        {area.trails.map((trail, index) => renderTrail(trail, index))}
                    </ul>
                </li>
            );
        };

        return (
            <ul>{areas.map((area) => renderArea(area))}</ul>
        );
    }
}

export interface ContentLoaderOptions<TPropsFromState, TOwnProps> {
    loadingAction(props: Partial<TPropsFromState & TOwnProps>): any;
    isLoaded(props: Partial<TPropsFromState & TOwnProps>): boolean;
    mapStateToProps(state: Models.TrailAppState): TPropsFromState;
}

type MyComponent<T> = React.StatelessComponent<T>|React.ComponentClass<T>;

const ContentLoader = <TPropsFromState extends {}, TOwnProps extends {}>(options: ContentLoaderOptions<TPropsFromState, TOwnProps>) =>
    (ContentView: MyComponent<TOwnProps&TPropsFromState>) => {
    return connect<TPropsFromState, { }, ProviderProps & TOwnProps>((state: Models.TrailAppState) => (options.mapStateToProps(state)))
    (class ContentLoaderHOC extends React.Component<TPropsFromState & TOwnProps & Models.DispatchEnabled, {}> {
        public componentDidMount() {
            if (!options.isLoaded(this.props)) {
                this.props.dispatch(options.loadingAction(this.props));
            }
        }

        public render() {
            if (!options.isLoaded(this.props)) {
                return <span id={"loading"}>Loading...</span>;
            }
            return <ContentView {...this.props} />;
        }
    });
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
