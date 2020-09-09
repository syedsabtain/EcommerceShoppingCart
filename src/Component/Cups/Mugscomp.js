import React,{useContext,useState} from 'react'
import mugstore from './mugStore'
import {gdata} from '../context/Databasee'
import {Link} from 'react-router-dom'

const Mugs=()=>{
  const{additem} =useContext(gdata)
  let[count,setCount] = useState(0)
  let[txt,setTxt]= useState('hidden')
  let[lab,setLab]= useState({})

  let mystyle={visibility:txt};

  const updat=(obj)=>
  {   
      setLab({
          element:<span className='ml-3 ' >added to cart</span>,
          id:obj
      })
  
  }
  const relement =(id)=>
  {
      if(lab.id==id){
      return(<span><Link to='../cartitem' className='btn btn-outline-dark ml-3'>View in cart</Link><br/><span className='mt-3 ' >Added to cart</span></span>)
      }
      
  }

    return(
        <div className='container mt-5 mt-lg-5'>
            <div className='row mt-5 '>
                
            
            {Object.entries(mugstore).map(([slug,{name,price,img}],key)=>{
                return(

                    <div className="col-md-4" key={key}>
           
                    <div className="card mb-4 shadow-sm cardbody">
                   
                        <img src={img} alt="" className='card-img-top cardimage'/>
               
                    <div className="card-body cardbody">
                      <p className="card-text cardtext btn btn-info"> {name} </p>
                <p>Price = {price}$</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-outline-danger" onClick={()=>{setCount(++count); additem({name:name,price:price,id:count}); updat(key);}} >Buy</button>
                          <br/>
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

export default Mugs