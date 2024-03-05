import { Link, useLocation } from "react-router-dom"
import './index.css'
const ButtonHomeBack = () => {
  return (
    <div className="container__linkHome">
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      <Link className="linkHome" to="/"><p>Accueil</p></Link>
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 60 -15" />
            <feBlend in="SourceGraphic"/>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default ButtonHomeBack

