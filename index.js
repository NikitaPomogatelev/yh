// "use strict";

// let task = "описание задачи";
// let completedTaskCount = 0;

// function showTask(inputTask) {
//   if (typeof inputTask === "string" && inputTask.trim() !== "") {
//     console.log(inputTask);
//   } else {
//     console.log("Задача отсутствует");
//   }
// }

// function setTask(taskDescription) {
//   if (typeof taskDescription !== "string" || taskDescription.trim() === "") {
//     console.log("Невозможно добавить пустую задачу");
//     return;
//   }

//   if (typeof task === "string" && task.trim() !== "") {
//     const userChoice = prompt(
//       "Не могу добавить задачу, завершите или удалите предыдущую. Введите 'удалить' или 'завершить':"
//     );

//     if (userChoice?.toLowerCase() === "удалить") {
//       deleteTask();
//     } else if (userChoice?.toLowerCase() === "завершить") {
//       completeTask();
//     } else {
//       console.log("Задача не добавлена. Введите другую команду.");
//       return;
//     }
//   }

//   task = taskDescription.trim();
//   console.log(`Задача добавлена: ${task}`);
// }

// function completeTask() {
//   if (typeof task !== "string" || task.trim() === "") {
//     console.log("Нет активной задачи для завершения.");
//     return;
//   }

//   console.log(`Задача "${task}" завершена.`);
//   task = "";
//   completedTaskCount++;
//   console.log(`Завершено задач: ${completedTaskCount}`);
// }

// function deleteTask() {
//   if (typeof task !== "string" || task.trim() === "") {
//     console.log("Нет задачи для удаления.");
//     return;
//   }

//   console.log(`Задача "${task}" удалена.`);
//   task = "";
// }
