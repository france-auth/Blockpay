import Image from "next/image";
import {
  cashpayment,
  paymentID,
  genpaylink,
  getpayName,
} from "@/public/assets/images/index";

const PaymentLinks = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex flex-col my-4 sm:my-0">
            <h1 className="text-head text-color text-2xl md:text-3xl">
              Payment Links
            </h1>
            <Image
              className="w-full h-auto md:w-[550px] md:h-[124.31px] mt-4"
              src={paymentID}
              alt={"generate payment link"}
            />
          </div>
          <Image
            className="w-full h-auto sm:w-[500px] sm:h-[400px] md:w-[50%] md:h-auto mt-4 sm:mt-0"
            src={cashpayment}
            alt="cash payment"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <Image
            className="w-full h-auto sm:w-[429px] sm:h-[450px] md:w-[50%] md:h-auto mb-4 sm:mb-0"
            src={getpayName}
            alt="get payment name"
          />
          <Image
            className="w-full h-auto sm:w-[420px] sm:h-[450px] md:w-[50%] md:h-auto mt-4 sm:mt-0"
            src={genpaylink}
            alt="generate payment link"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentLinks;
