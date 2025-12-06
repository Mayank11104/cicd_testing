import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="prompt-style">$</span> whoami
        </h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              👋 I'm a third-year <strong>Computer Engineering student</strong> from JSPM's Jayawantrao Sawant College of Engineering, 
              specializing in <strong>DevOps and Cloud Technologies</strong>.
            </p>
            <p>
              💼 Currently working as <strong>Management Lead at NLP Club</strong> and actively contributing to 
              open-source projects. I'm passionate about automating infrastructure, building robust CI/CD pipelines, 
              and exploring cutting-edge cloud solutions.
            </p>
            <p>
              🚀 My journey involves working with <strong>AWS, Docker, Kubernetes, GitHub Actions</strong>, and building 
              scalable applications. I love sharing my knowledge through technical articles on LinkedIn and participating 
              in hackathons.
            </p>
            <p>
              🏏 When I'm not coding or deploying pipelines, you'll find me on the cricket field or playing volleyball!
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Learning</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
