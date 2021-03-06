import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateAssignmentButton from "./Project/CreateAssignmentButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;
    return (
      <div className="projects main-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 dashboard-content">
              <h1 className="display-4 text-center">Assignment list</h1>
              <br />
              <CreateAssignmentButton />
              <br />
              <hr />
              {projects.map(project => (
                <ProjectItem key={project.id} project={project} />
              ))}
              {/*
                  <!-- Comments -->
              */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);
