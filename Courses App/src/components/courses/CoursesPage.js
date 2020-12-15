import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {
	componentDidMount() {
		const { courses, actions, authors } = this.props;
		if (courses.length === 0) {
			actions.loadCourses().catch((error) => {
				alert('Loading courses failed ' + error);
			});
		}
		if (authors.length === 0) {
			actions.loadAuthors().catch((error) => {
				alert('Loading authors failed ' + error);
			});
		}
	}

	render() {
		return (
			<>
				<h2>Courses</h2>
				<CourseList courses={this.props.courses} />
			</>
		);
	}
}

CoursesPage.propTypes = {
	authors: PropTypes.array.isRequired,
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

const formatCourseData = (state) => {
	return state.courses.map((course) => {
		return {
			...course,
			authorName: state.authors.find((a) => a.id === course.authorId).name,
		};
	});
};

const mapStateToProps = (state) => {
	return {
		courses: state.authors.length !== 0 ? formatCourseData(state) : [],
		authors: state.authors,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
			loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
