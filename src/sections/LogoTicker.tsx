'use client'
import acmelogo from '@/assets/logo-acme.png'
import apexlogo from '@/assets/logo-apex.png'
import celestial from '@/assets/logo-celestial.png'
import quantum from '@/assets/logo-quantum.png'
import pulse from '@/assets/logo-pulse.png'
import echo from '@/assets/logo-echo.png'
import { motion } from 'framer-motion'
export const LogoTicker = () => {
  return (
    <section className='py-20 md:py-24'>
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className='flex-1 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent'>
            <motion.div 
            initial={{translateX:'-50%'}}
            animate={{translateX:'0'}}
            transition={{
              repeat:Infinity,
              duration:30,
              ease:'linear'
            }}
            className="flex flex-none gap-14 pr-14 -translate-x-1/2">
              {[
                acmelogo, apexlogo, celestial, quantum, pulse, echo,
                acmelogo, apexlogo, celestial, quantum, pulse, echo
              ].map(
                (logo) => (
                  <img
                    src={logo.src}
                    key={logo.src}
                    alt="logos"
                    className="h-6 w-auto"
                  />
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
