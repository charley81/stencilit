import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() goals: Array<any> = [];

  url = 'http://localhost:8000/api/goals';

  async getGoals() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      this.goals = data;
    } catch (error) {
      console.log(error);
    }
  }

  async handleCreate(data: any) {
    try {
      await fetch(this.url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentWillLoad() {
    this.getGoals();
  }

  componentWillUpdate() {
    this.getGoals();
  }

  render() {
    return (
      <div>
        {/* header */}
        <header>
          <h1>stencilit</h1>
        </header>

        {/* main */}
        <main>
          <add-goal></add-goal>
          {this.goals.length && <display-goals goals={this.goals}></display-goals>}
        </main>
      </div>
    );
  }
}
