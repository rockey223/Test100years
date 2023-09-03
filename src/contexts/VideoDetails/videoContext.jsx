import { useContext,useEffect, useReducer,createContext } from "react";
import videoDetailsFunction from "../../FunctionCollection/videoDetails/videoDetailsFunctions"
import axios from "axios";
const videoDetails = createContext();
const initialState = {
    level1Videos: {},
    isLoading: false,
    level2Videos:{},
    
}

const API = `${process.env.REACT_APP_API}/api`;

const VideoProvider = ({children})=>{
    const [state, dispatch] = useReducer(videoDetailsFunction, initialState);

    function setLoading(){
        dispatch({type: "SET_LOADING"})
    }

    function getLevel1Video(){
        axios
        .get(`${API}/getAllLevel1CourseVideo`, { withCredentials: true })
        .then((res)=>{
            // console.log(res.data.data);
            const l1video = res.data.data
            dispatch({type: "GET_LEVEL1_VIDEO", payload:{l1video}})
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    function getLevel2Video(){
        axios
        .get(`${API}/getAllLevel2CourseVideo`, { withCredentials: true })
        .then((res)=>{
            // console.log(res.data.data);
            const l2video = res.data.data
            dispatch({type: "GET_LEVEL2_VIDEO", payload:{l2video}})
        })
        .catch((err)=>{
            console.log(err);
        })
    }
useEffect(()=>{
    getLevel1Video();
    getLevel2Video();
},[])

    return(
        <videoDetails.Provider value={{...state}}>
            {children}
        </videoDetails.Provider>
    )
}

const useVideo = () =>{
    return useContext(videoDetails);
}

export {VideoProvider, useVideo}