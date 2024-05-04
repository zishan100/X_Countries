import React , { useState , useEffect } from 'react';
import axios from 'axios';
import './index.css'
import Card from './Card/Card';


function App () {
    
    const [ countries ,setCountries ] = useState([]); 
    
    /*   
      useEffect will run only on initial render of component if you pass empty dependencies array
    */

    useEffect(()=>{
      
      fetchCountriesList();

    },[])

    const fetchCountriesList = async()=>{
      
      try{
          
        const getData = await axios(`https://restcountries.com/v3.1/all`);
          
        console.log(getData.data);
        if( getData?.data && getData.data.length > 0  ){
          setCountries(getData.data);   
        }

      }catch(err){
        if( err && err.response ){
          console.log(err.response.data.message); 
        }else{
          console.log("No response from server")
        }

      }

    }

    return (
      <div className='cardContainer' >
          {
            countries.map((items,idx)=>{
              return (
                <Card 
                  key={idx} 
                  name={items.name.common} 
                  url={items.flags.png} 
                  alt={items.flags.alt}  
                />   
              )    
            })    
          }
      </div>
        
    );
  
}

export default App;
