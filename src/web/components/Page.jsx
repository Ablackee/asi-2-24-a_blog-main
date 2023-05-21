import { useAppContext } from "@/web/components/AppContext.jsx"
import Button from "@/web/components/Button.jsx"
import Link from "@/web/components/Link.jsx"
import clsx from "clsx"
import Image from "next/image"

const Page = (props) => {
  const { children, className, title } = props
  const {
    state: { session },
    actions: { signOut },
  } = useAppContext()

  return (
    <main className="flex min-h-screen flex-col bg-gray-500">
      <header className="sticky top-0 border-b border-neutral-300 bg-white">
        <div className="mx-auto flex max-w-3xl justify-between p-2">
          <Link href="/">Nmaper by Anoir</Link>
          <nav>
            <ul className="flex items-center gap-4">
              {session ? (
                <>
                  <li>
                    <Button onClick={signOut}>Sign out</Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/scan">Nmap</Link>
                  </li>
                  <li>
                    <Link href="/review">Historique</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <div className="mx-auto text-center">
        <Image src="/nmap.png" alt="nmap logo" width={200} height={200} />
      </div>
      <section className="grow">
        <div className={clsx("mx-auto flex max-w-3xl flex-col p-2", className)}>
          {title && <h1 className="py-4 text-2xl font-semibold">{title}</h1>}
          {children}
        </div>
      </section>
    </main>
  )
}

export default Page
