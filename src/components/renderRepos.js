import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Card } from "../styles/Userpage";
import { StyledSpinner, DivCenter, DivCard } from "../styles/styled-utils";
const mapStateToProps = state => ({
  fetching: state.search.fetching,
  repos: state.search.repos
});

@connect(
  mapStateToProps,
  {}
)
export default class RenderRepos extends Component {
  constructor(props) {
    super(props);
  }
  renderRepo() {
    const repos = this.props.repos.map(repo => (
      <Card
        key={repo.id}
        onClick={() => (window.location.href = repo.html_url)}
      >
        <h2>{repo.name}</h2>
        <h3>
          <i class="fas fa-code-branch" />
          {repo.default_branch}
        </h3>
        <p>{repo.language}</p>
        <p>
          <i class="fas fa-star" /> {repo.stargazers_count}
        </p>
        <p>
        <i class="fas fa-eye"></i> {repo.watchers_count}
        </p>
      </Card>
    ));
    return repos;
  }
  render() {
    return (
      <div>
        {this.props.fetching === true ? (
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
          <Container>{this.renderRepo()}</Container>
        )}
      </div>
    );
  }
}
