import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <nav role='navigation'>
            <ul className='text-left'>
                <li>
                    <a href='#home-section' className='nav-link'>ホーム</a>
                </li>
                <li>
                    <a href='#resume-section' className='nav-link'>レジュメ</a>
                </li>
            </ul>
        </nav>
        <h1>
            <a href='#me'>私</a>
        </h1>
        <nav role='navigation'>
            <ul className='text-right'>
                <li>
                    <a href='#profile-section' className='nav-link'>プロファイル</a>
                </li>
                <li>
                    <a href='#projects-section' className='nav-link'>プロジェクト</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header