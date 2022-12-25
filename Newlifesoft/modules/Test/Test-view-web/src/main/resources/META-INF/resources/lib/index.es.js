import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
	constructor() {
		super();
		this.state = {
			studentName:""
		};
	}
	
	componentDidMount() {
		Liferay.Service(
				'/test.student/get-student',
				{
					studentId: 1
				},(student)=>{
					console.log(student);
					this.setState({studentName:student.studentName});
				}
		);
	}
	
	render() {
		return (
			<h1>React: {this.state.studentName}</h1>
		);
	}
}

export default function(elementId) {
	ReactDOM.render(<Test />, document.getElementById(elementId));
}