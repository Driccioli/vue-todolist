Vue.config.devtools = true;

const app = new Vue({
    el:"#app",
    data:{
        todo:[
            "Fare la spesa", 
            "Farsi la doccia", 
            "Lavorare su Javascript",
            "Tagliarsi la barba",
        ],
        newTask:"",
    },
    mounted(){
        this.autofocus();
    },
    methods:{
        iconToDoClass: function(index){
            if(index % 2 != 0){
                return "far fa-check-circle"
            }   else{
                return "far fa-times-circle"
            }
        },
        addTask: function(){
            this.todo.push(this.newTask);
            this.newTask="";
            this.autofocus();
        },
        deleteTask:function(index){
            console.log(index);
            this.todo.splice(index,1);
            this.autofocus();
        }
    }
})