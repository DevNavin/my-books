import { Link } from "react-router-dom";
import MyBookContainer from "./MyBookContainer";

function MyBookList(props) {
    const { books, changeStatus } = props;
    return ( 
        <>
       <div>
           <Link to={'/search'}>
            Go To Search
           </Link> 
       </div>
       <div>
        <MyBookContainer books={books} title={'Currently Reading'} status={'currentlyReading'} changeStatus={(book,status)=>changeStatus(book,status)} />
       </div>
       <div>
        <MyBookContainer books={books} title={'Want to Read'} status={'wantToRead'} changeStatus={(book,status)=>changeStatus(book,status)} />
       </div>
       <div>
        <MyBookContainer books={books} title={'Read'} status={'read'} changeStatus={(book,status)=>changeStatus(book,status)} />
       </div>
        </>
     );
}

export default MyBookList;