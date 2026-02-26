import React from 'react'
import instar from '../util/instar'
import './styles/Instargram.scss'

const Instargram = () => {
  const stagger = (base, idx, step=100) => base+idx*step

  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className="tit">Instagram</h2>
        <p className="txt">@tocobo_official</p>
      </div>
      <ul className="instar-list">
        {instar.map((i, j)=>(

        <li key={i.id} 
            data-aos="fade-up"
            data-aos-delay={stagger(100, j, 150)}>
          <a href={i.link}
          alt={i.alt}
          style={{backgroundImage:`url(${i.image})`}}

          // 배경 넣어보기
          >{i.id}</a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Instargram