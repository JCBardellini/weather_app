// form for task list
const taskForm = document.querySelector(".task-form");
// input text value where you are suppose to add the task
const inputTask = document.getElementById("task-added");
// the place where we will store the task list
const taskList = document.getElementById("task-list");
// delete task "X" on the right of to do list
const deleteTask = document.querySelector(".exit");
// completed task checkbox
const completedTask = document.querySelector(".complete");

// added an event listener when the user submits to add a task
taskForm.addEventListener("submit", (e) => {
  // prevents it from submitting the form "not refreshing the page"
  e.preventDefault();
  // creating a variable called "task" to be equal to the value of the input
  const taskText = inputTask.value;
  //   checking if there is something in the input
  if (taskText !== "") {
    // create new li element
    const newLiElement = document.createElement("li");
    //     adding class name to our newly created li tag so we can style it later with CSS
    newLiElement.classList = "task";
    // creating a span element before the "task"
    const startSpanElement = document.createElement("span");
    // adding the class name to our newly created span tag
    startSpanElement.classList = "complete";
    // setting the text content to a square
    startSpanElement.textContent = "☐ ";
    // setting the li text content to the input value
    const taskTextContent = document.createElement("span");
    taskTextContent.textContent = taskText;
    // when checked change the text content to a checked box and cross the word
    startSpanElement.addEventListener("click", () => {
      if (startSpanElement.textContent === "☐ ") {
        // adding the checkbox and line through
        startSpanElement.textContent = "☑ ";
        taskTextContent.style.textDecorationLine = "line-through";
      } else {
        // removing the checkbox and line through
        startSpanElement.textContent = "☐ ";
        taskTextContent.style.textDecorationLine = "";
      }
    });
    // startSpanElement.addEventListener("click", () => {
    //   startSpanElement.textContent = "☑ ";
    //   taskTextContent.style.textDecorationLine = "line-through";
    // });
    // // removing the checkmark
    // startSpanElement.addEventListener("click", () => {
    //   startSpanElement.textContent = "☐ ";
    //   taskTextContent.style.textDecorationLine = "";
    // });
    // creating the end span element
    const endSpanElement = document.createElement("span");
    // adding class name to our end span element
    endSpanElement.classList = "exit";
    // setting the text content to the "x"
    endSpanElement.textContent = "✗";
    // delete the Li that you would click a X on
    endSpanElement.addEventListener("click", () => {
      newLiElement.remove();
    });
    // applying te span elements to the "li"
    newLiElement.appendChild(startSpanElement);
    newLiElement.appendChild(taskTextContent);
    newLiElement.appendChild(endSpanElement);
    //putting the li in the ul
    taskList.appendChild(newLiElement);
    // setting the value to blank
    inputTask.value = "";
  }
});