import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'add-goal',
  styleUrl: 'add-goal.css',
  shadow: true,
})
export class AddGoal {
  private url = 'http://localhost:8000/api/goals';

  @State() value: string;
  @State() data;

  async handleSubmit(e) {
    e.preventDefault();
    const goal = {
      goal: this.value,
    };

    try {
      const response = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(goal),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  handleChange(e) {
    this.value = e.target.value;
  }

  handleErrors(response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }

  render() {
    return (
      <Host>
        <h3>Add Goal</h3>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Goal:
            <input type="text" value={this.value} onInput={e => this.handleChange(e)} />
          </label>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </Host>
    );
  }
}
