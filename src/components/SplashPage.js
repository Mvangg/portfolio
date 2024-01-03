import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SplashPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    const splashPage = document.getElementById('splash-page')

    if (!splashPage && !isInitialLoad) return

    splashPage.style.opacity = '0'

    setTimeout(() => {
      splashPage.style.transition = 'opacity 1s'
      splashPage.style.opacity = '1'
    }, 100);

    setTimeout(() => {
      splashPage.style.transition = 'opacity 1s'
      splashPage.style.opacity = '0'
    }, 1000);

    setTimeout(() => {
      splashPage.style.display = 'none'
      setIsInitialLoad(false)

      navigate('/home')
    }, 2500);
  }, [isInitialLoad, navigate])

  if (isInitialLoad || location.action === 'PUSH') {
    return (
      <div id="splash-page">
        <h1>Welcome to My Domain</h1>
      </div>
    )
  }

  return null
}

export default SplashPage;


