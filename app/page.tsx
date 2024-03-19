import Content from "@/components/Content/Content";
import Cover from "@/components/Cover/Cover";
import Footer from "@/components/Footer/Footer";
import Newsletter from "@/components/Newsletter/Newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
   <Cover/>
   <Content/>
   <Newsletter/>
   <Footer/>
    </div>
  );
}
