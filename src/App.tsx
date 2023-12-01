import './App.css'
import Home from './Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MintPage } from './page';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
    
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<MintPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          className={'text-center'}
      />
    </>
  )
}

export default App
