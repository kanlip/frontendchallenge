import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, fetchRepo } from "../actions/search";
import { StyledSpinner, DivCenter, DivCard } from "../styles/styled-utils";
import { Parallax, Background } from "react-parallax";
import UserRepo from "./renderRepos";
import Pagination from "material-ui-pagination";
import {
  Container,
  Img,
  DivChild,
  DivFollow,
  Button
} from "../styles/Userpage";
const mapStateToProps = state => ({
  requesting: state.search.requesting,
  user: state.search.user,
  fetching: state.search.fetching,
  repos: state.search.repos,
  page: state.search.pageRepo,
  total: state.search.totalPageRepo
});

@connect(
  mapStateToProps,
  { fetchUser, fetchRepo }
)
export default class Userpage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }
  handleClick() {
    this.props.fetchRepo(
      this.props.user.repos_url,
      this.props.page,
      this.props.user.public_repos
    );
  }
  handleChange(number) {
    this.props.fetchRepo(
      this.props.user.repos_url,
      number,
      this.props.user.public_repos
    );
  }

  render() {
    return (
      <div>
        {/* <a href='/'>Goback to homepage</a> */}
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
          <div>
            <Parallax
              blur={{ min: -10, max: 15 }}
              bgImage={
                "https://res.cloudinary.com/kanlip/image/upload/v1534401530/programming.png"
              }
              bgImageAlt="programming"
              strength={400}
            >
              <DivCenter>
                <Container>
                  <DivChild>
                    <Img src={this.props.user.avatar_url} alt={"profile"} />
                  </DivChild>
                  <DivChild>
                    <h1>{this.props.user.name}</h1>
                    <br />

                    <h2>
                      <i className="fas fa-map-marker-alt" />{" "}
                      {this.props.user.location === null
                        ? "No location"
                        : this.props.user.location}
                    </h2>
                    <p>
                      Bio:
                      {this.props.user.bio === null
                        ? "No Bio"
                        : this.props.user.bio}
                    </p>
                  </DivChild>
                  <DivChild>
                    <DivFollow>
                      <h2>Followers: {this.props.user.followers}</h2>
                      <h2>Following: {this.props.user.following}</h2>
                      <Button onClick={this.handleClick}>
                        <span>View {this.props.user.public_repos} Repos</span>
                      </Button>
                    </DivFollow>
                  </DivChild>
                </Container>
              </DivCenter>
            </Parallax>
            <div>
              <UserRepo />
            </div>
            <DivCenter>
              {this.props.repos.length === 0 ? null : (
                <Pagination
                  onChange={this.handleChange}
                  total={this.props.total}
                  current={this.props.page}
                  display={6}
                />
              )}
            </DivCenter>
          </div>
        )}
      </div>
    );
  }
}
