import React from 'react'

//this is a single recipe cell rendered
//from RECIPES component

export default function (props) {
  console.log("SUCCESS!", props)
    // console.log("RECIPES", props)
    return (
      <div>
            <h1>HiZZZ!</h1>
      </div>
    )
}
            // <h1>{props.recipe.name}</h1>
            // <img alt="Food" src={props.recipe.photo}/>
            // <p>{props.recipe.updated_at}</p>
