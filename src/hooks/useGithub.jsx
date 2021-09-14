import React from 'react';
import { GithubContext } from '../providers/GithubProvider';

const useGithub = () => {
  const { githubState, getUser } = React.useContext(GithubContext);

  return { githubState, getUser };
};

export default useGithub;
