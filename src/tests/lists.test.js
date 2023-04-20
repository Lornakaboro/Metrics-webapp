import ListsReducer, { FetchCoinsSuccess } from '../redux/Lists/coinList';

describe('ListsReducer', () => {
  const coins = [
    {
      id: 'bitcoin', rank: '1', symbol: 'BTC', name: 'Bitcoin', priceUsd: '50000',
    },
    {
      id: 'ethereum', rank: '2', symbol: 'ETH', name: 'Ethereum', priceUsd: '2000',
    },
  ];

  it('should return the initial state', () => {
    const initialState = [];
    const action = {};
    expect(ListsReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle FETCH_COINS', () => {
    const initialState = [];
    const action = FetchCoinsSuccess(coins);
    const expectedState = coins.map((el) => ({
      id: el.id,
      rank: el.rank,
      symbol: el.symbol,
      name: el.name,
      price: parseFloat(el.priceUsd || 0).toFixed(8),
    }));
    expect(ListsReducer(initialState, action)).toEqual(expectedState);
  });
});
