import React,{useState} from 'react'
import platestore from './plateStore'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../Reduxxtool/Slicer/MainSlicer'
import {Link} from 'react-router-dom'

const Platescomp=()=>{
  
  let[count,setCount] = useState(0)
  
  let[lab,setLab]= useState({})

  
  const dispatch = useDispatch()
  const handleadd=(obj)=>{

    dispatch(addProduct({
      name:obj.name,
      image:obj.img,
      price:obj.price,
      id:obj.id,
      count:1
    }))
  }
  const updat=(obj)=>
  {   
      setLab({
          element:<span className='ml-3 ' >added to cart</span>,
          id:obj
      })
  
  }
  const relement =(id)=>
  {
      if(lab.id===id){
      return(<span><Link to='../cart' className='btn btn-outline-dark ml-3'>View in cart</Link><br/><span className='mt-3 ml-3' >  Added to cart</span></span>)
      }
      
  }

    return(
        <div className='container mt-5 mt-lg-5   mugs p-5'>
            <div className='row mt-5 '>
                
            
            {Object.entries(platestore).map(([slug,{name,price,img,id}],key)=>{
                return(

                    <div className="col-md-4" key={key}>
           
                    <div className="card mb-4 shadow-sm cardbody">
                   
                        <img src={img} alt="" className='card-img-top cardimage'/>
               
                    <div className="card-body cardbody">
                      <p className="card-text cardtextp d-flex justify-content-between"> {name} <span className=''>Price = {price}$</span> </p>
                
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button  className="btn btn-outline-danger" onClick={()=>{setCount(++count); handleadd({name,price,id,img}); updat(key);}} >Buy</button>
                         
                          {relement(key)}
                  {/* <button type="button" className="btn btn-sm btn-outline-secondary">key = value{key}</button> */}
                        </div>
                       
                        
                      </div>
                    </div>
                    
                  </div>
                  </div>

                    
                )
            })}
            </div>
            
        </div>
    )
}

export default Platescomp