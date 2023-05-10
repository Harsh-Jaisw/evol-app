import style from "./Top.module.css"
import { useSelector } from "react-redux"
import {AiOutlineLike} from "react-icons/ai"
function Top() {
  const data=useSelector((state)=>{
    return state.images
  })
  console.log(data)
  return (
    <div className={style.cardContainer}>
      {data.map((item,i) => (
        <div className={style.cardWrapper}>
          <img src={item.reader} alt="" className={style.cardImage}  />
          <div className={style.cardAction}>
            <span className={style.cardLikecon}><AiOutlineLike /> {item.like}</span>
            <span className={style.time}>Uploaded at - {item.time} </span>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Top
