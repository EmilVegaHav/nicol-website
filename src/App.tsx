import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { getEnabledSections } from './config/sections'

function App() {
  const enabledSections = getEnabledSections()

  return (
    <>
      <Header />
      <main>
        {enabledSections.map(({ id, component: Section }) => (
          <Section key={id} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
