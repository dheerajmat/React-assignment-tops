import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


// herw we will import user and admin com through lazy loading method/

const Admin = React.lazy(()=>import('./Admin'));

const User = React.lazy(()=>import('./User'));



function App() {
  return (
    <div className='App'>

    {/* link tah is made and com is ca;lled */}

      <Link to='/'>Admin</Link> {" "}
       
      <Link to='/user'>User</Link> {" "}

   

      <Routes>
        <Route path='/' element={<>
        
          <React.Suspense fallback={<>....Loading...</>}>
     <Admin/>

     </React.Suspense>

{/* react router dom is use to implement it
 */}
        
        </>}></Route>



          <Route path='/user' element={

            <React.Suspense fallback={<> <img src='https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif' height={100}></img></>}>

                <User/>

            </React.Suspense>



          }></Route>





      </Routes>

     

 
      
    </div>
  )
}

export default App