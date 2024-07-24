import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faUsers } from '@fortawesome/free-solid-svg-icons';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 15px 0px; 
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); 
`;

const NavigationItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  flex-grow: 1; 

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    margin-bottom: 5px;
    color: black;
  }
`;

interface BottomNavigationProps {
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentPage, onPageChange }) => {
  return (
    <NavigationContainer>
      <NavigationItem onClick={() => onPageChange(0)}>
        <FontAwesomeIcon icon={faHome} />
        Главная
      </NavigationItem>
      <NavigationItem onClick={() => onPageChange(1)}>
        <FontAwesomeIcon icon={faList} />
        Тест
      </NavigationItem>
      <NavigationItem onClick={() => onPageChange(2)}>
        <FontAwesomeIcon icon={faUsers} />
        Друзья
      </NavigationItem>
    </NavigationContainer>
  );
};

export default BottomNavigation;
