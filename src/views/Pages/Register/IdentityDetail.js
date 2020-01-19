import React from "react";
import { Form, Col, Input, InputGroup, Label, Row, Button } from "reactstrap";


class IdentityDetail extends React.Component {

  saveAndContinue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <div>
        <h1>Identity Detail</h1>
        <br />

        <Form>
          <Row className="justify-content-center">
            <Col>
              <Label>NIK</Label>
              <InputGroup className="mb-3">
                <Input type="text" name='identity_card_number' value={values.identity_card_number} onChange={this.props.handleChange} placeholder='NIK' />
              </InputGroup>
            </Col>

            <Col>
              <Label>Foto KTP</Label>
              <InputGroup className="mb-4">
                <Input type="file" accept='image/*' name='identity_card_photo' value={values.identity_card_photo} />
              </InputGroup>
            </Col>
          </Row>

          <Button color='primary' onClick={this.back}>Back</Button>
          <span style={{ paddingLeft: '5px' }} />
          <Button color='primary' onClick={this.saveAndContinue}>Save and Continue</Button>
        </Form>
      </div>
    )
  }
}

export default IdentityDetail
