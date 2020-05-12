import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import CommonButton from '../../Components/CommonButton';
import ListTable from '../../Components/ListTable';
import Actions from '../../Actions';

export class Home extends Component {

    handleAddUser = () => {
        this.props.history.push(`/add`);
    }    

    handleDeleteUser = (id) => {
        if (window.confirm(`Are you sure want to delete id number ${id+1} ?`)) {
            this.props.deleteUser(id);
        }
    }

    handleEditUser = (id) => {
        this.props.editUser(id);
        this.props.history.push(`/edit/${id}`)
    }

    render() {
        const { userList } = this.props
        return (
            <Container className={"main"}>
                <Row className="justify-content-md-center">
                    <Col md={6} className="list_layout">
                        <Col className="header_layout">
                            <h3 className={'header'}>User List</h3>
                            <Col className={"add_user"}>
                                <CommonButton
                                    title={"Add User"} 
                                    variant={"primary"}
                                    onClick={this.handleAddUser}
                                />
                            </Col>
                        </Col>
                        <ListTable
                            onEditClick={(id) => this.handleEditUser(id)}
                            onDeleteClick={(id) => this.handleDeleteUser(id)}
                            data={userList}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const { userList } = state.userReducer;
    return {
        userList
    }
}

const mapDispatchToProps = (dispatch) =>  {
    return{
        deleteUser : (id) => dispatch(Actions.deleteUser(id)),
        editUser : (id) => dispatch(Actions.editUser(id)),
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
