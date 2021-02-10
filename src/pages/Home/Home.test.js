import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Home from './index';

describe('Home Page', () => {
  afterEach(cleanup);

  test('should be able to render home page', () => {
    const component = render(<Home />);

    expect(component).toMatchSnapshot();
  });
});
