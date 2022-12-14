import { newE2EPage } from '@stencil/core/testing';

describe('display-goals', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<display-goals></display-goals>');

    const element = await page.find('display-goals');
    expect(element).toHaveClass('hydrated');
  });
});
