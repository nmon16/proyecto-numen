
const CampingCard = ({ name, country, price, text, image, url }) => {

    const campingCardStyle = {
        backgroundImage: `url(${require(`../assets/img/CampingCards/Campings/${image}`)})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    return (

        <>
            <article className="CampingCard" style={campingCardStyle}>
                <h2 className="CampingCard__Title">{name}</h2>
                <section className="CampingCard__Info">
                    <div className="CampingCard__Country-Numbers">
                        <div className="CampingCard__Country" >
                            <img src={require(`../assets/img/CampingCards/Flags/${country.toLowerCase()}.svg`)} alt="(flag)" className="CampingCard__Flag" />
                            <p className="CampingCard__CountryName ">{country}</p>
                            <div className="CampingCard__Numbers ">
                                <p className="CampingCard__Price">Desde USD {price}</p>
                            </div>
                        </div>
                    </div>
                    <p className="CampingCard__Description">{text}</p>
                </section>
                <a className="btn btn-primary CampingCard__Book" href={url} target="_blank" rel="noopener noreferrer" role="button">+Info</a>
            </article>
        </>
    );
}

export default CampingCard;