import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaDocker, FaAws } from 'react-icons/fa'
import { SiKubernetes } from 'react-icons/si'
import './Hero.css'

function Hero() {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'cd /home/devops_engineer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const floatingIcons = [
    { Icon: FaDocker, color: '#2496ED', delay: 0 },
    { Icon: SiKubernetes, color: '#326CE5', delay: 0.2 },
    { Icon: FaAws, color: '#FF9900', delay: 0.4 }
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {floatingIcons.map(({ Icon, color, delay }, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.1, 
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              delay: delay,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            style={{ 
              left: `${20 + index * 30}%`,
              top: `${30 + index * 15}%`,
              color: color
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="terminal-window" variants={itemVariants}>
          <div className="terminal-header">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
            <span className="terminal-title">bash</span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">user@devops:~$</span> {text}
              <span className={`cursor ${showCursor ? 'blink' : ''}`}>_</span>
            </div>
          </div>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Hi, I'm <span className="gradient-text">Your Name</span>
        </motion.h1>
        
        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          DevOps Engineer | Cloud Architect | Automation Enthusiast
        </motion.h2>

        <motion.p className="hero-description" variants={itemVariants}>
          Building scalable infrastructure, automating deployments, and crafting CI/CD pipelines
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Contact Me</span>
          </a>
        </motion.div>

        <motion.div className="social-links" variants={itemVariants}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  )
}

export default Hero
