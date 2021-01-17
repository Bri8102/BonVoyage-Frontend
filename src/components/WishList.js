import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const WishList = props => {

  return (
    <div className='DestinationContainer'>
      <h3 style={{color: 'white', fontWeight: '700'}}>Bucket List<br/></h3>
      <small style={{color: 'hotpink', fontWeight:'600'}}>Dream Destinations</small>

      {props.destinations.map(destination => {
        if (destination.bucket_list === true) {
          return (
            <Link key={destination.id} to={`/destinations/${destination.id}`}>
              <Card key={destination.id} className = 'DestinationCard'>
                <CardBody>
                  <CardTitle>{destination.name} - {destination.country}</CardTitle>
                  <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
                </CardBody>
              </Card>
            </Link>
          )
        } else {
          return (
            null
          )
        }
      })}
    </div>
  );
};

export default WishList;