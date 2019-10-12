import {createContext} from "react";



const UserContext = createContext(null);
const {Provider, Consumer} = UserContext;

export {Provider as UserProvider, Consumer as UserConsumer};
export default UserContext;

