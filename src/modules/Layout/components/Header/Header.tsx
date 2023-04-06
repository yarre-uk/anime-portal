import { Menu, Search } from '@styled-icons/boxicons-regular';
import { AccountCircle, Notifications } from '@styled-icons/material-outlined';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  StyledHeader,
  StyledHeaderBlock,
  StyledHeaderListBlock,
  StyledHeaderListItem,
} from './HeaderStyles';

import logo from '/logo.png';

import { SearchFormMode } from '../../helpers/types';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SearchForm from '../SearchForm/SearchForm';
import ThemeSelector from '../ThemeSelector/ThemeSelector';

import { StyledIconButton } from '@/components';
import { COLORS, DEVICES } from '@/theme';
import { useMediaQuery } from '@/utils';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const [showExtendedSearch, setExtendedSearch] = useState<boolean>(false);

  const navigate = useNavigate();

  const queryMD = useMediaQuery(DEVICES.MD);
  const queryXS = useMediaQuery(DEVICES.XS);

  const handleSearchClick = () => {
    setExtendedSearch((show) => !show);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  useEffect(() => {
    if (showExtendedSearch && !queryMD) {
      setExtendedSearch(false);
    }
  }, [queryMD, showExtendedSearch]);

  return (
    <StyledHeader>
      <StyledHeaderBlock>
        <StyledHeaderBlock>
          <StyledIconButton onClick={onMenuClick}>
            <Menu size={30} />
          </StyledIconButton>
          <StyledIconButton onClick={handleLogoClick}>
            <img src={logo} height={'30px'} alt="logo.png" />
          </StyledIconButton>

          <SearchForm
            show={showExtendedSearch}
            mode={queryMD ? SearchFormMode.extended : SearchFormMode.small}
          />
        </StyledHeaderBlock>

        <StyledHeaderListBlock>
          {queryMD && (
            <StyledHeaderListItem>
              <StyledIconButton onClick={handleSearchClick}>
                <Search
                  // TODO Icon button wrapper
                  color={showExtendedSearch ? COLORS.EMERALD : ''}
                  size={'1.5rem'}
                />
              </StyledIconButton>
            </StyledHeaderListItem>
          )}

          {!queryXS && (
            <StyledHeaderListItem>
              <ThemeSelector />
            </StyledHeaderListItem>
          )}

          <StyledHeaderListItem>
            <StyledIconButton>
              <Notifications size={'1.5rem'} />
            </StyledIconButton>
          </StyledHeaderListItem>

          {!queryXS && (
            <StyledHeaderListItem>
              <LanguageSelector />
            </StyledHeaderListItem>
          )}

          <StyledHeaderListItem>
            <StyledIconButton>
              <AccountCircle size={'1.5rem'} />
            </StyledIconButton>
          </StyledHeaderListItem>
        </StyledHeaderListBlock>
      </StyledHeaderBlock>
    </StyledHeader>
  );
};

export default Header;
