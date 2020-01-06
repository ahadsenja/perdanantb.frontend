import React from 'react'
import { Form, Card, Label, Input, Row, Col, InputGroup, CardBody, Button } from 'reactstrap'

class MemberForm extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ padding: '30px', paddingTop: '10px' }}>
                    <CardBody>
                    <h3>Update Account</h3>
                    <p className="text-muted">Update your account</p>
                        <Form>
                            <Row>
                                <Col>
                                    <Label>Nama Lengkap</Label>
                                    <InputGroup>
                                        <Input type='text' placeholder='Nama lengkap' />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Label>Tempat Lahir</Label>
                                    <InputGroup>
                                        <Input type='text' placeholder='Tempat lahir' />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Label>Tanggal Lahir</Label>
                                    <InputGroup>
                                        <Input type='date' />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col>
                                    <Label>No. Hp</Label>
                                    <InputGroup>
                                        <Input type='text' placeholder='No hp' />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Label>Jenis Kelamin</Label>
                                    <InputGroup>
                                        <select className='form-control'>
                                            <option>-Pilih-</option>
                                            <option value='pria'>Pria</option>
                                            <option value='wanita'>Wanita</option>
                                        </select>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Label>Golongan Darah</Label>
                                    <InputGroup>
                                        <select className='form-control'>
                                            <option>-pilih-</option>
                                            <option value='A'>A</option>
                                            <option value='B'>B</option>
                                            <option value='AB'>AB</option>
                                            <option value='O'>O</option>
                                        </select>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col>
                                    <Label>NIK</Label>
                                    <InputGroup>
                                        <Input type='text' placeholder='No NIK' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Foto KTP</Label>
                                    <InputGroup>
                                        <Input type='file' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Foto Publik</Label>
                                    <InputGroup>
                                        <Input type='file' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Foto</Label>
                                    <InputGroup>
                                        <Input type='file' />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col>
                                    <Label>Berat Badan (kg)</Label>
                                    <InputGroup>
                                        <Input type='text' placeholder='Berat badan' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Tinggi Badan (cm)</Label>
                                    <InputGroup>
                                        <Input type='text' placeholder='Tinggi badan' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Panjang Tarikan (inch)</Label>
                                    <InputGroup>
                                        <Input type='text' placeholder='Panjang tarikan' />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col>
                                    <Label>Klub</Label>
                                    <InputGroup>
                                        <select className='form-control'>
                                            <option>-Pilih-</option>
                                            <option></option>
                                        </select>
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Satuan</Label>
                                    <InputGroup>
                                        <select className='form-control'>
                                            <option>-Pilih-</option>
                                            <option></option>
                                        </select>
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Alamat</Label>
                                    <InputGroup>
                                        <Input type='textarea' placeholder='Alamat' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Riwayat Penyakit</Label>
                                    <InputGroup>
                                        <Input type='textarea' placeholder='Riwayat penyakit' />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br />
                            <div align='right'>
                                <Button color="secondary" onClick={this.props.toggleMemberForm}>Cancel</Button>
                                <span style={{ paddingLeft: '5px' }} />
                                <Button color="success">Update</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default MemberForm