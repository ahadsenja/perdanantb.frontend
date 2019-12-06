import React from 'react'
import { Table } from 'reactstrap'

class ProfilMemberList extends React.Component {
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama</th>
                            <th>Club</th>
                            <th>Jenis Kelamin</th>
                            <th>No Hp</th>
                            <th>Alamat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rahman</td>
                            <td>Arrihu</td>
                            <td>Laki-Laki</td>
                            <td>082786654454</td>
                            <td>Mataram</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Rohman</td>
                            <td>Arrihu</td>
                            <td>Laki-Laki</td>
                            <td>082786654454</td>
                            <td>Mataram</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Rahim</td>
                            <td>Arrihu</td>
                            <td>Laki-Laki</td>
                            <td>082786654454</td>
                            <td>Mataram</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default ProfilMemberList