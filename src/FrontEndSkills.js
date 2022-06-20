import React from 'react'
import './FrontEndSkills.css'
import FrontEndSkill from './FrontEndSkill'

function FrontEndSkills() {
  return (
    <div className='front-end-skills'>
        <p>FRONT END</p>
        <FrontEndSkill
            skill_name={'React'}
            skill_assess={'60%'}
        />
        <FrontEndSkill
            skill_name={'JavaScript'}
            skill_assess={'80%'}
        />
        <FrontEndSkill
            skill_name={'CSS'}
            skill_assess={'60%'}
        />
    </div>
  )
}

export default FrontEndSkills