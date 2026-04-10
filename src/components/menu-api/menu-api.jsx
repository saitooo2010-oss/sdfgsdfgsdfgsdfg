import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./menu-api.css";

const FoodCard = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://behruz30012012.pythonanywhere.com/api/menu");
        if (!res.ok) throw new Error("Ошибка загрузки");
        const data = await res.json();
        setDishes(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="card-container">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="skeleton-card" />
        ))}
      </div>
    );
  }

  if (error) return <div className="error-message">Ошибка: {error}</div>;

  return (
    <div className="card-container">
      {dishes.map((item) => (
        <Link to={`/menudetail/${item.id}`} key={item.id} className="card-link">
          <div className="movie-card">
            <div className="card-image-wrapper">
              <img 
                src={item.image || "https://via.placeholder.com/400x300?text=No+Image"} 
                alt={item.name} 
                className="card-image" 
                loading="lazy" 
              />
              <span className="card-badge">
                {parseFloat(item.price).toLocaleString('ru-RU')} сум
              </span>
            </div>

            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-description">
                {item.description?.length > 80 
                  ? `${item.description.substring(0, 80)}...` 
                  : item.description}
              </p>
              <div className="card-price">
                {item.price ? `${parseFloat(item.price).toLocaleString('ru-RU')} руб` : "Цена не указана"}
              </div>
              <div className="card-footer">
                <div className="instructor-info">
                  <span className="icon">🍴</span>
                  <span className="name">{item.category_name}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FoodCard;