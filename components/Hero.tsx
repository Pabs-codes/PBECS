import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/media/peoplesbanklogo.svg"
          alt="logo"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-180px] left-[-90px] w-10 lg:w-[500px]"

        />
        <h1 className="bold-52 lg:bold-60 mt-4 lg:mt-6">Employees Cooperative Society</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">Welcome to Peoples Bank Employees Cooperative Society,
         where financial empowerment meets community strength. Explore our range of services and
          discover the benefits of being a part of our cooperative family.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          {/* <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div> */}

          <p className="bold-16 lg:bold-20 text-blue-70">
           About Us <br/>
            <span className="regular-16 lg:regular-12 text-gray-30">Peoples Bank Employees Cooperative Society stands as a beacon of 
financial inclusion and community solidarity. Our roots run deep, 
and our commitment is unwavering to empower each member on their unique 
financial journey. Beyond services, we cultivate a sense of belonging, 
where every individual contributes to the collective prosperity. Join us 
in creating a legacy of shared success, where your aspirations find a home
 and your financial goals become a shared triumph</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Sign Up" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="Learn more" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="bold-20 text-white">Our vision</p>
              {/* <Image src="/close.svg" alt="close" width={24} height={24} /> */}
            </div>
            <p className="bold-10 text-gray-20">Empowering prosperity,
               our vision is a thriving community where every member achieves 
               financial success and fulfillment</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="bold-20 text-white">Mission</p>
              <p className=" regular-16 block text-gray-20">We are dedicated to providing transparent and accessible financial services, fostering unity and trust among our members.
</p>
            </div>
  
            {/* <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero