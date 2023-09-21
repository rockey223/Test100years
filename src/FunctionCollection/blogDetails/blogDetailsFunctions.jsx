const blogDetailsFunction = (state, action) => {
  let { all_blogs } = state;
  switch (action.type) {


    case "GET_All_BLOG":
      const {allBlog} = action.payload
      return{
        ...state,
        all_blogs: [...allBlog],
        filter_blogs: [...allBlog],
      }

      case "GET_ALL_CATEGORY":
        const {allCategories} = action.payload
        // console.log(action.payload);
        return{
          ...state,
          categories: [...allCategories]
        }

        case "GET_ONE_BLOG":
         
  return{
    ...state,
    oneBlog :action.payload
  }
    // case "LOAD_FILTER_BLOGS":
    //   return {
    //     ...state,
    //     filter_blogs: [...action.payload],
    //     all_blogs: [...action.payload],
    //   };

    case "UPDATE_BLOG_FILTER":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case "FILTER_BLOGS":
      
      let tempFilterBlog = all_blogs;

      const { companyBlogCategory } = state.filters;

      if (companyBlogCategory !== "All") {
        tempFilterBlog = tempFilterBlog.filter((curElem) => {
          return curElem.companyBlogCategory === companyBlogCategory;
        });
      }
      return {
        ...state,
        filter_blogs: tempFilterBlog,
      };

    default:
      return state;
  }
};
export default blogDetailsFunction;
