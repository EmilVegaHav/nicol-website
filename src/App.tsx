import { MotionConfig } from 'motion/react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppFloat } from './components/layout/WhatsAppFloat'
import { getEnabledSections } from './config/sections'

function App() {
  const enabledSections = getEnabledSections()

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        {enabledSections.map(({ id, component: Section }) => (
          <Section key={id} />
        ))}
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  )
}

export default App
