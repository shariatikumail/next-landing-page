import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"


const Header = () => {
  return (
    <div className="flex items-center gap-4 w-full mx-auto my-4 px-4 py-2 rounded-lg shadow-md">
          <div>
            <Link href="/">
                <Image src="https://avatars.githubusercontent.com/u/178600102?v=4" alt="website logo" width={35} height={35} className="rounded-lg" />
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <ul className="flex gap-8">
              <li>Pricing </li>
              <li>customers</li>
              <li>blog</li>
              <li>doc</li>
              <li>extra</li>
            </ul>
          </div>
          <div className="flex gap-2 ml-auto">
            <Button variant={"outline"}>Login</Button>
            <Button>Register</Button>
          </div>
        </div>
  )
}

export default Header