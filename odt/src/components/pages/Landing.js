import React, { Component } from "react";
import Modal from "../Modal";
import axios from 'axios'; 
 import "../pages/land.css"; 

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      taskList: []
    };
  }

  // Add componentDidMount()
  componentDidMount() {
    this.refreshList();
  }

 
  refreshList = () => {
    axios   //Axios to send and receive HTTP requests
      .get("http://localhost:8000/driving/TodoView/")
      .then(res => this.setState({ taskList: res.data }))
      .catch(err => console.log(err));
  };


  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };


  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <div
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Not allowed
            </div>
        <div
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Allowed
            </div>
      </div>
    );
  };

  // Main variable to render items on the screen
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      item => item.completed === viewCompleted
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <div
          className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
            }`}
          title={item.description}
        >
          {item.title}
        </div>
        <div>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            Edit
          </button>
          {/* <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete
          </button> */}
        </div>
      </li>
      
    ));
  };
  // ///////////////////////////////////////////////////////////

  ////add this after modal creation
  toggle = () => {//add this after modal creation
    this.setState({ modal: !this.state.modal });//add this after modal creation
  };

  // Submit an item
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      // if old post to edit and submit
      axios
        .put(`http://localhost:8000/driving/TodoView/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    // if new post to submit
    axios
      .post("http://localhost:8000/driving/TodoView/", item)
      .then(res => this.refreshList());
  };

  // Delete item
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/driving/TodoView/${item.id}/`)
      .then(res => this.refreshList());
  };
  // handleDelete = item => {//add this after modal creation
  //   alert("delete" + JSON.stringify(item));//add this after modal creation
  // };

  // Create item
  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  //Edit item
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };


  // -I- Start by visual effects to viewer
  render() {
    return (
      <main className="content">
        <h1 className="text-black text-uppercase text-center my-4">Driver's Licence</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-warning">
                  Add LicenceNo
                    </button>
              </div>
              <div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
              </div>
              
              
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default Landing;