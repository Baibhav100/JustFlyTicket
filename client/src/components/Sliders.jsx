import { Carousel } from "@material-tailwind/react";
 
const Sliders=()=> {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image 1"
        className="h-[192.7px] w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-[192.7px] w-full object-cover"
      />
      <img
        src="https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image 3"
        className="h-[192.7px] w-full object-cover"
      />
    </Carousel>
  );
}
export default Sliders
