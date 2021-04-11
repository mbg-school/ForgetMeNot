import {createContext} from 'react';

const UserContext = createContext({
  userData: {
    firstName: '',
    lastName: '',
    carMake: '',
    carModel: '',
    carYear: '',
  },
  setUserData: (data) => {},
});
const UserProvider = UserContext.Provider;

export {UserContext, UserProvider};
