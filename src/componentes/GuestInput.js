import { Button } from "@mui/material"
import { useState } from 'react';
import { ACTIONS_ADULT, ACTIONS_CHILD, guestChildReducer } from "../reducers/guestOptionReducer";
import { useReducer } from "react";
import guestAdultReducer from "../reducers/guestOptionReducer";
import '../ASES/assets/styles/Header/Header.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';

function GuestInput() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const [adultCounter, dispatchAdult] = useReducer(guestAdultReducer, 0);
    const [childCounter, dispatchChild] = useReducer(guestChildReducer, 0);


    return (
        <div className="Filter__Sizes Filter-Icon" >
            <div mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClickAway}>
                <Button style={{ color: "black", margin: "3px 8px 0px 2px", textTransform: "none" }} type="button" onClick={handleClick}>
                    <p>{`Adultos: ${adultCounter} | Niños: ${childCounter}`}</p>
                </Button>
                {open ?
                    <div className="container text-center" style={{ backgroundColor: "white", color: "black", borderRadius: "0.375rem", margin: "5px 5px 0px 0px", maxWidth: "180px", position: "absolute", border: "1px solid grey" }}>

                        <div className="d-flex flex-row justify-content-between">
                            <div><p>Adultos</p></div>

                            <div>
                                <IconButton aria-label="add" size="small" onClick={() => dispatchAdult({ type: ACTIONS_ADULT.INCREMENT_ADULT, payload: 1 })}>
                                    <AddIcon fontSize="small" />
                                </IconButton>
                            </div>

                            <div><span>{adultCounter}</span></div>

                            <div>
                                <IconButton aria-label="remove" size="small" onClick={() => dispatchAdult({ type: ACTIONS_ADULT.DECREMENT_ADULT, payload: 1 })}>
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                            </div>

                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <p style={{ margin: "0px 10px 2px 1px" }}>Niños</p>

                            <IconButton aria-label="add" size="small" onClick={() => dispatchChild({ type: ACTIONS_CHILD.INCREMENT_CHILD, payload: 1 })}>
                                <AddIcon fontSize="small" />
                            </IconButton>

                            <span >{childCounter}</span>

                            <IconButton aria-label="remove" size="small" onClick={() => dispatchChild({ type: ACTIONS_CHILD.DECREMENT_CHILD, payload: 1 })}>
                                <RemoveIcon fontSize="small" />
                            </IconButton>

                        </div>

                        <div><Button onClick={handleClickAway}>OK</Button></div>

                    </div>
                    : null}
            </div>
        </div>
    );
}

export default GuestInput