import { DateInput, GuestSelect, LocationSelect, useReactBookingForm } from "react-booking-form"
import tw from "tailwind-styled-components"
import moment from "moment"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt"
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner"
import { FaPlus } from "@react-icons/all-files/fa/FaPlus"
import { FaMinus } from "@react-icons/all-files/fa/FaMinus"
import { FaUser } from "@react-icons/all-files/fa/FaUser"
import { IoMdSwap } from "@react-icons/all-files/io/IoMdSwap"
import { cities } from "./cities"
import React from "react"
import "flatpickr/dist/themes/material_green.css"

const containerStyle = {
    // display: "flex",
    padding: "1.5rem",
    marginTop: "0.5rem",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    borderRadius: "0.75rem",
    borderWidth: "1px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
}

const inputCoreStyle = {
    paddingLeft: "1rem",
    paddingRight: "1.5rem",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    width: "100%",
    height: "2.5rem",
    borderRadius: "9999px",
    borderWidth: "1px",
    borderColor: "#D1D5DB",
    appearance: "none",
    outline: "0"
}

const inputContainerStyle = {
    // display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
}

const labelStyle = {
    marginBottom: "0.25rem",
    fontWeight: "700",
    width: "100 %"
}

// const buttonCoreStyle = {
//     display: "flex",
//     fontWeight: "700",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "2.5rem",
//     borderRadius: "9999px"
// }

const swapButtonStyle = {
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    height: "2.5rem",
    borderRadius: "9999px",
    transitionProperty: "background-color, border - color, color, fill, stroke, opacity, box - shadow, transform",
    borderWidth: "50px",
    bordeeColor: "#D1D5DB"
}

const primaryButtonStyle = {
    backgroundcolor: "#10B981",
    color: "#ffffff",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    height: "2.5rem",
    borderRadius: "9999px"
}
const guestOkButtonStyle = {
    width: "83.333333%", 
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    height: "2.5rem",
    borderRadius: "9999px",
    backgroundcolor: "#10B981",
    color: "#ffffff",
}
const searchButtonStyle = {
    display: "flex",
    borderRadius: "9999px",
    borderWidth: "1px",
    borderColor: "#6B7280",
    marginTop: "1.25rem",
    marginBottom:"1rem",
    width: "100%",
    backgroundColor: "#10B981",
    color: "#ffffff",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    height: "2.5rem",
}
const iconContainerStyle = {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    paddingRight: "0.5rem",
    color: "#6B7280",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",
}
const menuContainerStyle = { zIndex: "20" }
const menuStyle = {
    overflowY: "auto",
    overflowX: "hidden",
    zIndex: "20",
    backgroundColor: "#ffffff",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transformTranslateY: "-1rem",
    borderRadius: "1.5rem",
    borderWidth: "1px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
}
const textStyle = { color: "#374151", fontWeight: "700" }
const smallTextStyle = { color: "#6B7280", fontSize: "0.875rem", lineHeight: "1.25rem" }
const optionBaseStyle = {
    position: "relative",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
}
const optionContainerStyle = {
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    cursor: "pointer",
    overflowY: "auto",
    overflowX: "hidden",
    zIndex: "20",
    backgroundColor: "#ffffff",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transformTranslateY: "-1rem",
    borderRadius: "1.5rem",
    borderWidth: "1px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
}
const guestButtonStyle = {
    overflow: "hidden",
    padding: "0.5rem",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    color: "#6B7280",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: "9999px",
    borderWidth: "1px",
    borderColor: "#6B7280",
    appearance: "none"
}

const Container = tw.div`md:rounded-full rounded-xl bg-white p-6 shadow-xl flex justify-between flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2 border border-gray-300`
const InputCore = tw.input`relative w-full peer flex h-10 focus:outline-none appearance-none border border-gray-300 rounded-full outline-none transition pl-4 pr-6 group-hover:border-green-500 focus:border-green-500 cursor-pointer`
const InputContainer = tw.div`relative w-full md:w-1/3 flex flex-col justify-center items-center pl-2`
const Label = tw.div`text-sm w-full font-bold mb-1 text-gray-500`
const ButtonCore = tw.button`appearance-none h-10 rounded-full flex justify-center items-center font-bold px-3`
const SwapButton = tw(ButtonCore)`md:mt-5 border md:w-full border-gray-300 hover:border-green-500 hover:text-green-500 focus:border-green-500 focus:text-green-500 transition outline-none`
const PrimaryButton = tw(ButtonCore)`border-0 bg-green-500 text-white uppercase`
const GuestOkButton = tw(PrimaryButton)`mx-auto w-5/6 mb-2`
const SearchButton = tw(PrimaryButton)`w-full mt-5`
const IconContainer = tw.a`z-20 absolute top-0 right-0 bottom-0 h-full flex items-center pr-2 cursor-pointer group-hover:text-green-500 peer-focus:text-green-500 text-gray-500 transition`
const MenuContainer = tw.div`z-20`
const Menu = tw.ul`w-64 max-h-[240px] border z-20 shadow-lg transform transition ease-in-out bg-white rounded-3xl overflow-y-auto overflow-x-hidden
${({ open }) => (open ? "" : "opacity-0 -translate-y-4 pointer-events-none")}`
const Text = tw.p`text-sm font-bold text-gray-700 font-title`
const SmallText = tw.p`text-sm text-gray-500`
const OptionBase = tw.div`transition ease-in-out relative py-2 px-4`
const OptionContainer = tw(OptionBase)`cursor-pointer transition ${({ $active, $selected }) => ($active || $selected ? "bg-green-100" : "")}`
const GuestButton = tw.button`appearance-none rounded-full p-2 flex items-center justify-center h-full overflow-hidden border border-gray-500 text-gray-500 hover:text-white hover:bg-green-500 hover:border-transparent transition ease-in-out disabled:opacity-50`

const iconsList = { location: FaMapMarkerAlt, date: FaCalendarAlt, peopleCount: FaUser }

const InputComponent = React.forwardRef(
    ({ isLoading, containerRef, form, name, ...props }, ref) => {
        const itemType = name && form?.formSchema[name].type
        const InputIcon = isLoading ? FaSpinner : iconsList[itemType || "location"]

        return (
            <div className="relative w-full group" ref={containerRef}>
                <InputCore  data-input ref={ref} name={name} {...props} />
                <IconContainer  title="toggle" data-toggle>
                    <InputIcon className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                </IconContainer>
            </div>
        )
    }
)

const GuestOptionComponent = ({ form, name, option }) => (
    <OptionBase  className="flex items-center justify-between w-100">
        <div>
            <Text>{option.label}</Text>
            <SmallText >{option.description}</SmallText>
        </div>
        <div className="flex items-center justify-center gap-x-2">
            <GuestButton 
                onClick={form.onPlusClick(option, name)}
                disabled={form.getIsOptionDisabled(option, "plus")}
            >
                <FaPlus className="w-3 h-3" />
            </GuestButton>
            <Text >{option.value}</Text>
            <GuestButton
                onClick={form.onMinusClick(option, name)}
                disabled={form.getIsOptionDisabled(option, "minus")}
            >
                <FaMinus className="w-3 h-3" />
            </GuestButton>
        </div>
    </OptionBase>
)

const formattedCities = cities.map(city => ({
    value: city.toLowerCase(),
    label: city
}))

const filterAndMapCiies = query =>
    formattedCities.filter(city => city.value.includes(query.toLowerCase()))

const searchPlace = async query =>
    new Promise((resolve, _reject) => {
        setTimeout(() => resolve(filterAndMapCiies(query)), 600)
    })

const defaultLocationOptions = formattedCities.slice(0, 5)

const dateConfig = {
    altInput: true,
    altFormat: "M j, Y",
    dateFormat: "Y-m-d",
    wrap: true
}

const formSchema = {
    from: {
        type: "location",
        options: { defaultLocationOptions, searchPlace },
        focusOnNext: "to"
    },
    to: {
        type: "location",
        options: { defaultLocationOptions, searchPlace },
        focusOnNext: "checkIn"
    },
    checkIn: {
        type: "date",
        focusOnNext: "checkOut",
        options: { ...dateConfig, minDate: "today" }
    },
    checkOut: {
        type: "date",
        focusOnNext: "guests",
        options: { ...dateConfig, minDateFrom: "checkIn" }
    },
    guests: {
        type: "peopleCount",
        defaultValue: [
            {
                name: "adults",
                label: "Adults",
                description: "Ages 13+",
                value: 1,
                min: 0,
                max: 10
            },
            {
                name: "children",
                label: "Children",
                description: "Ages 4-12",
                value: 0,
                min: 0,
                max: 10
            },
            {
                name: "infants",
                label: "Infants",
                description: "Under 4 years old",
                value: 0,
                min: 0,
                max: 10
            }
        ]
    }
}

export const BookingForm = () => {
    const form = useReactBookingForm({ formSchema })

    const onBookButtonClick = () => {
        const config = {
            convertDate: dateValue => moment(dateValue).format("DD-MM-YYYY")
        }
        alert(form.serializeToURLParams(config))
    }

    // d-flex flex-wrap container mx-auto justify-content-center align-items-center

    return (
        <Container  className="row container mx-auto">
            <InputContainer  className="col-sm-2 " >
                <Label >{"From"}</Label>
                <LocationSelect
                    className="w-full"
                    form={form}
                    menu={Menu}
                    menuContainer={MenuContainer}
                    option={OptionContainer}
                    inputComponent={InputComponent}
                    name="from"
                    emptyOption="Nothing was found :("
                    placeholder="Where are you going?"
                />
            </InputContainer>
            <InputContainer className="col-sm-2">
                <SwapButton 
                    title="Swap Locations"
                    aria-label="Swap Locations"
                    onClick={() => form.swapLocations()}
                >
                    <IoMdSwap className="w-4 h-4" />
                </SwapButton>
            </InputContainer>
            <InputContainer  className="col-sm-2">
                <Label >{"To"}</Label>
                <LocationSelect
                    className="w-full" 
                    form={form}
                    menu={Menu}
                    menuContainer={MenuContainer}
                    option={OptionContainer}
                    inputComponent={InputComponent}
                    name="to"
                    emptyOption="Nothing was found :("
                    placeholder="Where are you going?"
                />
            </InputContainer>
            <InputContainer  className="col-sm-2">
                <Label >{"Check in"}</Label>
                <DateInput
                    inputComponent={InputComponent}
                    className="w-full"
                    placeholder="Add date"
                    form={form}
                    name="checkIn"
                />
            </InputContainer>
            <InputContainer  className="col-sm-2">
                <Label >{"Check out"}</Label>
                <DateInput
                    inputComponent={InputComponent}
                    className="w-full"
                    placeholder="Add date"
                    form={form}
                    name="checkOut"
                />
            </InputContainer>
            <InputContainer className="col-sm-2">
                <Label >{"Guests"}</Label>
                <GuestSelect
                    form={form}
                    menuContainer={MenuContainer}
                    menu={Menu}
                    inputComponent={InputComponent}
                    option={GuestOptionComponent}
                    okButton={GuestOkButton}
                    okText="Ok!"
                    placeholder="Add guests"
                    name={"guests"}
                />
            </InputContainer>
            <InputContainer  className="col-sm-2 mx-auto">
                <SearchButton style={searchButtonStyle} onClick={onBookButtonClick}>{"Search"}</SearchButton>
            </InputContainer>
        </Container>
    )
}
