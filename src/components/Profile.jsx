import React from 'react';
import {
  Wrapper,
  WrapperStatusCount,
  WrapperUsername,
  WrapperGeneric,
  WrapperInfoUser,
  WrapperImage,
} from './styled';
import useGithub from '../hooks/useGithub';

const Profile = () => {
  const { githubState } = useGithub();

  React.useEffect(() => {
    console.log(githubState.user);
  }, [githubState.user]);

  return (
    <Wrapper>
      {githubState.user.avatar_url && (
        <WrapperImage src={githubState.user.avatar_url} alt="Avatar of User" />
      )}
      <WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <WrapperUsername>
            <h3>Username: </h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </WrapperUsername>
          {githubState.user.company && (
            <WrapperGeneric>
              <h3>Company: </h3>
              <span> {githubState.user.company}</span>
            </WrapperGeneric>
          )}
          {githubState.user.blog && (
            <WrapperGeneric>
              <h3>Blog: </h3>
              <span> {githubState.user.blog}</span>
            </WrapperGeneric>
          )}
          <WrapperGeneric>
            <h3>Location: </h3>
            <span> {githubState.user.location}</span>
          </WrapperGeneric>
        </div>
        <WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </WrapperStatusCount>
      </WrapperInfoUser>
    </Wrapper>
  );
};

export default Profile;
