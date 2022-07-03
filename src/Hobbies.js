import React from 'react'
import './Hobbies.css'
import Hobby from './Hobby'
import Baking from './img/baking.jpeg'
// import Traveling from './img/traveling.jpeg'

function Hobbies() {
  return (
    <div className='hobbies'>
        <p>HOBBIES</p>
        <div className='hobbies-container'>
          <Hobby
              img={Baking}
              title={'Baking'}
              desc={'Quisque feugiat malesuada molestie.'}
          />
          {/* <Hobby
              img={Traveling}
              title={'Traveling'}
              desc={'Quisque feugiat malesuada molestie.'}
          /> */}
          <Hobby
              img={'https://www.rei.com/dam/content_team_080317_61569_mountain_biking_beginners_lg.jpg'}
              title={'Cooking'}
              desc={'Quisque feugiat malesuada molestie.'}
          />
        </div>
    </div>
  )
}

export default Hobbies