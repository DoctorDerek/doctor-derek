import Head from "next/head"
import ReactFullpage from "@fullpage/react-fullpage"

export default function Home() {
  return (
    <ReactFullpage
      credits={{
        enabled: false,
        label: "GPL3",
        position: "left",
      }}
      navigation
      render={() => {
        // We don't need any of the props here, but I'll list them for reference
        //  render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <>
              <Head>
                <title>
                  Dr. Derek Austin - Senior Frontend Developer & React Software
                  Engineer - @DoctorDerek
                </title>
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                />
              </Head>
              <div className="section">
                <h1 className="flex w-full items-center justify-center rounded-xl bg-[#1FFFFF] p-1 text-6xl">
                  Dr. Derek Austin 🥳
                </h1>
                <h2 className="flex w-full items-center justify-center rounded-xl bg-[#FFFDE1] p-1 text-4xl">
                  I love working with Next.js + Tailwind CSS
                </h2>
                <h3 className="flex w-full items-center justify-center rounded-xl bg-[#FF9D76] p-1 text-3xl">
                  Senior Frontend Developer ♦ React Software Engineer ♦ SEO &
                  Web Performance Expert ♦ I love accessible websites
                </h3>
                <h4 className="flex w-full items-center justify-between rounded-xl bg-[#FF4273] p-1 text-lg">
                  <a href="https://DoctorDerek.Medium.com">
                    Medium.com/@DoctorDerek
                  </a>
                  <a href="https://LinkedIn.com/in/derek-austin">
                    LinkedIn.com/in/Derek-Austin
                  </a>
                  <a href="https://github.com/doctorderek">
                    GitHub.com/DoctorDerek
                  </a>
                  <a href="https://twitter.com/AskDoctorDerek">
                    Twitter.com/AskDoctorDerek
                  </a>
                </h4>
              </div>
              <div className="section">asdf</div>
            </>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
