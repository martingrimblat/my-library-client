import React, { useState } from 'react';
import Axios from 'axios';


export const Logger = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [read, setRead] = useState(false)

    const addBook = () => {
        Axios.post('https://my-library-heroku.herokuapp.com/log',
        {
            title,
            author,
            publisher,
            read
        }).then(() => {
            console.log("Success");
            document.getElementById("form").reset();
            setAuthor('');
            setTitle('');
            setPublisher('');
            setRead(false);
        })
    }
    
    return (
        <div className='logger'>
            <div className='container'>
                <h2>Log a Book</h2>
                <form id='form'>
                    <label htmlFor='Title'>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
                    <label htmlFor='Author'>Author</label>
                    <input type="text" onChange={(e) => setAuthor(e.target.value)}></input>
                    <label htmlFor='Publisher'>Publisher</label>
                    <input type="text" onChange={(e) => setPublisher(e.target.value)}></input>
                </form>
                <div className='button-container'>
                    <button className={read ? 'read-button' : 'markAsRead-button'} onClick={() => setRead(read => !read)}>{ read ? "Read" : "Mark as Read" }</button>
                    <button className='log-button' onClick={addBook}>Log</button>
                </div>
            </div>
        </div>
  )
}
