import { useState } from 'react'
import './App.css'
import Body from './body'
import Card from './Card'
import Sineuo from './Sineuo'
import Price from './price'
import { ProductOverviewTwo } from './Nike'
import { ProductThree } from './product'
import { ProductOne } from './Redshoe'
import Navbar from './Navbar'





const productsData = [
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.pexels.com/photos/18946900/pexels-photo-18946900/free-photo-of-concepts-x-air-max-1-mellow-shoe-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.pexels.com/photos/18946900/pexels-photo-18946900/free-photo-of-concepts-x-air-max-1-mellow-shoe-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },{
    title: 'Nike Airmax v2',
    image:
      'https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  {
    title: 'Nike Airmax v2',
    image:
      'https://images.pexels.com/photos/18946900/pexels-photo-18946900/free-photo-of-concepts-x-air-max-1-mellow-shoe-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
    tags: ['#Sneakers', '#Nike', '#Airmax'],
    colors: ['red-400', 'purple-400', 'orange-400'],
    sizes: ['8 UK', '9 UK', '10 UK'],
  },
  
];


function App() {
 

  return (
    <>

    

    <Navbar/>
    {/* <Example/> */}
    {/* <h1 class="p-5 font-custom text-2xl lg:text-4xl text-white">Dheeraj x NIKE</h1> */}


    <br/>
     <Body/> 
     <br/>
     <div className='m-auto justify-start ml-5 text-3xl pt-2 pd-2 '>PRODUCT</div>
     <ProductThree products={productsData} />
     <ProductOverviewTwo/>
     <ProductOne/>
     <div className='flex flex-wrap justify-center'  >
     <Card username="Dheeraj" btntext="call me" src="../public/jpg dheeraj.jpg"/>
     <Card username="Glitch" btntext="text me" src="https://images.pexels.com/photos/19329313/pexels-photo-19329313/free-photo-of-a-woman-in-a-black-coat-and-white-shirt-posing-in-front-of-a-glass-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
     <Card username="MURU" src="https://images.pexels.com/photos/18412988/pexels-photo-18412988/free-photo-of-blonde-woman-on-gray-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
     {/* <Card username="Lufy" btntext='call me' src="https://images.pexels.com/photos/19305988/pexels-photo-19305988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> */}
     </div>

     

     <br/>
     <br/>
     <br/>
     <br/>

     
     <Sineuo/>

     
     
     
     


   
     </>
  )
}

export default App
