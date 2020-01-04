import React from 'react'
import { Form, Card, Label, Input} from 'reactstrap'

class MemberForm extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ padding: '30px' }}>
                    <Form>
                        <Label>Fullname</Label>
                        <Input type='text' placeholder='Nama lengkap' />
                    </Form>
                </Card>
            </div>
        )
    }
}
export default MemberForm