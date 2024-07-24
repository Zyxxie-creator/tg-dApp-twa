// components/LoadingScreen.tsx
import React from 'react';
import styled from 'styled-components';
import loadingImage from '../assets/loadscreen.jpg'; // Импортируем изображение

const LoadingScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #333;
  border-top-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin-top: 20px; // Отступ сверху
`;

const LoadingImage = styled.img`
  width: auto; // Ширина изображения
  height: auto; // Автоматическая высота для сохранения пропорций
  margin: 20px; // Отступ снизу
`;

const LoadingScreen: React.FC = () => {
  return (
    <LoadingScreenContainer>
      <LoadingImage src={loadingImage} alt="Загрузка..." /> {/* Добавляем изображение */}
      <LoadingSpinner />
      <p>Загрузка...</p>
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
