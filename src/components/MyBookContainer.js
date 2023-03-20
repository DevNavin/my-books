import Mybook from "./MyBook";

function MyBookContainer(props) {
  const { books, title, status, search, changeStatus } = props;
  return (
    <>
      <h3 className="my-book-list-title">{title}</h3>
      <div className="my-book-list">
        { !search?
            books.map(item=>{
                return (item.shelf === status ? <Mybook name={item.title} img={item?.imageLinks?.smallThumbnail} status={item.shelf} book={item} changeStatus={(book,status)=>changeStatus(book,status)} />:null)
            })
            :
            books.map(item=>{
                return (<Mybook name={item.title} img={item?.imageLinks?.smallThumbnail} status={item.shelf} book={item} changeStatus={(book,status)=>changeStatus(book,status)} />)
            })
        }
      </div>
    </>
  );
}

export default MyBookContainer;
