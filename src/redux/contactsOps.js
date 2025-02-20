// https://67b6e5a42bddacfb270cbad6.mockapi.io/contacts

import axios from "axios";
import { fetchDataSuccess, setIsError, setIsLoading } from "./contactsSlice";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));
    const response = await axios.get ('https://67b6e5a42bddacfb270cbad6.mockapi.io/contacts');
    dispatch(fetchDataSuccess(response.data));
  } catch {
    dispatch(setIsError(true));
  }
  finally{
    dispatch(setIsLoading(false));
  }
};
