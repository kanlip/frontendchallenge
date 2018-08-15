import React, { Component } from "react";
import { InputField, InputContainer } from "../styles/Navbar";
import { connect } from "react-redux";
import { onChange, submitSearch } from "../actions/search";
const mapStateToProps = state => ({
  requesting: state.search.requesting,
  search: state.search.username
});

@connect(
  mapStateToProps,
  { onChange, submitSearch }
)
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submitSearch(this.props.search);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputContainer>
            <InputField
              placeholder={"Search username"}
              value={this.props.search}
              onChange={this.handleChange}
              type={"text"}
            />
          </InputContainer>
        </form>
      </div>
    );
  }
}
