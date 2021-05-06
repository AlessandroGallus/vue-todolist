const app = new Vue({
  el: '#app',
  data:{
    str_to_do: '',
    alertActive: false,
    todolist:[
      {
        to_do:'Ripassare HTML/CSS',
        checked:false
      },
      {
        to_do:'Andare a fare la spesa',
        checked:true
      },
      {
        to_do:'Studiare VUE',
        checked:false
      },
      {
        to_do:'Preparare il pranzo',
        checked:false
      }
    ]
  },
  methods:{
    remove_to_do(index){
      this.todolist.splice(index, 1)
    },
    add_to_do(){
      if(this.str_to_do.length>2){
        this.todolist.push({to_do: this.str_to_do, checked:false})
        this.str_to_do="";
      }else{
        this.alertActive = true;
        setTimeout(()=>{
          this.alertActive = false;
          this.str_to_do="";
        },2000)
      }
      
    }
  }
})