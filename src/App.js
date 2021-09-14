import React from 'react';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import { ResetCss } from './global/ResetCss';
import GithubProvider from './providers/GithubProvider';

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
