
//     Из рекомендаций:
//     - UseBotAnswerTimeDelay проблема этого хука в том что во первых он дублирует логику создания и сохранения сообщения. тут можно пойти двумя путями, сейчас обхъясню
//
// Первый путь:
//     - передаешь в хук первым аргументом messageList для того чтобы эфект его прослушивал
// - передаешь в хук вторым аргументом функцию sendMessage и просто вызываешь внутри эффекта
//
// Второй путь, вообще абстрагировать хук от сообщений и сделать так:
//     - первым параметром передать снова messageList но внутри хука он будет называтся observable наблюдаемый
// - вторым аргументом предикат, функция которая вычисляет нужно запустить таймер или нет и если нужно то внутри эффекта будет стартовать таймер
// - третий аргумент это функция которая будет вызвана в таймере
//
// так получится хороший унивирсальный хук.

import React, {useEffect} from 'react';

const UseBotAnswerTimeDelay = (observable, fn, option, ) => {


    useEffect(()=>{

        if (!observable || observable.length===0){
            return;
        }

        const tail=observable[observable.length-1];
        console.log(tail)

        if (tail.author==='bot'){
            return;
        }

        const timerId=setTimeout(()=>{ fn(option, 'bot')},1500);
        return()=>{
            clearTimeout(timerId);
        }

    },[observable, fn,option]);

};

export default UseBotAnswerTimeDelay;

//Спасибо за рекомендации! Так лучше выглядит!