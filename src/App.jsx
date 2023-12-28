import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/assets/css/App.css';
import Layout from './Components/Layout';
import RedirectElement from './Components/RedirectElement';
import RedirectElement2 from './Components/RedirectElement2';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quize from './Pages/Quize';
import Result from './Pages/Result';
import Signup from './Pages/Signup';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  // const currentUser = false;
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/signup"
              element={
                <RedirectElement2>
                  <Signup />
                </RedirectElement2>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <RedirectElement2>
                  <Login />
                </RedirectElement2>
              }
            />
            <Route
              exact
              path="/quize/:id"
              element={
                // currentUser ? <Quize /> : <Navigate to="/login" replace />
                <RedirectElement>
                  <Quize />
                </RedirectElement>
              }
            />
            <Route
              exact
              path="/result/:id"
              element={
                // currentUser ? <Result /> : <Navigate to="/login" replace />
                <RedirectElement>
                  <Result />
                </RedirectElement>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
