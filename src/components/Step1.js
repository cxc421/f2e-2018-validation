import React from 'react';
import {
  Row, Col,
  FormGroup, Label, Input, Button, Tooltip
} from 'reactstrap';

export default class Step_1 extends React.PureComponent {

  render() {
    const dataArray = this.getFormGroupData();
    const canSubmit = dataArray.every(({valid, value}) => valid && value.length > 0 );
    const onSubmit = e => {
      e.preventDefault();
      if (canSubmit) {
        this.props.onSubmitDone();
      }
    };

    return (
      <React.Fragment>
        <Row>
          <Col>
            <center>
              <h1>Create Account</h1>
              <div>Glad to see you here!</div>
            </center>
          </Col>
        </Row>
        <form onSubmit={onSubmit}>
          {
            dataArray.map(({ id, text, type, value, placeholder, valid, tooltip}) => 
              <Row key={id}>
                <Col>
                  <FormGroup>
                    <Label for={id}>{text}</Label>
                    <Input type={type} name={id} id={id} placeholder={placeholder}
                      value={value}
                      className={valid ? '' : 'warn'}
                      onInput={e => this.onInput(id, e.target.value)}
                    />
                    <i className="fas fa-exclamation-triangle"></i>
                    <Tooltip placement="right" isOpen={!valid} target={id}>
                      {tooltip}
                    </Tooltip>
                  </FormGroup>
                </Col>
              </Row>
            )
          }
          <Row>
            <Col>
              <FormGroup>
                <Button color="primary" block={true} className={canSubmit ? '' : 'warn'}>Submit & NEXT</Button>
              </FormGroup>
            </Col>
          </Row>
        </form>
      </React.Fragment>        
    );
  }

  getFormGroupData() {
    const {state} = this;

    return [
      {
        id: 'account',
        text: 'Account',
        type: 'email',
        placeholder: 'example@email.com',
        valid: !state.accountEnable ||  this.validEmail(state.account),
        value: state.account,
        tooltip: "INVALID EMAIL"
      },
      {
        id: 'password',
        text: 'Password',
        type: 'password',
        placeholder: 'Password',
        valid: !state.passwordEnable || this.validPassword(state.password),
        value: state.password,
        tooltip: "MINIMUM 8 CHARACTERS"
      },
      {
        id: 'confirmPassword',
        text: 'Confirm Password',
        type: 'password',
        placeholder: 'Password',
        valid: !state.confirmPasswordEnable || this.validConfirmPassword(state.confirmPassword, state.password),
        value: state.confirmPassword,
        tooltip: "NOT MATCH"
      },            
    ];
  }

  validEmail =  val => /.+@.+\..+/.test(val);
  validPassword = val => /.{8,}/.test(val);
  validConfirmPassword = (v1, v2) => v1 === v2;

  onInput = (id, value) => {
    this.setState({
      [id]: value,
      [id + 'Enable']: true
    });

    console.log({
      [id]: value,
      [id + 'Enable']: true
    });
  };

  static defaultProps = {
    onSubmitDone: f => f
  };

  state = {
    account: '',
    password: '',
    confirmPassword: '',
    accountEnable: false,
    passwordEnable: false,
    confirmPasswordEnable: false
  };

}