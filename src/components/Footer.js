import React from 'react'

export default function Footer(props) {
  return (
    <div className={`copyright text-${props.mode==="light"?"dark":"light"} bg-${props.mode==="light"?"light":"dark"}`}>

    <div className="container">
        <h2>©️ 2022, Som - All Rights Reserved</h2>
    </div>
    </div>
  )
}
