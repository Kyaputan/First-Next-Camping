import Link from "next/link"
import { Button } from "../ui/button"

const Logo = () => {
  return (
    <Button variant={'default'} size={'sm'} asChild>
      <Link href={'/'} className="text-xl">Logo</Link>
    </Button>
  )
}

export default Logo