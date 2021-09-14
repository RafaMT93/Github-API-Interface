import React from 'react';
import { WrapperHeader } from './styled';
import useGithub from '../hooks/useGithub';

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = React.useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <WrapperHeader>
      <input
        type="text"
        placeholder="Enter the username for search..."
        onChange={({ target }) => setUsernameForSearch(target.value)}
      />
      <button type="submit">SEARCH</button>
    </WrapperHeader>
  );
};

export default Header;
