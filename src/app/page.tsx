import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const ModelContainer = dynamic(() => import('../components/Model'), {
  ssr: false,
  loading: () => <p className="text-center flex items-center justify-center h-full"></p>
})
const SocialMedia = dynamic(() => import('@/components/SocialMediaButtons'))
const ShowOnFrame = dynamic(() => import('@/components/AnimateVisible'))
const CallToActionButton = dynamic(() => import('@/components/CTAButton'))
const FloatingImages = dynamic(() => import('@/components/FloatingImages'), {
  ssr: false
})
const Footer = dynamic(() => import('@/components/Footer'))
const Header = dynamic(() => import('@/components/Header'), {
  ssr: false
})
const SampleProjects = dynamic(() => import('@/components/SampleProjects'), {
  ssr: false
})
const CircleImage = dynamic(() => import('@/components/CircleImage'))

export default function Home() {
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchAllProjects = async () => {
  //     const res = await fetch(`${server}/api/projects`);
  //     const allProjects = await res.json();
  //     setProjects(allProjects);
  //     setLoading(false);
  //   }
  //   fetchAllProjects()
  // }, [])

  // if (loading) {
  //   return <LoadingPage/>
  // }
  
  return (
    <>
      <Header/>
      <main className="container grid grid-cols-1 gap-y-1 h-max sm:mx-auto relative">
        <section className="hero sm:flex sm:flex-col items-center relative">
          <div className="h-72 w-72 mx-auto mt-10 sm:w-96 sm:h-96 sm:mt-0">
            <ModelContainer glbModelDirectory={'/crown.glb'}/>
          </div>
          <div className="w-[330px] h-16 relative mx-auto -mt-14 sm:w-[550px] sm:h-40 sm:-mt-28">
            <ShowOnFrame>
              <Image alt="Multipotentialite Hero Image" width={0} height={0} sizes="600px" src={'/multipotentialite.webp'} priority className="w-full"/>
            </ShowOnFrame>
          </div>
          <ShowOnFrame>
            <p className="text-center font-mont font-medium text-xl -mt-1 sm:-mt-10 sm:text-3xl">Individuals with many<br/> interests and creative pursuits<span className="mx-1 block text-xs font-normal">by Emilie Wapnick</span></p>
            <SocialMedia/>
          </ShowOnFrame>
          <FloatingImages/>
        </section>
        <section className="about my-10 flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center">
          <div className="mx-auto mb-14 md:mb-0">
            {/* ImageSource = Image Directory, Image Size = [Value]rem */}
            <ShowOnFrame>
              <CircleImage ImageSource="/profile.webp" ImageSize={10}/>
              <div className="md:block hidden">
                <CallToActionButton>
                  <Link href={'/CV_ROMERO.pdf'} target="_blank" rel="noreferrer" className="font-barl font-bold text-2xl tracking-wide text-white">View Resume</Link>
                </CallToActionButton>
              </div>
            </ShowOnFrame>
          </div>
          
          <div className="md:ml-10 md:flex-1">
            <ShowOnFrame>
              <p className="font-barl text-6xl font-bold block mb-10 border-b-4 pb-4 text-center md:text-justify md:text-5xl">
                Hello There ! <span className="block sm:inline">👋 😃</span>
              </p>
            </ShowOnFrame>
          </div>
            <ShowOnFrame>
              <p className="font-mont text-center leading-7 md:text-left md:ml-56 md:-mt-20">
                I am an aspiring full stack web developer based from the Philippines, eager to make my mark in the field of programming and the tech industry. Along with my positive attitude and mindset, I strive to learn more about programming because I believe in the power of continuous learning. Alongside my passion for coding, I am also a multipotentialite, which means I have diverse interests and talents that extend beyond programming.<br/><br/>
                This versatility allows me to approach problems from different angles, bringing creativity and innovation to my work. This also allows me to adapt easily in different environments and also learn different programming languages that can built softwares in different platforms.
              </p>
            </ShowOnFrame>
          <div className="md:hidden block">
            <CallToActionButton>
              <Link href={'/CV_ROMERO.pdf'} target="_blank" rel="noreferrer" className="font-barl font-bold text-2xl tracking-wide text-white">View Resume</Link>
            </CallToActionButton>
          </div>
        </section>
        <section className="projects my-10 flex flex-col">
          <ShowOnFrame>
            <h2 className="text-center font-barl font-bold text-6xl border-b-4 pb-3">Projects ! <span className="block mt-3 sm:inline sm:mt-0">🖥️ 📱</span>
            </h2>
          </ShowOnFrame>
          <SampleProjects/>
          <CallToActionButton>
            <Link href={"#"} className="font-barl font-bold text-2xl tracking-wide text-white">
              View All Projects
            </Link>
          </CallToActionButton>
        </section>
        <section className="contact my-10 flex flex-col">
          <ShowOnFrame>
            <h2 className="text-center font-barl font-bold text-6xl border-b-4 pb-3 mb-4">
              Let&apos;s Chat ! <span className="block sm:inline">📧 💬</span>
            </h2>
          <p className="font-mont text-center text-lg sm:text-2xl">Connect with me !<br/>We can work it out soon !</p>
          </ShowOnFrame>
          <CallToActionButton>
            <Link href={"mailto:romerojameslabr@gmail.com"} rel="noopener noreferrer" className="font-barl font-bold text-2xl tracking-wide text-white">Say Hello !</Link>
          </CallToActionButton>
        </section>
      </main>
      <Footer/>
    </>
  )
}
