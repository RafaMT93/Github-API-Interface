import React from 'react';
import {
  WrapperRepositoryItem,
  WrapperRepositoryTitle,
  WrapperRepositoryInfo,
  WrapperRepositoryLink,
} from './styled';

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <WrapperRepositoryItem>
      <WrapperRepositoryTitle>{name}</WrapperRepositoryTitle>
      <WrapperRepositoryInfo>full name:</WrapperRepositoryInfo>
      <WrapperRepositoryLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </WrapperRepositoryLink>
    </WrapperRepositoryItem>
  );
};

export default RepositoryItem;
