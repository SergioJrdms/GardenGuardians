import { IconPlant2 } from "@tabler/icons-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <header className="flex items-center p-16 gap-2 bg-black h-40">
        <IconPlant2 className="w-10 h-20" />
        <p className="flex flex-row font-black text-4xl">
          <Link href={'/'}> GardenGuardians</Link>
        </p>
      </header>
    </>
  )
}
