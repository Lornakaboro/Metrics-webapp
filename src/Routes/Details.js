import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FetchDetailsFunc } from '../redux/Details/coinDetails';
import Header from '../components/Header';
import Chart from '../components/coinChart';
import '../styles/Details.css';

const Details = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.DetailsReducer);
  useEffect(() => {
    dispatch(FetchDetailsFunc(coinId));
  }, [coinId, dispatch]);
  return (
    <div className="coin-data">
      <Header path="details" />
      <h4 className="coins-abt">Coin Description</h4>
      {details && (
      <Chart
        title1={details.name}
        title2={details.symbol}
        count={`${parseFloat(details.changePercent24Hr || 0).toFixed(8)} %`}
      />
      )}
      {details && (
      <ul className="details-abt">
        <li className="details-color-1">
          <span className="detail-name">Name :</span>
          <span className="dtl">{details.name}</span>
          <BsArrowRightCircle className="white-icon" />
        </li>
        <li className="details-color-2">
          <span className="detail-name">Symbol :</span>
          <span>{details.symbol}</span>
          <BsArrowRightCircle className="white-icon" />
        </li>
        <li className="details-color-1">
          <span className="detail-name">Rank :</span>
          <span>{details.rank}</span>
          <BsArrowRightCircle className="white-icon" />
        </li>
        <li className="details-color-2 details-svg">
          <span className="detail-name">Supply :</span>
          <span>{details.supply}</span>
          <BsArrowRightCircle className="white-icon" />
        </li>
        <li className="details-color-1 details-svg">
          <span className="detail-name">Market Capital(USD) :</span>
          <span>{details.marketCapUsd}</span>
          <BsArrowRightCircle className="white-icon" />
        </li>
        <li className="details-color-2 details-svg">
          <span className="detail-name">Volume(USD) 24Hrs :</span>
          <span>{details.volumeUsd24Hr}</span>
          <BsArrowRightCircle className="white-icon" />
        </li>
        <li className="details-color-1 details-svg">
          <span className="detail-name">Price(USD) :</span>
          <span>{details.priceUsd}</span>
          <BsArrowRightCircle className="white-icon" />
        </li>
        <li className="details-color-2 details-svg">
          <span className="detail-name">Change Percent(24Hr) :</span>
          <span>{details.changePercent24Hr}</span>
          <BsArrowRightCircle className="white-icon" />
        </li>
        <li className="details-color-1 details-svg">
          <span className="detail-name">VWAP(24Hr) :</span>
          <span>{details.vwap24Hr}</span>
          <BsArrowRightCircle className="white-icon" />
        </li>
      </ul>
      )}
    </div>
  );
};

export default Details;
