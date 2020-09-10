import React from 'react';



import './App.css'

import Maincomp from './Main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Headercomp from './Header'
import Footercomp from './Footer'
import Mugs from '../Cups/Mugscomp'


import Cartcomp from '../Cart/Cartcomp'
import Platescomp from '../Plates/Platescomp';
import Accessories from '../Accessories/Accessories'
import Dinner from '../Dinner/Dinnercomp';
import Bowls from '../Bowls/Bowlscomp';
import Unique from '../Unique/Uniquecomp';
import Checkout from '../Cart/Checkout'
function App() {
   
    return (
<Router>
        <div>
           <Headercomp></Headercomp>
        {/* header comp */}
            <main role="main">

               {/* here it will come */}
               
               <Routes>
                 <Route  path='/' element={<Maincomp></Maincomp>}></Route>
                 <Route  path='Mugs' element={<Mugs></Mugs>}></Route>
                 
                 
                 <Route path='cart' element={<Cartcomp></Cartcomp>}></Route>
                 <Route path='Plates' element={<Platescomp></Platescomp>}></Route>
                 <Route path='Accessories' element={<Accessories></Accessories>}></Route>
                 <Route path='Dinner' element={<Dinner></Dinner>}></Route>
                 <Route path='Bowls' element={<Bowls></Bowls>}></Route>
                 <Route path='UniquePiecies' element={<Unique></Unique>}></Route>
                 <Route path='Checkout' element={<Checkout></Checkout>}></Route>

                 
               </Routes>
         
      
                {/* <!-- FOOTER --> */}
                {/* footer */}
            <Footercomp></Footercomp>
            </main>
        </div>
        </Router>
    )
}

export default App;
