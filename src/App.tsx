// App.tsx
import { Provider } from "react-redux";
import store from "./reducers/store";
import Form from "./components/Form";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Form />
                <List />
            </div>
        </Provider>
    );
};

export default App;
