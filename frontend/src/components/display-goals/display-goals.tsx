import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'display-goals',
  styleUrl: 'display-goals.css',
  shadow: true,
})
export class DisplayGoals {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
