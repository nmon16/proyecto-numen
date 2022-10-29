
import CampingCard from './CampingCard';
import imageInfo from '../assets/img/InfoIcon/information.svg'

const CampingList = ({ filteredCampings }) => {

    return filteredCampings.length > 0 ?
        (
            <section className="HotelsContainer">
                {filteredCampings.map((camping) => {
                    return (<CampingCard
                        key={"h-" + camping.name}
                        slug={camping.slug}
                        name={camping.name}
                        image={camping.image}
                        text={camping.text}
                        availabilityFrom={camping.availabilityFrom}
                        availabilityTo={camping.availabilityTo}
                        rooms={camping.rooms}
                        city={camping.city}
                        country={camping.country}
                        price={camping.price}
                        phone={camping.phone}
                        url={camping.url}
                    />);
                }
                )}
            </section>
        ) : (
            <section className="HotelsNotFound">
                <img className="HotelsNotFound__Icon" src={imageInfo} alt="information icon" role="presentation" aria-hidden="true" focusable="false" />
                <p className="HotelsNotFound__Message">No quedan hoteles con esos filtros. Pruebe una nueva combinación de ellos. </p>
            </section>
        )
}

export default CampingList;