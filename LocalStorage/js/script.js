let tarefas = []

const addTarefa = () => {
    let tarefa = document.getElementById('tarefa').value
    tarefas.push(tarefa)
    document.getElementById('tarefa').value = ""

    if(localStorage.getItem('tarefa') != null){
        tarefas = JSON. parse(localStorage.getItem('tarefas'))
    }
    let data = new Date();
    let date = `${data.getUTCDay()}/${data.getUTCMonth()}/${data.getUTCFullYear()}`;

    tarefas.push([data, tarefa])
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

const list = () => {
    let tbody = document.querySelector('#tr-tarefa')

    if(localStorage.getItem('tarefas') != null){
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    } else {
        tarefas.push(["Sem dados ","Sem dados"])
    }

    tarefas.forEach((element,index) => (
        tbody.innerHTML += "<tr><td>"+ element[0]
        +"</td></td>" + element[1]+"</td>"+
        "<td><button onclick='deletar(" + index + ")'> 🗑 </button></td></tr>"
    });
}

    const deletar = (index) => (
        tarefas = tarefas.forEach(
            (e, i)=> i != index 
        )
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
        document.location.reload(true)
    }



} 