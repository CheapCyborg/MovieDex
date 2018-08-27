import React, { Component } from "react";
import HomePage from './HomePage';
import {
  Navbar,
  Nav,
  FormGroup,
  FormControl,
  Button,
  NavItem,
  Alert
} from "react-bootstrap";

class NavigationBar extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      searchClicked: false,
      yearSelect: '',
      years: [], 
      movies: [],
      showError: false,
      error: ''
    }
  }
  componentWillMount = () => {
    for (let i = 1940; i <= 2018; i++) {
      let yearList = this.state.years;
      yearList.push(i);
      this.setState({
        years: yearList
      })
    }
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  }
  handleDateChange = (e) => {
    this.setState({
      yearSelect: e.target.value
    })
  }
  handleSubmit = (e) => {
    let url = `http://www.omdbapi.com/?s=${this.state.search}&y=${this.state.yearSelect}&plot=full&apikey=8509c42b`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.Response === "False") {
          this.setState({
            showError: true,
            error: data.Error
          });
        } else {
          this.setState({
            movies: data.Search,
            searchClicked: true
          })
        }
      });
      console.log(url);
    e.preventDefault();
  }
  handleDismiss = () => {
    this.setState({ showError: false });
  }
  refresh = () => {
    window.location.reload()
  }
  render() {
    let yearOptions = this.state.years.map((year, i) => {
      return(
        <option key={i}>{year}</option>
      );
    });
    return (
        <div>
          {this.state.showError &&
            <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
              <h4>Oh snap! You got an error!</h4>
              <p>
                Reported problem was <em>"{this.state.error}"</em> Please make sure the title is in the correct format ex.(Spider-Man or spider-man)
              </p>
              <p>
                <Button onClick={this.handleDismiss}>Hide Alert</Button>
              </p>
            </Alert>
          }
          <Navbar inverse collapseOnSelect fixedTop={true} fluid={true}>
            <Navbar.Header pullleft="true">
              <Navbar.Brand>
                <a href="#brand" onClick={this.refresh}>MovieDex</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullleft="true">
                <NavItem eventKey={1} href="#" onClick={this.refresh}>
                  Home
                </NavItem>
                <NavItem eventKey={2} href="#">
                  About
                </NavItem>
              </Nav>
              <Navbar.Form pullRight={true}>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                  <FormControl placeholder="Search" value={this.state.search} onChange={this.handleChange.bind(this)}/>
                </FormGroup>{' '} 
              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" onChange={this.handleDateChange.bind(this)}>
                  <option value="">Year</option>
                  {yearOptions}
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
                <Button type="submit">Search</Button>
                </form>
              </Navbar.Form>
            </Navbar.Collapse>
          </Navbar>
          <HomePage movies={this.state.movies} searchClicked={this.state.searchClicked}/>
        </div>
    );
  }
}

export default NavigationBar;