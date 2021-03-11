import styled, { createGlobalStyle, keyframes } from 'styled-components';

const zoom = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.25);
  }
`;

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  html{
    font-size: 65.5%;
  }

  body{
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  color: white;
  background-color: #222;
  width: 100vw;

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
  h2 {
    color: #aaa;
  }
`;

export const GridWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;

  h1,
  p {
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    h1,
    p {
      grid-area: header;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Input = styled.input`
  border-radius: 50px;
  padding: 10px 20px 10px 40px;
  display: inline-block;
  margin-bottom: 20px;
`;

export const MovieWrapper = styled.div`
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
