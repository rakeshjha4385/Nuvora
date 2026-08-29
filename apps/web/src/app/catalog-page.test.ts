import { createElement } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('catalog landing page', () => {
  it('renders featured catalog products', () => {
    render(createElement(HomePage));

    expect(screen.getByText('Everyday Essential')).toBeTruthy();
    expect(screen.getByText('Premium essentials, built for everyday rituals.')).toBeTruthy();
  });
});
