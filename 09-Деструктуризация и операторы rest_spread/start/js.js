"use strict";
/*
ЗАДАЧИ:

1.Создайте отдельные массивы игроков каждой команды. (Переменные pleayersTeamOne и pleayersTeamTwo) +

2. Первый игрок в каждом массиве - это вратарь, остальные игроки это просто члены команды. Для первых игроков каждой команды, создайте переменную goalKeeper, а для всех остальных fieldPlayers.

3.Создайте один массив allPlayers который будет содержать всех игроков обеих команд. +

4.Добавьте в массив allPlayers еще 3-х игроков. (Имена игроков придумайте сами) +

5. В объекте game есть объект odds, внутри которого три свойства: 
team1: 1.33, 
x: 3.25,
team2: 6.5. 
С помощью деструктуризации объекта, создайте 3 переменные из этого объекта. При создании переменных, 
let team1 = 1.33,
let x = 3.25,
let team2 = 6.5
поменяйте имя свойства x на draw.




*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


//1


let pleayersTeamOne = game.players[0]

let pleayersTeamTwo = game.players[1]

// const [pleayersTeamOne, pleayersTeamTwo] = game.players

console.log(pleayersTeamOne); 
console.log(pleayersTeamTwo);

//2

let goalKeeper = function newGoal(mas) {
    return mas[0]
}



console.log(goalKeeper(pleayersTeamOne));
console.log(goalKeeper(pleayersTeamTwo));


let [goalsKeepers, ...fieldPlayers] = pleayersTeamOne
console.log(goalsKeepers, fieldPlayers);
//3

let allPlayers = [...pleayersTeamOne, ...pleayersTeamTwo]

console.log(allPlayers)

//4

allPlayers = [...allPlayers, 'Tim', 'Gordon', 'Kate']

console.log(allPlayers);


allPlayers.push('Tim', 'Dasha', 'Gena')
console.log(allPlayers)


// 5
 let { odds: {team1, x: draw, team2} } = game

 console.log(team1)
 console.log(draw);
 console.log(team2);