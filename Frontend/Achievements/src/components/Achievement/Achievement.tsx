import * as React from "react";
import * as styles from "./achievement.css";

interface IAchievement {
    name: string,
    description: string,
    isCompleted: boolean
}

export default class Achievement extends React.Component<IAchievement, IAchievement> {
    constructor(props: IAchievement) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            isCompleted: props.isCompleted
        }
    }

    private completedBadge() {
        return this.state.isCompleted ?
            <div>Completed</div>
            : <div>Ongoing</div>;
    }

    render() {
        return <div>
            <div className={styles.foo}>{this.state.name}</div>
            <div>{this.state.description}</div>
            {this.completedBadge()}
        </div>
    }
}