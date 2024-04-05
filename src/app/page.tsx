import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ExternalLink, Github } from "lucide-react";

export default function Home() {
  return (
    <>
      <header
        id="header"
        className="mx-auto grid max-w-7xl items-center justify-items-center gap-10 p-10 md:grid-cols-2 md:p-24"
      >
        <div className="grid gap-2">
          <div className="background-animate h-4 border-b-2 border-blue-900 bg-gradient-to-r from-red-500 via-orange-500  to-violet-950" />
          <h1 className="text-center text-6xl font-extrabold text-blue-900 md:text-6xl lg:text-8xl">
            OKTAANI
          </h1>
          <div className="max-w-md text-center text-xl text-amber-50 md:text-2xl">
            A collection of small{" "}
            <span className="underline decoration-cyan-500">web apps</span>{" "}
            created by an{" "}
            <span className="underline decoration-red-500 decoration-wavy decoration-2 underline-offset-4">
              enthusiastic
            </span>{" "}
            hobby developer
          </div>
          <Link
            href="https://github.com/Epikle"
            className="relative mx-auto mt-8 flex gap-2 rounded-md bg-blue-900 px-12 py-4 shadow-md transition-all hover:bg-lime-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github /> Epikle
            <div className="absolute -right-4 -top-4 grid place-items-center rounded-full bg-red-500 p-2">
              <ExternalLink />
            </div>
          </Link>
        </div>
        <div className="mx-auto aspect-square w-full overflow-hidden rounded-full ring-[16px] ring-blue-900 md:w-[320px]">
          <Image
            priority
            src="/unnamed.png"
            alt="oktaani"
            width={500}
            height={500}
            className="scale-125 transition-all hover:scale-105"
          />
        </div>
      </header>
      <main className="grid gap-12 md:gap-24">
        <div className="bg-red-500 py-12 shadow-lg md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 md:grid-cols-2">
            <Image
              src="/oktaani-dtc-preview.png"
              alt="oktaaniDTC"
              width={1698}
              height={818}
              className="aspect-video w-full object-cover object-top shadow-xl transition-all md:h-72 md:rounded-2xl md:hover:scale-105"
            />
            <div>
              <h2 className="relative mx-auto max-w-fit text-4xl font-extrabold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full md:text-5xl lg:text-7xl">
                <Link
                  href="https://dtc.oktaani.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  oktaani<span className="text-blue-900">DTC</span>
                </Link>
                <ExternalLink className="absolute -right-6 -top-2" />
              </h2>
              <div className="text-center text-2xl text-amber-50">
                <span className="underline decoration-cyan-500 decoration-wavy decoration-2 underline-offset-4">
                  fault
                </span>{" "}
                codes.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cyan-500 py-12 shadow-lg md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="relative mx-auto max-w-fit text-4xl font-extrabold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full md:text-4xl lg:text-6xl xl:text-7xl">
                <Link
                  href="https://todo.oktaani.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  prefetch={false}
                >
                  <span className="text-blue-900 underline-offset-4">
                    oktaani
                  </span>
                  TODO
                </Link>
                <ExternalLink className="absolute -right-6 -top-2 text-blue-900" />
              </h2>
              <div className="text-center text-2xl text-amber-50">
                yet another{" "}
                <span className="underline decoration-red-500 underline-offset-4">
                  TODO
                </span>{" "}
                app.
              </div>
            </div>

            <Image
              src="/oktaani-todo-preview.png"
              alt="oktaaniTODO"
              width={1200}
              height={975}
              className="aspect-video w-full object-cover object-top shadow-xl transition-all md:h-72 md:rounded-2xl md:hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-lime-500 py-12 shadow-lg md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 md:grid-cols-2">
            <Image
              src="/oktaanigames-preview.png"
              alt="oktaaniGAMES"
              width={960}
              height={640}
              className="aspect-video w-full object-cover object-top shadow-xl transition-all md:h-72 md:rounded-2xl md:hover:scale-105"
            />

            <div>
              <h2 className="relative mx-auto max-w-fit text-4xl font-extrabold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full md:text-4xl lg:text-6xl xl:text-7xl">
                <Link
                  href="https://game.oktaani.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  oktaani
                  <span className="text-blue-900">GAMES</span>
                </Link>
                <ExternalLink className="absolute -right-6 -top-2" />
              </h2>
              <div className="text-center text-2xl text-amber-50">
                have some{" "}
                <span className="underline decoration-violet-500  decoration-wavy decoration-2 underline-offset-4">
                  FUN
                </span>
                .
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-500 py-12 shadow-lg md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="relative mx-auto max-w-fit text-4xl font-extrabold after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full md:text-5xl lg:text-7xl">
                <Link
                  href="https://github.com/Epikle/oktaani-api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-blue-900">oktaani</span>
                  API
                </Link>
                <ExternalLink className="absolute -right-6 -top-2 text-blue-900" />
              </h2>
              <div className="text-center text-2xl text-amber-50">
                <span className="underline decoration-red-500 underline-offset-4">
                  REST
                </span>{" "}
                API.
              </div>
            </div>

            <Image
              src="/oktaaniapi-preview.webp"
              alt="oktaaniAPI"
              width={960}
              height={640}
              className="aspect-video w-full object-cover object-top shadow-xl transition-all md:h-72 md:rounded-2xl md:hover:scale-105"
            />
          </div>
        </div>
      </main>

      <footer className="mt-12 grid justify-items-center gap-2 bg-violet-950 py-6 shadow-lg md:mt-24 md:py-12">
        <Link
          href="#header"
          className="transition-all hover:scale-125"
          aria-label="Go back to start"
        >
          <ArrowUp />
        </Link>
        <div className="flex items-center justify-center gap-2">
          <span className="underline decoration-lime-600 decoration-2 underline-offset-4">
            2024
          </span>{" "}
          <span className="text-4xl font-semibold text-red-500">&copy;</span>{" "}
          <span className="font-extrabold">oktaani.com</span>
        </div>
      </footer>
    </>
  );
}
