import * as React from "react";
import Achievement from "./Achievement/Achievement";

interface AchievementListState {
    title: string,
    achievements: JSX.Element[],
    name: string,
    description: string
}

export default class AchievementList extends React.Component<undefined, AchievementListState> {
    public addAchievement: () => void;
    constructor(props: undefined) {
        super(props);
        this.state = {
            achievements: [],
            title: "List of current achievements",
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
            <h1 className={"title"}>{this.state.title}</h1>
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