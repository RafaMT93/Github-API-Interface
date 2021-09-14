import React from 'react';
import {
  Wrapper,
  WrapperStatusCount,
  WrapperUsername,
  WrapperInfoUser,
  WrapperImage,
} from './styled';
import useGithub from '../hooks/useGithub';

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <Wrapper>
      <WrapperImage
        src="https://avatars.githubusercontent.com/u/55158261?v=4"
        alt="Picture of User"
      />
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
