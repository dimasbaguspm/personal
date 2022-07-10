import React, { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { themeConfig } from '../../../core/theme';
import { BodyText } from '../typography';

interface HoverTypographyProps {
  text: string;
  children: ReactElement;
  topPosition?: number;
}
const HoverTypography: FC<HoverTypographyProps> = ({ text, children, topPosition }) => {
  const [shouldAppear, setShouldAppear] = useState<boolean>(false);
  return (
    <Wrapper
      onMouseEnter={() => !shouldAppear && setShouldAppear(true)}
      onMouseLeave={() => shouldAppear && setShouldAppear(false)}>
      {shouldAppear && <WrapperText topPosition={topPosition}>{text}</WrapperText>}
      {children}
    </Wrapper>
  );
};

export default HoverTypography;
export type { HoverTypographyProps };

const Wrapper = styled.div`
  position: relative;
`;

const WrapperText = styled(BodyText)<{ topPosition?: number }>`
  position: absolute;
  top: ${(props) => (!!props.topPosition ? `${props.topPosition}px` : '-35px')};
  left: 50%;
  transform: translateX(-50%);
  padding: 0.25rem 1rem;
  border-radius: 10px;
  background-color: ${themeConfig.colors.dark.dark};
`;
