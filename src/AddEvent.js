import React, { Component } from 'react';

class AddEvent extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(
            this.nameInput.value, this.descriptionInput.value, this.organizerInput.value, this.locationInput.value,
            this.dateInput.value,
            this.imgInput.value);

        this.nameInput.value = ''; this.descriptionInput.value = ''; this.organizerInput.value = ''; this.locationInput.value = '';
        this.dateInput.value = '';
        this.imgInput.value = '';
    }
    render() {    
    return (<div>
        <button>Add Event</button>
        <form onSubmit={this.onSubmit}>        
            <input placeholder="name"
             ref={nameInput => this.nameInput = nameInput} />
            <input placeholder="description"
            ref={descriptionInput => this.descriptionInput =
            descriptionInput} />
            <input placeholder="organizer"
            ref={organizerInput => this.organizerInput = 
            organizerInput} />
            <input placeholder="location"
            ref={locationInput => this.locationInput = 
            locationInput} />
            <input placeholder="date"
            ref={dateInput => this.dateInput = dateInput} />
            <input placeholder="img"
            ref={imgInput => this.imgInput = imgInput} />            
        </form><p>&nbsp;</p></div>
    )
  }
}

export default AddEvent;
