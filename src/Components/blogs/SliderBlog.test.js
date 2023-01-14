import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ImageCarousel from './SliderBlog';

it('ImageCarousel renders correctly', () => {
  const test = renderer.create(
      <MemoryRouter>
        <ImageCarousel />
      </MemoryRouter>
    )
    .toJSON();
  expect(test).toMatchSnapshot();
});
