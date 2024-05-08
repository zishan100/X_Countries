import React , { useState , useEffect } from 'react';
import axios from 'axios';
import './index.css'
import Card from './Card/Card';


function App () {
    
    const [ countries ,setCountries ] = useState([]); 
    const [ searchCountries , setSearchCountries ] = useState('');
    const [ updateCountries  , setUpdateCountries ] = useState([]);

    /*   
      useEffect will run only on initial render of component if you pass empty dependencies array
    */

    useEffect(()=>{
      
      fetchCountriesList();

    },[])

    const fetchCountriesList = async()=>{
      
      try{
          
        const getData = await axios(`https://restcountries.com/v3.1/all`);
          
        // console.log(getData.data);
        if( getData?.data && getData.data.length > 0  ){
          setCountries(getData.data);
          setUpdateCountries(getData.data);   
        }

      }catch(err){
        if( err && err.response ){
          console.log(err.response.data.message); 
        }else{
          console.log("No response from server")
        }

      }

    }
    
    useEffect(()=>{
      let intervalId;

      if( searchCountries){
        intervalId = setTimeout(()=>{
          // console.log("Inside setTimeOut function...")
          const getData = filteringCountries(searchCountries);
          setUpdateCountries(getData);    
          
          
        },1000)         
      }

      if( !searchCountries ){
        setUpdateCountries(countries);
      }
 
      return ()=>{
        // console.log(searchCountries)
        // console.log("This function run before useEffect CallBack");
        clearTimeout(intervalId);

      }
      
    },[searchCountries])

    const filteringCountries = (searchVal)=>{
      return countries.filter((item)=>{
        return item.name.common.toLowerCase().search(searchVal.toLowerCase()) !== -1 
      })     
    }


    return (

      <div className='main' >
        <input 
          className='searchInput'
          type='text' 
          placeholder='Search for countries'
          name="searchCountries"
          onChange={(e)=>setSearchCountries(e.target.value)} 
        />
        <div className='cardContainer' >
          
          {
            updateCountries.map((items,idx)=>{
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
      </div>

        
    );
  
}

export default App;
