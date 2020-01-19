import React from "react";
import { Alert } from "react-bootstrap";


class Success extends React.Component {
  render() {
    return (
      <div>
        <Alert color='success'>Data berhasil disimpan</Alert>
      </div>
    )
  }
}

export default Success
