import React from 'react';

const Details = () => (

  <div className="coin-data">
    <h4 className="coins-abt">Coin Description</h4>

    <ul className="details-abt">
      <li className="details-color-1">
        <span className="detail-name">Name :</span>
        <span className="dtl">Bitcoin</span>
      </li>
      <li className="details-color-2">
        <span className="detail-name">Symbol :</span>
        <span>BTC</span>
      </li>
      <li className="details-color-1">
        <span className="detail-name">Rank :</span>
        <span>12</span>
      </li>
      <li className="details-color-1 details-svg">
        <span className="detail-name">Price(USD) :</span>
        <span>4000USD</span>
      </li>
      <li className="details-color-2 details-svg">
        <span className="detail-name">Change Percent(24Hr) :</span>
        <span>0/001%</span>
      </li>
    </ul>
  </div>
);

export default Details;
