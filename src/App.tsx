import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PageLayout } from './components/Layout'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to anchor handler
const ScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageLayout>
    </Router>
  )
}

export default App
