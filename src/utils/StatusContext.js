import {createContext} from 'react';

const StatusContext = createContext({
  statusList: {
    list: []
  },
  setStatusList: (status) => []
});

const StatusProvider = StatusContext.Provider;

export {StatusContext, StatusProvider};