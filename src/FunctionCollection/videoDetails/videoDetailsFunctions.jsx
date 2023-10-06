const videoDetailsFunction = (state, action) => {
  switch (action.type) {

    case "GET_LEVEL1_VIDEO": 
    return{
        ...state,
        level1Videos: action.payload.l1video,
        

    }
    case "GET_LEVEL2_VIDEO": 
    return{
        ...state,
        level2Videos: action.payload.l2video,
        
    }

    case "GET_FEATURED_VIDEOS":
      return{
        ...state,
        featuredVideos : action.payload.featuredvideos,
      }
    case "SET_LOADING":
      return{
        ...state,
        isLoading: true
      }

      case "Change_Static":
        return{
          ...state,
          isStatic: true
        }

    default:
      return state;
  }
};
export default videoDetailsFunction;
