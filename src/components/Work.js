import React from 'react'

export default function Work(props) {
  return (
    <div className="work main">
    <h1 className="heading text-primary">Work</h1>
    <div className={`container workinfo text-${props.mode==="light"?"dark":"light"} bg-${props.mode==="light"?"light":"dark"}`}>
      <h2>A Self Taught Developer, and Cyber Security enthusiast!</h2>
      <span>
I believe that the internet is an amazing place, but there can be negative connotations that with the proper knowledge can help you stay safe.</span>
    </div>
    </div>
  )
}
