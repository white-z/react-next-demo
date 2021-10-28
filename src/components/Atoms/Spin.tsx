import styles from './Spin.module.scss'
import { Icon, Div } from 'atomize'
import { motion } from 'framer-motion'
import {SpinProps } from '../typings'

export function Spin(props: SpinProps) {
  const {children, spinning = false, name = 'Loading', size = '1.5rem'} = props
  const Content = () => {
    return (
      <>
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
      </>
    )
  }
  return Div.render({...props, spinning: null, className: styles.wrapper, children: Content()})
}