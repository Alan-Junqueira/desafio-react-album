import styled from 'styled-components';

export const PhotoGaleryUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7)
  }
`;

export const PhotoGaleryList = styled.li`
  list-style: none;
  padding: 20px;
  border: 2px solid rgba(0, 0, 0, 0.8);

  &:hover{
    background: rgba(0, 0, 0, 0.1);
  }

`;
