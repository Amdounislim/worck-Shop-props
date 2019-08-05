import React from 'react'

const Contact = ({name, tel}) => {
    return (
        <div style={{
            width: "200px",
            height: "200px",
            backgroundColor: "gray",
            margin: "5px"
          }}>
            <h2>Name: {name}</h2>
            <span>Tel : {tel}</span>
        </div>
    )
}

export default Contact