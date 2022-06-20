import React from 'react'
import './Projects.css'
import Project from './Project'
import WeatherApp from './img/weather-app.jpg'
import CountryQuiz from './img/country-quiz.jpg'
import CloneAmazon from './img/clone-amazon.jpg'

function Projects() {
  return (
    <div className='projects'>
        <p>Projects </p>
        <div className='projects-container'>
            <Project
                img={CloneAmazon}
                name={'Clone Amazon'}
                desc={'html、CSS、javascript（react）の基礎を学ぶために、チュートリアルを見ながらアマゾンのクローンサイトを作りました。'}
                tag={['#React']}
                demo_link={'https://clone-ec8fa.web.app/'}
                code_link={'https://github.com/teddiemadie/amazon-clone.git'}
            />
            <Project
                img={WeatherApp}
                name={'Weather App'}
                desc={'html、CSS、Javascript（react）の基礎を学んだ知識を深めるために、天気情報を確認できるサイトを作りました。無料のAPIから天気情報を取得して、画面に表示するサイトです。初期表示に東京の天気を確認できます。他の地域の天気に変更することが可能です。※サンプルを見る前に、APIの利用を申請する必要があります。'}
                tag={['#React']}
                demo_link={'https://weather-app-aba93.web.app/'}
                code_link={'https://github.com/teddiemadie/weather-app.git'}
            />
            <Project
                img={CountryQuiz}
                name={'Country Quiz'}
                desc={'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. '}
                tag={['#React','#HTML','#CSS']}
                demo_link={'https://country-quiz-59eae.web.app/'}
                code_link={'https://github.com/teddiemadie/country-quiz.git'}
            />

        </div>
    </div>
  )
}

export default Projects