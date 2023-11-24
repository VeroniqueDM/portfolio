import { Outlet } from 'react-router-dom';
// import './index.scss'
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Certificates from '../Certificates/Certificates';
import Contact from '../Contact/Contact';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <About/>
      <Skills/>
      <Portfolio/>
      <Certificates/>
      
      <Contact/>  
      {/* <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div> */}
    </div>
  );
};

export default Layout;
