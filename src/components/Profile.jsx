import React from 'react';
import {
  Wrapper,
  WrapperStatusCount,
  WrapperUsername,
  WrapperInfoUser,
  WrapperImage,
} from './styled';

const Profile = () => {
  return (
    <Wrapper>
      <WrapperImage
        src="https://avatars.githubusercontent.com/u/55158261?v=4"
        alt="Picture of User"
      />
      <WrapperInfoUser>
        <div>
          <h1>Rafael Tiburcio</h1>
          <WrapperUsername>
            <h3>Username: </h3>
            <a
              href="https://github.com/RafaMT93"
              target="_blank"
              rel="noreferrer"
            >
              RafaMT93
            </a>
          </WrapperUsername>
        </div>
        <WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>1</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>3</span>
          </div>
        </WrapperStatusCount>
      </WrapperInfoUser>
    </Wrapper>
  );
};

export default Profile;
