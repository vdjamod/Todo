let submitBtn = document.getElementById("submitbtn");

submitBtn.addEventListener("click", () => {
  let work = document.getElementById("inputBox").value;
  let ulList = document.getElementById("ulList");
  let li = document.createElement("li");
  li.innerHTML = work;
  let deleteBtn = document.createElement("button");
  deleteBtn.classList = "deleteBtn";
  deleteBtn.innerText = "delete";
  li.append(deleteBtn);
  ulList.append(li);
});

//New Branches Added
