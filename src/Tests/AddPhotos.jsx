import React,{useState, useEffect} from 'react';
import logo from  "../logo.svg"

const AddPhotos = () => {
    const [Background, setBackground] = useState({pranav:""});
    // const [backgroundText, setbackgroundText] = useState("")

    useEffect(()=>{
        setBackground({pranav:"red"})
    },[])
    const Back = (event)=>{
        console.log(event.target.value)
        setBackground({pranav:event.target.value})
    }

export default AddPhotos;
