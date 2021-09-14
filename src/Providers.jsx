import React from 'react';
import { ResetCss } from './global/ResetCss';
import GithubProvider from './providers/GithubProvider';
import App from './App';

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
