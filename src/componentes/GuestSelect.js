import { GuestSelect, useReactBookingForm } from "react-booking-form"
import tw from "tailwind-styled-components"
import { FaPlus } from "@react-icons/all-files/fa/FaPlus"
import { FaMinus } from "@react-icons/all-files/fa/FaMinus"
import React from "react"
import { Button } from "@mui/material"
import "../ASES/assets/styles/Header/Header.css"//Utils




const Menu = tw.ul`w-64 max-h-[240px] border z-20 shadow-lg transform transition ease-in-out bg-white rounded-3xl overflow-y-auto overflow-x-hidden ${({ open }) => (open ? "" : "opacity-0 -translate-y-4 pointer-events-none")}`



const InputComponent = React.forwardRef(

    ({ isLoading, containerRef, form, name, ...props }, ref) => {

        return (
            // <div   ref={containerRef}>
            <input className="Filter__Sizes Filter-Icon" data-input ref={ref} name={name} {...props} />
            // </div>
        )
    }
)

const GuestOptionComponent = ({ form, name, option }) => (
    <div className="d-flex align-items-center justify-content-between " >
        <div>
            <p>{option.label} <p style={{ fontSize: "10px" }}>{option.description}</p> </p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
            <Button onClick={form.onPlusClick(option, name)} disabled={form.getIsOptionDisabled(option, "plus")}>
                <FaPlus className="w-3 h-3" />
            </Button>

            <Button>{option.value}</Button>

            <Button onClick={form.onMinusClick(option, name)} disabled={form.getIsOptionDisabled(option, "minus")}>
                <FaMinus className="w-3 h-3" />
            </Button>
        </div>
    </div>
)



const formSchema = {
    guests: {
        type: "peopleCount",
        defaultValue: [
            {
                name: "adultos",
                label: "Adultos",
                description: "Edad 13+",
                value: 0,
                min: 0,
                max: 10
            },
            {
                name: "niños",
                label: "Niños",
                description: "Edad 4-12",
                value: 0,
                min: 0,
                max: 10
            },
            {
                name: "infantes",
                label: "Infantes",
                description: "Menores de 4 años",
                value: 0,
                min: 0,
                max: 10
            }
        ]
    }
}

export const GuestSelectInput = () => {
    const form = useReactBookingForm({ formSchema })

    return (

        <GuestSelect
            form={form}
            menu={Menu}
            inputComponent={InputComponent}
            option={GuestOptionComponent}
            okButton={Button}
            okText="Ok!"
            placeholder="   Añadir huesped"
            name={"guests"}
        />

    )
}

