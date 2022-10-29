import { preventScroll, restartScroll } from '../assets/data/utils'
import Divider from '@mui/material/Divider';

const CampingCard = ({ name, country, price, text, image, url }) => {
    // //Handler
    // const handleTap = (e) => {
    //     const campingCard = e.target.parentElement;
    //     campingCard.classList.toggle('Expanded');
    //     campingCard.classList.contains('Expanded') ? preventScroll() : restartScroll();
    //     e.target.innerHTML = campingCard.classList.contains('Expanded') ? "<" : "+";
    // }
    return (

        <>
            <article className="HotelCard" >
                <img className="HotelCard__Img" src={require(`../assets/img/Main/Hotels/${image}`)} alt="photoHotel" />
                <h2 className="HotelCard__Title">{name}</h2>
                <section className="HotelCard__Info">
                    <div className="HotelCard__Country-Numbers">
                        <div className="HotelCard__Country" >
                            <img src={require(`../assets/img/Main/Flags/${country.toLowerCase()}.svg`)} alt="(flag)" className="HotelCard__Flag" />
                            <p className="HotelCard__CountryName ">{country}</p>
                            <div className="HotelCard__Numbers ">
                                <p className="HotelCard__Price">Desde USD {price}</p>
                            </div>
                        </div>

                    </div>
                    <p className="HotelCard__Description">{text}</p>
                    <a className="btn btn-primary" href={url} target="_blank" role="button">+Info</a>
                </section>
                {/* <button className="HotelCard__More" id="HotelCard__More" onClick={handleTap}>+</button> */}
            </article>
        </>
    );
}

export default CampingCard;