import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  economy: {
    ticket: 0,
    amount: 0,
  },
  business: {
    ticket: 0,
    amount: 0,
  },
  firstclass: {
    ticket: 0,
    amount: 0,
  },
  transport: {},
};

const TransportSlice = createSlice({
  name: "transport",
  initialState,
  reducers: {
    addTransport: (state, action) => {
      state.transport = action.payload;
    },
    addEconomy: (state, action) => {
      if (state.economy.ticket < action.payload.validseat) {
        state.economy.ticket += 1;
        state.economy.amount += action.payload.amount;
      }
    },
    reduceEconomy: (state, action) => {
      if (state.economy.ticket > 0) {
        state.economy.ticket -= 1;
        state.economy.amount -= action.payload.amount;
      }
    },
    addBusiness: (state, action) => {
      if (state.business.ticket < action.payload.validseat) {
        state.business.ticket += 1;
        state.business.amount += action.payload.amount;
      }
    },
    reduceBusiness: (state, action) => {
      if (state.business.ticket > 0) {
        state.business.ticket -= 1;
        state.business.amount -= action.payload.amount;
      }
    },
    addFirstClass: (state, action) => {
      if (state.firstclass.ticket < action.payload.validseat) {
        state.firstclass.ticket += 1;
        state.firstclass.amount += action.payload.amount;
      }
    },
    reduceFirstClass: (state, action) => {
      if (state.firstclass.ticket > 0) {
        state.firstclass.ticket -= 1;
        state.firstclass.amount -= action.payload.amount;
      }
    },
    reset: () => {
      return initialState;
    },
  },
});

export const transportState = (state) => state.transport;

export const {
  addTransport,
  addEconomy,
  reduceEconomy,
  addBusiness,
  reduceBusiness,
  addFirstClass,
  reduceFirstClass,
  reset,
} = TransportSlice.actions;

export default TransportSlice.reducer;
