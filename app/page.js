import Hero from "./components/Hero";
import MetricCounter from "./components/MetricCounter";
import Products from "./components/Products";
import AppsBuilt from "./components/AppsBuilt";
import CostEstimator from "./components/CostEstimator";
import ComparePlans from "./components/ComparePlans";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import CTA from "./components/CTA";
import ShortAbout from "./components/ShortAbout";
import BusinessImpact from "./components/BusinessImpact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ShortAbout  img1="/aboutThumb1_1.webp"
        img2="/aboutThumb1_2.png"
        subtitle="About Our App"
        title="Simple Reports & Analytics Backdown As it"
        content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use"
        FeatureList={[
          "With our Technological and Marketing Solutions.",
          "We are trusted all over the world.",
          "Start Your 14 Days Free Trials Today!",
        ]}
        btnname="Discover More"
        btnurl="/about"/>
      <MetricCounter />
      <BusinessImpact/>
      <Products />
      <CostEstimator />
      <ComparePlans />
      <AppsBuilt />
      <Testimonial />
      <Faq />
      <CTA />
    </main>
  );
}
