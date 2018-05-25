import * as React from "react";
import "../scss/Semantic.css";
import styles from "./Dashboard.scss";
import TrailTable from "./TrailList";
import * as Models from "../definitions/definitions";

const DashboardBase = () => {
        return (
            <main className={styles.pageContainerInner}>
                <div className={styles.header}>
                    <span>G.O.R.C. Trail Statuses</span>
                </div>
                <TrailTable />
            </main>
        );
};

export default DashboardBase;
