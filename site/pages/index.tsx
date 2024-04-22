import Image from "next/image";
import computer from "../assets/computer.svg";
import icon from "../assets/icon.svg";
import pfp from "../assets/pfp.svg";
import xicon from "../assets/xicon.svg";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  pricePoint: "OneThousandFiveHundred" | "TwoThousand";
  favoriteVRGame: string;
}

const index = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    pricePoint: "OneThousandFiveHundred",
    favoriteVRGame: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [estTime, setEstTime] = useState(2.7528);
  const [error, setError] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsComplete(false);
    setError('');

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setTimeout(() => {
        setIsLoading(false);
        setIsComplete(true);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      setError('Failed to submit form. Please try again later.');
    }
  };

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        setIsComplete(false);
      }, 5000);
    }
  }, [isComplete]);


  return (
    <>
      <div className="site-bg sm:hidden block">
        <div className="text-black h-screen text-center pt-[200px] text-[28px]">
          working on mobile view
        </div>
      </div>
      <div className="site-bg hidden sm:block">
        <div>
          <a
            href="https://twitter.com/ivoinetech/status/1773082598161502279"
            target="_blank"
          >
            <Image
              src={xicon}
              alt="xicon"
              height={130}
              width={130}
              className=" cursor-pointer  absolute mt-10"
              style={{
                zIndex: 10,
              }}
              draggable="false"
            />
          </a>
        </div>
        <div
          className="flex flex-col items-center justify-center h-screen space-y-5"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            left: 0,
            bottom: "35%",
          }}
        >
          <div className="flex items-start text-black">
            <div className="font-aveline font-bold text-[52px] mt-5">
              Nexus Suit
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center h-screen"
          style={{
            position: "absolute",

            width: "100%",
            left: 0,
            bottom: "20%",
          }}
        >
          <div className="flex items-center justify-center gap-10">
            <div>
              <Image
                src={icon}
                alt="icon"
                height={100}
                width={100}
                draggable="false"
              />
            </div>

            <div>
              <div className="flex items-center justify-center"></div>
              <div className="flex items-center text-black justify-center gap-2">
                <div className="font-display">
                  A VR bodysuit designed to enhance game<br></br> immersion by
                  simulating touch and temperature,<br></br> making games feel
                  more realistic and engaging.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center h-screen space-y-5"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            left: 0,
            top: "5%",
          }}
        >
          <div className="flex items-center justify-center gap-10">
            <div className="flex flex-col items-start">
              <label className="text-black mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border py-2 px-4 outline-none border-black w-full text-black"
                placeholder="Marsha Mellow"
                required
              />
            </div>

            <div className="flex flex-col items-start">
              <label className="text-black mb-1">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                className="border py-2 px-4 outline-none border-black w-full text-black"
                placeholder="marsha@toomellow.me"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-10">
            <div className="flex flex-col items-start">
              <label className="text-black mb-1">
                Price Point (what you’d pay)
              </label>
              <select
                name="pricePoint"
                value={formData.pricePoint}
                onChange={handleChange}
                id="price-point"
                required
                className="border py-2 px-4 outline-none border-black w-full text-black appearance-none bg-white bg-clip-padding bg-no-repeat cursor-pointer"
                style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="none" stroke="%23000" stroke-width="1" d="M6 6l4 4 4-4"/></svg>')`,
                  backgroundPosition: "right .75rem center",
                  backgroundSize: "1.25em 1.25em",
                }}
              >
                <option>$1,500</option>
                <option>$2,000</option>
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-black mb-1">Favorite VR Games</label>
              <input
                name="favoriteVRGame"
                value={formData.favoriteVRGame}
                required
                onChange={handleChange}
                className="border py-2 px-4 outline-none border-black w-full text-black"
                placeholder="VR Chat uwu"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center h-screen"
          style={{
            position: "absolute",

            width: "100%",
            left: 0,
            top: "30%",
          }}
        >
          <div className="flex items-center justify-center gap-10">
            <div>
              <Image
                src={icon}
                alt="icon"
                height={100}
                width={100}
                draggable="false"
              />
            </div>

            <div className="bg-[#E5E2CE] h-[12 0px] rounded-[16px] w-[500px] border border-black space-y-2">
              <div className="flex items-center justify-center">
              {!isLoading && !isComplete && (
            <button
              className="bg-white text-black w-[95%] text-center h-[45px] rounded-[12px] mt-2 font-bold border border-black z-10"
              onClick={handleSubmit}
            >
              Join Waitlist
            </button>
          )}
          {isLoading && (
            <button  className="bg-white text-black w-[95%] text-center h-[45px] rounded-[12px] mt-2 font-bold border border-black z-10">
              Loading… est: {estTime.toFixed(2)} hour
            </button>
          )}
          {isComplete && (
            <button  className="bg-green-500 text-black w-[95%] text-center h-[45px] rounded-[12px] mt-2 font-bold border border-black z-10">
              You're complete!
            </button>
          )}
              </div>
              <div className="flex items-center text-black justify-center gap-2">
                <div>
                  <Image src={pfp} alt="pfp" />
                </div>
                <div className="mb-2">
                  Built by Ivoine, a 19 year old maker from The Bahamas<br></br>{" "}
                  living in SF
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <Image src={computer} alt="computer" height={100} width={800} />
        </div>
      </div>
    </>
  );
};

export default index;
