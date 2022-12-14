import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'goal-form',
  styleUrl: 'goal-form.css',
  shadow: true,
})
export class TodoForm {
  render() {
    return (
      <Host>
        <h3>goal form</h3>
      </Host>
    );
  }
}
