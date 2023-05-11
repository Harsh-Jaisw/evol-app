import style from "./Top.module.css"
import { useSelector } from "react-redux"
import {AiOutlineLike} from "react-icons/ai"
function Top() {
  const data=useSelector((state)=>{
    return state.images
  })

  return (
    <div className={style.cardContainer}>
      {data.map((item,i) => (
        <div className={style.cardWrapper}>
          <img src={item.reader} alt="" className={style.cardImage}  />
          <div className={style.cardAction}>
          <div className={style.cardLikecon}>
            <span  ><AiOutlineLike /></span> 
            <span> {item.like} </span>
            </div>
            <span className={style.time}>Uploaded at - {item.time} </span>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Top
