import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', first_name: '', last_name: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors(); 
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }
  
  renderOtherForm () {
    if (this.props.formType === 'Sign up') {
      return (<span>Already have a Yurbnb account? 
              {this.props.otherForm}
              </span>)
    } else {
      return (<span>Don't have a Yurbnb account? 
            {this.props.otherForm}
            </span>)
    }
  }

  renderFields() {
    if (this.props.formType === 'Sign up') {
      return (
        <div>
          <label>Email: 
            <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          </label>
          <label >First Name:
            <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
          </label>
          <label>Last Name:
            <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
          </label>
          <label>Password: 
            <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
          </label>
        </div>
      );
    } else {
      return (
        <div>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
        </div>
      );
    }
  }

  render() {
    const errors = this.props.errors.map(error => <li key={error}>{error}</li>)
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderFields()}
          <input type="submit" value='Submit'/>
          {errors}
          {this.renderOtherForm()}
        </form>
      </div>
    );
  }
}

export default SessionForm;