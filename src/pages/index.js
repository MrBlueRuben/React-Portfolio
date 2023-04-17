import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from "public/RubenNoBg.png";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2 flex flex-column items-center self-center'>
              <Image src={profilePic} alt='Ruben Sánchez' className='w-full h-auto' />
            </div>
            <div>
              <AnimatedText text="Extremely motivated web developer" className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
                I am a web developer with a passion for learning new technologies and
                creating new projects. Working with the right technical workflow, from designing your wireframe & mockup, testing your UX with a prototype
                to the final product.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/RubenSanchez.pdf" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark rounded' download={true}>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
                <Link href="mailto:sanchez.alvarez.ruben@gmail.com" target={"_blank"}>Contact</Link>

              </div>

            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
