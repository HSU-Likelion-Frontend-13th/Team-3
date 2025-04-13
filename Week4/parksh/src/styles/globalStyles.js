import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${css`${reset}`}  // reset을 css 태그 함수로 감싸서 처리
`;

export default GlobalStyle;