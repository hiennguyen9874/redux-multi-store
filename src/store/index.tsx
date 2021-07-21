import { ReactChildren, ReactChild } from "react";
import { Provider } from "react-redux";

import { store as bookStore, context as bookContext } from "./books";
import { store as themeStore, context as themeContext } from "./theme";

type storeProviderProps = {
  children: ReactChildren | ReactChild;
};

const StoreProvider = ({ children }: storeProviderProps): JSX.Element => {
  return (
    <Provider store={bookStore} context={bookContext}>
      <Provider store={themeStore} context={themeContext}>
        {children}
      </Provider>
    </Provider>
  );
};

export default StoreProvider;
