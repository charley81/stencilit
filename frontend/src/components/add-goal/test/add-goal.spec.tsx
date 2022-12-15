import { newSpecPage } from '@stencil/core/testing';
import { AddGoal } from '../add-goal';

describe('add-goal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddGoal],
      html: `<add-goal></add-goal>`,
    });
    expect(page.root).toEqualHtml(`
      <add-goal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </add-goal>
    `);
  });
});
