import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //state changes according to what the user enters
      //we need to pass it as props if its going to change
      // to the correct componenet
      monsters: [],
      searchField: " "
    };

    //this.handleChange = this.handleChange.bind(this);
    //- bind-
    // is a method on any function that returns a new function
    // where the context of THIS , is set to whatever we passed to it
    // and the context of this that we are setting in handleChange
    // is the this keyword that is defined in our contstructor
  }
  componentDidMount() {
    // when this component mounts(mount is when react puts our component on the page. It renders it on the DOM
    //for the 1st time, whne it does that it calls the code we have inside this lifecycle hook)
    // lifecycle. we are fetching from this url
    fetch("https://jsonplaceholder.typicode.com/users")
      // we convert the response we are getting back to to a response.json
      .then(response => response.json())
      // take the users back from results and our monsters our now our users
      // setState to update our state
      .then(users => this.setState({ monsters: users }));
  }
  //  {/* now the following this.state... is the chlidren of props.children ebecause it is between the
  //the open-closing tags of Cardlist
  // {this.state.monsters.map(monster => (
  //   <h1 key={monster.id}>{monster.name}</h1>
  // ))}
  //*/}

  //onChange theory: it fires when an event happes in our browser.Whenever the input changes
  // meaning whenever the users types or removes sth(in our search input)
  // we pass a function and we pass an e(event) which is the sunthetic event
  // we only care for the e.target(gives the html attribute,event for example
  // the input search) and specifically the e.target.value
  // and we store the changed value by calling the setState and update the state field
  // we want to update with the input value we enter(we have access as we said through e.target.value)

  handleChange = e => {
    // arrow function allow to set the THIS to
    // in whatever it was that declared it in 1st place
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    // filtering when in our search field want to input a name
    // and display only the monsters that include that name
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* passing placeholder & hand leChange as props, Make our simplier and reusasble  */}
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
