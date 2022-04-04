/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

	const inputsPhone = document.querySelectorAll("input[type='tel']");
	let im = new Inputmask("+7 (999) 999-99-99");
	im?.mask(inputsPhone);
