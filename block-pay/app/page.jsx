
import {Navbar, Hero, Advantages, PaymentLinks, Achievements, TrustedBy, Footer} from '@/components/index';
import '@/styles/globals.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Advantages/>
      <TrustedBy/>
      <PaymentLinks/>
      <Achievements/>
      <Footer/>
    </main>
  )
};
/*
export default function Signup() {
  return (
    <main className="flex flex-col items-center justify-between">
      <SignUpForm/>
    </main>
  )
};
*/