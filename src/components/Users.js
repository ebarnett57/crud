import React, { Component } from 'react';

class Users extends Component{

    // call updateUser (App.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.firstName.value, this.lastName.value, this.age.value, this.email.value, this.gender.value);
    }

    render(){

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.firstName = val}} required defaultValue={user.firstName}/></td>
                    <td><input type="text" ref={(val) => {this.lastName = val}} required defaultValue={user.lastName}/></td>
                    <td><input type="number" ref={(val) => {this.age = val}} required defaultValue={user.age}/></td>
                    <td><input type="email" ref={(val) => {this.email = val}} required defaultValue={user.email}/></td>
                    <td><input type="text" ref={(val) => {this.gender = val}} required defaultValue={user.gender}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td><button className="btn white black-text" onClick={() => pressEditBtn(index)}>Edit</button>  |  <button className="btn red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>

            );
        });

        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Users;