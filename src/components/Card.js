import React from "react";
import "./Card.css"

const Card = (props) =>{
    let course = props.course;
    return (
        <div className="card">
            <div>
                <img width="340px" height="200px" className="img" src = {course.image.url} alt=""></img>

            </div>

            <div className="title">
                <h3 className="h">{course.title}</h3>
                <p className="desc">{course.description.length >250 ?
                 (course.description.substr(0,250)) + "..." : (course.description)}</p>
            </div>

        </div>
    );
           
}

export default Card;