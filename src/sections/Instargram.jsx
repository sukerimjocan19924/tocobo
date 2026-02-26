import React from 'react'
import instar from "../util/instar"
import "./styles/Instargram.scss"

const Instargram = () => {
  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className='tit'>
          Instagram
        </h2>
        <p className="txt">
          @tocobo_official
        </p>
      </div>

      <ul className="instar-list">
        {instar.map((sl)=>(
          <li style={{backgroundImage: `url(${sl.image})`}}
              key={sl.id}>
            <a href="sl.link">
              {sl.id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Instargram