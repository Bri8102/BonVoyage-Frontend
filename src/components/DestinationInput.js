import React, { Component }from 'react';
import { connect } from 'react-redux';
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addDestination } from '../actions/destinationActions';

class DestinationInput extends Component {

    state = {
        name: '',
        country: '',
        image: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const path = `/destinations`;
        this.props.addDestination(this.state,this.props.history, path);
        this.setState({
            name: '',
            country: '',
            image: ''
        });
    };

    render() {
        return (
            <div className='DestinationFormContainer'>
                <Form className='DestinationForm' onSubmit={this.handleSubmit}>

                    <h5>Add a New Destination</h5>


                    <FormGroup row>
                        <Label for='name' sm={2}>Name</Label>
                        <Col md={10}>
                        <Input type='text' name='name' value={this.state.name} placeholder='Punta Cana . . .' onChange={this.handleChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label for='country' sm={2}>Country</Label>
                      <Col md={10}>
                        <Input type='text' name='country' value={this.state.country} placeholder='Dominican Republic . . .' onChange={this.handleChange} />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label for='image' sm={2}>Image URL</Label>
                      <Col md={10}>
                        <Input type='text' name='image' value={this.state.image} onChange={this.handleChange} />
                      </Col>
                    </FormGroup>
          
                    <Button>Add Destination</Button>
                   </Form>
               </div>
        )
    }
};

export default connect(null, { addDestination })(DestinationInput);