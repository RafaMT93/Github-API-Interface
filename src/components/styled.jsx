import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

//Profile.jsx

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  heigth: 0.5rem;
  height: 12.5rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;

  div {
    margin: 0.5rem;
    text-align: center;
  }
`;

export const WrapperUsername = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  h3 {
    margin-right: 0.5rem;
    font-weight: bold;
  }

  a {
    font-size: 1.125rem;
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  h3 {
    margin-right: 0.5rem;
    font-weight: bold;
  }

  a {
    font-size: 1.125rem;
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 12.5rem;
  heigth: 12.5rem;
  margin: 0.5rem;
`;

//Layout.jsx

export const WrapperLayout = styled.section`
  margin: 1rem;
`;

//Repositories.jsx

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 1rem;
  user-selected: none;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 99999;
  background-color: #fff;
  margin: 0.5rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 1em #ccc;
  }

  &:hover {
    background-color: #ccc;
    color: #333;
    border: 1px solid #333;
  }

  &.is-selected {
    box-shadow: 8px 3px 8px rgba(0, 0, 0, 0.5);
  }
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0.25rem;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  padding: 1rem;
  min-heigth: 40vh;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

//Header.jsx

export const WrapperHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.25rem;

  input {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 100%;
    height: 2.75rem;
    margin-right: 0.5rem;
    padding: 0.5rem;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    border-radius: 0.5rem;
    font-weight: bold;
    transition: 0.5s ease;
    font-size: 1rem;
    color: #fff;

    &:hover {
      background-color: #225ed9;
      color: #333;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
    }
  }
`;
