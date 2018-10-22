import React, { Component } from "react";
import "./App.css";
import DenseAppBar from "./components/appBar";
import TodoList from "./components/TodoList";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FormDialog from "./components/Dialog";
import TabsBar from "./components/TabsBar";
import { visibilityFilters } from "./utils/filterUtils";
import getFilteredItems from "./utils/filterUtils";

const addButtonStyle = {
  marginTop: "5%",
  marginRight: "5px",
  float: "right"
};

const list = [
  { id: 0, item: "Todo 1", enabled: true },
  { id: 1, item: "Todo 2", enabled: true },
  { id: 2, item: "Todo 3", enabled: false }
];

class App extends Component {
  state = {
    open: false,
    list: list,
    filter: visibilityFilters.SHOW_ALL
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = entry => {
    let data = [...this.state.list, { item: entry, enabled: true }];
    this.setState({ list: data, open: false });
  };

  handleDelete = index => {
    let data = this.state.list;
    data.splice(index, 1);
    this.setState({ list: data });
  };

  handleToggle = index => {
    let data = this.state.list;
    data[index].enabled = !data[index].enabled;
    this.setState({ list: data });
  };

  handleTabClick = (event, filter) => {
    console.log("filter: " + filter);
    this.setState({ filter: filter });
  };

  render() {
    const { list, filter } = this.state;

    return (
      <React.Fragment>
        <DenseAppBar />
        <TabsBar
          filter={this.state.filter}
          handleTabClick={this.handleTabClick}
        />
        <TodoList
          list={getFilteredItems(list, filter)}
          handleDelete={this.handleDelete}
          handleToggle={this.handleToggle}
        />
        <FormDialog
          open={this.state.open}
          handleClose={this.handleClose}
          handleSave={this.handleSave}
        />
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}
          style={addButtonStyle}
        >
          <AddIcon />
        </Button>
      </React.Fragment>
    );
  }
}

export default App;
