import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', first_name: '', last_name: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    if (this.props.formType === 'signup') {
      return <span>Already have a Yurbnb account? <Link to='/login'>Log in</Link></span>
    } else {
      return <span>Don't have a Yurbnb account? <Link to='/signup'>Sign up</Link></span>
    }
  }

  renderFields() {
    if (this.formType === 'signup') {
      return (
        <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
        <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
        <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
        <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
      );
    } else {
      return (
        <input type="text" value={this.state.email} onChange={this.handleChange('email')} />
        <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
      );
    }
  }

  render() {

    const 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderFields()}
          <input type="submit" value='Submit'/>
        </form>
      </div>
    );
  }
}
