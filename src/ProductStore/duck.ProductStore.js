// ========================================
//            ACTIONS
// ========================================
export const productStoreTypes = {
  STORE_PRODUCT_URLS: 'STORE_PRODUCT_URLS',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
}
// ========================================
//            REDUCERS
// ========================================
const defaultProductObjs = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+001.jpg',
    title: 'Test 1',
    description: 'pencil',
    price: '$27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 2',
    description: 'pencil',
    price: '27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 3',
    description: 'pencil',
    price: '27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 4',
    description: 'pencil',
    price: '27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 5',
    description: 'pencil',
    price: '27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 6',
    description: 'pencil',
    price: '27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 7',
    description: 'pencil',
    price: '27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 8',
    description: 'pencil',
    price: '27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 9',
    description: 'pencil',
    price: '27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 10',
    description: 'pencil',
    price: '27.99',
  },
  {
    url: 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png',
    title: 'Test 11',
    description: 'pencil',
    price: '27.99',
  },
]

export const productObjs = (state = defaultProductObjs, action) => {
  switch (action.type) {
    case productStoreTypes.STORE_PRODUCT_URLS:
      return [...state, action.payload]
    default:
      return state
  }
}

export const cartObjs = (state = {}, action) => {
  let temp
  switch (action.type) {
    case productStoreTypes.ADD_TO_CART:
      temp = { ...state }
      temp[action.payload.title] = action.payload
      return temp
    case productStoreTypes.REMOVE_FROM_CART:
      temp = { ...state }
      delete temp[action.payload]
      return temp
    default:
      return state
  }
}
// ========================================
//            ACTION CREATORS
// ========================================
export const portfolioActions = {
  storeProductUrls: urlArr => ({ type: productStoreTypes.STORE_PRODUCT_URLS, payload: urlArr }),
  addToCart: productObj => ({ type: productStoreTypes.ADD_TO_CART, payload: productObj }),
  removeFromCart: productTitle => ({ type: productStoreTypes.REMOVE_FROM_CART, payload: productTitle }),
}
