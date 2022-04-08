import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import bgimg from "../public/bg.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abhishek Rawat, Product, UX, UI designer</title>
        <meta
          name="description"
          content="Abhishek Rawat is a product/UX/UI designer with over 12 years of experience specializing in designing healthcare and ecommerce apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
        <div className="absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden pointer-events-none blur-2xl">
        <div className="w-[108rem] flex-none flex justify-end opacity-40">
          <Image src={bgimg} />
        </div>
        </div>
          <div className="w-full px-2 py-16 md:py-24 lg:pt-40 lg:pb-52 md:px-6">
            <div className="container relative px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-xl font-extrabold text-purple-700 md:text-2xl">
                  Hello!
                </span>
                <h1 className="pb-1 mt-1 mb-8 text-6xl font-bold text-transparent sm:text-7xl lg:text-7xl 2xl:text-7xl font-heading bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
                  I design delightful Apps
                </h1>
                <p className="mb-8 text-xl font-bold leading-8 text-white md:text-2xl">
                  I specialize in designing healthcare &amp; e-commerce focused
                  apps that are meaningful, easy to use and yet, delightful!
                </p>
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-start justify-center md:items-center">
                    <span className="pb-5 text-white md:text-lg">
                      Have a project in mind or want to validate your idea, lets
                      get in touch!
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center mb-4 -mx-2">
                    <div className="w-full px-2 mb-2 md:w-auto lg:w-2/3 md:mb-0">
                      {/* <input class="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded outline-none" type="email" placeholder="abhishek@rawat.dev"/> */}
                    </div>
                    <div className="w-full px-2 md:w-auto lg:w-auto">
                      <a
                        href="mailto:abhishek@rawat.dev"
                        className="inline-flex items-center justify-center w-full h-full px-5 py-4 text-lg font-extrabold leading-6 text-white transition duration-200 rounded md:w-auto hover:bg-indigo-900 border-3 bg-gradient-to-r from-purple-400 to-pink-600"
                      >
                        abhishek@rawat.dev
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
