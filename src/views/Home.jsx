import { useEffect } from 'react'
import CreateProject from '../components/CreateProject'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'

const Home = () => {
  const [projects] = useGlobalState('projects')

  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <div className="max-w-6xl mx-auto relative">
      <Hero />
      <Projects projects={projects} />
      <CreateProject />
    </div>
  )
}

export default Home
