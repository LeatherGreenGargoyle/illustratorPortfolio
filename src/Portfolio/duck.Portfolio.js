// ========================================
//            ACTIONS
// ========================================
export const portfolioTypes = {
  STORE_PORTFOLIO_URLS: 'STORE_PORTFOLIO_URLS',
}
// ========================================
//            REDUCERS
// ========================================
const defaultProps = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+001.jpg',
    title: 'Test 1',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 2',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 3',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 4',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 5',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 6',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 7',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 8',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 9',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 10',
    medium: 'pencil',
    year: '2007',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 11',
    medium: 'pencil',
    year: '2007',
  },
]

export default (state = defaultProps, action) => {
  switch (action.type) {
    case portfolioTypes.STORE_PORTFOLIO_URLS:
      return { ...state, portfolioUrls: action.payload }
    default:
      return state
  }
}
// ========================================
//            ACTION CREATORS
// ========================================
export const portfolioActions = {
  storePortfolioUrls: urlArr => ({ type: portfolioTypes.STORE_PORTFOLIO_URLS, payload: urlArr }),
}
