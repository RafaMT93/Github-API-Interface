import React from 'react';
import {
  WrapperTab,
  WrapperTabs,
  WrapperTabList,
  WrapperTabPanel,
} from './styled';

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
      <WrapperTabPanel>Panel Repositories</WrapperTabPanel>
      <WrapperTabPanel>Panel Starred</WrapperTabPanel>
    </WrapperTabs>
  );
};

export default Repositories;
