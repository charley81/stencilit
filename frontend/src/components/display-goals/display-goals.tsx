import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'display-goals',
  styleUrl: 'display-goals.css',
  shadow: true,
})
export class DisplayGoals {
  @Prop() goals: Array<any>;

  render() {
    return (
      <Host>
        {this.goals ? (
          this.goals.map(goal => {
            return <h3>{goal.text}</h3>;
          })
        ) : (
          <h1>no goals...</h1>
        )}
      </Host>
    );
  }
}
