import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
}
const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    editContact: (state, action) => {
    const item = state.items.find(item => item.id === action.payload.id);
    item.contact = action.payload.contact;
  },
  fetchDataSuccess: (state, action) => {
    state.items = action.payload;
    state.isLoading = false;
  },
  setIsError: (state, action) => {
    state.isError = action.payload;
 },
  setIsLoading: (state, action) => {
    state.isLoading = action.payload;
  },

}
});

export const contactReducer = slice.reducer;
export const {deleteContact, addContact, editContact, fetchDataSuccess, setIsError,
setIsLoading} = slice.actions;
