import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {

     const[loading,setLoading]=useState(true);
     const[data,setData]=useState({});
   
     const fetchData= async ()=>{
      
      try{
        const res=await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        const data=await res.json();
       
        setData(data);
        setLoading(false);
      }
      catch(error){
             console.log("Bhai Sahab Error aaye hain");
      }
     }


     useEffect(
      ()=>{
        fetchData();
      },[]
     );

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 ">
        <Navbar />


        {loading? <Spinner/> :
          <div className="max-w-screen-xl mx-auto">
          <Banner data={data} />
          <Features />
          <Projects data={data} />
          <Resume  data={data}/>
          <Testimonial data={data}/>
          <Contact data={data} />
          <Footer />
          <FooterBottom />
        </div>}
    
    </div>
  );
}

export default App;
