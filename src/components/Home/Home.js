
import img from '../../img/img-slider-1.png';
import Facility from '../Facility/Facility';
import Services from '../Services/Services';
import ServiceCard from '../ServiceCard/ServiceCard';
import ('./Home.css')
const Home = () => {
    return (
        <div id="carouselExampleSlidesOnly " className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <div className="container">
             <h1 className="text-center mb-5">ছাগলনাইয়া ব্লাড ডোনার্স ক্লাব</h1>
             <Services></Services> 
             <Facility></Facility>
             <ServiceCard></ServiceCard>
              </div>
            </div>
    );
};

export default Home;