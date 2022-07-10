import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { themeConfig } from '../../../core/theme';
import { FlexBox } from '../../../components/atomic/flex-box';

import { RiHome5Line, RiShieldUserLine, RiBookletLine } from 'react-icons/ri';
import { MdOutlineWorkOutline } from 'react-icons/md';
import HoverTypography from '../../atomic/hoverTypography';
import Link from 'next/link';

const BottomNavigator = () => {
  return (
    <BottomNavigationContainer justifyBetween>
      {availableNavigators.map((v) => (
        <div key={v.text}>
          <Link target='_blank' href={v.url}>
            <a>
              <HoverTypography text={v.text}>{v.icon}</HoverTypography>
            </a>
          </Link>
        </div>
      ))}
      <BottomBorder />
    </BottomNavigationContainer>
  );
};

export default BottomNavigator;

interface IBottomNavigatorIcon {
  text: string;
  url: string;
  icon: ReactElement;
}

const availableNavigators: IBottomNavigatorIcon[] = [
  {
    text: 'Home',
    url: '/',
    icon: <RiHome5Line size={50} color={themeConfig.colors.secondary.main} />,
  },
  {
    text: 'Articles',
    url: '/articles',
    icon: <RiShieldUserLine size={50} color={themeConfig.colors.secondary.main} />,
  },
  {
    text: 'About',
    url: '/about',
    icon: <RiShieldUserLine size={50} color={themeConfig.colors.secondary.main} />,
  },
  {
    text: 'Projects',
    url: '/projects',
    icon: <RiBookletLine size={50} color={themeConfig.colors.secondary.main} />,
  },
  {
    text: 'Experiences',
    url: '/experiences',
    icon: <MdOutlineWorkOutline size={50} color={themeConfig.colors.secondary.main} />,
  },
];
// Bottom Navigation
const BottomNavigationContainer = styled(FlexBox)`
  position: absolute;
  bottom: 25px;
  width: 500px;
`;

const BottomBorder = styled.div`
  position: absolute;
  bottom: -10px;
  height: 5px;
  width: 100%;
  background-color: ${themeConfig.colors.primary.main};
  border-radius: 0 0 15px 15px;
`;
