import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";  // Import PersistGate
import App from "./App";
import { store, persistor } from "./redux/store"; // Import store and persistor from your store file

ReactDOM.render(
  <Provider store={store}> {/* Wrap the app with Provider to pass the store */}
    <PersistGate loading={null} persistor={persistor}> {/* Wrap with PersistGate to handle rehydration */}
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
