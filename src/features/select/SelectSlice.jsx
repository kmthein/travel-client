import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPlan: [],
    selectedHotel: null,
    selectedRoom: null,
    selectedBus: null,
    selectedFlight: null
}

const SelectSlice = createSlice({
    name: "select",
    initialState,
    reducers: {
        saveHotel: (state, { payload }) => {
            state.selectedHotel = payload;
        },
        saveRoom: (state, { payload }) => {
            state.selectedRoom = payload;
        },
        
    }
})

export const { saveHotel, saveRoom } = SelectSlice.actions;
export const selectState = (state) => state.select;
export default SelectSlice.reducer;