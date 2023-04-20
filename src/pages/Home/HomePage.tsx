import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>Работу выполнил:</div>
      <h2>Чудинов Дмитрий</h2>
      <div>Решение задач</div>
      <div>
        <Link to="/task1">
          <div>Задание 1</div>
        </Link>
        <p>Верстка макета</p>
      </div>

      <div>
        <Link to="/task2">
          <div>Задание 2</div>
        </Link>
        <p>Геолокация браузера</p>
      </div>
      <div>
        <Link to="/task3">
          <div>Задание 3</div>
        </Link>
        <p>Информация о компаниях</p>
      </div>
    </div>
  );
};

export default HomePage;
