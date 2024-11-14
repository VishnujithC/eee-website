import AssociationSection from "@components/AssociationSection";
import Footer from "@components/Footer";
import Hero from "@components/Hero";

const EventsPage = () => {
  const imageUrl = "https://images.unsplash.com/photo-1678320581602-1826862871b8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
      <Hero name="Events" lineTwoHeading={'Association'} image={imageUrl}/>
      <AssociationSection/>
      <Footer />
    </>
  );
};

export default EventsPage;
