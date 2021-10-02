import React from 'react';
import styles from './CommentBox.module.css';
import { GoBold } from 'react-icons/go';
import { GoItalic } from 'react-icons/go';
import { TiAttachmentOutline } from 'react-icons/ti';
import { AiOutlineStrikethrough } from 'react-icons/ai';

const CommentBox = () => {
    return (
        <>
            <div className={styles.cmnt_outer_box}>
<div className={styles.cmnt_userName}><span>Comment as User</span></div>
<div className={styles.cmnt_main_box}>
   <textarea name="cmnt" id="cmnt" cols="100" rows="10" placeholder="What are your thoughts?"></textarea>
   <div className={styles.cmnt_tools}>
       <div className={styles.cmnt_tools_1}>
           <div></div>
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
