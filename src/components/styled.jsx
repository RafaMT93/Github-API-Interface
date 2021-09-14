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
  heigth: auto;
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
  margin-top: 1rem;
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

export const WrapperTab = styled(Tab)``;

export const WrapperTabs = styled(Tabs)``;

export const WrapperTabList = styled(TabList)``;

export const WrapperTabPanel = styled(TabPanel)``;
