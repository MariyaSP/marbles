'use strict';
(() => {
    let flag = 0;
    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const game = () => {
        const result = {
            user: 5,
            computer: 5,
        }
        let number = 0;
         return function start() {
            let msg = '';
            let compChoose = 0;
            while( result.user > 0 && result.computer > 0) {
                if(result.user > result.computer) {
                    number = result.computer;
                }
                else
                    number = result.user;
                console.log("предел " + number);
                if(flag === 0){ //угадывает компьютер
                    let userChoose = prompt(`Введите число от 1 до ${number}`);
                    console.log("Что выбрал пользователь " + userChoose);

                    if(userChoose === null) {
                        alert(`игра окончена \nКомпьютер: ${result.computer}\nИгрок: ${result.user}`);
                        return;
                    }
                    if(userChoose > number || userChoose < 1) {
                        alert("неверное число");
                        start();
                    }
                    compChoose = getRandomIntInclusive(0, 1);
                    console.log("Что выбрал комп " + compChoose);
                    userChoose = parseInt(userChoose);
                    if(userChoose % 2 === compChoose) {
                        result.computer += userChoose;
                        result.user -= userChoose;
                        alert('Вы проиграли');
                    }
                    else {
                        result.computer -= userChoose;
                        result.user += userChoose;
                        alert('Вы выиграли');
                    }
                    flag ++;
                }
                else { // угадывает человек
                    let userChoose1 = prompt(`Введите число от 0 (четное) до 1(нечетное)`)
                    console.log("Что выбрал пользователь " + userChoose1);
                    if(userChoose1 === null) {
                        alert(`игра окончена \nкомпьютер: ${result.computer}\nИгрок: ${number}`);
                        return;
                    }
                    if(userChoose1 < 0 || userChoose1 > 1) {
                        alert("неверное число");
                        start();
                    }
                    if(result.user === 1 ) {
                        compChoose = 1;
                    }
                    else {
                        compChoose = getRandomIntInclusive(1, number);
                    }
                        console.log("Что выбрал комп " + compChoose % 2);

                        if(compChoose % 2 === userChoose1) {
                            result.computer -= compChoose;
                            result.user += compChoose;
                            alert('Вы выиграли');
                        }
                        else {
                            result.computer += compChoose;
                            result.user -= compChoose;
                            alert('Вы проиграли');
                        }
                    flag --;
                }
               alert(`компьютер: ${result.computer}\nИгрок: ${result.user}`);
            }
           alert(`игра окончена \nкомпьютер: ${result.computer}\nИгрок: ${result.user}`);
            return;
         }
    };
    window.RPS = game;
})();


