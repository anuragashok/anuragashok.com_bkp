import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
}

const HomeResumeCard: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="card image-full bg-base-100 shadow-xl">
      <figure>
        <Image
          src={'/home_img/' + title + '.jpg'}
          alt="study education"
          layout="fill"
          quality={50}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-accent">{title}</h2>
        <div className=" bg-transparent">{children}</div>
        <div className="card-actions justify-end">
          <Link href={`/cv#${title}`} passHref={true}>
            <a>
              <kbd className="kbd absolute bottom-2 right-2 cursor-pointer bg-secondary">▶︎</kbd>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeResumeCard
