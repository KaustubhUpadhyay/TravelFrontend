import React, { useRef, useState } from "react";
import axios from "axios";
import "./Image.css";

function Image(props){

    const [image,setImage] = useState();

    const url = "https://api.unsplash.com/search/photos?page=1&query=" + props.query + "&client_id=zQlCQOxOOX2UxJ1E6mYJd3Iv-RuzX2ZaS5i6IvkvqIs";
    // props.setImgBool(false);
    axios.get(url)
    .then((response) => {

        console.log(response.data.results["0"].urls.small);

        setImage(response.data.results["0"].urls.small);
    })

    return(

        <div>
            <img className="imgClass" src={image}></img>
        </div>
    )

}

export default Image;