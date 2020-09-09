import React,{useReducer,useContext} from 'react'
import App from './App/App';

import {gdata} from '../Component/context/Databasee'
import Datareducer from '../Component/context/Datareducer'

const Finalcomp =()=>{
    const initialdata = [
        
    ]

    const [state,dispatch] = useReducer(Datareducer,initialdata);
    
    const handleadd=(obj)=>
    {
            dispatch({
                type:'ADD_ITEM',
                payload:{
                    name:obj.name,
                    price:obj.price,
                    id:obj.id
                }
            })   
    }

    const handledelete=(obj)=>
    {
        dispatch({
            type:'DELETE_ITEM',
            payload:obj
        })
    }
    return(
        <gdata.Provider value={{mdata:state,additem:handleadd,deleteitem:handledelete}}>
        <App></App>
        </gdata.Provider>

    )
}

export default Finalcomp