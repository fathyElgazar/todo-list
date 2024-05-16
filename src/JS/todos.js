"use strict";
import { mainTodo } from "./index";

function addTodo(title, description, notes) {
  const todoContainer = document.createElement("div");
  todoContainer.innerHTML = `


        <div class="todos" id="todos">
          <div class="todos__text">
            <h3 class="todos__text--title" id="todo-title">${title}</h3>
            <p class="todos__text--description" id="todo-description">
              ${description}
            </p>
            <textarea class="todos__text--notes">${notes}</textarea>
          </div>
          <div class="todos__things">
            <p class="todos__things--priority medium">Medium</p>
            <p class="todos__things--date">24/4/2003</p>

            <label class="todos__things--check-container"
              >Done
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
`;

  mainTodo.insertAdjacentElement("beforeend", todoContainer);
}

export { addTodo };
