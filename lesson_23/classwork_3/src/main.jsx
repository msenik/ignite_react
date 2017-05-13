/*
Задача 3
Переделайте задание из предыдущей задачи с использованием browserify.
Реализуйте выполнение команд browserify через поле scripts файла package.json.
*/
import React from 'react';
import {render} from 'react-dom';
import App from './app.jsx';

var container = document.getElementById("root")
render(<App />, container);
