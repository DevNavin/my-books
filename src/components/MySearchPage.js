import { Link } from "react-router-dom";
import MyBookContainer from "./MyBookContainer";

function MySearchPage(props) {
    const { books, changeStatus, search, getBooks } = props;
    const handleChange = (event) =>{
        const { value } = event.target;
        search(value);
    }
    return ( 
        <>
        <div>
            <Link to={'/'} onClick={()=>{getBooks()}}>
                Back to Home
            </Link>
        </div>
        <div>
            <div className="search-label">
                Search Book:
            </div>
            <div className="search-input">
            <input onChange={(e)=>handleChange(e)} />
            </div>
        </div>
        <div>
        <MyBookContainer books={books} title={'Search Results'} search={true} changeStatus={(book,status)=>changeStatus(book,status)} />
       </div>
        </>
     );
}

export default MySearchPage;