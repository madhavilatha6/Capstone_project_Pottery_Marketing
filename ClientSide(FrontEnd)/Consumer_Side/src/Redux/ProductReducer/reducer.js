import {
    GET_ALL_COURSE_REQUEST,
    GET_ALL_COURSE_FAILURE,
    GET_ALL_COURSE_SUCCESS,

    GET_ALL_TOPIC_REQUEST,
    GET_ALL_TOPIC_FAILURE,
    GET_ALL_TOPIC_SUCCESS,
  } from "./actiontype";
  
  export const initState = {
    courseData: [],
    error: "",
    loading: false,
  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case GET_ALL_COURSE_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case GET_ALL_COURSE_FAILURE:
        return {
          ...state,
          loading: false,
          error: "Something went wrong",
        };
      case GET_ALL_COURSE_SUCCESS:
        return {
          ...state,
          error: "",
          loading: false,
          courseData: action.payload,
        };

        case GET_ALL_TOPIC_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case GET_ALL_TOPIC_FAILURE:
        return {
          ...state,
          loading: false,
          error: "Something went wrong",
        };
      case GET_ALL_TOPIC_SUCCESS:
        return {
          ...state,
          error: "",
          loading: false,
          topicData: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default reducer;