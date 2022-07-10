import styled from 'styled-components';
import { themeConfig } from '../../../core/theme';

const Container = styled.div`
  padding: 3rem 0;
  background-color: ${themeConfig.colors.dark.main};
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export { Container };
