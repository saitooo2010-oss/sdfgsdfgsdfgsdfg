import React from 'react'
import './notFound.css'

const NotFound = () => {
  return (
    <div className="notfound-container">
        <div className="notfound-title">404</div>
        <div className="notfound-text">Страница не найдена</div>
        <a href="/" className="notfound-link">Вернуться на главную страницу</a>
    </div>
  )
}

export default NotFound