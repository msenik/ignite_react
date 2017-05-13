/*
Задача 1 Создайте приложение usersList, которое состоит из 2х компонентов:
список элементов массива users в виде таблицы и кнопка для добавления новых
пользователей в список. Для сборки приложения используйте Webpack.
*/
import React from 'react';
import {render} from 'react-dom';
import UserLisApp from './userListApp.jsx';

var container = document.getElementById("root")
render(<UserLisApp />, container);
