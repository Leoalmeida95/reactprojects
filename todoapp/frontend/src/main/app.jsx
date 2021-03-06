import 'modules/bootswatch/dist/pulse/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'

import Menu from '../template/menu'
import Routes from './routes'

export default props =>
    <div>
        <Menu></Menu>
        <div className='container'>
            <Routes></Routes>
        </div>
    </div>
