// import 'bootstrap/dist/css/bootstrap.css';
// import SolarNavbar from '../pages/navbar'
// import React, { Component, useEffect, useState } from "react";
// import {
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBRow,
//   MDBCol,
//   MDBCheckbox,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
// import { toast } from 'react-toastify'
// import axios from 'axios';

// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Dropdown() {
//   const [values, setValues] = useState([]);
//   const [selectedValue, setSelectedValue] = useState('');
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   // fetch the list of values from the API
//   useEffect(() => {
//     axios.get('https://8off7ckjwd.execute-api.us-east-1.amazonaws.com/UAT')
//       .then(response => {
//         setValues(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   // handle the selection of a value from the dropdown
//   const handleSelect = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   // handle the form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post('/api/submit', {
//       selectedValue: selectedValue
//     })
//       .then(response => {
//         setSubmitSuccess(true);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       {submitSuccess && <p>Submitted successfully!</p>}
//       <form onSubmit={handleSubmit}>
//         <select value={selectedValue} onChange={handleSelect}>
//           {values.map(value => (
//             <option key={value.id} value={value.const_mgr}>{value.const_mgr}</option>
//           ))}
//         </select>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Dropdown;


import React from 'react'
import { Button } from 'react-bootstrap'

export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.username}</strong>
    <select
      className="form-control"
      name="{props.username}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.name}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
)

class CustomListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleClick = () => {
    const selectedItem = this.state.collection.find(
      (item) => item.id === parseInt(this.state.value)
    )
    console.log(selectedItem.name)
  }

  render() {
    return (
      <div className="container mt-4">
        <h2>React Dropdown List API</h2>
        <CustomDropdown
          name={this.state.username}
          options={this.state.collection}
          onChange={this.onChange}
        />
        <Button onClick={this.handleClick}>Button</Button>
      </div>
    )
  }
}

export default CustomListDropDown;