import React from 'react'
import './BackEndSkill.css'

function BackEndSkill({back_end_skill_name,back_end_skill_assess}) {
  return (
    <div className='back-end-skill'>
        <p className='skill-name'>{back_end_skill_name}</p>
        <div className={'rectangle'}>
            <div style={{width:back_end_skill_assess,backgroundColor:'#2F80ED',height:'12px', borderRadius:'12px'}}></div>
        </div>
    </div>
  )
}

export default BackEndSkill