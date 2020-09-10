import {configureStore} from '@reduxjs/toolkit'
import {ProductReducer} from '../Slicer/MainSlicer'

const Store = configureStore({
    reducer:ProductReducer
})


export default Store