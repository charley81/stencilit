import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'display-goals',
  styleUrl: 'display-goals.css',
  shadow: true,
})
export class DisplayGoals {
  @Prop() goals: any[];

  render() {
    return (
      <Host>
        {this.goals.length ? (
          <div>
            <h3>display goals</h3>
            <ul>
              {this.goals.map(goal => (
                <li>{goal.goal}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h3>hmmmm.... can't find any goals stenciled</h3>
        )}
      </Host>
    );
  }
}
