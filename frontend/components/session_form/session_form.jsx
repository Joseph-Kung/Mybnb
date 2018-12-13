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

  handleSubmit(type) {

    return (e) => {
      e.preventDefault();
      if (type === 'guest') {
        this.props.loginGuest();
      } else {
        this.props.processForm(this.state);
      }
    }
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  componentDidUpdate() {
    this.checkLoggedIn();
  }
  
  renderOtherForm () {
    if (this.props.formType === 'Sign up') {
      return (<span className='other-form'>Already have a Yurbnb account? 
              {this.props.otherForm}
              </span>)
    } else {
      return (<span className='other-form'>Don't have a Yurbnb account? 
            {this.props.otherForm}
            </span>)
    }
  }

  renderFields() {
    if (this.props.formType === 'Sign up') {
      return (
        <div className='session-form-fields'>
          <label>
            <i className="far fa-envelope"></i>
            <input placeholder='Email' type="text" value={this.state.email} onChange={this.handleChange('email')}/>
          </label>
          <label>
            <i className="far fa-user"></i>
            <input placeholder='First Name' type="text" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
          </label>
          <label>
            <i className="far fa-user"></i>
            <input placeholder='Last Name' type="text" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
          </label>
          <label>
            <i className="fas fa-key"></i>
            <input placeholder='Password' type="password" value={this.state.password} onChange={this.handleChange('password')}/>
          </label>
        </div>
      );
    } else {
      return (
        <div className='session-form-fields'>
          <label>
            <i className="far fa-envelope"></i>
            <input placeholder='Email' type="text" value={this.state.email} onChange={this.handleChange('email')} />
          </label>
          <label>
            <i className="fas fa-key"></i>
            <input placeholder='Password' type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
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
    const errors = this.props.errors.map(error => <li className='session-error' key={error}>{error}</li>)
    return (
      <>
      <div className='session-form-headers'>
        <div className='exit-modal' onClick={this.props.closeModal}>X</div>
      </div>
      <div className='session-form-container'>
        <h2 className='form-title'>{this.props.formType}</h2>
        <form className='parent-session-form-fields'>
          {this.renderFields()}
          <div>
            <button className='form-submit' onClick={this.handleSubmit('new')}>{this.props.formType}</button>
          </div>
          <div>
            <button className='form-submit' onClick={this.handleSubmit('guest')}>Demo User</button>
          </div>
          <div>
            <ul className='errors-container'>
              {errors}
            </ul>
          </div>
          <div className='bar-separator'></div>
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