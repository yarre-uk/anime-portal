import { Menu, Search } from '@styled-icons/boxicons-regular';
import styled from 'styled-components';

import { DEVICES } from '@/theme';

export const StyledHeader = styled.header`
  @media ${DEVICES.LG} {
    margin-bottom: 0.75rem;
    position: inherit;
  }
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2.5rem;
  background-color: ${({ theme }) => theme.backGroundColor};
  border-bottom: 2px ${({ theme }) => theme.dividerColor} solid;
`;

export const StyledHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const StyledMenu = styled(Menu)`
  cursor: pointer;
  width: 2rem;
`;
export const StyledSearch = styled(Search)`
  cursor: pointer;
`;