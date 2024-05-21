import React from 'react'
import './Section2.scss'
const Section2 = () => {
  return (
    <section className='section2'>

            <div className="s2Left">
                <h2>Register now and get a discount <span>50%</span> discount until 1 January</h2>
                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                <a href="#">REGISTER NOW</a>
            </div>
            <div className="s2Right">
                <h2>Search for your course</h2>
                <form action="">
                    <input type="text" placeholder='Course Name' />
                    <input type="text" placeholder='Category' />
                    <input type="text" placeholder='Degree' />
                    <button>SEARCH COURSE</button>
                </form>
            </div>

    </section>
  )
}

export default Section2
