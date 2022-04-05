import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abhishek Rawat</title>
        <meta name="description" content="Abhishek Rawat's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <section class="pb-10">

<div class="py-16 md:py-24 lg:pt-40 lg:pb-52 px-2 md:px-6 w-full">
  <div class="container px-4 mx-auto relative">
    <div class="max-w-4xl mx-auto text-center">
      <span class="text-xl md:text-2xl font-extrabold text-purple-500">Hello!</span>
      <h1 class="text-4xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold font-heading mt-1 mb-8">I design delightful Apps</h1>
      <p class="text-xl md:text-2xl font-extrabold leading-8 mb-8">I specialize in designing healthcare &amp; e-commerce focused apps that are meaningful, easy to use and yet, delightful!</p>
      <div class="max-w-2xl mx-auto">
        <div class="flex items-start md:items-center justify-center">
          <span class="md:text-lg font-extrabold pb-5">Have a project in mind or want to validate your idea, lets get in touch!</span>
        </div>
        <div class="flex flex-wrap -mx-2 mb-4 justify-center">
          <div class="w-full md:w-auto lg:w-2/3 px-2 mb-2 md:mb-0">
            <input class="inline-block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded outline-none" type="email" placeholder="hello@shuffle.dev"/>
          </div>
          <div class="w-full md:w-auto lg:w-auto px-2"><a class="inline-flex w-full md:w-auto items-center justify-center h-full py-4 px-5 leading-6 text-lg text-white font-extrabold hover:bg-indigo-900 border-3 rounded transition duration-200 border-indigo-900 bg-purple-500" href="#">Get Started</a></div>
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
