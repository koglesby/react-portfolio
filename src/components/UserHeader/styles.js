import styled from 'styled-components';

export const HeaderContainer = styled.div`
  @media (max-width: 42rem) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
  }
`;

export const Header = styled.div`
  display: flex;
  @media (max-width: 42rem) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 3px;
`;
