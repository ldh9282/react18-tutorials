import Book from "./Book"

export default function BookList() {
    const imgObject = {
        src: "https://m.media-amazon.com/images/I/51ZLFV0ZBwL._SX375_BO1,204,203,200_.jpg",
        alt: "The Legend of Zelda™: Tears of the Kingdom",
    }
    return (
        <>
            <Book
                img={imgObject}
                author={"Piggyback"}
                title={"The Legend of Zelda™: Tears of the Kingdom"}
            />
        </>
    )
}


