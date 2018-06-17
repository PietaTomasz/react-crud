import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import AddEvent from './AddEvent';


// localStorage.setItem('events', JSON.stringify(events));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // events: JSON.parse(localStorage.getItem('events')),
      title: 'React Event Organizer',
      events : [
        {
          name: 'CSS/JS Workshops',
          description: 'Free Workshops for FrontEnd Developers',
          organizer: 'SkyGate',
          location: 'Gliwice',
          date: '18.05.2018',
          img: 'https://picsum.photos/200/300/?random'
        },
        {
          name: 'React Workshops',
          description: 'Free Workshops for FrontEnd Developers',
          organizer: 'SkyGate',
          location: 'Gliwice',
          date: '13.06.2018',
          img: 'https://picsum.photos/200/300/?random'
        }
      ]
    }
  }
  // componentWillMount() {
  //   let events = this.addEvent();
  //   this.setState({ events });
  // }
  addEvent = () => {
    return this.state.events;
  }
  onAdd = (name, description, organizer, location, date, img) => {
    let events = this.addEvent();
    events.push({ name, description, organizer, location, date, img });
    this.setState({ events });
  }
  onDelete = (name) => {
    let events = this.addEvent();
    let filtered = events.filter( event => {
      return event.name !== name;
    } )
    console.log(filtered);
    this.setState({
      events: filtered
    });
  }
  onEditSubmit = (name, description, organizer, location, date, img) => {
    let events = this.addEvent();
    events = events.map( event => {
      if (event.name === name) {
        event.name = name;
        event.description = description;
        event.organizer = organizer;
        event.location = location;
        event.date = date;
        event.img = img;
      } return event;
    } );
    this.setState({ events })
  }
  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  } 
  sortBy = (key) => {
    let arrayCopy = [...this.state.events];
    arrayCopy.sort(this.compareBy(key));
    this.setState({events: arrayCopy});
  }
  filterBy = (e) => {
    let arrayCopy = this.state.events;
    arrayCopy = arrayCopy.filter(function(item){
      return item.name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({events: arrayCopy});
  }
  render() {
    return (
      <div>
      <h1>Events Manager</h1>
      <AddEvent onAdd={this.onAdd} />
      <p>Sort By:</p>
      <div className="center">      
          <div onClick={() => this.sortBy('name')} >Name</div>
          <div onClick={() => this.sortBy('description')}>Description</div>
          <div onClick={() => this.sortBy('organizer')}>Organizer</div>
          <div onClick={() => this.sortBy('location')}>Location</div>
          <div onClick={() => this.sortBy('date')}>Date</div>
        </div><p>&nbsp;</p>
      <p>Filter By:</p>
      <input type="text" placeholder="Search" onChange={this.filterBy} />
      <div className="grid">
      { this.state.events.map( event => {
        return (          
          <Item class="box"
          key={event.name} 
          {...event}
          onDelete={this.onDelete}
          onEditSubmit={this.onEditSubmit}
          // name={event.name}
          // description={event.description}
          // organizer={event.organizer}
          // location={event.location}
          // date={event.date}
          // img={event.img}
          />          
        )
      } ) }</div>
      </div>
    );
  }
}
export default App;