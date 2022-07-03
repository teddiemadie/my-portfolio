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
                note
            />
            <Project
                img={WeatherApp}
                name={'Weather App'}
                desc={'無料のAPIから天気情報を取得して、画面に表示するサイトです。初期表示に東京の天気を確認できます。他の地域の天気に変更することが可能です。'}
                tag={['#React']}
                demo_link={'https://weather-app-aba93.web.app/'}
                code_link={'https://github.com/teddiemadie/weather-app.git'}
                note={['※サンプルを見る前に、',<a href='https://cors-anywhere.herokuapp.com/corsdemo'>外部API</a>,'にアクセスしたあとに、',<strong>Request temporary access to the demo server</strong>,'のボタンを押下する必要があります。']}
            />
            <Project
                img={CountryQuiz}
                name={'Country Quiz'}
                desc={'国についてのAPIに呼び出し、クイズゲームを作りますした。答えが当てはまるかどうか確かめられる一方、答えがあっていないと、リトライすることも可能です。'}
                tag={['#React','#HTML','#CSS']}
                demo_link={'https://country-quiz-59eae.web.app/'}
                code_link={'https://github.com/teddiemadie/country-quiz.git'}
                note
            />

        </div>
    </div>
  )
}

export default Projects