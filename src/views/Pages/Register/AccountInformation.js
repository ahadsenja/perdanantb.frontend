import React from "react";
import { Col, Form, Input, InputGroup, Label, Row, Button } from 'reactstrap'


class AccountInformation extends React.Component{

  saveAndContinue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    return (
      <div>
        <h1>Account Information</h1>
        <br />

        <Form>
          <Row className="justify-content-center">
            <Col>
              <Label>Full Name</Label>
              <InputGroup className="mb-3">
                <Input type="text" name='full_name' value={values.full_name} onChange={this.props.handleChange} placeholder="Full name" />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <Label>Username</Label>
              <InputGroup className="mb-3">
                <Input type="text" name='username' value={values.username} onChange={this.props.handleChange} placeholder="Username" autoComplete="username" />
              </InputGroup>
            </Col>

            <Col>
              <Label>Password</Label>
              <InputGroup className="mb-3">
                <Input type="password" name='password' value={values.password} onChange={this.props.handleChange} placeholder="Password" autoComplete="new-password" />
              </InputGroup>
            </Col>
          </Row>

          <Button color='primary' onClick={this.saveAndContinue}>Save and Continue</Button>
        </Form>
      </div>
    )
  }
}

export default AccountInformation
