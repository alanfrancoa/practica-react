import { useState } from 'react'
import PropTypes from 'prop-types';

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  console.log('[TwitterFollowCard] render with userName: ', userName)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

TwitterFollowCard.propTypes = {
    children: PropTypes.node.isRequired,
    userName: PropTypes.string.isRequired,
    initialIsFollowing: PropTypes.bool.isRequired,
} 
/*tendrá la validación de propiedades necesaria, y el mensaje de error de ESLint debería desaparecer. Esto ayuda a garantizar que las propiedades pasadas al componente sean del tipo correcto y estén presentes cuando se llame al componente */
  
  
  
  
  