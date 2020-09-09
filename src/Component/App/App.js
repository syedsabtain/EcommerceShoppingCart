import React from 'react';



import './App.css'
import Mug from '../Cups/Mugscomp'
import Maincomp from './Main'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Headercomp from './Header'
import Footercomp from './Footer'
import Mugs from '../Cups/Mugscomp'
import Cartitem from '../context/Cartitem'
import Checkout from '../context/Checkout';
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
                 <Route  path='cartitem' element={<Cartitem></Cartitem>}></Route>
                 <Route path='checkout'  element={<Checkout></Checkout>}></Route>
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
