import CommentSection from "../CommentSection/CommentSection";
import './ArticlePage.css'

const ArticlePage =() => {
    const comments = [
        {author: 'Rashed Islam', content: 'Good content. Want more'},
        {author: 'Sohel Sheikh', content: 'Alhamdulliah, May Allah bless you'},
        {author: 'Yeasin Arafat', content: 'Good content! Eagerly wating for the next'},
        {author: 'Sohel Sheikh', content: 'Alhamdulliah, May Allah bless you'},
        {author: 'Yeasin Arafat', content: 'Good content! Eagerly wating for the next'},
        {author: 'Abid Hasan', content: 'InshaAllah, we will meet soon brother!'},
        {author: 'Yeasin Arafat', content: 'Good content! Eagerly wating for the next'},
        {author: 'Abid Hasan', content: 'InshaAllah, we will meet soon brother!'},
        {author: 'Din Islam', content: 'Happy to hear you'},
        {author: 'Abdur Rahman', content: 'MashAllah, May Allah give you ease'},
        {author: 'Din Islam', content: 'Happy to hear you'},
        {author: 'Abdur Rahman', content: 'MashAllah, May Allah give you ease'},
    ]
    return (
        <>
        <h1 className="comments_heading" >Comment Section (Task: 04)</h1>
        <div className="comments_page">
            {
                comments.map(comment =>  <CommentSection comment={comment} />)
            }
        </div>
        </>
    )
}

export default ArticlePage; 

// {
//     import React {useState} from 'react'
// export default function Counter(){
//     cosnt [count, setCount] = useState({a: 5, b: 6});
//     const increment = (prevState) => {
//         setCount(() => {
//             ...prevState,
//             a:prevState.a + 1;
//         });
//     };
// };

// return 
// }