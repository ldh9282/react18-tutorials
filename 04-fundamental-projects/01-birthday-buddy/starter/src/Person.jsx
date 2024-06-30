const Person = ({ name, age, image }) => {
    return (
        <article>
            <img src={image} alt={name} className="img" />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </article>
    );
};
export default Person;
