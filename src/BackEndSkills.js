import React from 'react'
import './BackEndSkills.css'
import BackEndSkill from './BackEndSkill'

function BackEndSkills() {
  return (
    <div className='back-end-skills'>
        <p>BACK END</p>
        <BackEndSkill
            back_end_skill_name={'SQL'}
            back_end_skill_assess={'30%'}
        />
        <BackEndSkill
            back_end_skill_name={'NodeJs'}
            back_end_skill_assess={'20%'}
        />
    </div>
  )
}

export default BackEndSkills