import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }
    onDelete = () => {
        let { onDelete, name } = this.props;
        onDelete(name);
    }
    onEdit = () => {
        this.setState({ isEdit: true  })
    }
    onEditSubmit = (event) => {
        event.preventDefault();
        this.props.onEditSubmit(
            this.nameInput.value,
            this.descriptionInput.value,
            this.organizerInput.value,
            this.locationInput.value,
            this.dateInput.value,
            this.imgInput.value,
        );
        this.setState({ isEdit: false })
    }
    render() {
    let { name, description, organizer, location, date, img } = this.props;
    return (
        <div className="eventBox">
        {
            this.state.isEdit ?
            (
            <form onSubmit={this.onEditSubmit}>
            <input placeholder="name" defaultValue={name}
            ref={nameInput => this.nameInput = nameInput} />
            <input placeholder="description"
            ref={descriptionInput => this.descriptionInput =
            descriptionInput} defaultValue={description} />
            <input placeholder="organizer"
            ref={organizerInput => this.organizerInput = 
            organizerInput} defaultValue={organizer} />
            <input placeholder="location"
            ref={locationInput => this.locationInput = 
            locationInput} defaultValue={location} />
            <input placeholder="date" defaultValue={date}
            ref={dateInput => this.dateInput = dateInput} />
            <input placeholder="img" defaultValue={img}
            ref={imgInput => this.imgInput = imgInput} />
            <button> Save</button>
                </form>
            )
            : (<div>
          <p>Name: {name}</p>
          <p>Description: {description}</p>
          <p>Organizer: {organizer}</p>
          <p>Location: {location}</p>
          <p>Date: {date}</p>          
          <p><img src="{img}" alt="image"></img></p>          
          <button onClick={this.onDelete}>Delete</button> &nbsp; 
          <button onClick={this.onEdit}>Edit</button>
            </div>)
        }          
        </div>
      )
  }
}
export default Item;
