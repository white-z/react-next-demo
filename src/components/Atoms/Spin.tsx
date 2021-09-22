import styles from './Spin.module.scss'
import { Icon } from 'atomize'
import { motion } from 'framer-motion'
import { SpinName, SpinProps } from '../typings'

export { SpinName } from '../typings'

export function Spin({children, spinning = false, name = SpinName.Loading, size = '1.5rem'}: SpinProps) {

  return (
    <motion.div
      className={styles.wrapper}
    >
      <motion.div
        animate={{
          opacity: spinning ? 0.5 : 0,
          display: 'block',
          transitionEnd: {
            display: spinning ? 'block' : 'none',
          }
        }}
        className={styles.blur}
      >
      </motion.div>
      <motion.div 
        animate={{ scale: spinning ? 1 : 0}}
        className={styles.icon}
      >
        <Icon name={name} size={size} color="var(--spinning)"/>
      </motion.div>
      {children}
    </motion.div>
  )
}