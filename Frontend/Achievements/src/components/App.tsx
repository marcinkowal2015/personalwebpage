import * as React from "react";
import AchievementList from "./AchievementList";

export interface AppProps { message: string }

export const App = (props: AppProps) => <div>
    <h1>{props.message}</h1>
    <AchievementList/>
</div>;