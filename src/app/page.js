import Blog from "@/components/Blog";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";


export default function Home() {
  return (
    <>
    <div className="mt-10">
      <section>
        <Hero/>
      </section>
    </div>
    <div className="mt-25">
      <section>
        <Features/>
      </section>
    </div>

    <div className="mt-25">
      <section>
        <Resume/>
      </section>
    </div> 

    </>
  );
}
