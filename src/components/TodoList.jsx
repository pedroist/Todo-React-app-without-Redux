import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import TodoListItem from "./todoListItem";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class TodoList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {this.props.list.map((value, index) => (
            <TodoListItem
              key={index}
              index={index}
              item={value.item}
              enabled={value.enabled}
              handleDelete={this.props.handleDelete}
              handleToggle={this.props.handleToggle}
            />
          ))}
        </List>
      </div>
    );
  }
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoList);
