import { Button } from "./ui/button"


const HeroSection = () => {
  return (
    <div className=" flex flex-col justify-center px-40 py-20 gap-10 text-center">
        <h1 className="text-6xl font-bold ">The website builder you are
        looking for</h1>
        <p className="text-2xl text-gray-700">Simple is a modern website builder powered by AI that changes how companies create user interfaces together.</p>
        <div className="flex gap-4 justify-center">
            <Button>Start free trial</Button>
            <Button variant={"outline"}>Learn more</Button>
        </div>
    </div>
  )
}

export default HeroSection