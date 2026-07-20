import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@astryxdesign/core/reset.css';
import '@astryxdesign/core/astryx.css';
import { Theme } from '@astryxdesign/core/theme';

import { App } from './App';
import { gothicTheme } from './theme.ts/gothicTheme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme theme={gothicTheme} mode="dark">
      <App />
    </Theme>
  </StrictMode>
);
