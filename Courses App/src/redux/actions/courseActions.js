import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

const loadCoursesSuccess = (courses) => ({
	type: types.LOAD_COURSES_SUCCESS,
	courses,
});

const updateCourseSuccess = (course) => ({
	type: types.UPDATE_COURSE_SUCCESS,
	course,
});

const createCourseSuccess = (course) => ({
	type: types.CREATE_COURSE_SUCCESS,
	course,
});

const deleteCourseOptimistic = (course) => ({
	type: types.DELETE_COURSE_OPTIMISTIC,
	course,
});

export const loadCourses = () => {
	return function (dispatch) {
		dispatch(beginApiCall());
		return courseApi
			.getCourses()
			.then((courses) => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
};

export const saveCourse = (course) => {
	return function (dispatch) {
		dispatch(beginApiCall());
		return courseApi
			.saveCourse(course)
			.then((savedCourse) => {
				course.id
					? dispatch(updateCourseSuccess(savedCourse))
					: dispatch(createCourseSuccess(savedCourse));
			})
			.catch((error) => {
				dispatch(apiCallError(error));
				throw error;
			});
	};
};

export const deleteCourse = (course) => {
	return function (dispatch) {
		// Doing optimistic delete, so not dispatching begin/end api call
		// actions, or apiCallError action since we're not showing the loading status for this.
		dispatch(deleteCourseOptimistic(course));
		return courseApi.deleteCourse(course.id);
	};
};
