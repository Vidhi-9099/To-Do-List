var taskInput = document.getElementById("input-box");
	var taskText = document.getElementById("todolist")

function addTask(){
		if (taskInput.value === ''){
		alert("You must Write Task !");
		}
		else{
		
		var newtask = document.createElement("li");
		newtask.innerHTML = taskInput.value;
		taskText.appendChild(newtask);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7"
		newtask.appendChild(span);
		} 
		taskInput.value ="";
		saveData();
}

taskText.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}

},false);

function saveData(){
	localStorage.setItem("data", taskText.innerHTML);
}
function showTask(){
	taskText.innerHTML = localStorage.getItem("data");
}
showTask();