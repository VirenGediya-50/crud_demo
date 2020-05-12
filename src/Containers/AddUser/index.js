import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CommonButton from '../../Components/CommonButton';
import CommonTextField from '../../Components/commonTextField';
import Actions from '../../Actions/';

export class AddUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName : ''
        }
    }

    handleSetText = (event) => {
        const { name, value } = event.target;
        this.setState({
            [ name ] : value
        })
    }

    handleSaveUser = () => {
        const { firstName, lastName } = this.state;
        if(firstName === "" || lastName === ""){
            alert("All field are required.");
        }else{
            const data = {
                firstName,
                lastName
            }
            this.props.saveUser(data);
            this.props.history.push("/")
        }
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <Container className={"main"}>
                <Row className="justify-content-md-center">
                    <Col md={6} className="list_layout">
                        <Col className="header_layout">
                            <h3 className={'header'}>Add User</h3>
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
                                title={"Save User"} 
                                onClick={this.handleSaveUser}
                            />
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveUser : (data) => dispatch(Actions.addUser(data))
    }
}

export default connect(null, mapDispatchToProps)(AddUser)
