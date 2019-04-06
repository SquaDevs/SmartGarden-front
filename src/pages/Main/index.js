import React, { Component } from 'react';

import { Container, Form } from './style';
import { Button } from '../../styles/global';

class Main extends Component {
  state = {
    email: '',
    password: '',
  };

  onChangeHandler = (e, value) => {
    this.setState({ [value]: e.target.value });
  };

  onAuthHandler = () => {};

  onSignUpHandler = () => {};

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <div>
          <h2>Smart Garden</h2>
        </div>
        <Form>
          <label className="login__label">Email</label>
          <input
            id="login-input-user"
            className="login__input"
            type="text"
            value={email}
            onChange={e => this.onChangeHandler(e, 'email')}
          />
          <label htmlFor="login-input-password" className="login__label">
            Password
          </label>
          <input
            id="login-input-password"
            className="login__input"
            type="password"
            value={password}
            onChange={e => this.onChangeHandler(e, 'password')}
          />

          {/* <button className="login__submit__negative" type="button">
            Sign in
          </button> */}
          <Button onClick={this.onAuthHandler}>Sign in</Button>
          <Button negative onChange={this.onSignUpHandler}>
            Sign up
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Main;
