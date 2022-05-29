import styled from 'styled-components';

export const label = styled.label`
  width: 100%;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const Preview = styled.div`
  width: 300px;
  height: 300px;
`;

export const PreviewImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  display: none;
`;
