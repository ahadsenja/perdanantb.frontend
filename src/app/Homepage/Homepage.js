import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './homepage.css'

class Homepage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <Container className='container'>
                    <Row>
                        <Col>
                            <h1 id='title-1'>Selamat Datang di</h1>
                            <h1 id='title-2'>PERDANA NTB Apps</h1>
                            <p id='text-description'>Aplikasi resmi Persatuan Panah Berkuda Indonesia (PERDANA NTB)</p>
                            <a href='/#login' id='btn-login'>Login</a>
                            <span id='btn-space' />
                            <a href='/#register' id='btn-register'>Register</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Homepage