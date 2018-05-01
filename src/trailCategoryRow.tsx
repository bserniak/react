import * as React from "react";
import * as Models from "./definitions/definitions";

interface TrailCategoryRowProps {
  area: string;
}

export class TrailCategoryRow extends React.Component<TrailCategoryRowProps, {}> {
  render() {
    return (
      <div style={{color: "#000000", background: "#CFD8DC", fontSize:"115%", fontWeight: "bold", fontFamily: "Roboto, sans-serif"}}>
        <span>{this.props.area}</span>
      </div>
    );
  }
}
