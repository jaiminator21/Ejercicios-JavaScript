import React from 'react'

function DBZCard(props) {
    const data = props.data;
    const cardWidth = 300
    console.log(data);
    return (
        <div className='container-card-main'>
            <div className='card-upper'>
            <div className='card-img'  style={{ backgroundImage: `url(${data.image})`}}></div>
          {/*     <img className='magolo'src={data.image} alt="" />  */}
            </div>
            <div className='card-lower'>
                <div className='card-info-box'>
                    <div className='card-info'>
                        <h1>{data.name}</h1>
                        <h2>{data.race} - {data.gender}</h2>
                    </div>
                    <div className='card-info'>
                        <h3>Base KI:</h3>
                        <p>{data.ki}</p>
                    </div>
                    <div className='card-info'>
                    <h3>Base KI:</h3>
                        <p>{data.maxKi}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DBZCard