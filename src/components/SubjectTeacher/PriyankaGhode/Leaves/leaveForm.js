import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import Ghodeleaves from '../../../../api/GhodeMadam/Ghodeleave';

const Ghodeleave = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.ghodeleave.date}</td>
        <td>{props.ghodeleave.fname}</td>
        <td>{props.ghodeleave.lname}</td>
        <td>{props.ghodeleave.designation}</td>
        <td>{props.ghodeleave.NoDays}</td>
        <td>{props.ghodeleave.TypeDays}</td>
        <td>{props.ghodeleave.email}</td>
        <td>{props.ghodeleave.response}</td>
    
        <td>
            <span onClick={() => {props.deleteGhodeleave(props.ghodeleave._id) }} ><i className='bx bx-trash'></i></span>
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        </td>
    </tr>
)

class leaveForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ghodeleaves: []
        }

        this.deleteGhodeleave = this.deleteGhodeleave.bind(this);
    }

    componentDidMount() {
        Ghodeleaves.get('/get-ghodeleaves')
            .then(res => {
                this.setState({ ghodeleaves: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteGhodeleave(id) {
        Ghodeleaves.delete('/delete-ghodeleave/' +id)
            .then(res => console.log(res.data));

        this.setState({ ghodeleaves: this.state.ghodeleaves.filter(el => el._id !== id)})
    }

    ghodeleavesList() {
        return this.state.ghodeleaves.map(currentghodeleave => {
            return <Ghodeleave ghodeleave={currentghodeleave} deleteGhodeleave={this.deleteGhodeleave} key={currentghodeleave._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
            <h3 className='fidoh3'>Leaves</h3>
                <table>
                    <thead className="thead-light">
                        <tr>
		                    <th>Date</th>
		                    <th>First Name</th>
                            <th>Last Name</th>
                            <th>Designation</th>
                            <th>No Of Days</th>
		                    <th>Type Of Days</th>
                            <th>Email</th>
                            <th>Response</th>
		                    <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.ghodeleavesList()}
                    </tbody>
                </table>
                <Link to={'/subject-teacher/priyanka-ghode/add-leave'}><div className='add'>Add</div></Link>
            </div>
            </div>
         );
    }
}
 
export default leaveForm;




// import React from 'react';
// import './leaveForm.css';

// function leaveForm(){
//     return (
//         <div className='leave-main'>
//             <div className="leaves_box">
//             <input className="upadateLeft" type="text" name="fname" placeholder="First name" />
//             <input className="upadateRight" type="text" name="lname" placeholder="Last name" />
//             <input className="upadateLeft" type="text" name="designation" placeholder="Designation" />
//             <input className="upadateRight" type="number" name="days" placeholder="No. of Days" />
//             <input className="upadateLeft" type="text" name="type" placeholder="Type of Leaves" />
//             <input className="upadateRight" type="email" name="email" placeholder="Email" /><br />
//             <button className="submit">Submit</button>
//             <button className="cancel">Cancel</button>
//   </div>
// </div>
//     );
// }

// export default leaveForm;