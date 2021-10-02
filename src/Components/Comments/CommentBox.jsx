import React, {useState} from 'react';
import styles from './CommentBox.module.css';
import { GoBold } from 'react-icons/go';
import { GoItalic } from 'react-icons/go';
import { TiAttachmentOutline } from 'react-icons/ti';
import { AiOutlineStrikethrough } from 'react-icons/ai';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { loadData } from "../../utils/localStorage";

const CommentBox = () => {
    const history = useHistory();
  const { postId } = useParams();
    const [cmntBody, setCmntBody] = useState('');
    const [text, setText] = useState("");

// console.log(postId);

    const postCmnt = () => {

        const token = loadData("token");
    const formData = new FormData();

    formData.append('text', text);
    // formData.append('userId', _id);
    // formData.append("communityId",communityId)

    axios.post( `https://reddit-new.herokuapp.com/comments/${postId}`, {
      headers: {

        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + token
      },
      body: cmntBody
    })
    .then((res) => {
        // setUploadedFile(res.data);
        // console.log(uploadedFile)
        // setIsLoading(false);
        // history.push("/");
        console.log();
      }).catch(err => {
        // console.log(err.response);
      });
  }
    return (
        <>
            <div className={styles.cmnt_outer_box}>
<div className={styles.cmnt_userName}><span>Comment as User</span></div>
<div className={styles.cmnt_main_box}>
   <textarea 
   name="cmnt" 
   id="cmnt" 
   cols="100" 
   rows="10" 
   placeholder="What are your thoughts?" 
   onChange={(e)=>setCmntBody(e.target.value)}
   value={cmntBody}
   >
       
   </textarea>
   <div className={styles.cmnt_tools}>
       <div className={styles.cmnt_tools_1}>
           <div><button onClick={postCmnt}>Comment</button></div>
       </div>
       <div className={styles.cmnt_tools_1_1}>
           <span><GoBold /></span>
           <span><GoItalic /></span>
           <span><TiAttachmentOutline /></span>
           <span><AiOutlineStrikethrough /></span>
           <span></span>
           <span></span>
       </div>
   </div>
</div>
            </div>
        </>
    )
}

export default CommentBox
