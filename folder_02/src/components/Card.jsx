const Card = () => {
    const name = "Vaishnavi Patwariya";
    const age = 23;
    const profession = "Software Developer Engineer at @amazon with one year of experience.";

    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>Age: {age}</h2>
            <p>{profession}</p>
        </div>
    )
}
export default Card