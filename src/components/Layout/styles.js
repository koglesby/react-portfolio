import styled from 'styled-components';
import { Content } from 'carbon-components-react/lib/components/UIShell';

export const StyledContent = styled(Content)`
  min-height: 100vh;
  @media (max-width: 42rem) {
    margin-left: 0 !important;
  }
`;
