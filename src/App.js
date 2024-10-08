// import logo from './logo.svg';
// import './App.css';
// import Header from './components/header/Header';
// import Banner from './components/body/Banner';
// import ServiceCards from './components/body/services/ServiceCards'
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
// import Body from './components/body/Body';
// import Footer from './components/footerComponents/Footer';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Partnership from './components/body/navLinksBodys/Partnership';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path:'/',
//       element:<Body/>
//     },
//     {
//       path:'/Partnership',
//       element:<Partnership/>
//     }

//   ])
//   return (
//     <div className="App">
//      <Header/>
//      <RouterProvider router={router}/>
//       <Footer/>

//     </div>
//   );
// }

// export default App;


import "./App.css";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import Body from "./components/body/Body";
import Footer from "./components/footerComponents/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Partnership from "./components/body/navLinksBodys/Partnership";
import Blogs from "./components/body/navLinksBodys/Blogs";
import Careers from "./components/body/navLinksBodys/Careers";
import ContactUs from "./components/body/navLinksBodys/ContactUs";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>  <Header /> <Body/>  <Footer /></>,
    },
    {
      path: "/Partnership",
      element: <>  <Header /> <Partnership/>  <Footer /></>,
    },
    {
      path:'/Blogs',
      element:<>  <Header /> <Blogs/>  <Footer /></>
    },
    {
      path:'/Careers',
      element:<> <Header/> <Careers/> <Footer/> </>
    },
    {
      path:'/ContactUs',
      element: <><Header/> <ContactUs/> <Footer/></>
    }

    
  ]);

  return (
    <RouterProvider router={router}>
      {/* <div className="App">
        <Header />
        <Footer />
      </div> */}
    </RouterProvider>
  );
}

export default App;
