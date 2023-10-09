import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="mx-auto grid max-w-7xl items-center gap-10 p-10 md:grid-cols-2 md:p-24">
        <div className="grid gap-2">
          <h1 className="text-center text-6xl font-extrabold text-blue-900 overline decoration-lime-600 md:text-6xl lg:text-8xl">
            OKTAANI
          </h1>
          <div className="max-w-md text-center text-xl text-amber-50 md:text-2xl">
            A collection of small{" "}
            <span className="underline decoration-cyan-500">web apps</span>{" "}
            created by an{" "}
            <span className="underline decoration-red-600">enthusiastic</span>{" "}
            hobby developer
          </div>
          <Link
            href="https://github.com/Epikle"
            className="mx-auto mt-8 flex gap-2 rounded-md bg-blue-900 px-12 py-4 shadow-md outline-slate-800 transition-all hover:bg-lime-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github /> Epikle
          </Link>
        </div>
        <Image
          src="/unnamed.jpg"
          alt="oktaani"
          width={512}
          height={512}
          className="mx-auto aspect-square w-[350px] rounded-2xl border-4 border-indigo-600 shadow-xl"
        />
      </header>
      <main className="grid gap-12 md:gap-24">
        <div className="bg-red-500 py-12 shadow-lg md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 md:grid-cols-2">
            <Image
              src="/oktaani-dtc-preview.png"
              alt="oktaaniDTC"
              width={1698}
              height={818}
              className="aspect-video w-full object-cover object-top shadow-xl md:h-72 md:rounded-2xl"
            />
            <div>
              <h1 className="relative text-5xl font-extrabold  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full md:text-6xl lg:text-7xl">
                <Link
                  href="https://oktaani-dtc.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  oktaani<span className="text-blue-900">DTC</span>
                </Link>
              </h1>
              <div className="text-center text-2xl text-amber-50">
                <span className="underline decoration-cyan-500">fault</span>{" "}
                codes.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cyan-500 py-12 shadow-lg md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="relative text-5xl font-extrabold  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full md:text-6xl lg:text-7xl">
                <Link
                  href="https://oktaani.com/todo/"
                  rel="noopener noreferrer"
                  target="_blank"
                  prefetch={false}
                >
                  <span className="text-blue-900">oktaani</span>TODO
                </Link>
              </h1>
              <div className="text-center text-2xl text-amber-50">
                yet another{" "}
                <span className="underline decoration-red-500">TODO</span> app.
              </div>
            </div>

            <Image
              src="/oktaani-todo-preview.png"
              alt="oktaaniTODO"
              width={1200}
              height={975}
              className="aspect-video w-full object-cover object-top shadow-xl md:h-72 md:rounded-2xl"
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
              className="aspect-video w-full object-cover object-top shadow-xl md:h-72 md:rounded-2xl"
            />

            <div>
              <h1 className="relative text-5xl font-extrabold  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full md:text-6xl lg:text-7xl">
                <Link
                  href="https://oktaani-game-2.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  oktaani<span className="text-blue-900">GAMES</span>
                </Link>
              </h1>
              <div className="text-center text-2xl text-amber-50">
                have some{" "}
                <span className="underline decoration-violet-500">FUN</span>.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-500 py-12 shadow-lg md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="relative text-5xl font-extrabold  after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full md:text-6xl lg:text-7xl">
                <Link
                  href="https://github.com/Epikle/oktaani-api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-blue-900">oktaani</span>API
                </Link>
              </h1>
              <div className="text-center text-2xl text-amber-50">
                <span className="underline decoration-red-500">REST</span> API.
              </div>
            </div>

            <Image
              src="/oktaaniapi-preview.webp"
              alt="oktaaniAPI"
              width={960}
              height={640}
              className="aspect-video w-full object-cover shadow-xl md:h-72 md:rounded-2xl"
            />
          </div>
        </div>
      </main>
      <footer className="mt-12 flex items-center justify-center gap-2 bg-violet-950 py-6 shadow-lg md:mt-24 md:py-12">
        <span className="underline decoration-lime-600 decoration-2 underline-offset-4">
          2023
        </span>{" "}
        <span className="text-4xl font-semibold text-red-500">&copy;</span>{" "}
        <span className="font-extrabold">oktaani.com</span>
      </footer>
    </>
  );
}
