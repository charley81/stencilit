import { Component, h, Method, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() goals: Array<any>;
  @State() showForm: boolean = false;
  @State() goal: string = '';
  @State() completed: boolean = false;
  @State() _id: string = '';
  @State() action: string = 'create';

  url = 'http://localhost:8000/api/goals';

  // toggleForm() {
  //   this.showForm = !this.showForm;
  //   console.log(this.showForm);
  // }

  async getGoals() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.goals = data;
    console.log(this.goals);
  }

  resetState() {
    this.getGoals();
    this.action = 'create';
    this.goal = '';
    this._id = '';
  }

  async handleCreate(data) {
    console.log('data: ', data);
    await fetch(this.url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    this.resetState();
  }

  connectedCallback() {
    this.getGoals();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <goal-form goal={this.goal} completed={this.completed} _id={this._id} action={this.action} handleCreate={d => this.handleCreate(d)}></goal-form>
          <display-goals goals={this.goals}></display-goals>
        </main>
      </div>
    );
  }
}
