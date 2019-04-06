import styled from 'styled-components';
import { defaultCss } from '../../styles/global';

export const Container = styled.div`
  border-radius: ${defaultCss.border};
  height: 500px;
  width: 30vw;
  background: ${defaultCss.opoColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30vw;
  margin-right: -30vw;
  margin-top: 5%;
  text-align: center;

  div {
    display: block;
    position: absolute;
    top: 12%;
    width: 24vw;

    h2 {
      font-size: 3vw;
      color: ${defaultCss.color};
    }
  }
`;

export const Form = styled.form`
  display: block;


  .login__input {
    color: #000;
    font-size: 1.15rem;
    width: 25vw;
    padding: 0.5rem 1rem;
    border: 2px solid transparent;
    outline: none;
    border-radius: 1.5rem;
    /* background-color: ${defaultCss.opoColor}; */
    letter-spacing: 1px;
    border: 2px solid ${defaultCss.color};
  }
  .login__label {
    display: block;
    padding-right: 75%;
    margin-top: 2%;
    margin-bottom: 2%;
    width:25vw;
    color: ${defaultCss.color};
    font-size:2vw;
  }
  .login__submit {
    color: ${defaultCss.opoColor};
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 1rem;
    padding: 0.75rem;
    border-radius: 2rem;
    display: block;
    width: 25vw;
    background-color: ${defaultCss.color};
    border: none;
    cursor: pointer;
    font-size:1vw;
     margin-top:2vw;
  }

  .login__submit__negative {
     color: ${defaultCss.color};
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 1rem;
    padding: 0.75rem;
    border-radius: 2rem;
    display: block;
    width: 25vw;
    background-color: ${defaultCss.opoColor};
    border: 2px solid   ${defaultCss.color};
    cursor: pointer;
    font-size:1vw;
    margin-bottom:-5vw;

  }

`;
