import React from 'react'
import Card from './Card'
import Header from './Header'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'

export default function User(props) {
  return (
    <div>
          <Header title='Liste des Utilisateur'/>
          <div className="row p-1">
            <Card nom="ali baba" img={img2} email="alibaba@gmail.com" website="www.ali.ma"/>
         
            <Card nom="ali mama" img={img3} email="alibaba@gmail.com" website="www.mama.ma"/>
            <Card nom="ali mama" img={img4} email="alibaba@gmail.com" website="www.mama.ma"/>
            <Card nom="ali baba" img={img3} email="alibaba@gmail.com" website="www.ali.ma"/> 
            <Card nom="ali mama" img={img4} email="alibaba@gmail.com" website="www.mama.ma"/>
            <Card nom="ali mama" img={img2} email="alibaba@gmail.com" website="www.mama.ma"/>
         
          </div>
     
    </div>
  )
}
