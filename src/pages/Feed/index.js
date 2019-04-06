import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from './style';
import CardDetail from '../../components/Card';
import {
  Col, Card, Img, ButtonPag,
} from '../../styles/global';

const Feed = () => (
  <Container>
    <Col sm num={12}>
      <br />
      <br />
    </Col>
    <Col sm num={2}>
      <Card width={14} height={88}>
        <Img>
          <img src="http://localhost:3000/file/ced339d542ad64a0e6924638303c716c.jpeg" alt="" />
        </Img>
        <h2 className="username">Ian</h2>
      </Card>
    </Col>
    <Col sm num={10}>
      <Card width={80} height={88}>
        <Col xs num={12}>
          <Col xs num={7}>
            {/* <CardDetail Title="Feijao" />
            <CardDetail Title="Feijao" /> */}
          </Col>

          <Col xs num={5}>
            <ButtonPag>
              <FontAwesomeIcon icon="chevron-circle-left" />
            </ButtonPag>
            <ButtonPag negative>10</ButtonPag>
            <ButtonPag>11</ButtonPag>
            <ButtonPag negative>12</ButtonPag>
            <ButtonPag negative>13</ButtonPag>
            <ButtonPag>
              <FontAwesomeIcon icon="chevron-circle-right" />
            </ButtonPag>
          </Col>
        </Col>
        <br />
      </Card>
    </Col>
  </Container>
);

export default Feed;
