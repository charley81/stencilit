import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() goals: any[] = [];
  @State() showForm: boolean = false;
  @State() description: string = '';
  @State() isCompleted: boolean = false;
  @State() _id: string = '';
  @State() action: string = 'create';

  private URL = 'http://localhost:8000/api/goals';

  resetState() {
    this.getGoals();
    this.showForm = false;
    this.description = '';
    this.isCompleted = false;
    this._id = '';
    this.action = 'create';
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  async getGoals() {
    try {
      const response = await fetch(this.URL);
      const json = await response.json();
      this.goals = json;
    } catch (error) {
      console.log(error);
    }
  }

  async handleCreate(data: any) {
    try {
      await fetch(this.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
    this.resetState();
  }

  async handleUpdate(data: any) {
    console.log('handleUpdate', data);
    try {
      await fetch(`${this.URL}/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
    this.resetState();
  }

  selectGoal(goal) {
    this.showForm = true;
    this.description = goal.description;
    this._id = goal._id;
    this.isCompleted = goal.isCompleted;
    this.action = 'update';
  }

  connectedCallback() {
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
          {/* button */}
          <button onClick={() => this.toggleForm()}>create</button>
          {/* display goals */}
          <display-goals goals={this.goals} selectGoal={d => this.selectGoal(d)}></display-goals>
          {/* add form */}
          {this.showForm && (
            <add-form
              description={this.description}
              action={this.action}
              isCompleted={this.isCompleted}
              id={this._id}
              handleCreate={d => this.handleCreate(d)}
              handleUpdate={d => this.handleUpdate(d)}
            ></add-form>
          )}
        </main>
      </div>
    );
  }
}
