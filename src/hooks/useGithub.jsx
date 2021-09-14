import { GithubContext } from '../providers/GithubProvider';

const useGithub = () => {
  const { githubState } = useContext(GithubContext);

  return { githubState };
};

export default useGithub;
