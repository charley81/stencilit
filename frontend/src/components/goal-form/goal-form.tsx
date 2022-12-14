import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'goal-form',
  styleUrl: 'goal-form.css',
  shadow: true,
})
export class TodoForm {
  @Prop() goal: string;
  @Prop() completed: boolean;
  @Prop() _id: string;
  @Prop() action: string;
  @Prop() handleCreate: Function;
  @Prop() handleUpdate: Function;

  @State() formData: any = {
    goal: '',
    completed: false,
  };

  handleInput(event) {
    const target = event.path[0];
    this.formData.goal = target.value;
  }

  handleSubmit(event) {
    console.log('cheese');
    event.preventDefault();

    if (this.action === 'create') {
      this.handleCreate(this.formData);
    }

    if (this.action === 'update') {
      this.handleUpdate(this.formData);
    }
  }

  connectedCallback() {
    if (this.action === 'update') {
      this.formData.goal = this.goal;
      this.formData.completed = this.completed;
      this.formData._id = this._id;
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text" value={this.goal} name="goal" onInput={e => this.handleInput(e)} />
        <input type="checkbox" name="completed" checked={this.completed} onInput={e => this.handleInput(e)} />
        <input type="submit" />
      </form>
    );
  }
}
