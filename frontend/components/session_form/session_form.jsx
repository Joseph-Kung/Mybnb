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
      return (<div>Already have a Yurbnb account? 
              {this.props.otherForm}
              </div>)
    } else {
      return (<div>Don't have a Yurbnb account? 
            {this.props.otherForm}
            </div>)
    }
  }

  renderFields() {
    if (this.props.formType === 'Sign up') {
      return (
        <div className='session-form-fields'>
          <div>
            <input placeholder='Email' type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          </div>
          <div>
            <input placeholder='First Name' type="text" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
          </div>
          <div>
            <input placeholder='Last Name' type="text" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
          </div>
          <div>
            <input placeholder='Password' type="password" value={this.state.password} onChange={this.handleChange('password')}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className='session-form-fields'>
          <div>
            <input placeholder='Email' type="text" value={this.state.email} onChange={this.handleChange('email')} />
          </div>
          <div>
            <input placeholder='Password' type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </div>
        </div>
      );
    }
  }
  
  checkLoggedIn() {
    if (this.props.currentUserId) {
      this.props.closeModal();
    }
  }

  render() {
    this.checkLoggedIn();
    const errors = this.props.errors.map(error => <li key={error}>{error}</li>)
    return (
      <>
      <div className='session-form-headers'>
        <div className='exit-modal' onClick={this.props.closeModal}>X</div>
      </div>
      <div className='session-form-container'>
        <h2>{this.props.formType}</h2>
          <form className='parent-session-form-fields'onSubmit={this.handleSubmit}>
          {this.renderFields()}
          <div>
            <input className='form-submit'type="submit" value='Submit'/>
          </div>
          <div>
            {errors}
          </div>
          <div>
           {this.renderOtherForm()}
          </div>
        </form>
      </div>
      </>
    );
  }
}

export default SessionForm;