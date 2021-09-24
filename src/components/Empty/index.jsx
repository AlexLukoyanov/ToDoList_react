import styles from "./index.module.css";
import React from "react";

export function Empty() {
    return <h2 className={styles.empty}> The Todo list is empty ... </h2>;
}