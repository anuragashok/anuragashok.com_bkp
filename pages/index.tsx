import HomeResumeCard from '@/components/HomeResumeCard'
import { ReactElement } from 'react'
import Layout from '../components/Layout'

export default function Page() {
  return (
    <div className="container mx-auto pl-10 pr-10">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar">
            <div className="w-48 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <div className="pl-5 ">
            <h2 className="text-4xl font-bold text-secondary">Hello World!</h2>
            <h1 className="text-5xl font-bold text-primary">I'm Anurag Ashok</h1>
            <h3 className="text-green text-3xl">
              An engineer driving Southeast Asia forward @ Grab
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              <button className="btn btn-secondary btn-outline">About</button>
              <button className="btn btn-secondary btn-outline">Blog</button>
              <button className="btn btn-secondary btn-outline">Contact Me</button>
              <button className="btn btn-secondary btn-outline">Download Resume</button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <HomeResumeCard title="Career">
          <div className="badge  badge-lg m-2 bg-accent p-4 text-base-content">
            BNP Paribas ISPL
          </div>
          <div className="badge  badge-lg m-2 bg-accent p-4 text-base-content">
            Singapore Airlines
          </div>
          <div className="badge  badge-lg m-2 bg-accent p-4 text-base-content">Grab</div>
        </HomeResumeCard>
        <HomeResumeCard title="Career">
          <ul className="steps steps-vertical">
            <li data-content="▼" className="step step-accent">
              <div>
                <div className="badge badge-outline p-2 text-base-100">2021 ▶︎ Now</div>
                <div className="badge badge-lg m-2 bg-accent p-4 text-base-content">Grab</div>
              </div>
            </li>
            <li data-content="▼" className="step step-accent">
              <div>
                <div className="badge badge-outline p-2 text-base-100">2021 ▶︎ Now</div>
                <div className="badge badge-lg m-2 bg-accent p-4 text-base-content">
                  Singapore Airlines
                </div>
              </div>
            </li>
            <li data-content="▼" className="step step-accent">
              <div>
                <div className="badge badge-outline p-2 text-base-100">2021 ▶︎ Now</div>
                <div className="badge badge-lg m-2 bg-accent p-4 text-base-content">
                  BNP Paribas ISPL
                </div>
              </div>
            </li>
            <li data-content="▼" className="step step-accent">
              <div>
                <div className="badge badge-outline p-2 text-base-100">2021 ▶︎ Now</div>
                <div className="badge badge-lg m-2 bg-accent p-4 text-base-content">
                  Tata Consultancy Services
                </div>
              </div>
            </li>
          </ul>
        </HomeResumeCard>
        <HomeResumeCard title="Education">
          <div className="stat-title">Mumbai University</div>
          <div className="stat-value whitespace-normal">Bachelor of Engineering</div>
          <div className="stat-desc pt-2">2008-2012</div>
        </HomeResumeCard>

        <HomeResumeCard title="Education3">
          <div className="stat-title">Mumbai University</div>
          <div className="stat-value whitespace-normal">Bachelor of Engineering</div>
          <div className="stat-desc pt-2">2008-2012</div>
        </HomeResumeCard>
      </div>
    </div>
  )
}
