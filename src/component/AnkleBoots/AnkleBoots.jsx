import React, { Component } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Text } from '../../Meta/Text'

export default function App() {
  const allCards = Text.filter((cards)=>cards.category==='AnkleBoots')
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"50px 10px 10px 10px"}}>
        {allCards.map((cards)=>(
           <MDBCol>
           <MDBCard className='h-100'> 
              <MDBCardImage
              style={{height:'450px', width:'395px'}}
              src={cards.imgSrc}
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>{cards.title}</MDBCardTitle>
                <MDBCardText>
                  {cards.price}
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className='text-muted'>Турецкий</small>
              </MDBCardFooter>
           </MDBCard>
         </MDBCol>
           ))}
    </MDBRow>
  );
}

