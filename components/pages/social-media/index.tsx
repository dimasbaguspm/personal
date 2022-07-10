import Link from 'next/link';
import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { FlexBox } from '../../atomic/flex-box';
import HoverTypography from '../../atomic/hoverTypography';

interface SocialMediaContainerProps {
  socialMedias: ISocialMedia[];
}
const SocialMediaContainer: FC<SocialMediaContainerProps> = ({ socialMedias }) => {
  return (
    <Wrapper justifyCenter alignCenter>
      {socialMedias.map((v) => (
        <Link key={v.name} target='_blank' href={v.url} passHref>
          <a target='_blank'>
            <HoverTypography text={v.name} topPosition={35}>
              <div>{v.icon}</div>
            </HoverTypography>
          </a>
        </Link>
      ))}
    </Wrapper>
  );
};

export default SocialMediaContainer;

interface ISocialMedia {
  name: string;
  icon: ReactElement;
  url: string;
}

const Wrapper = styled(FlexBox)`
  padding-top: 0.5rem;
  gap: 15px;
`;

export type { ISocialMedia, SocialMediaContainerProps };
