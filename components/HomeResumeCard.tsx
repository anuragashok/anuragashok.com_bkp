import Image from 'next/image'
import Link from 'next/link'
import { FaArrowCircleRight, FaBuilding, FaPersonBooth } from 'react-icons/fa/'

interface Props {
  title: string
  background: string
  showMore?: boolean
}

const HomeResumeCard: React.FC<Props> = ({ children, title, background, showMore }) => {
  return (
    <div className="card-compact card image-full h-96 shadow-xl">
      <figure>
        <Image src={'/home_img/' + background} layout="fill" quality={50} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-primary">{title}</h2>
        <div className=" bg-transparent">{children}</div>
        <div className="card-actions absolute bottom-0 right-0 justify-end">
          {showMore && (
            <Link href={`/cv#${title}`} passHref={true}>
              <a>
                <kbd className="kbd cursor-pointer border-none bg-transparent text-2xl">
                  <FaArrowCircleRight />
                </kbd>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

HomeResumeCard.defaultProps = {
  showMore: true,
}

export default HomeResumeCard
