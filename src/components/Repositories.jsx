import React from 'react';
import {
  WrapperTab,
  WrapperTabs,
  WrapperTabList,
  WrapperTabPanel,
} from './styled';
import RepositoryItem from './RepositoryItem';
import useGithub from '../hooks/useGithub';

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] =
    React.useState(false);

  React.useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchRepos(githubState.repositories);
  }, [
    githubState.user.login,
    getUserRepos,
    getUserStarred,
    githubState.repositories,
  ]);

  return (
    <>
      {hasUserForSearchRepos ? (
        <WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <WrapperTabList>
            <WrapperTab>Repositories</WrapperTab>
            <WrapperTab>Starred</WrapperTab>
          </WrapperTabList>
          <WrapperTabPanel>
            <WrapperTabList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.url}
                  fullName={item.full_name}
                />
              ))}
            </WrapperTabList>
          </WrapperTabPanel>
          <WrapperTabPanel>
            <WrapperTabList>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.url}
                  fullName={item.full_name}
                />
              ))}
            </WrapperTabList>
          </WrapperTabPanel>
        </WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
