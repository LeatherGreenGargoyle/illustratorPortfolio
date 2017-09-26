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
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+001-minshrunk.jpg',
    title: 'Why, Hello There',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+003-minshrunk.jpg',
    title: 'Buried',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+006-minshrunk.jpg',
    title: 'Sprout',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+008-minshrunk.jpg',
    title: 'Coming from the Clouds',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/illustration+001-minshrunk.jpg',
    title: 'Falling',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/illustration+002-minshrunk.jpg',
    title: 'Close-Up',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/illustration+003-minshrunk.jpg',
    title: 'Shy',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/illustration+005-minshrunk.jpg',
    title: 'Hide!',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/illustration+007-minshrunk.jpg',
    title: 'Growing',
    medium: 'ink',
    year: '2017',
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
      return action.payload
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
