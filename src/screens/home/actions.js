import axios from 'axios'
import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  RECEIVE_ALL_BOOKS,
  RECEIVE_COVERS
} from './actionTypes'

export const requestBooks = (query) => ({
  type: REQUEST_BOOKS,
  query
})

export const receiveBooks = ({status, payload }) => ({
  type: RECEIVE_BOOKS,
  status,
  payload
})

export const receiveCovers = ({status, payload }) => ({
  type: RECEIVE_COVERS,
  status,
  payload
})
export const receiveAllBooks = ({status, payload }) => ({
  type: RECEIVE_ALL_BOOKS,
  status,
  payload
})

export const getAllBooks = () => {
  
  return function (dispatch) {
  

  	return axios.get("https://openlibrary.org/dev/docs/api/read")
    .then(response => {
      alert("ya")
      dispatch(receiveAllBooks({
        status: 'success',
        payload: response
      }))
    })
    .catch(error => {
      dispatch(receiveAllBooks({
        status: 'error',
        payload: error
      }))
    })
  };
}


export const getBooks = (query) => {
  return function (dispatch) {
  	dispatch(requestBooks(query));
  	const url = `http://openlibrary.org/search.json?q=${query}`
  	return axios.get(url)
    .then(response => {
      dispatch(receiveBooks({
        status: 'success',
        payload: response
      }))
    })
    .catch(error => {
      dispatch(receiveBooks({
        status: 'error',
        payload: error
      }))
    })
  };
}

export const getCovers = (query) => {
  return function (dispatch) {
  
  	const url = `https://openlibrary.org/dev/docs/api/covers`
  	return axios.get(url)
    .then(response => {
      dispatch(receiveCovers({
        status: 'success',
        payload: response
      }))
    })
    .catch(error => {
      dispatch(receiveCovers({
        status: 'error',
        payload: error
      }))
    })
  };
}