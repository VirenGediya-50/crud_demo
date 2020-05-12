import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form } from 'react-bootstrap';
import CommonButton from '../../Components/CommonButton';
import CommonTextField from '../../Components/commonTextField';
import Actions from '../../Actions';

export class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    handleSetText = (event) => {
        const { name, value } = event.target;
        this.setState({
            [ name ] : value
        })
    }

    static getDerivedStateFromProps(props, state) {
        if (Object.keys(props.editUser).length === 0) {
            alert("You can't access edit Url directly.")
            props.history.push("/");
        }else{
            if(state.firstName === "" && state.lastName === ""){
                return {
                    firstName: props.editUser.firstName,
                    lastName : props.editUser.lastName,
                }
            }else{
                return { 
                    firstName : state.firstName,
                    lastName : state.lastName
                }
            }
            
        }
        return null;
    }

    handleEditUser = () => {
        const { id } = this.props.match.params;
        const { firstName, lastName } = this.state;
        if(firstName === "" || lastName === ""){
            alert("All field are required.");
        }else{
            const data = {
                firstName,
                lastName
            }
            this.props.saveEditUser(id, data);
            this.props.history.push("/");
        }
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <Container className={"main"}>
                <Row className="justify-content-md-center">
                    <Col md={6} className="list_layout">
                        <Col className="header_layout">
                            <h3 className={'header'}>Edit User</h3>
                        </Col>
                        <Form>
                            <CommonTextField
                                placeHolder={"First Name"}
                                value={firstName}
                                name={"firstName"}
                                onChange={this.handleSetText}
                            />
                            <CommonTextField
                                placeHolder={"Last Name"}
                                value={lastName}
                                name={"lastName"}
                                onChange={this.handleSetText}
                            />
                        </Form>
                        <Col className={"save_button"}>
                                <CommonButton
                                    title={"Edit User"} 
                                    onClick={this.handleEditUser}
                                />
                            </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const { editUser } = state.userReducer;
    return { 
        editUser
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEditUser : (id, data) => dispatch(Actions.saveEditUser(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
