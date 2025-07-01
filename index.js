const usedIds = new Set();

// Генерация id
function generateUniqueId() {
  let id;

  do {
    id = Math.floor(Math.random() * 101);
  } while (usedIds.has(id));

  usedIds.add(id);
  return id;
}

// Задачи
let tasks = [];
const completedTasks = [];
let completedTaskCount = 0;

function setTask(title, description) {
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

  // tasks.forEach((task) => {
  //   console.log(task);
  // });
}

function completeTask(idTask) {
  const index = tasks.findIndex((t) => t.id === idTask);
  if (index === -1) {
    console.log("Задача не найдена");
    return;
  }

  const currentTask = tasks[index];
  console.log(currentTask);

  currentTask.isCompleted = true;
  currentTask.completedDate = new Date();

  completedTasks.push(currentTask);
  completedTaskCount++;

  tasks.splice(index, 1);

  const { id, title, description } = currentTask;

  console.log(`Задача #${id}: "${title} - ${description}" выполнена`);
}

function deleteTask(idTask) {
  const currentTaskIdx = tasks.findIndex((task) => task.id === idTask);

  if (currentTaskIdx === -1) {
    console.log("Задача не найдена");
    return;
  }

  const currentTask = tasks[currentTaskIdx];
  console.log(currentTask);

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

setTask("Подготовиться к собесам", "JS: поучить теорию, порешать задачки");
setTask("Погулять", "Пройтись, проветриться, подышать свежим воздухом");
setTask("Приготовить обед", "Сварить макароны, пожарить мясо");
setTask("Увидеться с другом", "Позвонить и назначить встречу");

showTasks();

if (tasks.length > 0) {
  const secondTaskId = tasks[1].id;
  deleteTask(secondTaskId);
}
if (tasks.length > 0) {
  const secondTaskId = tasks[0].id;
  completeTask(secondTaskId);
}

showTasks();

clearTasks();

showTasks();
