import { Event } from '../Events/Events.js'

const ProductTypes = {
  Original: 'Original',
  Postcard: 'Postcard',
  Pin: 'Pin',
  Print: 'Print',
}

export const comicLinks = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+001-squashed+copy.jpg',
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
    year: '2016',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/illustration+002-minshrunk.jpg',
    title: 'Close-Up',
    medium: 'ink',
    year: '2016',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/illustration+003-minshrunk.jpg',
    title: 'Shy',
    medium: 'ink',
    year: '2016',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/illustration+005-minshrunk.jpg',
    title: 'Hide!',
    medium: 'ink',
    year: '2016',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/illustration+007-minshrunk.jpg',
    title: 'Growing',
    medium: 'ink',
    year: '2016',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+002-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+003-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+004-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+005-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+006-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+007-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+008-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+009-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+010-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+011-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+012-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+013-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/comic+014-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Comic+015-squashed.jpg',
    title: 'Pazowza',
    medium: 'plink',
    year: '2016'
  },
]

export const illustrationLinks = [
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Cool+Guy.jpg',
    title: 'Cool Guy',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Garden.jpg',
    title: 'Garden',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Hide.jpg',
    title: 'Hide II',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Kitty.jpg',
    title: 'Kitty',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Surveying.jpg',
    title: 'Surveying',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_The+Eyes.jpg',
    title: 'The Eyes',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Kitty+II_ink_80.jpg',
    title: 'Kitty II',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_ink_Space+Bun.jpg',
    title: 'Space Bun',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_ink_Sitting.jpg',
    title: 'Sitting',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Ponder.jpg',
    title: 'Ponder',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_ink_Ponder+II.jpg',
    title: 'Ponder II',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_ink_Moon+II.jpg',
    title: 'Moon II',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Hide.jpg',
    title: 'Hide',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Gloomy+Mush.jpg',
    title: 'Gloomy Mush',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x8_Conversations.jpg',
    title: 'Conversations',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Quiet+Time_ink_200.jpg',
    title: 'Quiet Time',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Moon.jpg',
    title: 'Lush',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Cloudgazing.jpg',
    title: 'Cloudgazing',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Hello.jpg',
    title: 'Hello',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Peeping.jpg',
    title: 'Peeping',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Stargazing.jpg',
    title: 'Stargazing',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Sun.jpg',
    title: 'Sun',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Quiet+Time_ink_200.jpg',
    title: 'Quiet Time',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Field_ink_120.jpg',
    title: 'Field',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Buddy_ink_100.jpg',
    title: 'Buddy',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Branches_ink_200.jpg',
    title: 'Branches',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_Lost.jpg',
    title: 'Lost',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_ink_Stop+Staring.jpg',
    title: 'Stop Staring',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_ink_Poise.jpg',
    title: 'Poise',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_ink_Forest.jpg',
    title: 'Forest',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_ink_Cave.jpg',
    title: 'Cave',
    medium: 'ink',
    year: '2017',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Illustrations/8x10_ink_Boating.jpg',
    title: 'Boating',
    medium: 'ink',
    year: '2017',
  },
]

export const PrintProducts = [
  {
    url: 'http://d1nr5wevwcuzuv.cloudfront.net/product_photos/63999912/file_00c22a4e6a_original.jpg',
    title: 'Big Moon',
    type: ProductTypes.Print,
    price: '$10.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1278831-prints/products/24113211-art-print-big-moon'
  },
  {
    url: 'http://dzasv7x7a867v.cloudfront.net/product_photos/63735996/file_8246e7a192_original.jpg',
    title: 'Sun II',
    type: ProductTypes.Print,
    price: '$12.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1278831-prints/products/24030339-art-print-sun-ii',
  },
  {
    url: 'http://d310a9hpolx59w.cloudfront.net/product_photos/63735954/file_b0df511fd9_original.jpg',
    title: 'Sitting',
    type: ProductTypes.Print,
    price: '$12.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1278831-prints/products/24030333-art-print-sitting'
  },
  {
    url: 'http://d2a2wjuuf1c30f.cloudfront.net/product_photos/63735858/file_da6d205191_original.jpg',
    title: 'Moon II',
    type: ProductTypes.Print,
    price: '$12.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1278831-prints/products/24030312-art-print-moon-ii'
  },
  {
    url: 'http://d310a9hpolx59w.cloudfront.net/product_photos/38897961/illustration_20020_original.jpg',
    title: 'Butts',
    type: ProductTypes.Print,
    price: '$10.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1278831-prints/products/15956124-art-print-butts',
  }
]

export const PinProducts = [
  {
    url: 'http://dlp2gfjvaz867.cloudfront.net/product_photos/63735735/file_62b96b7144_original.png',
    title: 'Reading',
    type: ProductTypes.Pin,
    price: '$4.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1370120-pins/products/24030261-button-pin-reading'
  },
  {
    url: 'http://d2a2wjuuf1c30f.cloudfront.net/product_photos/61220910/file_a40e3ffff8_original.png',
    title: 'Garden',
    type: ProductTypes.Pin,
    price: '$4.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1370120-pins/products/23236533-button-pin-garden'
  },
  {
    url: 'http://d111vui60acwyt.cloudfront.net/product_photos/58691145/20171128_141404_original.jpg',
    title: 'Moon',
    type: ProductTypes.Pin,
    price: '$10.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1370120-pins/products/22448661-enamel-pin-moon'
  }
]

export const OriginalsProducts = [
  {
    url: 'http://d111vui60acwyt.cloudfront.net/product_photos/59919828/file_1f9e1db000_original.jpg',
    title: 'Krampus Walking Through the Woods',
    type: ProductTypes.Original,
    price: '$40.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834749-original-inkmas-2017-krampus-walking-through-the-woods'
  },
  {
    url: 'http://d1nr5wevwcuzuv.cloudfront.net/product_photos/59919777/file_314dbf96cb_original.jpg',
    title: 'Snoozing Moon II',
    type: ProductTypes.Original,
    price: '$40.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834740-original-inkmas-2017-snoozing-moon-ii'
  },
  {
    url: 'http://dzasv7x7a867v.cloudfront.net/product_photos/59919663/file_b86b2ee780_original.jpg',
    title: 'Someone Watching Over You',
    type: ProductTypes.Original,
    price: '$40.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834680-original-inkmas-2017-someone-watching-over-you'
  },
  {
    url: 'http://dlp2gfjvaz867.cloudfront.net/product_photos/59919627/file_5f28f89ba8_original.jpg',
    title: 'Bird',
    type: ProductTypes.Original,
    price: '$30.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834662-original-inkmas-2017-bird'
  },
  {
    url: 'http://dzasv7x7a867v.cloudfront.net/product_photos/59919591/file_d0a4be84a0_original.jpg',
    title: 'Skating Around',
    type: ProductTypes.Original,
    price: '$20.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834635-original-inkmas-2017-skating-around'
  },
  {
    url: 'http://dlp2gfjvaz867.cloudfront.net/product_photos/59919552/file_efc9e316a8_original.jpg',
    title: 'Pine',
    type: ProductTypes.Original,
    price: '$30.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834629-original-inkmas-2017-pine'
  },
  {
    url: 'http://dzasv7x7a867v.cloudfront.net/product_photos/59919465/file_2ecd6f5932_original.jpg',
    title: 'Trek Through a Blizzard',
    type: ProductTypes.Original,
    price: '$30.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834611-original-inkmas-2017-trek-through-a-blizzard'
  },
  {
    url: 'http://dzasv7x7a867v.cloudfront.net/product_photos/59919393/file_38e05e8470_original.jpg',
    title: 'Snoozing Moon',
    type: ProductTypes.Original,
    price: '$40.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834587-original-inkmas-2017-snoozing-moon'
  },
  {
    url: 'http://d111vui60acwyt.cloudfront.net/product_photos/59919372/file_6c1de9771a_original.jpg',
    title: 'Tree Trunks Stuck in the Snow',
    type: ProductTypes.Original,
    price: '$30.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834569-original-inkmas-2017-tree-trunks-stuck-in-the-snow'
  },
  {
    url: 'http://d111vui60acwyt.cloudfront.net/product_photos/59919333/file_5a66ba326d_original.jpg',
    title: 'Holly',
    type: ProductTypes.Original,
    price: '$20.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834557-original-inkmas-2017-holly'
  },
  {
    url: 'http://d1nr5wevwcuzuv.cloudfront.net/product_photos/59919312/file_e41ab9c995_original.jpg',
    title: 'Ornaments',
    type: ProductTypes.Original,
    price: '$30.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834548-original-inkmas-2017-ornaments'
  },
  {
    url: 'http://d111vui60acwyt.cloudfront.net/product_photos/59919279/file_c0f5c7d583_original.jpg',
    title: 'Taking Cover in a Snowstorm',
    type: ProductTypes.Original,
    price: '$40.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834530-original-inkmas-2017-taking-cover-in-a-snowstorm'
  },
  {
    url: 'http://dpegb9ebondhq.cloudfront.net/product_photos/59919216/file_7fe707421c_original.jpg',
    title: 'Stars',
    type: ProductTypes.Original,
    price: '$40.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834524-original-inkmas-2017-stars'
  },
  {
    url: 'http://d310a9hpolx59w.cloudfront.net/product_photos/59919159/file_5ca2b1c74b_original.jpg',
    title: 'Snow Falling on Lone Tree',
    type: ProductTypes.Original,
    price: '$40.00',
    link: 'http://jennifernguyen.storenvy.com/collections/1413113-originals/products/22834500-original-inkmas-2017-snow-falling-on-lone-tree'
  }
]

export const aboutText = 'Jennifer Nguyen is a self-taught illustrator currently working out of Los Angeles, California, where she lives with a bunny and a boyfriend. She studied at the University of California San Diego, and graduated with a degree in Art History. She describes her style as \'dry\', and is influenced by the likes of the Edward Gorey, Edward Lear, and Shel Silverstein. She prefers traditional media and especially favors black and white ink drawings.'

export const routes = {
  home: '/',
  illustrations: '/portfolio',
  comics: '/portfolio',
  about: '/about',
  store: '/store',
  events: '/events'
}

export const PageNames = {
  home: 'Home',
  illustrations: 'Illustrations',
  comics: 'Comics',
  about: 'About',
  store: 'Store',
  events: 'Events',
}

export const ImageSets = {
  illustrations: 'Illustrations',
  comics: 'Comics',
}

export const Values = {
  IMAGES_PER_PAGE: 9
}

export const ProductCategories = {
  originals: 'originals',
  pins: 'pins',
  prints: 'prints'
}

export const EventObjs = [
  Event(
    "Goodnight Moon", 
    ['https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Events/Goodnight+Moon+front.jpg',
    'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Events/Goodnight+Moon+back-min.jpg'],
    "FOLD Gallery",
    "September 20th - October 30th, 2017"
  ),
  Event(
    "Hand and Mind",
    ['https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Events/Hand+and+Mind+front.jpg',
    'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Events/Hand+and+Mind+back-min.jpg'],
    "FOLD Gallery",
    "April 12 - June 4th, 2018"
  ),
  Event(
    "Line Attack 7",
    ['https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Events/Line+Attack+7.jpg'],
    "Hive Gallery",
    "May 5th - June 3rd, 2018"
  ),
  Event(
    "Zombie Coven",
    ['https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Events/jun18_ft_2_web.jpg'],
    "Hive Gallery",
    "June 9th - July 1st, 2018"
  ),
  Event(
    "What We Do In The Shadows",
    ['https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Events/What+We+Do+in+the+Shadows+front.jpg',
    'https://s3-us-west-1.amazonaws.com/mogpoeportfolio/Events/What+We+Do+in+the+Shadows+back.jpg'],
    "FOLD Gallery",
    "September 26th - November 12th, 2018"
  )
]
