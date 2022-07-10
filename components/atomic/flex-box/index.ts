import styled, { css } from 'styled-components';

interface FlexBoxProps {
  justifyRight?: boolean;
  justifyCenter?: boolean;
  justifyLeft?: boolean;
  justifyBetween?: boolean;

  flexColumn?: boolean;

  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.justifyLeft &&
    css`
      justify-content: left;
    `}
  ${(props) =>
    props.justifyRight &&
    css`
      justify-content: right;
    `}
    ${(props) =>
    props.justifyBetween &&
    css`
      justify-content: space-between;
    `}

    ${(props) =>
    props.flexColumn &&
    css`
      flex-direction: column;
    `}

    /* align items */
    ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

    ${(props) =>
    props.alignStart &&
    css`
      align-items: flex-start;
    `}

    ${(props) =>
    props.alignEnd &&
    css`
      align-items: flex-end;
    `}
`;

export { FlexBox };
