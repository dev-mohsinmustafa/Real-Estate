import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg from "../../Assets/couple.jpg";
import bg2 from "../../Assets/13.jpg";
// import new1 from "../../Assets/new1.jpg"
// import new2 from "../../Assets/new2.jpg"
// import phone from "../../Assets/phone.jpg"

import ProductCard from "../Products/ProductCard";
import  {useDispatch, useSelector} from "react-redux"
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import Footer from "../../Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

const Home = () => {
  const dispatch = useDispatch();
  const { products,error,loading } = useSelector(
    (state) => state.products
  );

   useEffect(() => {
    if(error){ 
      toast.error(error);
      dispatch(clearErrors());
 }
  dispatch(getProduct());
   }, [dispatch,error])
   
  return (
    <>
    {loading ? (
      <Loading />
    )
    : (
      <>
      <MetaData title="Home" />
      <Header />
        {/* Carousel */}
        <div className="banner">
               <Carousel>
                 <img src={bg} className="bgImg"/>
                 <img src={bg2} className="bgImg"/>
                 {/* <img src={new1} className="bgImg"/> */}
                 {/* <img src={new2} className="bgImg" width={1000}/> */}
                 {/* <img src={phone} className="bgImg"/> */}
               </Carousel>
             <div className="home__content">
               <div style={{
                 display:"flex",
                 alignItems:"center",
               }}>
               <h2 style={{
                 fontFamily: "Segoe Script",
                 fontSize: "3em",
                 fontWeight:"500"
               }}>Buy 2 Get</h2>
               <span style={{
                 padding:"10px",
                 backgroundColor:"#fff",
                 margin:"0px 10px",
                 textAlign:"center",
                 width:"150px",
                 height:"40px",
                 color: "#26c",
                 fontFamily: "Segoe Script",
                 fontSize: "2.4em",
                 display:"flex",
                 justifyContent:"center",
                 lineHeight:".7",
                 alignItems:"center"
               }}>1 Free</span>
               </div>
               <div>
                 <h2 style={{
                   fontSize:"4.5em",
                   fontFamily:"Poppins,sans-serif",
                   color:"#fff",
                 }}>Fashionable</h2>
               </div>
               <div>
                 <h2 style={{
                   fontSize:"4.5em",
                   fontWeight:"400",
                   fontFamily:"Poppins,sans-serif",
                   color:"#fff",
                   lineHeight:".7"
                 }}>Collection</h2>
               </div>
               <div>
                 <h2
                 style={{
                   fontWeight:"400",
                   fontFamily:"Poppins,sans-serif",
                   color:"#fff",
                   fontSize:"1em",
                   paddingTop:"10px"
                 }}
                 >
                 Get Free Shipping on all orders over $99.00
                 </h2>
               </div>
               <div>
                 <Link to = "/admin/product">
                 <button type="submit" style={{
                   width:"150px",
                   height:"50px",
                   border:"none",
                   background:"#FFEF16",
                   margin:"10px",
                  fontWeight:"bold",
                   borderRadius:"20px",
                   fontSize:"20px",
                   color:"white",
                   cursor:"pointer"
                 }}
                 className="Home__button"
                 > + CREATE </button>
                 </Link>
                 

               </div>
             </div>
         </div>
 
 
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {products && products.map((product) =>(
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <Footer />
      <BottomTab />
      </>    
    )}
    </>
  );
};

export default Home;
