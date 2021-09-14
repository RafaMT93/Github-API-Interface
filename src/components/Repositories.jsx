import React from 'react';
import {
  WrapperTab,
  WrapperTabs,
  WrapperTabList,
  WrapperTabPanel,
} from './styled';
import RepositoryItem from './RepositoryItem';

const Repositories = () => {
  return (
    <WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <WrapperTabList>
        <WrapperTab>Repositories</WrapperTab>
        <WrapperTab>Starred</WrapperTab>
      </WrapperTabList>
      <WrapperTabPanel>
        <RepositoryItem name="" linkToRepo="" fullName="" />
      </WrapperTabPanel>
      <WrapperTabPanel>
        <RepositoryItem name="" linkToRepo="" fullName="" />
      </WrapperTabPanel>
    </WrapperTabs>
  );
};

export default Repositories;
