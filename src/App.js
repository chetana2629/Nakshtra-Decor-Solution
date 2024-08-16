import './App.css';
import { Contact } from './contact/contact';
import { Header } from './headerFooter/header';
import { Footer } from './headerFooter/footer';
import { ProjectDetails } from './projectDetails/projectDetails';
import { About } from './about/about';
import { Services } from './servicesPage/services';
import { ServiceSingle } from './serviceSingle/serviceSingle';
import { Home } from './home/home';
import { Project } from './project/project';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from './smooth';
import Login from './login/Login';
import Register3 from './register/Register3';
import CustomerPage from './customer/CustomerPage';
import DesignerPage from './designer/DesignerPage';
import AdminPage from './admin/AdminPage';
import UserForm from './admin/UserForm';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Header />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/project-details' element={<ProjectDetails />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service-single' element={<ServiceSingle />} />
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register3' element={<Register3 />} />
        <Route path='/customer' element={<CustomerPage />} />
       <Route path= '/designer' element={<DesignerPage/>}/>
       <Route path='/admin' element={<AdminPage/>}/>
       <Route path='/admin' element={<UserForm/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
