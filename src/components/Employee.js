import React from 'react';

class Employee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Kemet',
      lastName: 'Price',
      email: 'Kemet.Price1@gmail.com',
    };
  }

  updateEmployee() {
    this.setState({
      firstName: 'James',
      lastName: 'Gosling',
      email: 'JGosling123@gmail.com',
    });
  }

  render() {
    return (
      <div>
        <h1>Employee Dtails</h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p>
        <button onClick={() => this.updateEmployee()}>Update Employee</button>
      </div>
    );
  }
}

export default Employee;
