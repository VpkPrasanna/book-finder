import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty'

import BookCard from '../components/BookCard'

const renderBooksList = (data, query) => {
  if (isEmpty(data)) {
    return null;
  }
  let { docs, numFound } = data.data;
  console.log(data,"ddd")
  return (
    <>
      <h3>Search results for: {query}</h3>
      <p>Total results: {numFound}</p>
      <div className="books-list">
        {docs && docs.map(doc => <BookCard key={doc.id} book={doc} />)}
      </div>
    </>
  )
}


const Books = ({ data, isFetching, query, error }) => {
  let jsxStr = ''

  if (isFetching) {
    jsxStr = <p>Loading...</p>
  } else if (!isEmpty(error)) {
    jsxStr = JSON.stringify(error)
  } else {
    jsxStr = renderBooksList(data, query);
  }
  return (
    <div className="books">
      {jsxStr}
    </div>
  )
}

const mapStateToProps = (state) => {
  let { data, isFetching, query, error } = state.books
  return {
    data,
    isFetching,
    query,
    error
  }
}

export default connect(
  mapStateToProps,
  null
)(Books);