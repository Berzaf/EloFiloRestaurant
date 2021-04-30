import React, {Component, Fragment } from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Button, Modal, ModalHeader, ModalBody, Label, Input } from 'reactstrap';


class Reservation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleReservation = this.handleReservation.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }   

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }   

    
    handleReservation(event) {
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Reservation</ModalHeader>
                        <ModalBody>
                            <div className="container-fluid">
                                <LocalForm id="reserveForm" onSubmit={this.handleReservation}>
                                    <div className="form-group row">
                                        <Label htmlFor="nuCampers" className="col-sm-6 col-form-label">Number of People</Label>
                                        <div class="col">
                                            <Control.select name="numPeops" id="numPeops" class="form-control">
                                                <option selected>Select...</option>   
                                                <option value="1">1 Person</option>
                                                <option value="1">2 People</option>
                                                <option value="1">3 People</option>
                                                <option value="1">4 People</option>
                                                <option value="1">5 People</option>
                                                <option value="1">6 People</option>
                                                <option value="1">7 People</option>
                                                <option value="1">8 People</option>
                                                <option value="1">9 People</option>
                                                <option value="1">10 People</option>
                                            </Control.select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <Label htmlFor="date" className="col-sm-6 col-form-label">Date</Label>
                                        <div className="col">
                                            <Input id="date" className="form-control" name="date" type="date" placeholder="Date" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <Label className="col-sm-6 col-form-label">Table Type</Label>
                                        <div className="col-2 btn-group btn-group-toggle" data-toggle="buttons">
                                            <Label class="btn btn-success active">
                                            <Input type="radio" name="tableType" id="tableLarge" value="large" />Large
                                            </Label>
                                            <Label class="btn btn-primary">
                                            <Input type="radio" name="tableType" id="tableSmall" value="small" />Small
                                            </Label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col">
                                            <Button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</Button>
                                            <Button type="submit" class="btn btn-primary">Find a Table</Button>
                                        </div>
                                    </div>
                                    <Button type="submit" value="submit" color="primary">Reservation</Button>

                                </LocalForm>   
                            </div>   
                        </ModalBody> 
                </Modal>         
        
            </Fragment>
        );
    }
}

export default Reservation;    
