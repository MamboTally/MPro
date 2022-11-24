import React, { Component } from "react";
// importing all of these classes from reactstrap module
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

// build a class base component
class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }
  // changes handler to check if a checkbox is checed or not
  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  // rendering modal in the custommodal class received toggle and on save as props,
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Driver Details </ModalHeader>
        <ModalBody>
        
          <Form>

            {/* 3 formgroups
            1 title label */}
            <FormGroup>
              <Label for="title">Licence Number</Label>
              <Input
                type="text"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Licence"
              />
            </FormGroup>

            {/* 2 description label */}
            <FormGroup>
              <Label for="description">Number of Accidents/Crimes</Label>
              <Input
                type="text"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter Number of Accidents/Crimes"
              />
            </FormGroup>
            <FormGroup>
              <Label for="decision">Deciosion</Label>
              <Input
                type="text"
                name="decision"
                value={this.state.activeItem.decision}
                onChange={this.handleChange}
                placeholder="Enter Decision"
              />
            </FormGroup>

            <FormGroup>
              <Label for="condition">Class</Label>
              <Input
                type="text"
                name="condition"
                value={this.state.activeItem.condition}
                onChange={this.handleChange}
                placeholder="Enter Type/Class eg Four"
              />
            </FormGroup>

            {/* 3 completed label */}
            <FormGroup check>
              <Label for="completed">
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                WriteOff
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        {/* create a modal footer */}
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default CustomModal