import styled from 'styled-components';

export const Title = styled.h1`
  margin: 25px 0 20px;
`;

export const ButtonHome = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: rgba(20, 30, 100, 0.5);
  margin-bottom: 10px;
`;

export const PhotosContainer = styled.ul`
  list-style: none;
  margin-top: 10px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export const PhotosList = styled.li``;

export const PhotoAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
  max-width: 200px;

  border: 2px solid rgba(0, 0, 0, 0.7);

  margin-bottom: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
