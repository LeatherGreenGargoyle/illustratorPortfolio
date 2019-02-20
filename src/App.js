import './App.css'
import './index.css'
import React from 'react'

import Main from './Main/Main'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faAngleLeft, faAngleRight, faBars)

const App = () => <Main/>

export default App
