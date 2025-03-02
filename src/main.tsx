import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter, Route, Routes} from 'react-router-dom'
// import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/*<Route path="/auth/login" element={<Login />} />*/}
        {/*<Route path="/auth/signup" element={<Signup />} />*/}
        {/*<Route path="/dashboard" element={<Dashboard />} />*/}
        {/*<Route path="/contests/create" element={<CreateContest />} />*/}
        {/*<Route exact path="/contests/join" element={<JoinContest />} />*/}
        {/*<Route path="/contests/live" element={<LiveContest />} />*/}
        {/*<Route path="/practice" element={ <Practice /> } />*/}
        {/*<Route path="/analyze" element={ <Analyze /> } />*/}
        {/*<Route path="/verify" element={<VerifyEmail />} />*/}
        {/*<Route path="/profile/edit" element={<EditProfile />} />*/}
      </Routes>
    </HashRouter>
  </StrictMode>,
)
