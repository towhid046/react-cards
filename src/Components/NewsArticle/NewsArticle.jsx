import './NewsArticle.css'
const NewsArticle = (props) => {
    const {title, author, publicationDate, content} = props.article;
    return (
        <>
        <div className="single_article">
            <h2>{title}</h2>
            <strong>Reporter: {author}</strong>
            <p className='publication_date'><i>Date: {publicationDate}</i></p>
            <p>{content}</p>
        </div>
        </>
    )
}

export default NewsArticle;