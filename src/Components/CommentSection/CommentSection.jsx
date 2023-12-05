import './CommentSection.css'
const CommentSection = ({comment}) => {
    const {author, content} = comment 
    return(
        <>
        <div className="single_comment">
            <h4>{author}</h4>
            <p>{content}</p>
        </div>
        </>
    )
}

export default CommentSection;