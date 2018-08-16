import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import {
  StyledSpinner,
  DivCenter,
  DivCard,
  Img,
  DivBody
} from "../styles/styled-utils";
import { submitSearch } from "../actions/search";
import Axios from "axios";
import Pagination from "material-ui-pagination";
import { Helmet } from "react-helmet";
const mapStateToProps = state => ({
  requesting: state.search.requesting,
  search: state.search.username,
  users: state.search.users,
  total: state.search.totalPage,
  page: state.search.page
});

@connect(
  mapStateToProps,
  { submitSearch }
)
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  renderUsers() {
    let followers = 0;

    if (this.props.users.items !== undefined) {
      const data = this.props.users.items.map((users, index) => {
        return (
          <div style={{ paddingTop: "10px" }} key={users.id}>
            <DivCard
              onClick={() =>
                (window.location.href = "/username=" + users.login)
              }
            >
              <div>
                <Img alt={"avatar"} src={users.avatar_url} />
              </div>
              <div>
                <h2>{users.login}</h2>
              </div>
            </DivCard>
          </div>
        );
      });
      return data;
    }
  }
  handleChange(number) {
    this.props.submitSearch(this.props.search, number);
  }
  render() {
    return (
      <DivBody>
        <Helmet>
          <title>Home</title>
          <meta name="description" content={"Oddle Challenge"} />
        </Helmet>
        <Navbar />
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
          this.renderUsers()
        )}
        <DivCenter>
          {this.props.users.length === 0 ? null : (
            <Pagination
              onChange={this.handleChange}
              total={this.props.total}
              current={this.props.page}
              display={6}
            />
          )}
        </DivCenter>
      </DivBody>
    );
  }
}
