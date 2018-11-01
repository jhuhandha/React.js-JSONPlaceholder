import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

class ModalAlbum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            album : []
        };
        this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(newProps){
        this.setState({
            modal: newProps.abrir_modal,
            album : newProps.album
        });
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Titulo</th>
                                    <th>Ver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.album.map(e => 
                                    <tr>
                                        <th scope="row">{e.id}</th>
                                        <td>{e.title}</td>
                                        <td></td>
                                    </tr>
                                )
                                }
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalAlbum;