import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        width={116}
        height={33}
        alt="Logo do site"
        className="h-8 w-auto"
        style={{ width: "auto", height: "auto" }}
      />
    </Link>
  )
}