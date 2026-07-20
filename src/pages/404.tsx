import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div className="bg-paper">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="font-montserrat text-7xl font-bold tracking-tight">
          <span className="text-split-blue-500">4</span>
          <span className="text-ink">0</span>
          <span className="text-split-amber-500">4</span>
        </p>
        <h1 className="mt-6 font-montserrat text-2xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 max-w-md text-base leading-7 text-ink-muted">
          Sorry 😔, we couldn't find what you were looking for. Maybe it got exiled.
        </p>
        <Link
          to="/"
          className="mt-10 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-split-blue-500"
        >
          Go home
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found | Split Counter App</title>
