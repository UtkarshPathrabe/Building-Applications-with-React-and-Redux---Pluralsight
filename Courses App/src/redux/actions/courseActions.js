import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

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
		return courseApi
			.getCourses()
			.then((courses) => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch((error) => {
				throw error;
			});
	};
};

export const saveCourse = (course) => {
	return function (dispatch) {
		return courseApi
			.saveCourse(course)
			.then((savedCourse) => {
				savedCourse.id
					? dispatch(updateCourseSuccess(savedCourse))
					: dispatch(createCourseSuccess(savedCourse));
			})
			.catch((error) => {
				throw error;
			});
	};
};
