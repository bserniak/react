import * as React from "react";
import "../scss/Semantic.css";
import styles from "./Dashboard.scss";
import TrailTable from "./TrailList";
import * as Models from "../definitions/definitions";

const DashboardBase = () => {
        return (
            <main className={styles.pageContainerInner}>
                <h1>G.O.R.C. Trail Statuses</h1>
                <TrailTable />
            </main>
        );
};

export default DashboardBase;
