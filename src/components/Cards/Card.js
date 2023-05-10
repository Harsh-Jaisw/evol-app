
import { useSelector } from "react-redux";
import style from  "./card.module.css";
import {AiOutlineLike} from "react-icons/ai"
export function Cards() {
  // data fetch from local storage to persistance.
  // const data = JSON.parse(localStorage.getItem("data"));
   const data=useSelector((state)=>{
    return state.images
   })
  // const data=[]

  return (
    <div className={style.cardContainer}>
      {data?.map((item,i) => (
        <div className={style.cardWrapper}>
          <img src={item.reader} alt="" className={style.cardImage}  />
          <div className={style.cardAction}>
            <span className={style.cardLikecon}><AiOutlineLike /></span>
            <span className={style.time}>Uploaded at - {item.time} </span>
            </div>
          </div>
      ))}
    </div>
  );
}
