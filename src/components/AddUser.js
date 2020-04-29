import React,{ Component } from 'react';

class AddUser extends Component{

    state = {
        firstName:null,
        lastName:null,
        age:null,
        email:null,
        gender:null,
        isEditing:false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s2">
                        <input name="firstName" autoComplete="off" placeholder="Enter your first name" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="lastName" autoComplete="off" placeholder="Enter your last name" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="age" autoComplete="off" type="number" required placeholder="Enter your age" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input name="email" autoComplete="off" placeholder="Enter your email" required type="email" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="gender" autoComplete="off" placeholder="Enter your gender" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;