import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import Activities from '../containers/Activities';
import { deleteDestination, toggleVisited, toggleWishList } from '../actions/destinationActions';


const DestinationShow = props => {

  let destination = props.destinations.filter(destination => destination.id == props.match.params.id)[0];

  const handleDelete = () => {
    props.deleteDestination(destination.id);
    const path = `/destinations`;
    props.history.push(path);
  };

  const handleVisited = () => {
    props.toggleVisited(destination, destination.id)
  }

  const handleWishList = () => {
    props.toggleWishList(destination, destination.id)
  }

  return (
    <div>
      <Card className = 'DestinationShow'>
      <CardBody>
          <CardTitle >{destination && destination.name} - {destination && destination.country}</CardTitle>
          <CardImg className='DestinationImage' src={destination && destination.image} alt={destination && destination.name} /><br></br><br></br>
        </CardBody>
        <Button onClick={handleVisited} className='VisitedButton' style={{alignItems: 'center' }}>
          {destination && destination.visited === false ? 'Add to Visited' : 'You Have Visited'}
        </Button>
        <Button onClick={handleWishList} className='WishListButton'>
          {destination && destination.bucket_list === false ? 'Add to Wish List' : 'This Is In your Wish List'}
        </Button>
        <Button onClick={handleDelete} className='DeleteButton'>Delete Destination</Button>
      </Card>

      <Activities destination={destination} />
    </div>
  );
};

export default connect(null, { deleteDestination, toggleVisited, toggleWishList })(DestinationShow);