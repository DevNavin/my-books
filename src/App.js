import "./App.css";
import MyHeader from "./components/myheader";
import { Route, Routes } from "react-router-dom";
import MyBookList from "./components/MyBookList";
import MySearchPage from "./components/MySearchPage";
import { useEffect, useState } from "react";
import MyBookApi from './components/MyBookApi'


function App() {
  const [bookList, setbookList] = useState([]);
  const [serchedBooks, setSerchedBooks] = useState([]);

  useEffect(() => {
    getBooks();
    return () => {

    }
  }, []);

  const getBooks = () =>{
    MyBookApi.getAllBooks()
    .then(books => {
      setbookList(books)
    })
  }
  const search = (SeachString) =>{
    if(SeachString){
      MyBookApi.searchBooks(SeachString).then(books => {
        if (books.error) {
          setSerchedBooks([]);
        } else {
          setSerchedBooks(books);
        }
        console.log(books)
      });
    }else{
      setSerchedBooks([]);
    }
  }
  const changeStatus = (book,status) =>{
    const { id } = book;
    MyBookApi.updateBooks(book, status).catch(err => {
      console.log(err);
    });
    let data = bookList.map(item=>{
      return item.id === id ? {...item,...{shelf:status}}:item;
    });
    setbookList(data); 
  }
  return (
    <>
      <MyHeader />
      <div>
        <Routes>
          <Route exact path="/" element={<MyBookList books={bookList} changeStatus={(book,status)=>changeStatus(book,status)} />} />
          <Route exact path="/search" element={<MySearchPage books={serchedBooks} search={(e)=>search(e)} changeStatus={(book,status)=>changeStatus(book,status)} />} getBooks={()=>getBooks()} />
        </Routes>
      </div>
    </>
  );
}

export default App;
