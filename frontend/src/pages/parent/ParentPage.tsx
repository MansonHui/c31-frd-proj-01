import { useNavigate } from "react-router-dom";
import { useGetAllClass } from "../../api/ParentPageAPI";
import styles from "./Parent.module.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ParentPage() {
    const navigate = useNavigate();
    const allClass = useGetAllClass();
      
    return (
        <div>
            {allClass.map((entry)=> (
                 <div onClick={()=>navigate("../Message")} className={styles.School_Container}>
                 <div className={styles.UserSchool_Container}>
                     <div className={styles.UserSchool_Logo}></div>
                     <div className={styles.UserSchool_Name}>
                         <p>{entry.school_name}</p>
                     </div>
                     <div className={styles.UserSchool_Info}><MoreVertIcon fontSize="large"/></div>
                 </div>
                 <div className={styles.UserChild_Container}>
                     <div className={styles.UserChild_photo}>{entry.student_image}</div>
                     <div className={styles.UserChild_Info}>
                         <div className={styles.UserChild_Information}>{entry.admin_username}</div>
                         <div className={styles.UserChild_Information}>{entry.student_last_name}{entry.student_first_name}</div>
                         <div className={styles.UserChild_Information}>{entry.school_year}{entry.class_name}</div>
                         <div className={styles.UserChild_Information}>{entry.school_year}</div>
                         <div className={styles.UserChild_Information}></div>
                         
                     </div>
                 </div>
             </div>

            )
                
                
            )}
        </div>

       
       
    )
}
