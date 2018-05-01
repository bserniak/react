import * as React from "react";

const styles = {
  root: {
    flexWrap: "wrap",
    background: "#607D8B",
  }
};

interface TrailRowProps {
    name: string;
    status: number;
}

export class TrailRow extends React.Component<TrailRowProps, {}> {
    render() {
        return (
                <div>
                    {/* <Icon leftIcon={mapping[this.props.status]} primaryText={<a href={"https://gorctrails.org" + this.props.url} /> */}
                    <a>{this.props.name}</a>
                </div>
        );
    }
}