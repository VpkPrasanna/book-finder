import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBooks ,getCovers,getAllBooks} from '../actions'
import debounce from 'lodash/debounce'

const Search = ({ getBooks, query,getCovers,getAllBooks }) => {
  const [books,setBooks]=useState("")
  const handleOnSubmit = (e) => {
    e.preventDefault();
    debouncedGetBooks(books)
  }
  const debouncedGetBooks = debounce(query => {
    getBooks(query);
    getCovers(query)
  }, 700);

  const onInputChange = e => {
    setBooks(e.target.value)
  }

  useEffect(()=>{
    getAllBooks()
  },[])

  return (
    <div className="search-books">
      <Form className="search-books--form" >
        <Form.Group controlId="formBasicEmail">
          <div class="search">
          <input 
          type="text"
           class="search__input"
           onChange={onInputChange} 
           placeholder="Search your favourite book" 
           />
          <div class="search__icon">
            <ion-icon name="search"></ion-icon>
          </div>
        </div>
    
  
        
        </Form.Group>
        <div class="btn btn__primary" onClick={handleOnSubmit}><p>View books</p></div>
      </Form>
    </div>
  )
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    query: state.books.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBooks,getCovers,getAllBooks
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);