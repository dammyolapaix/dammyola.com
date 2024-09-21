import Image from 'next/image'
import { BackgroundBeams } from './ui/background-beams'
import me from '../public/dammyola.png'

export function Hero() {
  return (
    <div className="h-screen w-full bg-primary relative flex flex-col items-center justify-center antialiased">
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto gap-10">
        <div className="col-span-1 order-2 md:order-1 flex flex-col justify-center h-full">
          <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-5">
            Build your product on schedule
          </h1>
          <p className="text-neutral-500 my-5 text-sm relative z-10">
            Hi there, I&apos;m Dammy Ola, a software engineer dedicated to
            building products people love. With years of experience, I
            understand the frustrations of lengthy product development cycles
            that waste time and resources. Let my team manage your product
            development, delivering on time and as promised. This way, you can
            get your product into users&apos; hands quickly and iterate
            effectively.
          </p>

          <div className="my-5">
            <a
              href="https://cutt.ly/beYlOOCH"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
        <div className="col-span-1 order-1 md:order-2">
          <Image
            src={me}
            alt="me"
            width="500"
            height="500"
            className="rounded-full w-4/5 mx-auto"
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}
