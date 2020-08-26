import React from 'react';
import CardList from '../Components/CardList';
import { connect } from 'react-redux';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary'
import SearchBox from '../Components/SearchBox';
import './App.css';

import {setSearchField, requestRobots} from '../action';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    Robots: state.requestRobots.Robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
   onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {

    componentDidMount() {
      this.props.onRequestRobots();
 }

	render(){
        const {searchField, onSearchChange, Robots, isPending} = this.props;
		    const filteredRobots = Robots.filter(Robot => {
       	    return Robot.name.toLowerCase().includes(searchField.toLowerCase())
             });
		     return isPending ?  //ternary operator
		    	 <h1>LOADING...</h1> :
	      	     (
		           <div className= 'tc'>
		           <h1 className='f1'>Robo-Friends</h1>
		           <SearchBox searchChange={onSearchChange} />
		           <Scroll>
                 <ErrorBoundary>
                     <CardList Robots={filteredRobots} />
                  </ErrorBoundary>
                   </Scroll> 
                   </div>
		          );	    	
		   

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);