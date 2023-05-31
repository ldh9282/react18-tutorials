export default function Form() {

    function handleInputChange(e) {
        console.log(e.target.name)
        console.log(e.target.value)
    }

    function handleBtnClick() {
        window.confirm('제출하시겠습니까?') && console.log('yes')
    }

    function handleFormSumbit(e) {
        e.preventDefault()
        console.log('form submit')
        e.target.submit()
    }

    return (
        <div id="form">
            <form className="mb-5" onSubmit={handleFormSumbit}>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" id="example" name="example" placeholder="type text..."
                            onChange={handleInputChange} />
                    </div>
                    <div className="col-md-3">
                        <button type="button" className="btn btn-primary"
                            onClick={handleBtnClick}>Click me</button>
                        <button type="submit" className="btn btn-primary">submit!!!</button>
                    </div>
                </div>
            </form>
        </div>
    )
}