import React,{useState} from'react';
import { useEffect } from 'react';
import {apiUrl, filterData} from "./data";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';

import './App.css';

const App = () => {

  const [courses, setCourses]  = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
      try {
        const result = await fetch(apiUrl);
        const output = await result.json();
        // save data into a variable
        setCourses(output.data)
        // console.log(output);
      }
       catch (error) {
        alert.error('Something went Wrong')
      }
      setLoading(false);
    }

    useEffect ( () =>{
      fetchData();
    }, [])

  return (
    <div className="App">
     <Navbar/>

     <Filter 
      filterData= {filterData} 
      category={category} 
      setCategory={setCategory}/>

     <div>
        
         { loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)}
        
     </div>
    </div>
  );
}

export default App;
