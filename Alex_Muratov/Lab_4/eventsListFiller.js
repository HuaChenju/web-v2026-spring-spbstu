import {Event} from './event.js'

const titleList = [
    "IT-Конференция 2024",
    "Летний музыкальный фестиваль",
    "Бизнес-завтрак с инвесторами",
    "Выставка современного искусства",
    "День стартапов",
    "Воркшоп по искусственному интеллекту",
    "Благотворительный вечер",
    "Чемпионат по киберспорту",
    "Ярмарка книг",
    "Новогодний корпоратив"
];

const namesList = [
    "Иван Петров",
    "Мария Иванова",
    "Алексей Смирнов",
    "Елена Козлова",
    "Дмитрий Соколов",
    "Анна Попова",
    "Сергей Новиков",
    "Татьяна Морозова",
    "Александр Волков",
    "Ольга Лебедева",
    "Михаил Кузнецов",
    "Наталья Павлова",
    "Андрей Васильев",
    "Екатерина Степанова",
    "Владимир Николаев",
    "Юлия Федорова",
    "Николай Михайлов",
    "Ирина Семенова",
    "Павел Егоров",
    "Светлана Григорьева",
    "Константин Захаров",
    "Ксения Фролова",
    "Роман Макаров",
    "Вероника Беляева",
    "Максим Тарасов"
];

function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPeopleList(n){
    const arr = [];
    let i = 0;
    while (i !== n){
        arr.push(namesList[getRandomInt(0,namesList.length-1)])
        i++;
    }
    return arr
}

export function eventsListFiller(size,list){
    let n = 0;

    while(n !== size){
        list.push(new Event(list.length+1,titleList[getRandomInt(0,titleList.length-1)],getRandomPeopleList(getRandomInt(4,10)),1))
        n++;
    }
}