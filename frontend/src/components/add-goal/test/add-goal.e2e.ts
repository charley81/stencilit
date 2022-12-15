import { newE2EPage } from '@stencil/core/testing';

describe('add-goal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<add-goal></add-goal>');

    const element = await page.find('add-goal');
    expect(element).toHaveClass('hydrated');
  });
});
