import { DateInput, GuestSelect, LocationSelect, useReactBookingForm } from "react-booking-form"
import { IoMdSwap } from "@react-icons/all-files/io/IoMdSwap"


<div className="row container mx-auto">
    <div className="col-sm-2 " >
        <label>{"From"}</label>
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
    </div>
    <div className="col-sm-2">
        <button
            title="Swap Locations"
            aria-label="Swap Locations"
            onClick={() => form.swapLocations()}
        >
            <IoMdSwap className="w-4 h-4" />
        </button>
    </div>
    <div className="col-sm-2">
        <label>{"To"}</label>
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
    </div>
    <div className="col-sm-2">
        <label>{"Check in"}</label>
        <DateInput
            inputComponent={InputComponent}
            className="w-full"
            placeholder="Add date"
            form={form}
            name="checkIn"
        />
    </div>
    <div className="col-sm-2">
        <label>{"Check out"}</label>
        <DateInput
            inputComponent={InputComponent}
            className="w-full"
            placeholder="Add date"
            form={form}
            name="checkOut"
        />
    </div>
    <div className="col-sm-2">
        <label>{"Guests"}</label>
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
    </div>
    <div className="col-sm-2 mx-auto">
        <button  onClick={onBookButtonClick}>{"Search"}</button>
    </div>
</div>