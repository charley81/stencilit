import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() goals: Array<any>;
  @State() showForm: boolean = false;
  url = 'http://localhost:8000/api/goals';

  toggleForm() {
    this.showForm = !this.showForm;
    console.log(this.showForm);
  }

  async getTodos() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.goals = data;
    console.log(this.goals);
  }

  connectedCallback() {
    this.getTodos();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <button onClick={this.toggleForm}>click</button>
          <display-goals goals={this.goals}></display-goals>
          {this.showForm ? <goal-form></goal-form> : null}
        </main>
      </div>
    );
  }
}
