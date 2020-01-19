import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Alert } from 'reactstrap';
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    let token = localStorage.getItem('token')
    let loggedIn = true
    if (token === null) {
      loggedIn = false
    }
    this.state = {
      username: '',
      password: '',
      loggedIn
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  doLogin = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    axios.post('http://128.199.200.47:8088/api/v1/user/login', {
      username: username,
      password: password
    })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', JSON.stringify(response.data.token))
          this.setState({
            loggedIn: true
          })
          console.log('successfully: ', response.data)
        } else {
          console.log('Username atau password salah!')
        }
      })
  }

  render() {
    const { username, password, loggedIn} = this.state

    if (loggedIn) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form name='form' onSubmit={this.doLogin}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name='username' value={username} onChange={this.handleChange} placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name='password' value={password} onChange={this.handleChange} placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Jika Anda belum memiliki akun, silahkan terlebih dahulu untuk melakukan register atau daftar akun baru</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
