import React from "react";

function Lista(props) {

    const data = props.data;

    let html = ' ';

    data.forEach(element => {
        
        html += `<li>${element}</li>`;

    });


    return (
    <div>
        <ul>
            {html}
        </ul>
    </div>
    )
}

export default Lista;
