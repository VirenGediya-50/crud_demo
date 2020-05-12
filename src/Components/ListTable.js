import React from 'react';
import { Table } from 'react-bootstrap';
import CommonButton from './CommonButton';
 
const ListTable = (props) => {
    const { data, onEditClick, onDeleteClick } = props;
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th className={"header_id"}>Id</th>
                    <th>Name</th>
                    <th className={"header_action"}>Action</th>
                </tr>
            </thead>
            <tbody>
            { data.length > 0 ?
                data.map((user, id) =>(
                    <tr key={id}>
                        <td>{(id+1)}</td>
                        <td>{user.firstName+" "+ user.lastName}</td>
                        <td className={"action_layout"}>
                            <CommonButton
                                title={"Edit"}
                                variant={'primary'}
                                className={"delete_button"}
                                onClick={() => onEditClick(id)}
                            />
                            <CommonButton 
                                title={"Delete"}
                                variant={'danger'}
                                className={"delete_button"}
                                onClick={() => onDeleteClick(id)}
                            />
                        </td>
                    </tr>
                ))
                :   
                <tr>
                    <td colSpan="3"><i>No data available</i></td>
                </tr>
                // <h6>No user Data available</h6>
            }
            </tbody>
        </Table>
    );
}
 
export default ListTable;