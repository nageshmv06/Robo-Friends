<<<<<<< HEAD
import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}
    
    componentDidCatch(error, info) {
    	this.setState({ hasError: true})
    }

		render() {
			if(this.state.hasError) {
				return <h1>Oooops. That is not good</h1>
			}
			return this.props.children;
		}
}

=======
import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}
    
    componentDidCatch(error, info) {
    	this.setState({ hasError: true})
    }

		render() {
			if(this.state.hasError) {
				return <h1>Oooops. That is not good</h1>
			}
			return this.props.children;
		}
}

>>>>>>> 8a36ef6f1f44a4dea2de8848278bffb00756a9f0
export default ErrorBoundary;