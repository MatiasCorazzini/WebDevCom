let name = document.getElementById("name")
let des = document.getElementById("description");
let port = document.getElementById("portfolio");
let description = ["description de linuz", "description de elon", "description de mark"];
let portfolio = ["https://www.buscabiografias.com/biografia/verDetalle/8294/Linus%20Torvalds", "https://www.entrepreneur.com/article/268021", "https://www.biografiasyvidas.com/biografia/z/zuckerberg.htm"]

function changeLinus() {
  let devico = document.getElementById("dev-ul");
  devico.style.marginLeft = "0%";
  name.innerHTML = "Linus Tolrvards";
  des.innerHTML = description[0];
  port.href = portfolio[0];
}

function changeElon() {
  let devico = document.getElementById("dev-ul");
  devico.style.marginLeft = "-100%"; 
  name.innerHTML = "Elon Musk";
  des.innerHTML = description[1];
  port.href = portfolio[1]
}

function changeMark() {
  let devico = document.getElementById("dev-ul");
  devico.style.marginLeft = "-200%"; 
  name.innerHTML = "Mark Zukenverga";
  des.innerHTML = description[2];
  port.href = portfolio[2];
}



