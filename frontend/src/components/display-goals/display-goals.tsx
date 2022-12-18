import { Component, Host, h, Prop, Fragment } from '@stencil/core';

@Component({
  tag: 'display-goals',
  styleUrl: 'display-goals.css',
  shadow: true,
})
export class DisplayGoals {
  @Prop() goals: any[] = [];
  @Prop() selectGoal: Function;
  @Prop() handleDelete: Function;
  render() {
    return (
      <Host>
        {this.goals.length ? (
          <ul>
            {this.goals.map(goal => {
              return (
                <Fragment>
                  <li key={goal._id} onClick={() => this.selectGoal(goal)}>
                    {goal.description} | {goal.isCompleted ? '✅' : '❌'}
                  </li>
                  <button onClick={() => this.handleDelete(goal)}>delete</button>
                </Fragment>
              );
            })}
          </ul>
        ) : (
          <h3>no goals yet...</h3>
        )}
      </Host>
    );
  }
}
