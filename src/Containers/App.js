import React from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary'
import SearchBox from '../Components/SearchBox';
import './App.css';

class App extends React.Component {
   constructor() {
   	   super()
   	  this.state = {
	  Robots: [],
	  searchfield: ''
  }
}
    componentDidMount() {
    	fetch('https://jsonplaceholder.typicode.com/users')
    	.then(response => response.json())
    	.then(users => this.setState({Robots: users}))
    	
    }

   onSearchChange = (event) => {
   	   this.setState({searchfield: event.target.value});
   }
	render(){
		      const {Robots, searchfield} = this.state;
		    const filteredRobots = Robots.filter(Robot => {
       	    return Robot.name.toLowerCase().includes(searchfield.toLowerCase())
             });
		     return !Robots.length ?  //ternary operator
		    	 <h1>LOADING...</h1> :
	      	     (
		           <div className= 'tc'>
		           <h1 className='f1'>Robo-Friends</h1>
		           <SearchBox searchChange={this.onSearchChange} />
		           <Scroll>
                 <ErrorBoundary>
                     <CardList Robots={filteredRobots} />
                  </ErrorBoundary>
                   </Scroll> 
                   </div>
		          );	    	
		   

	}

}

export default App;