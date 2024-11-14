import Footer from "@components/Footer";
import GallerySection from "@components/GallerySection";
import Hero from "@components/Hero";

const GalleryPage = () => {
  const imageUrl = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
      <Hero name="Gallery" lineTwoHeading={'Gallery'} image={imageUrl}/>
      <GallerySection/>
      <Footer />
    </>
  );
};

export default GalleryPage;