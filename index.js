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

  for (let task of tasks) {
    console.log(task);
  }
}

function findTaskToIdx(idTask) {
  const currentTaskIdx = tasks.findIndex((t) => t.id === idTask);
  if (currentTaskIdx === -1) {
    console.log("Задача не найдена");
    return null;
  }
  return currentTaskIdx;
}

function completeTask(idTask) {
  const currentTaskIdx = findTaskToIdx(idTask);
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
  const currentTaskIdx = findTaskToIdx(idTask);
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

addTask("Подготовиться к собесам", "JS: поучить теорию, порешать задачки");
addTask("Погулять", "Пройтись, проветриться, подышать свежим воздухом");
addTask("Приготовить обед", "Сварить макароны, пожарить мясо");
addTask("Увидеться с другом", "Позвонить и назначить встречу");

showTasks();

deleteTask(1);

completeTask(2);

showTasks();

clearTasks();

showTasks();
