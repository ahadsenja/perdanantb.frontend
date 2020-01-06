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
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Jenis Kelamin</strong>
                                                    <p><strong>:</strong> {member.gender}</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Tempat Lahir</strong>
                                                    <p><strong>:</strong> {member.born_place}</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Tanggal Lahir</strong>
                                                    <p><strong>:</strong> {member.born_date}</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>No.Hp</strong>
                                                    <p><strong>:</strong> {member.phone}</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Klub</strong>
                                                    <p><strong>:</strong> {member.club.name}</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Satuan</strong>
                                                    <p><strong>:</strong> {member.satuan.name}</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Tinggi Badan</strong>
                                                    <p><strong>:</strong> {member.body_height} cm</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Berat Badan</strong>
                                                    <p><strong>:</strong> {member.body_weight} kg</p>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <strong>Panjang Tarikan</strong>
                                                    <p><strong>:</strong> {member.draw_length} inch</p>
                                                </div>
                                            </Container>
                                        </Col>

                                        <Col>
                                            <div align='right'>
                                                <Button color='primary' onClick={this.props.toggleMemberForm}>Edit</Button>
                                            </div>
                                        </Col>
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
