import React from 'react';
import Card from "./Card"
import "./Cards.css"

const Cards = (props) =>{
    let courses = props.courses;
    let category= props.category;
   
    // returns you a list of all courses received from the api response
    function getCourses() {
        if (category === "All"){ 
            let allCourses = [];
            Object.values(courses).forEach( (array) => {
                array.forEach( (courseData) => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
       
    }

    return(
        <div className='Cards'>
           {getCourses().map( (course) => {
            return <Card key= {course.id} course = {course}/>
           })}
        </div>
    );
}

export default Cards;