export default function Book(props) {
    // the props is object
    const { img, title, author } = props

    function handleClick() {
        alert("you clicked me!!!")
    }

    return (
        <div id="book" onClick={handleClick}>
            <img src={img.src} alt={img.alt} />
            <div className="mt-5">
                <span id="author">{author}</span>: <span id="title">{title}</span>
            </div>
        </div>
    )
}