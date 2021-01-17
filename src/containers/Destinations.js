import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchDestinations } from '../actions/destinationActions';
import DestinationInput from '../components/DestinationInput';
import DestinationList from '../components/DestinationList';
import DestinationShow from '../components/DestinationShow';
import DestinationsVisited from '../components/DestinationsVisited';
import WishList from '../components/WishList';

class Destinations extends React.Component {

  componentDidMount() {
    this.props.fetchDestinations()
  }

    render() {
        return (
          <div>
            <Switch>
              <Route path='/destinations/new' component={DestinationInput} />
              <Route path='/destinations/visited' render={(routerProps) => <DestinationsVisited {...routerProps} destinations={this.props.destinations} />} />
              <Route path='/destinations/wish-list' render={(routerProps) => <WishList {...routerProps} destinations={this.props.destinations} />}  />
              <Route path='/destinations/:id' render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations} />} />
              <Route path='/destinations' render={(routerProps) => <DestinationList {...routerProps} destinations={this.props.destinations} />} />
            </Switch>
          </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    destinations: state.destinations
  }
};

export default connect(mapStateToProps, { fetchDestinations })(Destinations);