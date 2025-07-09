let lastId = 0;

// Генерация id
function generateUniqueId() {
  return ++lastId;
}

// Задачи
let tasks = [];
const completedTasks = [];
let completedTaskCount = 0;

function addTask(title, description) {
  const newTask = {
    id: generateUniqueId(),
    title,
    description,
    isCompleted: false,
    createdDate: new Date(),
    completedDate: null,
  };

  tasks.push(newTask);

  console.log(`Задача #${newTask.id}: "${title} - ${description}" добавлена.`);
}

function showTasks() {
  if (tasks.length === 0) {
    console.log("Список задач пуст");
    return;
  }

  tasks.forEach((task) => {
    console.log(task);
  });
}

function findTaskIndexById(idTask) {
  const currentTaskIdx = tasks.findIndex((t) => t.id === idTask);
  if (currentTaskIdx === -1) {
    console.log("Задача не найдена");
    return null;
  }
  return currentTaskIdx;
}

function findTaskById(id) {
  return tasks.find((t) => t.id === id) || null;
}

function completeTask(idTask) {
  const currentTaskIdx = findTaskIndexById(idTask);
  if (currentTaskIdx === null) return;

  const currentTask = tasks[currentTaskIdx];
  console.log(currentTask);

  currentTask.isCompleted = true;
  currentTask.completedDate = new Date();

  completedTasks.push(currentTask);
  completedTaskCount++;

  tasks.splice(currentTaskIdx, 1);

  const { id, title, description } = currentTask;

  console.log(`Задача #${id}: "${title} - ${description}" выполнена`);
}

function deleteTask(idTask) {
  const currentTaskIdx = findTaskIndexById(idTask);
  if (currentTaskIdx === null) return;

  const currentTask = tasks[currentTaskIdx];

  if (!currentTask.isCompleted) {
    const answer = confirm("Таска еще не выполнена, удалить?");
    if (!answer) {
      console.log("Удаление отменено");
      return;
    }
  }

  tasks.splice(currentTaskIdx, 1);

  const { id, title, description } = currentTask;
  console.log(`Задача удалена: #${id}: ${title} - ${description}`);
}

function clearTasks() {
  tasks.length = 0;
  console.log("Все задачи очищены");
}

// 1.
function getTaskDescription() {
  return tasks.map((t) => t.description);
}

// 2.
function getLongTasks() {
  return tasks.filter((t) => t.title.length > 10);
}

// 3.
const taskMap = {
  completed: {
    tasks: completedTasks,
    dateKey: "completedDate",
  },
  active: {
    tasks: tasks,
    dateKey: "createdDate",
  },
};

function parseDate(date) {
  return date instanceof Date ? date : new Date(date);
}

const hasDateInRange = (date, start, end) => {
  return date >= start && date <= end;
};

function getTasksByDateRange(startDate, endDate, isCompleted = false) {
  const startDateFormatted = parseDate(startDate);
  const endDateFormatted = parseDate(endDate);

  const status = isCompleted ? "completed" : "active";
  const { tasks: targetTasks, dateKey } = taskMap[status];

  return targetTasks.filter((task) =>
    task[dateKey] && hasDateInRange(task[dateKey], startDateFormatted, endDateFormatted)
  );

  // if (isCompleted) {
  //   return completedTasks.filter((t) =>
  //     hasDateInRange(t[dateKey], startDateFormatted, endDateFormatted)
  //   );
  // } else {
  //   return tasks.filter((t) =>
  //     hasDateInRange(t[dateKey], startDateFormatted, endDateFormatted)
  //   );
  // }
}

// 4.
function clearShortTasks() {
  const initialLength = tasks.length;
  tasks = tasks.filter((task) => task.title.length >= 5);

  const removedCount = initialLength - tasks.length;
  console.log(`Удалено задач с длиной title меньше 5: ${removedCount}`);
}

// 5
function updateTitleTask(idTask, newTitle) {
  const currentTask = findTaskById(idTask);
  if (currentTask === null) return;

  currentTask.title = newTitle;

  const { id, title } = currentTask;

  console.log(`#${id} Заголовок изменён на: ${title}`);
}

addTask("Подготовиться к собесам", "JS: поучить теорию, порешать задачки");
addTask("Погулять", "Пройтись, проветриться, подышать свежим воздухом");
addTask("Приготовить обед", "Сварить макароны, пожарить мясо");
addTask("лол", "Проверить на удаление");
addTask("Увидеться с другом", "Позвонить и назначить встречу");

console.log(getTaskDescription());
console.log(getLongTasks());

clearShortTasks();

updateTitleTask(2, "Погулять в парке");

completeTask(2);

showTasks();

console.log("Все задачи с 2025-07-01 по 2025-07-31:");

console.log({
  uncompleted: getTasksByDateRange("2025-07-01", "2025-07-31"),
  completed: getTasksByDateRange("2025-07-01", "2025-07-31", true),
});
