function addTask() {
    var input = document.getElementById("task").value;
    var list = document.getElementById("myDiv");
    var li = document.createElement("li");
    var text = document.createTextNode(input);
    li.appendChild(text);
    list.appendChild(li);
    document.getElementById("task").value = '';
    
}