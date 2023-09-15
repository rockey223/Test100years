import { useContext, useEffect, useReducer, createContext } from "react";
import blogDetailsFunction from "../../FunctionCollection/blogDetails/blogDetailsFunctions";
import axios from "axios";
import blogs from "../../components/dummy/blog";
const blogDetails = createContext();
const initialState = {
  filter_blogs: [],
  all_blogs: blogs,
  filters: {
    category: "All",
  },
};

const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogDetailsFunction, initialState);

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_BLOG_FILTER", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_BLOGS" });
  }, [blogs, state.filters]);


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_BLOGS", payload: blogs });
  }, [blogs]);


  return (
    <blogDetails.Provider value={{ ...state, updateFilterValue }}>
      {children}
    </blogDetails.Provider>
  );
};

const useBlog = () => {
  return useContext(blogDetails);
};

export { BlogProvider, useBlog };
