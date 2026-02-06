import React from 'react'
import ClinicalIdentity from '@/app/components/AboutComp/ClinicalIdentity'
import ClinicalTimeline from '@/app/components/AboutComp/ClinicalTimeline'
import VisionConsole from '@/app/components/AboutComp/VisionConsole'
import GrowthMatrix from '@/app/components/AboutComp/GrowthMatrix'
import TeamEcosystem from '@/app/components/AboutComp/TeamEcosystem'
import CinematicFeedback from '@/app/components/AboutComp/CinematicFeedback'
import CTA from '@/app/components/AboutComp/CTA'

const page = () => {
  return (
    <div className='pt-[20vh]'>
        <ClinicalIdentity/>
        <ClinicalTimeline/>
        <VisionConsole/>
        <GrowthMatrix/>
        <TeamEcosystem/>
        <CinematicFeedback/>
        <CTA/>
    </div>
  )
}

export default page