import Image from "next/image";
import { achievements } from "@/public/assets/images/index";
import { successes } from "@/constants/index";
import Button from "@/components/Button";

const Achievements = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 mt-8 mb-5 md:mb-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between sm:items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 mt-8 mb-5 md:mb-2">
          <div className="flex flex-col justify-center mb-6 sm:mb-0">
            <h1 className="text-head text-color text-2xl sm:text-3xl font-semibold">
              Our Success<br />so far
            </h1>

            <ul className="mt-4">
              {successes.map((success) => (
                <li
                  key={success.id}
                  className="flex items-center mb-2 text-lg"
                >
                  <Image
                    className="w-[31px] h-[6px] mr-2"
                    src={success.icon}
                    alt=""
                  />
                  <p className="font-normal">{success.desc}</p>
                </li>
              ))}
            </ul>

            <div className="text-center mt-4 sm:mb-4 md:mb-0">
              <Button />
            </div>
          </div>

          <Image
            src={achievements}
            alt=""
            className="w-full h-auto md:w-[500px] md:h-[380px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
