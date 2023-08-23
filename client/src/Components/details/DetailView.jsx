import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/action/ProductAction";
import { Typography } from "@mui/material";

const DetailView = () =>{
    
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() =>{
        dispatch(getProductDetails(id))
    },[dispatch,id])
    return(
       <Typography>{`Hello from id : ${id}`}</Typography>
    )
}

export default DetailView;