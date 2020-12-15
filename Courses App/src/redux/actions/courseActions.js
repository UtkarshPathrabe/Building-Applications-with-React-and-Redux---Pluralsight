import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

const loadCoursesSuccess = (courses) => {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
};

const updateCourseSuccess = (course) => {
	return { type: types.UPDATE_COURSE_SUCCESS, course };
};

const createCourseSuccess = (course) => {
	return { type: types.CREATE_COURSE_SUCCESS, course };
};

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
