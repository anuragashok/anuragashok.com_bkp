import HomeResumeCard from '@/components/HomeResumeCard'
import data from '@/data/resume.json'
import site from '@/data/site.json'
import Head from 'next/head'
import Image from 'next/image'
import PoweredByVercel from 'powered-by-vercel'

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaLocationArrow,
  FaCopyright,
  FaTrophy,
} from 'react-icons/fa'

export default function Page() {
  return (
    <>
      <Head>
        <title>Anurag Ashok</title>
      </Head>
      <div className="container mx-auto pl-5 pr-5">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="avatar">
              <div className="w-48 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                <Image
                  layout="fixed"
                  width="200%"
                  height="200%"
                  alt="Anurag Ashok"
                  src="/home_img/anurag.jpg"
                />
              </div>
            </div>
            <div className="pl-5 ">
              <h2 className="text-4xl font-bold text-secondary">Hello World!</h2>
              <h1 className="text-5xl font-bold text-primary">I&apos;m Anurag Ashok</h1>
              <h3 className="text-green text-3xl">
                An engineer driving Southeast Asia forward @ Grab
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <button className="btn btn-outline btn-secondary">About</button>
                <button className="btn btn-outline btn-secondary">Blog</button>
                <button className="btn btn-outline btn-secondary">Contact Me</button>
                <button className="btn btn-outline btn-secondary">Download Resume</button>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <HomeResumeCard title="About" background="profile.jpg">
            <div className="prose-code prose prose prose-zinc  text-white">
              <p>
                9+ years of expertise in delivering business value through code. Seasoned software
                professional with background in entire software development process. Quickly learns
                new technologies and can work in teams as well as self-directed settings.
              </p>
              <p>
                <FaLocationArrow className="mr-2 inline" />
                <span>Singapore</span>
              </p>
              <p className="text-xl">
                {data.basics.profiles.map((k) => (
                  <a key={k.network} href={k.url} className="link block">
                    <div className="inline-flex items-center text-white  hover:underline">
                      {k.network.toLowerCase() == 'website' && <FaGlobe className="mr-2" />}
                      {k.network.toLowerCase() == 'linkedin' && <FaLinkedin className="mr-2" />}
                      {k.network.toLowerCase() == 'github' && <FaGithub className="mr-2" />}
                      <span>{k.url.replace('https://', '').replace('www.', '')}</span>
                    </div>
                  </a>
                ))}
              </p>
            </div>
          </HomeResumeCard>
          <HomeResumeCard title="Skills" background="Skills.jpg">
            {data.skills.map((s) => (
              <div key={s.name} className="mb-2">
                <h4 className="text-base-100">{s.name}</h4>
                {s.keywords.map((k) => (
                  <div key={k} className="badge badge-md mr-2 mt-2 bg-accent p-4">
                    {k}
                  </div>
                ))}
              </div>
            ))}
          </HomeResumeCard>
          <HomeResumeCard title="Career" background="Career.jpg">
            <ul className="">
              {data.work.map((w) => (
                <li key={w.name} data-content={w.startDate} className="step step-accent text-xs">
                  <div>
                    <div className="badge badge-lg m-2 bg-accent p-4">{w.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </HomeResumeCard>
          <HomeResumeCard title="Education" background="Education.jpg" showMore={false}>
            <div className="stat-title text-lg">Mumbai University</div>
            <div className="stat-value whitespace-normal text-5xl">Bachelor of Engineering</div>
            <div className="stat-value whitespace-normal text-3xl">Information Technology</div>
            <div className="stat-desc pt-2 text-lg">2008-2012</div>
          </HomeResumeCard>
          <HomeResumeCard title="Hobby Project" background="PersonalProject.jpg" showMore={false}>
            <div className="prose-code prose prose-zinc mt-2 text-white  prose-h3:mt-1">
              <a href={data.projects[0].entity}>
                <h3 className=" mt-1 mr-2 mb-1 inline-block text-white hover:underline">
                  {data.projects[0].name}
                </h3>
              </a>
              <h4 className="mt-1 inline-flex items-center  text-primary">
                <FaTrophy className="mr-2 align-middle" />
                <span>{data.projects[0].highlights[0]}</span>
              </h4>
              <p className="mt-2">{data.projects[0].description}</p>
              <p className="mt-1 ">
                <a href={data.projects[0].url} className="block text-xl text-white no-underline">
                  <div className="inline-flex items-center text-white  hover:underline">
                    <FaGithub className="mr-2" />
                    <span>
                      {data.projects[0].url.replace('https://github.com/', '').replace('www.', '')}
                    </span>
                  </div>
                </a>
              </p>
              <div>
                {data.projects[0].keywords.map((k, i) => (
                  <div key={i} className="badge-white badge badge-accent mr-1 mt-1 p-3">
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </HomeResumeCard>
          <HomeResumeCard title="Hobby Project" background="PersonalProject.jpg" showMore={false}>
            <div className="prose-code prose prose-zinc mt-2 text-white  prose-h3:mt-1">
              <a href={data.projects[1].entity}>
                <h3 className=" mt-1 mr-2 inline-block text-white hover:underline">
                  {data.projects[1].name}
                </h3>
              </a>
              <p className="mt-2">{data.projects[1].description}</p>
              <p className="mt-2">
                <a href={data.projects[1].url} className="block text-xl text-white no-underline">
                  <div className="inline-flex items-center text-white  hover:underline">
                    <FaGithub className="mr-2" />
                    <span>
                      {data.projects[1].url.replace('https://github.com/', '').replace('www.', '')}
                    </span>
                  </div>
                </a>
              </p>
              <div>
                {data.projects[1].keywords.map((k, i) => (
                  <div key={i} className="badge-white badge badge-accent mr-1 mt-1 p-3">
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </HomeResumeCard>
        </div>
        <footer className="footer mt-6 bg-neutral p-10 text-neutral-content">
          <div>
            <span className="footer-title">Links</span>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Download Resume</a>
          </div>
          <div>
            <span className="footer-title">Social</span>
            <div className="mb-4 grid grid-flow-col gap-4 text-5xl">
              {data.basics.profiles.map((k) => (
                <a key={k.network} href={k.url} className="link block">
                  {k.network.toLowerCase() == 'website' && <FaGlobe />}
                  {k.network.toLowerCase() == 'linkedin' && <FaLinkedin />}
                  {k.network.toLowerCase() == 'github' && <FaGithub />}
                </a>
              ))}
            </div>
            <PoweredByVercel
              utmSource={site.url}
              target="_blank"
              rel="noopener noreferrer"
              svgProps={{
                width: 200,
              }}
            />
          </div>
        </footer>
      </div>
    </>
  )
}
