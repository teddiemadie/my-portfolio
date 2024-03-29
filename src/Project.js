import React from 'react'
import './Project.css'

function Project({img,name,desc,tag,demo_link,code_link,note}) {
  return (
    <div className='project'>
        <div className='all-img'>
            <img 
                className='project-img'
                src={img}
                alt='project'
            />

        </div>
        <div className='project-content'>
            <div>
                <p className='project-tag'>{tag}</p>
                <p className='project-name'>{name}</p>
                <p className='project-description'>{desc}</p>
                <p className='project-note'>{note}</p>
            </div>
            <div className='flex-start'>
                <button className='button demo-button'>
                    <a href={demo_link} target="_blank" rel="noopener noreferrer">Demo</a>
                </button>
                <button className='button code-button'>
                    <a href={code_link} target="_blank" rel="noopener noreferrer">Code</a>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Project