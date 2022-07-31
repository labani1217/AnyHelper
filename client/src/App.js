import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WorkerRegistration from "./pages/WorkerRegistration"
import WorkerLogin from './pages/WorkerLogin';
import Blogs from './pages/Blogs';
import ShopRegister from './pages/ShopRegister';
import ShopLogin from './pages/ShopLogin';
import ServiceLogin from './pages/ServiceLogin';
import ServiceSignUp from './pages/ServiceSignUp';
import ShopList from './pages/ShopList';
import WorkersList from './pages/WorkersList';
import WomenserviceList from './pages/WomenServiceList';
import WomenSalonList from './pages/WomenSalonList';
import TherapiesList from './pages/TherapiesList';
import CleaningList from './pages/CleaningList';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/workerregistration" exact element={<WorkerRegistration />} />
            <Route path="/workerlogin" exact element={<WorkerLogin />} />
            <Route path="/blogs" exact element={<Blogs />} />
            <Route path="/shopregister" exact element={<ShopRegister />} />
            <Route path="/shoplogin" exact element={<ShopLogin />} />
            <Route path="/servicelogin" exact element={<ServiceLogin />} />
            <Route path="/servicesignup" exact element={<ServiceSignUp />} />
            <Route path="/shoplist" exact element={<ShopList />} />
            <Route path="/workerslist" exact element={<WorkersList />} />
            <Route path="/womenservicelist" exact element={<WomenserviceList />} />
            <Route path="/womensalonlist" exact element={<WomenSalonList />} />
            <Route path="/therapieslist" exact element={<TherapiesList />} />
            <Route path="/cleaninglist" exact element={<CleaningList />} />
          </Routes>
        </div>
      </Router> 
  );
}

export default App;
