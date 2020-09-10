import React  from 'react'
import App from './App/App';
import {Provider} from 'react-redux'
import MainStore from '../Reduxxtool/Store/mainStore'


const Finalcomp =()=>{
   
    return(
        <Provider store={MainStore}>
        <App></App>
        </Provider>

    )
}

export default Finalcomp