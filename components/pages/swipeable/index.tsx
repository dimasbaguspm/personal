import React, { FC, useCallback, useEffect, useState } from 'react';
import { SaweriaContainer, SaweriaDetailWrapper, SaweriaTextWrapper, SwipeContainer } from '../home-page';
import { BodyText } from '../../atomic/typography';
import { AnimationControls, motion, useAnimation } from 'framer-motion';
import { generateRandomInteger } from '../../../utils/generator';
import styled from 'styled-components';

export interface SwipeContent {
  id: number;
  detail: string;
  ctaText: string;
  ctaClick: () => void;
  position: {
    top: number;
    left: number;
  };
}

export interface SwipeableContainerProps {
  swipeContents: SwipeContent[];
}

const SwipeableContainer: FC<SwipeableContainerProps> = ({ swipeContents }) => {
  const [swipeContent, setSwipeContent] = useState<SwipeContent[]>([]);

  const control = useAnimation();

  useEffect(() => {
    setSwipeContent(swipeContents);
  }, [swipeContents]);

  useEffect(() => {
    setTimeout(() => control.start('visible'), 300);
  }, []);

  const generateNewVisible = useCallback(
    () => ({
      top: generateRandomInteger(-150, 450),
      left: generateRandomInteger(-550, 550),
    }),
    []
  );

  return (
    <SwipeContainer>
      <SingleContainerButtonReset
        onClick={async () => {
          await control.start('reset');
          control.start('visible');
          setSwipeContent((prev) => {
            return prev.map((v) => ({
              ...v,
              position: generateNewVisible(),
            }));
          });
        }}>
        Reshuffle
      </SingleContainerButtonReset>
      {swipeContent.map((v) => (
        <SingleContainer {...v} control={control} key={v.ctaText} />
      ))}
    </SwipeContainer>
  );
};

export default SwipeableContainer;

const SingleContainer: FC<SwipeContent & { control: AnimationControls }> = ({ control, ...content }) => {
  const variants = {
    visible: { display: 'block', x: content.position.left, y: content.position.top, opacity: 1 },
    reset: { x: 250, y: 250, transition: { duration: 0 }, display: 'none', opacity: 0 },
  };

  return (
    <motion.div
      drag
      initial='reset'
      animate={control}
      variants={variants}
      whileInView={{ opacity: 1 }}
      dragMomentum={false}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 1.5 }}>
      <SaweriaContainer top={content.position.top} left={content.position.left}>
        <SaweriaDetailWrapper>
          <BodyText>{content.detail}</BodyText>
        </SaweriaDetailWrapper>
        <SaweriaTextWrapper onClick={content.ctaClick}>
          <BodyText>{content.ctaText}</BodyText>
        </SaweriaTextWrapper>
      </SaweriaContainer>
    </motion.div>
  );
};

const SingleContainerButtonReset = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
`;
