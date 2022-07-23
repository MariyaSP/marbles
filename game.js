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
        return function start() {
            let msg = '';
            while( result.user > 0 && result.computer > 0) {
                if(flag === 0){ //угадывает компьютер
                    const userChoose = +prompt(`Введите число от 1 до ${result.user}`)
                    const compChoose = getRandomIntInclusive(0, 1);
                    console.log(compChoose);
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

                    // if(userChoose % 2 === compChoose) {}
                }
                else { // угадывает человек
                    const userChoose = +prompt(`Введите число от 0 (четное) до 1(нечетное)`)
                    const compChoose = getRandomIntInclusive(1, result.computer);
                    console.log(compChoose);
                    if(compChoose % 2 === userChoose) {
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
                alert(`компьютер: ${result.computer}\nИгрок:${result.user}`);
            }
            alert(`игра окончена \nкомпьютер: ${result.computer}\nИгрок:${result.user}`);

        //     const compChoose = figuries.ru[getRandomIntInclusive(0, figuries.ru.length - 1)].slice(0,1);
        //     console.log(compChoose);
        //     let userChoose = prompt('Камень, ножницы, бумага ?');
        //     if(userChoose === null)
        //         if(confirm("Вы хотите закончить?"))
        //         {
        //             alert('Игра окончена');
        //             return;
        //         }
        //         else start();
        //     else {
        //         userChoose = userChoose.toLowerCase().slice(0,1);
        //         if(userChoose !== figuries.ru[0].slice(0,1) && userChoose !== figuries.ru[1].slice(0,1) && userChoose !== figuries.ru[2].slice(0,1)) {
        //             start();
        //         }
        //         if(compChoose === userChoose) {
        //             msg = "Ничья";
        //         }
        //         else {
        //             if((userChoose === figuries.ru[0].slice(0,1) && compChoose === figuries.ru[1].slice(0,1)) ||
        //                 (userChoose === figuries.ru[1].slice(0,1) && compChoose === figuries.ru[2].slice(0,1))||
        //                 (userChoose === figuries.ru[2].slice(0,1) && compChoose === figuries.ru[0].slice(0,1)))
        //             {
        //                 msg = "Вы выиграли";
        //                 result.user += 1;
        //             }
        //
        //             else
        //             {
        //                 msg = "Выиграл компьютер";
        //                 result.computer += 1;
        //             }
        //         }
        //
        //         alert(`Компьютер: ${result.computer} \nИгрок: ${result.user} \n${msg}`)
        //         start();
        //     }
         }
    };
    window.RPS = game;
})();


