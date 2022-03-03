import { render } from '@testing-library/react';

import ColorGrid from './color-grid';

describe('ColorGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ColorGrid />);
    expect(baseElement).toBeTruthy();
  });
});
