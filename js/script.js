// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;

createApp({
  data() {
    return {
        currentToDo: 0,
        error: false,
        newTodo: {
            Compito: "",
            Fatto: false
        },
        todos: [
            {
                Compito: "Fare la spesa",
                Fatto: true,
            },
            {
                Compito: "Sistemare casa",
                Fatto: false,
            },
            {
                Compito: "Completare l'esercizio",
                Fatto: false,
            },
            {
                Compito: "Pagare le bollette",
                Fatto: false,
            },
            
        ]
    };
  },
  methods: {
    addTodo() {
        if(this.newTodo.Compito.length > 0) {
            this.error = false;
            this.todos.unshift({...this.newTodo});
            this.newTodo.Compito = "";
        } else {
            this.error = true;
        }
    },
    removeTodo(indexToRemove) {
        this.todos.splice(indexToRemove, 1);
    },
    
  }
}).mount("#app");