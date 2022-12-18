import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'display-goals',
  styleUrl: 'display-goals.css',
  shadow: true,
})
export class DisplayGoals {
  @Prop() goals: any[] = [];
  @Prop() selectGoal: Function;

  render() {
    return (
      <Host>
        {this.goals.length ? (
          <ul>
            {this.goals.map(goal => {
              return (
                <li key={goal._id} onClick={() => this.selectGoal(goal)}>
                  {goal.description} | {goal.isCompleted ? '✅' : '🗑️'}
                </li>
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
