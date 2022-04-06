import Image from 'next/image'
import Link from 'next/link'
import { FaArrowCircleRight, FaBuilding, FaPersonBooth } from 'react-icons/fa/'

interface Props {
  title: string
  background: string
}

const HomeResumeCard: React.FC<Props> = ({ children, title, background }) => {
  return (
    <div className="card image-full card-compact h-96 shadow-xl">
      <figure>
        <Image src={'/home_img/' + background} layout="fill" quality={50} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-primary">{title}</h2>
        <div className=" bg-transparent">{children}</div>
        <div className="card-actions absolute bottom-0 right-0 justify-end">
          <Link href={`/cv#${title}`} passHref={true}>
            <a>
              <kbd className="kbd cursor-pointer bg-transparent text-2xl">
                <FaArrowCircleRight />
              </kbd>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeResumeCard
