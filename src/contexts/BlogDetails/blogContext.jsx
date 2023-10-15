import { useContext, useEffect, useReducer, createContext } from "react";
import blogDetailsFunction from "../../FunctionCollection/blogDetails/blogDetailsFunctions";
import axios from "axios";
// import blogs from "../../components/dummy/blog";
const blogDetails = createContext();
const initialState = {
  filter_blogs: [],
  all_blogs: [],
  filters: {
    companyBlogCategoryName: "All",
  },
  categories: [],
};
const API = `${process.env.REACT_APP_API}/api`;

const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogDetailsFunction, initialState);

  const getAllCompanyBlog = () => {
    axios
      .get(`${API}/getAllCompanyBlog`)
      .then((res) => {
        // console.log(res.data.data);
        const allBlog = res.data.data;
        const finalDate = allBlog.map((item) => {
          const dateStr = item.createDate;
          const date = new Date(dateStr);
          const options = {
            year: 'numeric', month: 'long', day: 'numeric'
          };
          const nepalTime = date.toLocaleDateString("en-US", options);
          const onlyDate = nepalTime.split(",")[0].trim();

          return {
            ...item,
            createdDate: onlyDate,
          };
        });


        const allBlogWithCategoryName = finalDate.map((item)=>{
          console.log(state.categories);
          
          const catName = state.categories.find((cat) => item.companyBlogCategory === cat._id);
          console.log(catName);
          return {
            ...item,
            companyBlogCategoryName :  catName.companyBlogCategoryName
          }
        })

       console.log(allBlogWithCategoryName)
        // const userName = res.data.user.userFullName[0];
        dispatch({ type: "GET_All_BLOG", payload: { allBlogWithCategoryName } });
      })
      .catch((err) => {
        // dispatch({ type: "GET_MY_INFO_ERROR", payload: err });
        console.log(err);
      });
  };

  const getAllCategory = () => {
    
    axios
      .get(`${API}/getAllCompanyBlogCategory`)
      .then((res) => {
        // console.log(res.data.data);
        const allCategories = res.data.data;
       
        state.categories = allCategories
        console.log(state.categories)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_BLOG_FILTER", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_BLOGS" });
  }, [state.all_blogs, state.filters]);

  // useEffect(() => {
  //   dispatch({ type: "LOAD_FILTER_BLOGS", payload: state.all_blogs });
  // }, []);

  useEffect(() => {

    
    getAllCategory();

    getAllCategory && getAllCompanyBlog();
  }, []);

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
