import './App.css'
import './index.css'
import React from 'react'

import { Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
import ConnectedMain from './Main/container.Main'

library.add(fab, faAngleLeft, faAngleRight, faBars)

const App = () => <Route component={ConnectedMain} /> // necessary because of 'update blocking'

export default App
