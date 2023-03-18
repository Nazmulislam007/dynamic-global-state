import { createContext, useContext, useMemo, useReducer } from 'react';
import { serviceCostApi } from './API/serviceCostApi';
import reducer, { databaseReducer } from './reducer';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export default function GlobalStateProvider({ children }) {
   const [state, dispatch] = useReducer(reducer, {});

   // acting as a database
   const [serviceDataState, dispatchServiceData] = useReducer(databaseReducer, serviceCostApi);

   const value = useMemo(() => ({ state, dispatch, serviceDataState, dispatchServiceData }), [serviceDataState, state]);

   return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
}
