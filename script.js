document.addEventListener("DOMContentLoaded", function () {
  const saveBtn = document.getElementById("saveBtn");
  const keyInput = document.getElementById("key");
  const valueInput = document.getElementById("value");
  const dataList = document.getElementById("dataList");
  const clearBtn = document.getElementById("clearBtn");
  loadData();

  function saveData() {
    const key = keyInput.value;
    const value = valueInput.value;
    if (key && value) {
      localStorage.setItem(key, value);
      loadData();
      keyInput.value = "";
      valueInput.value = "";
    }
  }

  function loadData() {
    dataList.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${value}`;
      dataList.appendChild(listItem);
    }
  }

  function clearData() {
    localStorage.clear();
    loadData();
  }
  saveBtn.addEventListener("click", saveData);

  clearBtn.addEventListener("click", clearData);
});
