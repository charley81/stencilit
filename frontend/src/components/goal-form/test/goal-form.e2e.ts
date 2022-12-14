import { newE2EPage } from '@stencil/core/testing';

describe('todo-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-form></todo-form>');

    const element = await page.find('todo-form');
    expect(element).toHaveClass('hydrated');
  });
});
