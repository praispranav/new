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
    return (
        <div>
            <img src={logo} alt="none
                       height: "2000"
                    background:Background.pranav
                }}
            />
            {Background.pranav  }
            <input type="text" name="pranav"
                onChange={(event)=> Back(event)} value={Background.pranav} />
        </div>
    );
}

export default AddPhotos;
