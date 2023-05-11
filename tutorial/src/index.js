import React from 'react';
import ReactDom from 'react-dom/client'

import './css/index.css'

function BookList() {
    const obj1 = {a: "a1", b: "b1"}
    const obj2 = {a: "a2", b: "b2"}
    const arr = [obj1, obj2]
    // arr.map returns new array
    const newArr = arr.map((item) => {
        return (
            <React.Fragment> {/* React.Fragment is same as <></> */}
                <p>a: {item.a}</p>
                <p>b: {item.b}</p>
            </React.Fragment>
        )
    })
    return (
        <section>
            <p>======================= Start arr test =======================</p>
            <div id="objArr">
                {/* test1 */}
                {newArr}
                <br/><br/>
                {/* test2 */}
                {
                    arr.map((item) => {
                        return (
                            <React.Fragment>
                                <p>a: {item.a}</p>
                                <p>b: {item.b}</p>
                            </React.Fragment>
                        )
                    })
                }
                <br/><br/>
                {/* test3 */}
                {[<React.Fragment><p>a: a1</p><p>b: b1</p></React.Fragment>, <React.Fragment><p>a: a2</p><p>b: b2</p></React.Fragment>]}
            </div>
            <p>======================= End arr test =======================</p>
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

function Book(obj) {
    // the props is object
    const {img, title, author} = obj;
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
function Img(obj) {
    const {src, alt} = obj;
    return <img src={src} alt={alt} />
}
function Title(obj) {
    const {title} = obj;
    return <span className="h2">{title ? title : 'title placeholder'}</span>
}

function Author(obj) {
    const {author} = obj;
    return <span className="h3" style={{color: 'red'}}> ({author ? author : 'author placeholder'})</span>
}

export default BookList;


const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(<BookList />);