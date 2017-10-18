import * as React from "react";
import * as styles from "./app.css";

import AchievementList from "./AchievementList/AchievementList";

export const App = (props: {}) => <div className={styles.app}>
    <AchievementList/>
</div>;