/* 
This is not actually used but is still functionall. bin() to encode unbin() to decode. */
// this import's the needed function.
import {element} from "./create_element.js";
function bin(value) {
  if (typeof value === "number" && Number.isInteger(value)) {
    return value.toString(2);
  } else if (typeof value === "string") {
    return value.split("")
      .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  } else {
    throw new TypeError("bin() works with integers or strings only");
  }
  function unbin(value) {
  if (typeof value === "string" && /^[01 ]+$/.test(value)) {
    const parts = value.trim().split(" ");
    if (parts.length === 1) {
      return parseInt(parts[0], 2);
    } else {
      return parts.map(b => String.fromCharCode(parseInt(b, 2))).join("");
    }
  } else {
    throw new TypeError("unbin() works with binary strings only");
  }
}

function encrypt(){
      const plain = document.querySelector("#input").value;
      const output = btoa(plain);
      document.querySelector("#return").textContent = `Encrypted:${output}`;
    }
function decrypt(){
      const cipher = document.querySelector("#input").value;
      try {
        const decoded = atob(cipher);
        document.querySelector("#return").textContent = `Decrypted:${output}`;
      } catch (e) {
        document.querySelector("#return").textContent = "Invalid Base64 input";
      }
    }
