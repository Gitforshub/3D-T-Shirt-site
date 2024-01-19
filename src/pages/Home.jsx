import { motion, AnimatePresence } from 'framer-motion';
import{ useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import{ 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
 } from '../config/motion';
import './Home.css'

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence >
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img src='./my-image.png' alt='logo' className=' w-12 h-12 object-contain'></img>
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className=' head-text' id='heading'>
                LET'S <br className=' xl:block hidden'/>CREATE.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className=' flex flex-col gap-5'>
              <p className=' max-w-md font-normal text-white text-base'>
                Create your unique and exclusive shirt with our brand-new 3D customization tool. 
                <strong> Unleash your imagination</strong> {""}
                 and define your own style.
              </p>

              <CustomButton 
              type="filled"
              title="Customize"
              handleClick={() => state.intro = false}
              customStlyes="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home