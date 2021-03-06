import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const DestinationsList = props => {

  return (
    <div className='DestinationContainer'>
      <Link to='/destinations/new' className='NewDestinationBtn' role='button'>Add Destination</Link>

    <h3 style={{color: 'white', fontWeight: '700', margin: '20px' }}>My Destinations</h3>
      {props.destinations.map(destination =>
        <Link key={destination.id} to={`/destinations/${destination.id}`}>
          <Card className = 'DestinationCard'>
            <CardBody>
              <CardTitle>{destination.name}</CardTitle>
              <CardImg className='DestinationImage' src={destination.image} alt={destination.name} />
              <CardTitle>{destination.country}</CardTitle>
            </CardBody>
          </Card>
        </Link>
      )}
    </div>
  );
};

export default DestinationsList;