import FeaturedSection from '@/components/Discover/Featured'
import FilterBar from '@/components/Discover/FilterBar'
import IdeaCards from '@/components/Discover/IdeaCards'
import React from 'react'

const Discover = () => {
  return (
    <div>

        <FilterBar/>
        <IdeaCards/>
        <FeaturedSection />
      
    </div>
  )
}

export default Discover
