import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import MainPage from './MainPage'
import Login from './pages/login/Login';
import { StateContext } from './context/StateContext';
import { PrivateRoute } from './route/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <StateContext>
        <div className="min-w-full p-2">
          {/* <MainPage /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/mainpage" element={<PrivateRoute><MainPage /></PrivateRoute>} />
          </Routes>
        </div>
      </StateContext>
    </AuthProvider>

  )
}

export default App
