import styled, { keyframes } from 'styled-components';

const zoom = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.25);
  }
`;

export const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;

  > a {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    overflow: hidden;
    color: #444;

    > img {
      max-height: 300px;
      object-fit: cover;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover > img {
      animation: ${zoom} 1s ease-in-out forwards;
    }
    &:hover h4 {
      color: grey;
    }
  }
`;
