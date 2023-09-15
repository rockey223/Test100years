const blogDetailsFunction = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_BLOGS":
      return {
        ...state,
        filter_blogs: [...action.payload],
        all_blogs: [...action.payload],
      };

    case "UPDATE_BLOG_FILTER":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case "FILTER_BLOGS":
      let { all_blogs } = state;
      let tempFilterBlog = all_blogs;

      const { category } = state.filters;

      if (category !== "All") {
        tempFilterBlog = tempFilterBlog.filter((curElem) => {
          return curElem.category === category;
        });
      }

      console.log(tempFilterBlog);

      return {
        ...state,
        filter_blogs: tempFilterBlog,
      };

    default:
      return state;
  }
};
export default blogDetailsFunction;
