import Head from "next/head"

export default function Home() {
  return (
    <div className="grid h-screen w-screen grid-cols-1 grid-rows-4 text-center text-4xl font-bold">
      <Head>
        <title>Dr. Derek Austin - Developer Advocate - @DoctorDerek</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="flex w-full items-center justify-center rounded-xl bg-[#1FFFFF] p-1 text-6xl">
        Dr. Derek Austin 🥳
      </h1>
      <h1 className="flex w-full items-center justify-center rounded-xl bg-[#FFFDE1] p-1">
        I work exclusively with Next.js + Tailwind CSS
      </h1>
      <h1 className="flex w-full items-center justify-center rounded-xl bg-[#FF9D76] p-1">
        Senior Frontend Developer ♦ React Software Engineer ♦ SEO & Web
        Performance Expert ♦ I love accessible websites
      </h1>
      <h1 className="flex w-full items-center justify-center rounded-xl bg-[#FF4273] p-1">
        <a href="https://DoctorDerek.Medium.com">Medium.com/@DoctorDerek</a>{" "}
        <a href="https://LinkedIn.com/in/derek-austin">
          LinkedIn.com/in/Derek-Austin
        </a>
        <a href="https://github.com/doctorderek">GitHub.com/DoctorDerek</a>
        <a href="https://twitter.com/AskDoctorDerek">
          Twitter.com/AskDoctorDerek
        </a>
      </h1>
    </div>
  )
}
