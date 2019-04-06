import styled, { createGlobalStyle } from 'styled-components';

export const defaultCss = {
  color: '#30dc94',
  opoColor: '#fff',
  link: '#23A16C',
  border: '10px',
};

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;

  }


  body {
       background:${defaultCss.color};
    ${''}
    text-rendering: optimizedLegibility !important;
    -webkit-font-smooting: antialiased !important;
    font-family:sans-serif
  }
`;
export default GlobalStyle;

// Column element
export const Col = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  ${props => propsHandler(props)}
  /* border:2px solid #000; */
  display: block;
  float: left;
`;

function propsHandler(props) {
  let { num } = props;

  num = !num || num === 0 ? 12 : num;
  let atr = '';
  const range = 8.33;
  atr += ` width: ${Math.round(num * range)}%;`;
  let mediaResize = '';
  if (props.xs || props.sm) {
    atr += ' float: left; ';
    mediaResize = ` @media (min-width:${768}px) { ${atr} } `;
  }
  if (props.md) {
    atr += 'float: left; ';
    mediaResize = `@media (min-width:${992}px) {${atr} }`;
  }
  if (props.lg) {
    atr += 'float: left; ';
    mediaResize = `@media (min-width:${1200}px) {${atr} }`;
  }

  console.log(mediaResize);
  return mediaResize;
}

// Button Element
export const Button = styled.button`
  color: ${props => (props.negative ? defaultCss.color : defaultCss.opoColor)};
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 2rem;
  display: block;
  width: 25vw;
  background-color: ${props => (props.negative ? defaultCss.opoColor : defaultCss.color)};
  border: ${props => (props.negative ? `2px solid ${defaultCss.color}` : 'none')};
  cursor: pointer;
  font-size: 1vw;
  margin-top: ${props => (props.negative ? '' : '2vw')};
  margin-bottom: ${props => (props.negative ? '-5vw' : '')};
`;

// Img Componet
export const Img = styled.div`
  img {
    margin-top: 1vw;
    margin-left: 26%;
    margin-right: 50%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: ${defaultCss.color};
    color: ${defaultCss.color};
  }
`;

export const Card = styled.div`
  display: block;
  top: 12%;
  width: ${props => `${props.width ? props.width : 2}vw`};
  background: ${props => (!props.negative ? defaultCss.opoColor : defaultCss.color)};
  height: ${props => `${props.height ? props.height : 2}vh`};
  border-radius: ${defaultCss.border};
  border: 3px solid
    ${props => (props.border ? (!props.negative ? defaultCss.color : defaultCss.opoColor) : 'transparent')};
  ${props => props.margin}
  ${props => props.padding}

  h2 {
    margin-left: 20px;
    margin-top: 10px;
    font-size: 3vw;
    color: ${props => (!props.negative ? defaultCss.color : defaultCss.opoColor)};
  }
  h2.username {
    text-align: center;
    padding-right: 50%;
    padding-left: 28%;
  }
  h2:hover {
    color: ${defaultCss.link};
  }
  div {
    color: ${props => (!props.negative ? defaultCss.color : defaultCss.opoColor)};
    font-size: 2vw;
    > h4 {
    }
    > svg {
      margin-top: 3vh;
      margin-left: 1%;
      margin-right: 1%;
      float: right;
    }
  }
  > button {
    left: 165px;
  }
`;

// ButtonPaginator Element
export const ButtonPag = styled.button`
  color: ${props => (props.negative ? defaultCss.color : defaultCss.opoColor)};
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 2px;
  padding: 0.75rem;
  border-radius: 2rem;
  float:right;
  width: 4vw;
  background-color: ${props => (props.negative ? defaultCss.opoColor : defaultCss.color)};
  border: ${props => (props.negative ? `2px solid ${defaultCss.color}` : `3px solid ${defaultCss.opoColor}`)};
  cursor: pointer;
  font-size: 50%;
  align-content: right;
  /* margin-top: ${props => (props.negative ? '2vw' : '2vw')}; */
  margin-bottom: ${props => (props.negative ? '5vh' : '5vh')};

  display: inline-block;

`;
