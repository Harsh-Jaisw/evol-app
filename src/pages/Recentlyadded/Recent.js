import React from 'react'
import style from "./Recent.module.css"
import { useSelector } from "react-redux"
import {AiOutlineLike} from "react-icons/ai"
function Recent() {
  const data=useSelector((state)=>{
    return state.images
  })
  console.log(data)
  return (
    <div className={style.cardContainer}>
    {data?.map((item,i) => (
      <div key={i} className={style.cardWrapper}>
        <img src={item.reader} alt="" className={style.cardImage}  />
        <div className={style.cardAction}>
        <div className={style.cardLikecon}>
            <span ><AiOutlineLike /></span> 
            <span> {item.like} </span>
            </div>
          <span className={style.time}>Uploaded at - {item.time} </span>
          </div>
        </div>
    ))}
  </div>
  )
}

export default Recent
