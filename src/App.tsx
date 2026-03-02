import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import BenefitsSection from './components/sections/BenefitsSection/BenefitsSection'
import MainSection from './components/sections/MainSection/MainSection'
import AboutSection from './components/sections/AboutSection/AboutSection'
import TrustSection from './components/sections/TrustSection/TrustSection'
import AssetsSection from './components/sections/AssetsSection/AssetsSection'
import ContactSection from './components/sections/ContactSection/ContactSection'

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main>
				{/* Main Block */}
				<MainSection />
				<BenefitsSection />
				<AboutSection anchorId="about" />
				<TrustSection anchorId="why-us" />
				<AssetsSection anchorId="assets" />
				<ContactSection anchorId="contact" />
			</main>
			<Footer />
		</div>
	)
}

export default App
