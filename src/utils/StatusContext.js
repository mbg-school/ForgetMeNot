import {createContext} from 'react';

const StatusContext = createContext({
  statusList: {
    list: ['First', 'Second']
  },
  setStatusList: (status) => []
});

const StatusProvider = StatusContext.Provider;

export {StatusContext, StatusProvider};