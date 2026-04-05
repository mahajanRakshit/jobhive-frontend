import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import AdminDashboard from './pages/AdminDashboard'
import EmployerDashboard from './pages/EmployerDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employer" element={<EmployerDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}