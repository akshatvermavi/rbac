import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './contexts/AuthContext';
// import { AlarmProvider } from './contexts/AlarmContext';
// import { ThemeProvider } from './contexts/ThemeContext';
// import AuthForm from './components/AuthForm';
// import ProfilePage from './components/ProfilePage';
// import DailyRoutine from './components/DailyRoutine';
// import Navigation from './components/Navigation';
// import { Toaster } from 'react-hot-toast';

// function Dashboard() {
//   const auth = useAuth();
  
//   if (!auth?.currentUser) {
//     return <Navigate to="/auth" />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
//       <div className="max-w-4xl mx-auto">
//         <DailyRoutine />
//       </div>
//     </div>
//   );
// }

// function PrivateRoute({ children }: { children: React.ReactNode }) {
//   const auth = useAuth();
//   return auth?.currentUser ? <>{children}</> : <Navigate to="/auth" />;
// }

// function PublicRoute({ children }: { children: React.ReactNode }) {
//   const auth = useAuth();
//   return !auth?.currentUser ? <>{children}</> : <Navigate to="/" />;
// }

// export default function App() {
//   return (
//     <Router>
//       <ThemeProvider>
//         <AuthProvider>
//           <AlarmProvider>
//             <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 
//                           dark:from-gray-900 dark:to-gray-800 
//                           text-gray-900 dark:text-gray-100 transition-colors duration-300">
//               <Routes>
//                 <Route path="/auth" element={
//                   <PublicRoute>
//                     <div className="min-h-screen flex items-center justify-center p-4">
//                       <AuthForm />
//                     </div>
//                   </PublicRoute>
//                 } />
//                 <Route path="/profile" element={
//                   <PrivateRoute>
//                     <ProfilePage />
//                   </PrivateRoute>
//                 } />
//                 <Route path="/" element={
//                   <PrivateRoute>
//                     <Dashboard />
//                   </PrivateRoute>
//                 } />
//               </Routes>
//             </div>
//             <Toaster 
//               position="top-right"
//               toastOptions={{
//                 className: 'dark:bg-gray-800 dark:text-white',
//               }}
//             />
//           </AlarmProvider>
//         </AuthProvider>
//       </ThemeProvider>
//     </Router>
//   );
// }