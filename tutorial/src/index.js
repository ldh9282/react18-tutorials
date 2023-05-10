import React from 'react';
import ReactDom from 'react-dom/client'

import './css/index.css'

function BookList() {
    return (
        <section>
            <Book 
                img={{ src: "https://m.media-amazon.com/images/I/51ZLFV0ZBwL._SX375_BO1,204,203,200_.jpg", alt: "The Legend of Zelda™: Tears of the Kingdom" }} 
                author={'Piggyback'} 
                title={'The Legend of Zelda™: Tears of the Kingdom'} />
            <Book 
                title={'title2'}
                author={'author2'} />
            <Book 
                author={'author3'} />
        </section>        
    )
}

const Book = ({img, title, author}) => {
    return (
        <article>
            {img ? <Img src={img.src} alt={img.alt} /> : <p>image placeholder</p>}
            <p>
                <Title title={title} />
                <Author author={author} />
            </p>
        </article>
    )
}
const Img = ({src, alt}) => {
    return <img src={src} alt={alt} />
}
const Title = ({title}) => {
    return <span className="h2">{title ? title : 'title placeholder'}</span>
}

const Author = ({author}) => {
    return <span className="h3"> ({author ? author : 'author placeholder'})</span>
}

export default BookList;


const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(<BookList />);