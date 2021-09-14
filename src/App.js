import React from 'react';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import useGithub from './hooks/useGithub';
import NoSearch from './components/NoSearch';

function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <>
              <Profile />
              <Repositories />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
