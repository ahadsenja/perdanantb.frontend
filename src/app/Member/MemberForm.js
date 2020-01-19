import React from 'react'
import { Form, Card, Label, Input, Row, Col, InputGroup, CardBody, Button } from 'reactstrap'

class MemberForm extends React.Component {
    render() {
      const { full_name, born_place, born_date, phone, gender, blood_type, identity_card_number, identity_card_photo,
        photo, public_photo, body_height, body_weight, draw_length, address, disease_history, club_id, satuan_id } = this.props.dataState

        return (
            <div>
                <Card style={{ padding: '30px', paddingTop: '10px' }}>
                    <CardBody>
                    <h3>Update Account</h3>
                    <p className="text-muted">Update your account</p>
                        <Form name='form'>
                            <Row>
                                <Col>
                                    <Label>Nama Lengkap</Label>
                                    <InputGroup>
                                        <Input type='text' name='full_name' value={full_name} onChange={this.props.handleChange} placeholder='Nama lengkap' />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Label>Tempat Lahir</Label>
                                    <InputGroup>
                                        <Input type='text' name='born_place' value={born_place} onChange={this.props.handleChange} placeholder='Tempat lahir' />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Label>Tanggal Lahir</Label>
                                    <InputGroup>
                                        <Input type='date' name='born_date' value={born_date} onChange={this.props.handleChange}  />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col>
                                    <Label>No. Hp</Label>
                                    <InputGroup>
                                        <Input type='text' name='identity_card_number' value={identity_card_number} onChange={this.props.handleChange} placeholder='No hp' />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Label>Jenis Kelamin</Label>
                                    <InputGroup>
                                        <select className='form-control' name='gender' value={gender} onChange={this.props.handleChange}>
                                            <option>-Pilih-</option>
                                            <option value='pria'>Pria</option>
                                            <option value='wanita'>Wanita</option>
                                        </select>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Label>Golongan Darah</Label>
                                    <InputGroup>
                                        <select className='form-control' name='blood_type' value={blood_type} onChange={this.props.handleChange}>
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
                                        <Input type='text' name='identity_card_number' value={identity_card_number} onChange={this.props.handleChange} placeholder='No NIK' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Foto KTP</Label>
                                    <InputGroup>
                                        <Input type='file' name='identity_card_photo' value={identity_card_photo} onChange={this.props.handleChange} />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Foto Publik</Label>
                                    <InputGroup>
                                        <Input type='file' name='public_photo' value={public_photo} onChange={this.props.handleChange} />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Foto</Label>
                                    <InputGroup>
                                        <Input type='file' name='photo' value={photo} onChange={this.props.handleChange} />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col>
                                    <Label>Berat Badan (kg)</Label>
                                    <InputGroup>
                                        <Input type='text' name='body_weight' value={body_weight} onChange={this.props.handleChange} placeholder='Berat badan' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Tinggi Badan (cm)</Label>
                                    <InputGroup>
                                        <Input type='text' name='body_height' value={body_height} onChange={this.props.handleChange} placeholder='Tinggi badan' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Panjang Tarikan (inch)</Label>
                                    <InputGroup>
                                        <Input type='text' name='draw_length' value={draw_length} onChange={this.props.handleChange} placeholder='Panjang tarikan' />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br />
                            <Row>
                                <Col>
                                    <Label>Klub</Label>
                                    <InputGroup>
                                        <select className='form-control' name='club_id' value={club_id} onChange={this.props.handleChange}>
                                            <option>-Pilih-</option>
                                            <option></option>
                                        </select>
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Satuan</Label>
                                    <InputGroup>
                                        <select className='form-control' name='satuan_id' value={satuan_id} onChange={this.props.handleChange}>
                                            <option>-Pilih-</option>
                                            <option></option>
                                        </select>
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Alamat</Label>
                                    <InputGroup>
                                        <Input type='textarea' name='address' value={address} onChange={this.props.handleChange} placeholder='Alamat' />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <Label>Riwayat Penyakit</Label>
                                    <InputGroup>
                                        <Input type='textarea' name='disease_history' value={disease_history} onChange={this.props.handleChange} placeholder='Riwayat penyakit' />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <br />
                            <div align='right'>
                                <Button color="secondary" onClick={this.props.toggleMemberForm}>Cancel</Button>
                                <span style={{ paddingLeft: '5px' }} />
                                <Button color="success" onClick={this.props.onUpdateMember}>Update</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default MemberForm
