import CircleImage from "@/components/CircleImage"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import dynamic from "next/dynamic"
import Image from "next/image"

const ModelContainer = dynamic(() => import('../components/Model'),{
  ssr: false,
  loading: () => <p className="text-center flex items-center justify-center h-full">Loading Model...</p>
})

export default function Home() {
  return (
    <>
      <Header/>
      <main className="container grid grid-cols-1 gap-y-1 h-max">
        <section className="hero">
          <div className="h-72 w-72 mx-auto mt-10">
            <ModelContainer glbModelDirectory={'/crown.glb'}/>
          </div>
          <div className="w-[330px] h-16 relative mx-auto -mt-14">
            <Image alt="Multipotentialite Hero Image" fill style={{objectFit: 'contain'}} src={'/hero-image.png'} priority/>
          </div>
          <p className="text-center font-mont font-medium text-xl -mt-1">Individuals with many<br/> interests and creative pursuits<span className="mx-1 block text-xs font-normal">by Emilie Wapnick</span></p>
          <div className="w-full my-4 flex items-center justify-center mt-10">
            <button className="font-barl font-bold text-2xl px-16 py-3 bg-accent rounded-2xl text-white">Projects</button>
          </div>
        </section>
        <section className="aboutMe mt-14">
          <div className="flex items-center justify-center mb-14">
            <CircleImage ImageSource="/profile.jpg" ImageSize={40}/>
          </div>
          <p className="font-mont text-center leading-7"><span className="font-barl text-6xl font-bold block mb-10">Hello There !<br/></span>I am an aspiring full stack web developer eager to make my mark in the field of programming and the tech industry. Along with my positive attitude and mindset, I strive to learn more about programming because I believe in the power of continuous learning. Alongside my passion for coding, I am also a multipotentialite, which means I have diverse interests and talents that extend beyond programming.<br/><br/>
          This versatility allows me to approach problems from different angles, bringing creativity and innovation to my work. This also allows me to adapt easily in different environments and also learn different programming languages that can built softwares in different platforms.</p>
        </section>
        <section className="projects"></section>
        <section className="contactMe"></section>
      </main>
      <Footer/>
    </>
  )
}
