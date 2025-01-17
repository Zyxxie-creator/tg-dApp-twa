import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faUsers } from '@fortawesome/free-solid-svg-icons';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px 0px;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const NavigationItem = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.isActive ? 'black' : '#aaa')};
  flex-grow: 1;

  &:hover {
    background-color: transparent;
  }

  svg {
    margin-bottom: 5px;
    color: inherit;
  }
`;

interface BottomNavigationProps {
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentPage, onPageChange }) => {
  const handleClick = (pageIndex: number, event: React.MouseEvent) => {
    onPageChange(pageIndex);
    (event.currentTarget as HTMLElement).blur();
  };

  return (
    <NavigationContainer>
      <NavigationItem isActive={currentPage === 0} onClick={(event) => handleClick(0, event)}>
        <FontAwesomeIcon icon={faHome} />
        Главная
      </NavigationItem>
      <NavigationItem isActive={currentPage === 1} onClick={(event) => handleClick(1, event)}>
        <FontAwesomeIcon icon={faList} />
        Тест
      </NavigationItem>
      <NavigationItem isActive={currentPage === 2} onClick={(event) => handleClick(2, event)}>
        <FontAwesomeIcon icon={faUsers} />
        Друзья
      </NavigationItem>
    </NavigationContainer>
  );
};

export default BottomNavigation;
