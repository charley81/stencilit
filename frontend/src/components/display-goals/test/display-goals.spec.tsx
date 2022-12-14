import { newSpecPage } from '@stencil/core/testing';
import { DisplayGoals } from '../display-goals';

describe('display-goals', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DisplayGoals],
      html: `<display-goals></display-goals>`,
    });
    expect(page.root).toEqualHtml(`
      <display-goals>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </display-goals>
    `);
  });
});
