import React from 'react'
import img from '../logo192.png'

export default function Header(props){
    return(
        <div className="">
            <h1 className="alert alert-light text-center text-capitalize">
            <img alt="" src={img} className="mr-5 " width="50px" height="50px"/>
            <span className="mr-5"> {props.title}</span></h1>
        </div>
    )
}