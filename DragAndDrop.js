export class App {
  init() {
    const adderDiv = document.createElement("div");
    adderDiv.classList.add("adder");

    const inputField = document.createElement("input");
    inputField.classList.add("input");
    adderDiv.appendChild(inputField);

    const addButton = document.createElement("button");
    addButton.classList.add("add");
    addButton.textContent = "Add Item";
    adderDiv.appendChild(addButton);

    document.body.appendChild(adderDiv);

    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    this.addItemsBinding(inputField, addButton, ul);
    this.dragAndDropBinding(ul);
  }

  addItemsBinding(inputField, addButton, ul) {
    addButton.addEventListener("click", () => {
      const inputValue = inputField.value.trim();
      if (inputValue) {
        const li = document.createElement("li");
        li.textContent = inputValue;
        li.classList.add("draggable");
        li.setAttribute("draggable", "true");
        ul.appendChild(li);

        inputField.value = "";

        this.dragAndDropBinding(ul);
      }
    });
  }

  dragAndDropBinding(ul) {
    const draggables = ul.querySelectorAll(".draggable");
    const lists = ul.querySelectorAll("ul");

    draggables.forEach(draggable => {
      draggable.addEventListener("dragstart", e => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });

      ul.addEventListener("dragover", e => {
        e.preventDefault();
        const afterElement = this.getDragAfterElement(ul, e.clientY);
        const dragging = document.querySelector(".dragging");
        if (afterElement == null) {
          ul.appendChild(dragging);
        } else {
          ul.insertBefore(dragging, afterElement);
        }
      });
    });
  }

  getDragAfterElement(ul, y) {
    const draggableElements = [
      ...ul.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  }
}