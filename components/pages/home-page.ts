import styled from 'styled-components';

import { themeConfig } from '../../core/theme';
import { generateRandomInteger } from '../../utils/generator';

import { FlexBox } from '../atomic/flex-box';
import { BodyText, Title } from '../atomic/typography';

const NameTitle = styled(Title)`
  font-size: 1.35rem;
  margin-top: 1rem;
  font-weight: 500;
`;

const SwipeContainer = styled(FlexBox)`
  width: 500px;
  height: 350px;
`;

const SaweriaContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => `${props.top}`};
  left: ${(props) => `${props.left}`};
  transform: translate(-50%, -50%);
  margin-top: 2rem;
  background-color: ${themeConfig.colors.dark.dark};
  width: 400px;
  max-height: 200px;
  height: 200px;
  border-radius: 15px 15px 0 0;
`;

const SaweriaTextWrapper = styled.a`
  cursor: pointer;
  width: 100%;
  height: 3rem;
  border: 1px solid ${themeConfig.colors.dark.dark};
  border-radius: 0 0 15px 15px;
  background-color: ${themeConfig.colors.dark.main};
  display: flex;
  justify-content: center;
  align-items: center;
  ${BodyText} {
    text-align: center;
  }
`;

const SaweriaDetailWrapper = styled.div`
  padding: 1rem;
  overflow-y: auto;
  height: 100%;
  ::-webkit-scrollbar {
    border-radius: 0 15px 0 0;
    width: 10px;
    height: 8px;
    background-color: ${themeConfig.colors.dark.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${themeConfig.colors.primary.main};
  }
  ${BodyText} {
    font-size: 0.95rem;
    color: ${themeConfig.colors.secondary.main};
    font-weight: 300;
  }
`;

export { NameTitle, SaweriaContainer, SaweriaDetailWrapper, SaweriaTextWrapper, SwipeContainer };
