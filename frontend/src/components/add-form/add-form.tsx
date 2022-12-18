import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'add-form',
  styleUrl: 'add-form.css',
  shadow: true,
})
export class AddForm {
  @Prop() action: string;
  @Prop() description: string;
  @Prop() isCompleted: boolean;
  @Prop() id: string;
  @Prop() handleCreate: Function;
  @Prop() handleUpdate: Function;

  @State() formData: any = {
    description: '',
    isCompleted: false,
    id: '',
  };

  handleInput(e: any) {
    const { checked, value, name } = e.target;

    if (name === 'isCompleted') {
      this.formData.isCompleted = checked;
    }

    if (name === 'description') {
      this.formData.description = value;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.action === 'create') {
      this.handleCreate(this.formData);
    }
    if (this.action === 'update') {
      this.handleUpdate(this.formData);
    }
  }

  connectedCallback() {
    if (this.action === 'update') {
      this.formData.description = this.description;
      this.formData.isCompleted = this.isCompleted;
      this.formData.id = this.id;
    }
  }

  render() {
    return (
      <Host>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            enter goal:
            <input type="text" name="description" value={this.formData.description} onInput={e => this.handleInput(e)} />
          </label>
          <input type="checkbox" name="isCompleted" checked={this.formData.isCompleted} onChange={e => this.handleInput(e)} />
          <button type="submit">submit</button>
        </form>
      </Host>
    );
  }
}
