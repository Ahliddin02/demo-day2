import React, { Component } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Text } from '../Meta/Text';
import { Route, Link } from 'react-router-dom';


export default function App() {
  const allCards = Text.filter((cards)=>cards.mainPage==='main')
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"10px 10px 10px 10px"}}>
        {allCards.map((cards)=>(<Link to={cards.to}>
          <MDBCol>
    <MDBCard className='h-100'> 
     
       <MDBCardImage
        style={{height:'300px', width:'395px'}}
       src={cards.imgSrc}
         alt='...'
         position='top'
       />
       <MDBCardBody>
         <MDBCardTitle>{cards.title}</MDBCardTitle>
         <MDBCardText>
           {cards.description}
         </MDBCardText>
       </MDBCardBody>
       <MDBCardFooter>
         
        <a className="hhh" href="#" role="button" class="btn btn-success btn-large">Кликните сюда!</a>
       </MDBCardFooter>
    </MDBCard>
  </MDBCol>
        </Link>
           ))}
    </MDBRow>
  );
}

