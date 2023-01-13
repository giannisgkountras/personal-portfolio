import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainScreen from "./screens/MainScreen/MainScreen";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainScreen />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
