import React, { useCallback, useState } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:8000/src/backend/test1.php';

const Palindrome = () => {
  const [string, setString] = useState('')
  const [message, setMessage] = useState('')

  const onChangeHandle = (event) => setString(event.target.value)
  const submitHandle = useCallback(() => {
    const params = new URLSearchParams()
    params.append('input', string)
    axios
      .post(API_URL, params)
      .then(({ data }) => {
        console.log('success:', data)
        if (data.isPalindrome) {
          setMessage('This is a palindrome')
        } else {
          setMessage('This is not a palindrome')
        }
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }, [string])

  return (
    <>
      <input
        type='text'
        name='string'
        id='string-input'
        placeholder='Type something...'
        onChange={onChangeHandle}
        value={string}
      />
      <br />
      <br />
      <input type='button' value='Validate' onClick={submitHandle} />
      <input
        type='button'
        value='Clean'
        onClick={() => {
          setMessage('')
          setString('')
        }}
      />
      <br />
      <br />
      <span>{message}</span>
    </>
  )
}

export default Palindrome
