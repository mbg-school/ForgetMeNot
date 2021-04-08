import {createContext} from 'react';

const BleContext = createContext({
  connect: false,
  setConnect: (connection) => {}
})

const BleProvider = BleContext.Provider;

export {BleContext, BleProvider};