// ~~~~~~~~~~~~~~~~~~~~~~~API~~~~~~~~~~~~~~~~~~~~~~~
import { Api } from "./api.js";
// ~~~~~~~~~~~~~~~~~~~~~~~View~~~~~~~~~~~~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        todolist: "#todolist__container",
        deletebtn: ".beletbtn",
        inputbox: ".todolist__input",
    };

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp += `
                <li>
                    <span>${todo.title}</span>
                    <button class="beletbtn" id="${todo.id}">X</button>
                </li>
            `;
        });
        return tmp;
    };
    return {
        render,
        createTmp,
        domstr,
    };
})();
// ~~~~~~~~~~~~~~~~~~~~~~~Model~~~~~~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {
    class Todo {
        constructor(title) {
            this.userId = 5;
            this.title = title;
            this.completed = false;
        }
    }

    class State {
        #todolist = [];

        get todolist() {
            return this.#todolist;
        }
        set todolist(newtodos) {
            this.#todolist = [...newtodos];

            const container = document.querySelector(view.domstr.todolist);
            const tmp = view.createTmp(this.#todolist);
            view.render(container, tmp);
        }
    }

    const getTodos = api.getTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;

    return {
        getTodos,
        deleteTodo,
        addTodo,
        State,
        Todo,
    };
})(Api, View);
// ~~~~~~~~~~~~~~~~~~~~~~~Controller~~~~~~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
    const state = new model.State();

    const addTodo = () => {
        const inputbox = document.querySelector(view.domstr.inputbox);

        inputbox.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                const newtodo = new model.Todo(event.target.value);
                model.addTodo(newtodo).then((todo) => {
                    state.todolist = [todo, ...state.todolist];
                });
                event.target.value = "";
            }
        });
    };

    const deleteTodo = () => {
        const container = document.querySelector(view.domstr.todolist);

        container.addEventListener("click", (event) => {
            state.todolist = state.todolist.filter(
                (todo) => +todo.id !== +event.target.id
            );
            model.deleteTodo(event.target.id);
        });
    };

    const init = () => {
        model.getTodos().then((todos) => {
            state.todolist = todos;
        });
    };

    const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
    };

    return { bootstrap };
})(Model, View);

Controller.bootstrap();
