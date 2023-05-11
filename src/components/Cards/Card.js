import { useDispatch, useSelector } from "react-redux";
import style from  "./card.module.css";
import {AiOutlineLike} from "react-icons/ai"
import { addLikes } from "../../Store/Slices/imageSlices";
export function Cards() {
  const dispatch=useDispatch()
  // data fetch from local storage to persistance.
  // const data = JSON.parse(localStorage.getItem("data"));
   const data=useSelector((state)=>{
    return state.images
   })
    // const [like,setLike]=useState(0)
   function handleLike(id){
      dispatch(addLikes(id))
    }
  return (
  
    <div className={style.cardContainer}>
      
      {data?.map((item,i) => (
        <div className={style.cardWrapper}>
          <img src={item.reader} alt="" className={style.cardImage}  />
          <div className={style.cardAction}>
            <div className={style.cardLikecon}>
            <span  onClick={()=>handleLike(i)}><AiOutlineLike /></span> 
            <span> {item.like} </span>
            </div>
            <span className={style.time}>Uploaded at - {item.time} </span>
            </div>
          </div>
      ))}
    </div>
  );
}
