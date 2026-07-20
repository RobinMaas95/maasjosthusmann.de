import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from './App';

function storageWith(initial: Record<string, string> = {}) {
  const values = { ...initial };

  return {
    getItem: (key: string) => values[key] ?? null,
    setItem: (key: string, value: string) => {
      values[key] = value;
    }
  };
}

describe('portfolio homepage', () => {
  it('renders the approved English positioning and email CTA', () => {
    render(<App browserLanguages={['en-GB']} storage={storageWith()} />);

    expect(screen.getByRole('heading', { name: /platform & ai engineer/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /start a conversation/i })[0]).toHaveAttribute(
      'href',
      'mailto:hello@maasjosthusmann.de'
    );
  });

  it('defaults a German browser preference to German', () => {
    render(<App browserLanguages={['de-DE', 'en-GB']} storage={storageWith()} />);

    expect(screen.getByRole('heading', { name: /plattform- & ai-engineer/i })).toBeInTheDocument();
  });

  it('persists an explicit language toggle', () => {
    const storage = storageWith();
    render(<App browserLanguages={['en-GB']} storage={storage} />);

    fireEvent.click(screen.getByRole('button', { name: 'Deutsch' }));

    expect(storage.getItem('preferred-language')).toBe('de');
    expect(screen.getByRole('heading', { name: /plattform- & ai-engineer/i })).toBeInTheDocument();
  });
});
