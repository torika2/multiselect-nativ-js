function selectMultipleOption(myId,selectValue){
	let multipleOutputDiv = document.getElementById('multioutput');

	let addDiv = document.createElement("div");
	addDiv.setAttribute("class","d-flex ml-5");
	addDiv.setAttribute("id","selectValue"+myId);
	addDiv.innerHTML = `
						<input id="textHiddenInput${myId}" type="hidden" name="text[]" value="${myId}">
						<img src="" alt="surati">
						<p class="ml-2">${selectValue}<p>
						<a onclick="deleteDivWithId(${myId})" class="ml-1" style="color:red;cursor:pointer;">x</a>
						`;

	multipleOutputDiv.appendChild(addDiv);
}

function deleteDivWithId(divId) {
	let toDeleteDiv = document.getElementById(`selectValue${divId}`);

	toDeleteDiv.remove();
}
