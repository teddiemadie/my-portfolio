import React from 'react'
import './FrontEndSkill.css'

function FrontEndSkill({skill_name,skill_assess}) {
  return (
    <div className='front-end-skill'>
        <p className='skill-name'>{skill_name}</p>
        <div className={'rectangle'}>
            <div style={{width:skill_assess,backgroundColor:'#2F80ED',height:'12px', borderRadius:'12px'}}></div>
        </div>
    </div>
  )
}

export default FrontEndSkill