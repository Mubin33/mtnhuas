import React from 'react'
import HeroShopify from './HeroShopify'
import WhyMtnHaus from './WhyMtnHaus'
import StoreDevelopmentSection from './StoreDevelopmentSection'
import ProvenResultsSection from './ProvenResultsSection'
import EnterpriseCapabilities from './EnterpriseCapabilities'
import EngineerCTASection from './EngineerCTASection'

export default function page() {
  return (
    <div>
        <HeroShopify />
        <WhyMtnHaus />
        <StoreDevelopmentSection />
        <ProvenResultsSection />
        <EnterpriseCapabilities/>
        <EngineerCTASection />
    </div>
  )
}
