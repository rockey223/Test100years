const blogDetailsFunction = (state, action) => {
  let { all_blogs } = state;
  switch (action.type) {
    case "GET_All_BLOG":
      const { allBlogWithCategoryName } = action.payload;
      return {
        ...state,
        all_blogs: [...allBlogWithCategoryName],
        filter_blogs: [...allBlogWithCategoryName],
      };

    case "GET_ALL_CATEGORY":
      const { allCategories } = action.payload;
      // console.log(action.payload);
      console.log(allCategories);
      return {
        ...state,
        categories: [action.payload],
      };

    case "GET_ONE_BLOG":
      return {
        ...state,
        oneBlog: action.payload,
      };
    // case "LOAD_FILTER_BLOGS":
    //   return {
    //     ...state,
    //     filter_blogs: [...action.payload],
    //     all_blogs: [...action.payload],
    //   };

    case "UPDATE_BLOG_FILTER":
      const { name, value } = action.payload;
console.log(name, value);
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case "FILTER_BLOGS":
      let tempFilterBlog = all_blogs;

      const { companyBlogCategoryName } = state.filters;

      if (companyBlogCategoryName !== "All") {
        tempFilterBlog = tempFilterBlog.filter((curElem) => {
          return curElem.companyBlogCategoryName === companyBlogCategoryName;
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
