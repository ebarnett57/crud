import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';


class App extends Component{

    // Default dummy data
    state = {

        users:[
          {firstName:"Travis", lastName: "Jackson", age:18, email: "travis@jackson.com", gender:"male", isEditing:false},
          {firstName:"Linda", lastName:"Moorhouse", age:22, email:"linda@moorhouse.com", gender:"female", isEditing:false},
          {firstName:"Jeffrey",lastName:"Delgado", age:21, email:"Jeffrey@delgado.com",gender:"male", isEditing:false},
          {firstName:"Travis", lastName: "Jackson", age:18, email: "travis@jackson.com", gender:"male", isEditing:false},
          {firstName:"Linda", lastName:"Moorhouse", age:22, email:"linda@moorhouse.com", gender:"female", isEditing:false},
          {firstName:"Jeffrey",lastName:"Delgado", age:21, email:"Jeffrey@delgado.com",gender:"male", isEditing:false},
          {firstName:"Travis", lastName: "Jackson", age:18, email: "travis@jackson.com", gender:"male", isEditing:false},
          {firstName:"Linda", lastName:"Moorhouse", age:22, email:"linda@moorhouse.com", gender:"female", isEditing:false},
          {firstName:"Jeffrey",lastName:"Delgado", age:21, email:"Jeffrey@delgado.com",gender:"male", isEditing:false},
          {firstName:"Jeffrey",lastName:"Delgado", age:21, email:"Jeffrey@delgado.com",gender:"male", isEditing:false},
        ]
      }

      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // (i, name, age) is received from Users.js
      updateUser = (i, firstName, lastName, age, email,gender) => {
        let users = this.state.users;
        users[i].firstName = firstName;
        users[i].lastName = lastName;
        users[i].age = age;
        users[i].email = email;
        users[i].gender = gender;      
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div className="container">
                <h1>CRUD with React CLI</h1>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;