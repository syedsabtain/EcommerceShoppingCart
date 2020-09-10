import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import  {deleteProduct,updateProduct,removeProduct} from '../../Reduxxtool/Slicer/MainSlicer'
import './cartstyle.css'
const Cartcomp =()=>{

    const value = useSelector((state)=>state)
    const dispatch = useDispatch();
    
    
    

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
        
        
        const data = {obj}
        dispatch(updateProduct(data))
    }
    const handleMinus=(obj)=>{
        
       
       const data = {obj}
       dispatch(removeProduct(data))
       
    }
    const  numberWithCommas=(x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
                            <td ><div className='row text-center'>
                            <div className='col-md-12'>
                            <button className='btn btn-sm btn-outline-info' onClick={()=>handleMinus(val.id)}>-</button> {val.count} <button className='btn btn-sm btn-outline-info' onClick={()=>handlePlus(val.id)}>+</button>
                            </div>
                            </div></td>
                            <td class="text-right">{numberWithCommas(val.price*val.count)} $</td>
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
                            <td class="text-right">{numberWithCommas(Subtotal())} $</td>
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
                            <td class="text-right"><strong>{numberWithCommas(Subtotal()+50)} $</strong></td>
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