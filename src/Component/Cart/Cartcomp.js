import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import  {deleteProduct,updateProduct} from '../../Reduxxtool/Slicer/MainSlicer'
import './cartstyle.css'
const Cartcomp =()=>{

    const value = useSelector((state)=>state)
    const dispatch = useDispatch();
    
    
    let count = 1;

    const handledelete=(obj)=>{

        dispatch(deleteProduct(obj))
    }
    const Subtotal=()=>{
        let subtotal=0;
        for (let i = 0; i < value.length; i++) {
         subtotal += value[i].price * value[i].count;
            
        }
        return (subtotal)
    }

    const handlePlus=(obj)=>{
     
        for (let i = 0; i < value.length; i++) {
            count =value[i].count + 1
            
        }
        
        const data = {obj,count}
        dispatch(updateProduct(data))
    }
    const handleMinus=(obj)=>{
       
        
        for (let i = 0; i < value.length; i++) {
            if(value[i].count>0)
            {count=value[i].count - 1}
            else if(value[i].count===0)
            {}
           
       }
       
       const data = {obj,count}
       dispatch(updateProduct(data))
       
    }
    
    return(

        <div class="container mt-5 p-5">
    <div class="row mt-5">
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col" class="text-center">Quantity</th>
                            <th scope="col" class="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {value?.map((val,key)=>{
                            return(
                                <tr key={key}>
                            <td><img src={val.image} className='cartimage' alt='cardimage'/> </td>
                            <td>{val.name}</td>
                            <td>In stock</td>
                            <td ><button  onClick={()=>handleMinus(val.id)}>-</button>{val.count}<button onClick={()=>handlePlus(val.id)}>+</button></td>
                            <td class="text-right">{val.price*val.count} $</td>
                            <td class="text-right"><button class="btn btn-sm btn-danger" onClick={()=>handledelete(val.id)}><i class="fa fa-trash"></i> X</button> </td>
                        </tr>
                            )
                        })}
                       
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Sub-Total</td>
                            <td class="text-right">{Subtotal()} $</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Shipping</td>
                            <td class="text-right">50 $</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td class="text-right"><strong>{Subtotal()+50} $</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col mb-2">
            <div class="row">
                <div class="col-sm-12  col-md-6">
                    <Link class="btn btn-block btn-light" to='../Plates'>Continue Shopping</Link>
                </div>
                <div class="col-sm-12 col-md-6 text-right">
                    <Link class="btn btn-lg btn-block btn-success text-uppercase" to='../Checkout'>Checkout</Link>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Cartcomp