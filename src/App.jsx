import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import AdminDashboard from './pages/AdminDashboard'
import EmployerDashboard from './pages/EmployerDashboard'
import Auth from './pages/Auth'
import CompanyProfile from './pages/CompanyProfile'
import ApplyJob from './pages/ApplyJob'
import Payment from './pages/Payment'
import Blog from './pages/Blog'
import SeekerDashboard from './pages/SeekerDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/company" element={<CompanyProfile />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/pricing" element={<Payment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<SeekerDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}