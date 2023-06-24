import React from 'react';
import "./Filter.css"
import { filterData } from '../data';

const Filter = (props) =>{
    // let filterData = props.filterData;
    let setCategory= props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }
    return(
        <div className='filter'>
            {filterData.map( (data) =>{
                return(
                <button key={data.id} onClick= { () => filterHandler(data.title)}>
                    {data.title}
                </button>)
            })}
        </div>
    );
}

export default Filter;