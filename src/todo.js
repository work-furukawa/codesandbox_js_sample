import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  createIcompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIcompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // div タグ生成
  const div = document.createElement("div");
  div.innerText = text;

  // button(完了) 生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const text = completeButton.parentNode.firstChild.textContent;
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    const newLi = document.createElement("li");
    const newDiv = document.createElement("div");
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const text = backButton.parentNode.firstChild.textContent;
      createIcompleteList(text);
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
    });

    newDiv.innerText = text;
    newDiv.appendChild(backButton);
    newLi.appendChild(newDiv);
    document.getElementById("complete-list").appendChild(newLi);
  });

  // button(削除) 生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liの下にdivを設定
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

const add_button = document.getElementById("add-button");
if (add_button) add_button.addEventListener("click", () => onClickAdd());
