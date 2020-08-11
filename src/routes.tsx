import React from 'react'

import {BrowserRouter , Route} from  'react-router-dom'

import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
//import Questionary from './pages/Questionary'

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component= {Landing} />
            <Route path="/register-questionary" component= {TeacherForm} />
            <Route path="/results" component= {TeacherList} />
            {/* <Route path="/questionary" component= {Questionary} /> */}

        </BrowserRouter>
    )
}

export default Routes;