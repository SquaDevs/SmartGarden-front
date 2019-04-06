import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ Title, negative }) => (
  <Card width={78} height={23.7} margin="margin: 2% 2% 2% 1.2%" negative={negative}>
    <h2>{Title}</h2>
    <div className="icons">
      <FontAwesomeIcon icon="thermometer-quarter" />
      <FontAwesomeIcon icon="tint" />
      <FontAwesomeIcon icon="sun" />
    </div>
  </Card>
);

export default Card;
