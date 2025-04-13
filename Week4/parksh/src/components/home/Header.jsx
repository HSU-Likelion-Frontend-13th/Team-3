import styled from "styled-components";
// Header 스타일 컴포넌트
const HeaderLayout = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-weight: 700;
  color: blue;
  font-size: 2em;
  padding-left: 0.5em;
`;

const Nav=styled.nav`
  display: flex;
  align-items: center;
  a {
    margin-left: 1.5em;
    text-decoration: none;
    color: blue;
    font-size: 1.2em;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;


export default function Header() {
  return (
    <HeaderLayout>
      <Logo>PORTFOLIO</Logo>
      <Nav>
      <a href="about.html">ABOUT</a>
      {/*a 태그를 사용하면 클릭할 때마다 새로고침이 발생해
      전체 페이지가 다시 로드되 리액트의 상태가 모두 초기화 된다.
      반면 Link를 사용하면 새로고침 되지 않는다.
      때문에 a태그는 보통 외부 링크를 처리하는데 사용되고
      Link 태그는 내부 페이지 간 이동에 사용된다.*/}
      <a href="HOBBY.html">HOBBY</a>
      <a href="homework.html">CONTACT</a>
      </Nav>
    </HeaderLayout>
  );
} 