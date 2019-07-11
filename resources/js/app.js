/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

import React from 'react'
import { render } from 'react-dom'

import Search from './components/Search'

render(<Search ></Search>,
  document.getElementById('app'),
)
