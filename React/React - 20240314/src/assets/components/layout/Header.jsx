import React from 'react'

function Header() {
  return (
    <header>
        <div className='container-img'></div>
        <div className='container-menu'>
            <nav>
                <ul>
                    <li><a href="http://localhost:5173/home">Home</a></li>
                    <li><a href="http://localhost:5173/dragonball">Characters</a></li>
                </ul>
            </nav>
        </div>
        <div className='container-search'>
            <form action="">
                <input type="text" />
            </form>
        </div>
    </header>
  )
}

export default Header