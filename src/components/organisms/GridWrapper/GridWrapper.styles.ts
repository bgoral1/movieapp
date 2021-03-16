import styled from 'styled-components';

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
