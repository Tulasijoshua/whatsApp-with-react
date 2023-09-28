import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const StateContext = ({children}) => {
  const [showFirstTodoList, setShowFirstTodoList] = useState(false);
  const [showSecondTodoList, setShowSecondTodoList] = useState(false);
  const [active, setActive] = useState(false);

    const handleShowFirstList = () => {
      setShowFirstTodoList(true);
      setShowSecondTodoList(false);
      setActive(false);
    };
  
    const handleShowSecondList = () => {
      setShowSecondTodoList(true);
      setShowFirstTodoList(false);
      setActive(false);
    };

      const value = {
        handleShowFirstList,
        handleShowSecondList,
        showFirstTodoList,
        setShowFirstTodoList,
        showSecondTodoList,
        setShowSecondTodoList,
        active,
        setActive
      }


    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const UserState = () => {
    return useContext(UserContext);
}