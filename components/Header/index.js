// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerEntry = document.querySelector(".header-container");
headerEntry.appendChild(Header());

function Header() {
    const header = document.createElement("div"),
          headerDate = document.createElement("span"),
          headerFlag = document.createElement("h1"),
          headerTemp = document.createElement("span");

    header.appendChild(headerDate);
    header.appendChild(headerFlag);
    header.appendChild(headerTemp);

    header.classList.add("header");
    headerDate.classList.add("date");
    headerTemp.classList.add("temp");

    headerDate.textContent = "SMARCH 28, 2019";
    headerFlag.textContent = "Lambda Times";
    headerTemp.textContent = "98°";

    return header;
}
