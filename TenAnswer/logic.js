const easyMode = () => {
  let ranDom = Math.floor(Math.random() * 50) + 1;
  sessionStorage.setItem("random", ranDom);
  window.location.href = "easy.html";
};
var round = 1;

let inputValues = [];

const check_input = () => {
  let values = Number(document.getElementById("input-easy").value);
  let storedRandom = Number(sessionStorage.getItem("random"));
  document.getElementById("answerPopup").innerText = storedRandom;
  document.getElementById("input-easy").value = "";

  if (values != " ") {
    inputValues.push(values); // เก็บค่าที่ส่งเข้ามาเป็น array เพื่อที่จำนำไปแสดง
    document.getElementById("hint").innerText = "";

    if (round < 10) {
      if (values === storedRandom) {
        document.getElementById("popup_youwin").style.display = "block";
      } else if (storedRandom >= 1 && storedRandom <= 10 && round > 4) {
        document.getElementById("hint").innerText = "Answer 1 - 10";
      } else if (storedRandom >= 11 && storedRandom <= 20 && round > 4) {
        document.getElementById("hint").innerText = "Answer 1 - 10";
      } else if (storedRandom >= 21 && storedRandom <= 30 && round > 4) {
        document.getElementById("hint").innerText = "Answer 21 - 30";
      } else if (storedRandom >= 31 && storedRandom <= 40 && round > 4) {
        document.getElementById("hint").innerText = "Answer 41 - 50";
      } else if (storedRandom >= 41 && storedRandom <= 50 && round > 4) {
        document.getElementById("hint").innerText = "Answer 41 - 50";
      }
      round++;
    } else if (round == 10) {
      if (values === storedRandom) {
        document.getElementById("popup_youwin").style.display = "block";
      } else {
        document.getElementById("popup_youlost").style.display = "block";
      }
    }
  } else {
    document.getElementById("hint").innerText = "Please enter a number!";
  }

  // ส่วนของการ นำตัวเลขไปแสดง
  if (inputValues.length > 4) {
    inputValues.shift(); // ลบตัวแรก
  }

  // แสดงค่าที่กรอกในตัวแปรต่าง ๆ
  document.getElementById("number1").innerText = inputValues[0] || "";
  document.getElementById("number2").innerText = inputValues[1] || "";
  document.getElementById("number3").innerText = inputValues[2] || "";
  document.getElementById("number4").innerText = inputValues[3] || "";

  // หากมีการกรอกค่าเกิน 4 ครั้งให้เริ่มเพิ่ม id number 2, 3, 4
  if (inputValues.length > 4) {
    for (let i = 4; i < inputValues.length; i++) {
      document.getElementById(`number${i - 3}`).innerText =
        inputValues[i] || "";
    }
  }
  // ล้างค่าใน input
  document.getElementById("input-easy").value = "";
  displayAnswer(); // เรียกใช้ฟังก์ชัน displayAnswer เพื่ออัพเดทค่าใน DOM
};

const normalMode = () => {
  let ranDom = Math.floor(Math.random() * 99) + 1;
  sessionStorage.setItem("random", ranDom);
  window.location.href = "normal.html";
};

const checknormal = () => {
  let valueInput = Number(document.getElementById("input-normal").value);
  let randomStored = Number(sessionStorage.getItem("random"));
  document.getElementById("input-normal").value = ""; //
  debugger;
  console.log(randomStored);
  if (valueInput != " ") {
    inputValues.push(valueInput);

    document.getElementById("hint").innerText = " ";
    if (round < 10) {
      if (valueInput == randomStored) {
        document.getElementById("popup_youwin").style.display = "block";
      } else if (randomStored >= 1 && randomStored <= 10 && round > 4) {
        document.getElementById("hint").innerText = "Answer 1 - 10";
      } else if (randomStored >= 11 && randomStored <= 20 && round > 4) {
        document.getElementById("hint").innerText = "Answer 1 - 10";
      } else if (randomStored >= 21 && randomStored <= 30 && round > 4) {
        document.getElementById("hint").innerText = "Answer 21 - 30";
      } else if (randomStored >= 31 && randomStored <= 40 && round > 4) {
        document.getElementById("hint").innerText = "Answer 41 - 50";
      } else if (randomStored >= 41 && randomStored <= 50 && round > 4) {
        document.getElementById("hint").innerText = "Answer 41 - 50";
      } else if (randomStored >= 51 && randomStored <= 60 && round > 4) {
        document.getElementById("hint").innerText = "Answer 41 - 50";
      } else if (randomStored >= 61 && randomStored <= 70 && round > 4) {
        document.getElementById("hint").innerText = "Answer 41 - 50";
      } else if (randomStored >= 71 && randomStored <= 80 && round > 4) {
        document.getElementById("hint").innerText = "Answer 41 - 50";
      } else if (randomStored >= 81 && randomStored <= 90 && round > 4) {
        document.getElementById("hint").innerText = "Answer 41 - 50";
      } else if (randomStored >= 91 && randomStored <= 100 && round > 4) {
        document.getElementById("hint").innerText = "Answer 41 - 50";
      }
      round++;
    } else if (round == 10) {
      if (valueInput === randomStored) {
        document.getElementById("popup_youwin").style.display = "block";
      } else {
        document.getElementById("popup_youlost").style.display = "block";
      }
    }
  } else {
    document.getElementById("hint").innerText = "Please enter a number!";
  }

  // ส่วนของการ นำตัวเลขไปแสดง
  if (inputValues.length > 4) {
    inputValues.shift(); // ลบตัวแรก
  }

  // แสดงค่าที่กรอกในตัวแปรต่าง ๆ
  document.getElementById("number1").innerText = inputValues[0] || "";
  document.getElementById("number2").innerText = inputValues[1] || "";
  document.getElementById("number3").innerText = inputValues[2] || "";
  document.getElementById("number4").innerText = inputValues[3] || "";

  // หากมีการกรอกค่าเกิน 4 ครั้งให้เริ่มเพิ่ม id number 2, 3, 4
  if (inputValues.length > 4) {
    for (let i = 4; i < inputValues.length; i++) {
      document.getElementById(`number${i - 3}`).innerText =
        inputValues[i] || "";
    }
  }
  // document.getElementById("input-easy").value = "";
  answerDisplay(); // เรียกใช้ฟังก์ชัน displayAnswer เพื่ออัพเดทค่าใน DOM
};

function displayAnswer() { // 
  let storedRandom = Number(sessionStorage.getItem("random"));
  document.getElementById("answerPopup").innerText = storedRandom;
  document.getElementById("rounds").innerText = round;
}
function answerDisplay() {
  let randomStored = Number(sessionStorage.getItem("random"));
  document.getElementById("rounds").innerText = round;
}

function limitInputLength(elem, maxLength) {
  if (elem.value.length > maxLength) {
    elem.value = elem.value.slice(0, maxLength);
  }
}

// เรียกใช้ popup
function open_popup() {
  document.getElementById("popup").style.display = "block";
}
// ปิด popup
function close_popup() {
  document.getElementById("popup").style.display = "none";
}
