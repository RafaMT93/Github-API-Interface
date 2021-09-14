import React from 'react';
import API from '../services/API';

export const GithubContext = React.createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = React.useState({
    loading: false,
    user: {
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    API.get(`users/${username}`).then(({ data: { user } }) =>
      setGithubState((prevState) => ({
        ...prevState,
        user: {
          login: user.login,
          name: user.name,
          html_url: user.html_url,
          blog: user.blog,
          company: user.company,
          location: user.location,
          followers: user.followers,
          following: user.following,
          public_gists: user.public_gistsin,
          public_repos: user.public_repos,
        },
      })),
    );
  };

  const contextValue = {
    githubState,
    getUser: React.useCallback((username) => {
      getUser(username);
    }, []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
