import React from 'react';
import { Card, CardBody, Container } from "reactstrap";

import MainForm from "./MainForm";


class Register extends React.Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Card className="mx-4">
            <CardBody className="p-4">
              <MainForm />
            </CardBody>
          </Card>
        </Container>
      </div>

    );
  }
}

export default Register;
