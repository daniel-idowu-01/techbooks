import React, { useState, useEffect } from 'react'
import { NavBar, TheFooter } from '../components';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SingleBook = () => {

  const { id } = useParams();
  const [bookData, setBookData] = useState([])

  useEffect(() => {
    axios.get(`https://tech-books-backend.onrender.com/book/${id}`)
      .then(res => setBookData(res.data))
      .catch(error => console.log(error))
  }, [])


  return (
    <div>
      <NavBar />

      <div>
        <p>{bookData.authorName}</p>
        <p>{bookData.bookTitle}</p>
      </div>

      <TheFooter />
    </div>
  )
}

export default SingleBook
