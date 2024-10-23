import FacilitiesSection from "@components/FacilitiesSection";
import Footer from "@components/Footer";
import Hero from "@components/Hero";


const FacilityPage = () => {
  const imageUrl = "https://images.unsplash.com/photo-1599256630445-67b5772b1204?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
      <Hero name="Facilities" lineTwoHeading={'Facilities'} image={imageUrl} />
      <FacilitiesSection />
      <Footer />
    </>
  );
};

export default FacilityPage;
