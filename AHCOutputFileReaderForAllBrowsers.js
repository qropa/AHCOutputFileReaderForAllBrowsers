// ==UserScript==
// @name         AHC Output File Reader for All Browsers
// @namespace    https://github.com/qropa/AHCOutputFileReaderForAllBrowsers
// @version      0.1
// @description  AHCのビジュアライザに出力結果を自動で貼り付けます。braveなどのブラウザでも動作します。
// @author       ssaattoo
// @match        https://img.atcoder.jp/*
// @grant        none
// ==/UserScript==

if (!document.getElementById("dirSelect")) {
  const dirSelectElement = document.createElement("input");
  dirSelectElement.type = "file";
  dirSelectElement.id = "dirSelect";
  dirSelectElement.setAttribute("directory", "");
  dirSelectElement.setAttribute("webkitdirectory", "");

  const output = document.getElementById("output");
  output.parentNode.insertBefore(dirSelectElement, output.previousElementSibling);
}

if (!document.getElementById("fileSelect")) {
  const fileSelectElement = document.createElement("div");
  fileSelectElement.id = "fileSelect";
  document.body.appendChild(fileSelectElement);
}

let selectedFiles = [];

document.getElementById("dirSelect").onchange = (event) => {
  selectedFiles = Array.from(event.target.files);
  outputUpdate();
};

document.getElementById("dirSelect").onclick = (event) => {
  event.target.value = "";
};

document.getElementById("fileSelect").onchange = (event) => {};

function outputUpdate() {
  const seed = document.getElementById("seed").value;

  const errorFileName = seed + ".res";
  const errorFile = selectedFiles.find((file) => file.name === errorFileName);
  if (errorFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById("errorBox").value = e.target.result;
    };
    reader.readAsText(errorFile);
  } else {
    document.getElementById("errorBox").value = "";
  }

  const outputFileName = seed + ".out";
  const outputFile = selectedFiles.find((file) => file.name === outputFileName);
  if (outputFile) {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById("output").value = e.target.result;
      updateOutput();
    };
    reader.readAsText(outputFile);
  } else {
    document.getElementById("output").value = "";
  }
}

document.getElementById("seed").addEventListener("change", outputUpdate);

const errorBox = document.createElement("textarea");
errorBox.id = "errorBox";
errorBox.readOnly = true;
errorBox.rows = document.getElementById("output").rows;
errorBox.style.width = "650px";
errorBox.setAttribute("data-gramm_editor", "false");
const output = document.getElementById("output");
output.parentNode.insertBefore(errorBox, output.nextElementSibling);

// details要素を閉じる
var detailsElements = document.getElementsByTagName("details");

for (var i = 0; i < detailsElements.length; i++) {
  if (detailsElements[i].open) {
    detailsElements[i].open = false;
  }
}
