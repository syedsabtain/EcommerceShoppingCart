import {createSlice} from '@reduxjs/toolkit'



const initialdata=[]

const Mainslice = createSlice({
    
    name:'MainStore',
    initialState:initialdata,
    reducers:{
        addProduct:(state,action)=>{
                
                let count = state.find((val)=> val.id === action.payload.id);
               
                   
                if(count)
                { 
                  
                    count.count = 1
                    
               
                }
            
            else{
                state.push(action.payload)
            }
           
                    

                
        },
        deleteProduct:(state,action)=>{

            return(state.filter((value)=> value.id!==action.payload))
        },
        updateProduct:(state,action)=>{
            let value = state.find((val)=> val.id === action.payload.obj);
                
                console.log(action.payload)
                   
                if(value)
                { 
                  
                    value.count++
                    
               
                }

            
        },
        removeProduct:(state,action)=>{
            let value = state.find((val)=> val.id === action.payload.obj);
                
                console.log(action.payload)
                   
                if(value)
                { 
                  
                    if(value.count>0)
                    {value.count--}
                    
               
                }
    
            
        }
        
    }
    


})

export const ProductReducer = Mainslice.reducer;
export const {addProduct,deleteProduct,updateProduct,removeProduct} = Mainslice.actions