function Mybook(props) {
    const { name, img, status, changeStatus, book } = props;
    const handleChange = (event) =>{
        const { value } = event.target;
        changeStatus(book,value);
    }
    return ( 
        <div className="my-book-card">
        <div className="book-title" title={name}>
            {name}
        </div>
        <div className="my-img-container">
            <img className="book" src={img} alt={name} />
        </div>
        <div>
            <select value={status} onChange={(e)=>handleChange(e)} className="w-100">
                <option value={''}>Select</option>
                <option value={'currentlyReading'}>Currently Reading</option>
                <option value={'wantToRead'}>Want to Read</option>
                <option value={'read'}>Read</option>
            </select>
        </div>
        </div>
     );
}

export default Mybook;