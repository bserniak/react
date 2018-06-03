import * as React from "react";
import { ProviderProps, connect } from "react-redux";
import * as Models from "../../definitions/definitions";
import styles from "./TrailList.scss";

type MyComponent<T> = React.StatelessComponent<T>|React.ComponentClass<T>;

export interface ContentLoaderOptions<TPropsFromState, TOwnProps> {
    loadingAction(props: Partial<TPropsFromState & TOwnProps>): any;
    isLoaded(props: Partial<TPropsFromState & TOwnProps>): boolean;
    mapStateToProps(state: Models.TrailAppState): TPropsFromState;
}

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
                return <span className={styles.loading}>Loading...</span>;
            }
            return <ContentView {...this.props} />;
        }
    });
};

export default ContentLoader;
