import React, { Component } from "react";
import { connect } from "react-redux";
import { StyledSpinner, DivCenter, DivCard } from "../styles/styled-utils";
const mapStateToProps = state => ({
  requesting: state.search.requesting,
  search: state.search.username,
  users: state.search.users
});

@connect(mapStateToProps)
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  renderUsers() {
    if (this.props.users.items !== undefined) {
      this.props.users.items.map(users => {
        console.log(users);
      });
    }
  }

  render() {
    this.renderUsers();
    return (
      <div>
        {this.props.requesting === true ? (
          <DivCenter>
            <StyledSpinner viewBox="0 0 50 50">
              <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
              />
            </StyledSpinner>
          </DivCenter>
        ) : (
          <DivCard>Users HERE</DivCard>
        )}
      </div>
    );
  }
}
