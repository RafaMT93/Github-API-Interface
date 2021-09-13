import React from 'react';
import Layout from './components/Layout';
import Profile from './components/Profile';
import { ResetCss } from './global/ResetCss';

function App() {
  return (
    <main>
      <ResetCss />
      <Layout>
        <Profile />
      </Layout>
    </main>
  );
}

export default App;
