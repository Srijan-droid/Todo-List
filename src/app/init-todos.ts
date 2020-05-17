export class Init{
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') ===undefined){
            console.log('No todos, creating')
            var todos =[
                {text:'Hello'},
                {text:'Sup'},
                {text:'Hey'}
              ]
              localStorage.setItem('todos',JSON.stringify(todos))
        }
        else{
            console.log('todos found')
        }

}
}