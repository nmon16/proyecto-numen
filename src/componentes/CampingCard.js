import { getPriceSigns, preventScroll, restartScroll } from '../assets/data/utils'
// import { useContext } from "react";
// import { CartContext } from "../contexts/CartContext";
// import Modal from "./Modal";
// import CartContent from './CartContent';
// import { useModal } from '../hooks/useModal';
// import CloseIcon from '@mui/icons-material/Close';
// import { ShoppingCartRounded } from '@mui/icons-material';
// import useAxios from '../hooks/useAxios';

const CampingCard = ({name, country, price, description, photo}) => {
    //Handler
    const handleTap = (e) => {
        const campingCard = e.target.parentElement;
        campingCard.classList.toggle('Expanded');
        campingCard.classList.contains('Expanded') ? preventScroll() : restartScroll();
        e.target.innerHTML = campingCard.classList.contains('Expanded') ? "<" : "+";
    }

    return (

        <article className="HotelCard">
            <img className="HotelCard__Img" src={require(`../assets/img/Main/Hotels/${photo}`)} alt="photoHotel" />
            <h2 className="HotelCard__Title">{name}</h2>
            <section className="HotelCard__Info">
                <div className="HotelCard__Country-Numbers">
                    <div className="HotelCard__Country" >
                        <img src={require(`../assets/img/Main/Flags/${country.toLowerCase()}.svg`)} alt="(flag)" className="HotelCard__Flag" />
                        <p className="HotelCard__CountryName">{country}</p>
                    </div>
                    <div className="HotelCard__Numbers">
                        <p className="HotelCard__Price">USD {price}</p>
                    </div>
                </div>
                <p className="HotelCard__Description">{description}</p>
            </section>
            <button className="HotelCard__More" id="HotelCard__More" onClick={handleTap}>+</button>
            <button className='HotelCard__Book'>+Info</button>
        </article>
    );
}

export default CampingCard;