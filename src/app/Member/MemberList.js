import React from 'react'
import { Card, Row, Col, Container, Button } from 'reactstrap'
import '../../css/member.css'

class ProfileMember extends React.Component {
    render() {
        const { members } = this.props.dataState
        return (
            <div>
                <Card style={{ padding: '30px' }}>
                    {
                        members.map((member, i) => {
                            return (
                                <div key={i}>
                                    {/* Main Information */}
                                    <Row>
                                        <Col md='3'>
                                            <img style={{ width: '200px', height: '200px', borderRadius: '100px' }} src={member.photo} alt='' />
                                        </Col>
                                        <Col>
                                            <Container className="themed-container">
                                                <h3>{member.full_name}</h3>
                                                <br /> 
                                                <strong>Agama : </strong> {member.religion} 
                                                <br /> <br />
                                                <strong>Jenis Kelamin : </strong> {member.gender} 
                                                <br /> <br />
                                                <strong>Tempat/Tgl Lahir : </strong> {member.born_place}, {member.born_date} <br /> <br />
                                                <strong>Klub : </strong> {member.club.name}
                                            </Container>
                                        </Col>

                                        <Col>
                                            <div align='right'>
                                                <Button color='primary' onClick={this.props.toggleMemberForm}>Edit</Button>
                                            </div>
                                        </Col>
                                    </Row>

                                    {/* Body Information */}
                                    <br /> <br /> <br />
                                    <Row>
                                        <Col>
                                            <strong>Tinggi Badan</strong> <br />
                                            {member.body_height} Cm
                                        </Col>
                                        <Col>
                                            <strong>Berat Badan</strong> <br />
                                            {member.body_weight} Kg
                                        </Col>
                                        <Col>
                                            <strong>Panjang Tarikan</strong> <br />
                                            {member.draw_length} Inch
                                        </Col>
                                    </Row>

                                    <hr />
                                    {/* Detail Information */}
                                    <br />
                                    <Row>
                                        <Col md='3'><strong>Agama</strong></Col>
                                        <Col> : {member.religion} </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col md='3'><strong>Jenis Kelamin</strong></Col>
                                        <Col> : {member.gender} </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col md='3'><strong>Tempat Lahir</strong></Col>
                                        <Col> : {member.born_place} </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col md='3'><strong>Tanggal Lahir</strong></Col>
                                        <Col> : {member.born_date} </Col>
                                    </Row>
                                </div>
                            )
                        })
                    }
                </Card>
            </div>
        )
    }
}
export default ProfileMember