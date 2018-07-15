import React from 'react';
import {
  Row, Col,
  FormGroup, Label, Input, Button, Tooltip
} from 'reactstrap';

export default class Step_2 extends React.PureComponent {

  render() {
    const canSubmit = false;
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
              <h1>General Ingormation</h1>
              <div>Tell us who you are!</div>
            </center>
          </Col>
        </Row>
        <form onSubmit={onSubmit}>
          <Row>
            <Col xs="6">
              <FormGroup>
                <Label for="name">Name (optional)</Label>
                <Input type="text" name="name" id="name" placeholder="Example Name"
                  value=""
                  onInput={e => this.onInput("name", e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="tel" name="phone" id="phone" placeholder="0912345678"
                  value=""
                  className=""
                  onInput={e => this.onInput(id, e.target.value)}
                />
                <i className="fas fa-exclamation-triangle"></i>
                <Tooltip placement="right" isOpen={false} target="phone">
                  NUMBERS ONLY
                </Tooltip>
              </FormGroup>            
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Birth Date (optional)</Label>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <FormGroup>
                <Input type="select" required defaultValue="" >
                  <option value="" hidden>YYYY</option>
                  {
                    this.renderOption(1900, 2018)
                  }
                </Input>
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input type="select" required value="">
                  <option value="" hidden>MM</option>
                  {
                    this.renderOption(1, 12)
                  }
                </Input>
              </FormGroup>
            </Col>
            <Col xs="4">
              <FormGroup>
                <Input type="select" required value="">
                  <option value="" hidden>DD</option>
                  {
                    this.renderOption(1, 31)
                  }
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label>Address</Label>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <FormGroup>
                <Input type="select" required value="">
                  <option value="" hidden>City</option>
                  {
                    // this.renderOption(1, 31)
                  }
                </Input>                  
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Input type="select" required value="">
                  <option value="" hidden>Dist</option>
                  {
                    // this.renderOption(1, 31)
                  }
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input type="text" name="address" placeholder="detail address" />
              </FormGroup>            
            </Col>
          </Row>
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

  renderOption = (min, max) => {
    const res = [];
    for(let i = min; i <= max; i++) {
      res.push(<option key={i} value={i}>{i}</option>)
    }
    return res;
  };

  validEmail = val => /.+@.+\..+/.test(val);
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