import * as React from "react";
import Achievement from "../Achievement/Achievement";
import * as styles from "./achievementList.css";

interface AchievementListState {
    achievements: JSX.Element[],
    name: string,
    description: string
}

export default class AchievementList extends React.Component<undefined, AchievementListState> {
    public addAchievement: () => void;
    constructor(props: undefined) {
        super(props);
        this.state = {
            achievements: [<Achievement name={"Testing"} description={"Testing desc"} isCompleted={false} key='unique1'/>],
            name: "",
            description: ""
        };
        this.addAchievement = () => {
            this.setState((prevState) => {
                const newAchievement = <Achievement
                    name={prevState.name}
                    description={prevState.description}
                    isCompleted={false}
                    key={prevState.name}/>;
                return {achievements: [...prevState.achievements, newAchievement],
                        name: "",
                        description: ""};
            });
        }
    }
    render() {
        return<div>
            <div className={styles.title}>List of achievements</div>
            {this.state.achievements}
            <div>New achievement</div>
            <div>Name {this.state.name}</div>
            <input type="text"
                value={this.state.name}
                onChange={ ev => {this.setState({name: ev.target.value})}}/>
            <div>Description</div>
            <textarea
                value={this.state.description}
                onChange={ev => {this.setState({description: ev.target.value})}}/>
            <button onClick={this.addAchievement}>Add</button>
        </div>
    }
}