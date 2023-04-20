import React from 'react';
import PropTypes from 'prop-types';
import '../styles/coin.css';
import { BsArrowRightCircle } from 'react-icons/bs';

const Coin = ({
  name, symbol, id, price, handleDetails,
}) => (
  <button
    type="button"
    onClick={() => handleDetails(id)}
    className="coin-card"
  >
    <BsArrowRightCircle className="white-icon" />

    <h3 className="coin-name">
      {name}
    </h3>
    <h4 className="coin-symbol">
      {symbol}
    </h4>
    <h5 className="coin-sign">
      $
      {price}
    </h5>
  </button>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handleDetails: PropTypes.func.isRequired,
};

export default Coin;
