import React from 'react'

const Single = ({title,type, poster}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${poster}`} />
            <div style={{display: "flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
                <span>{title}</span>
                <span>{type}</span>
            </div>
        </div>
    )
}

export default Single
