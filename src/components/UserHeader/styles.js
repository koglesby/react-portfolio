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

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 1rem;
`;

export const EmailIcon = styled.span`
  font-size: 1rem;
  vertical-align: middle;
  margin-right: 0.5rem;
`;
