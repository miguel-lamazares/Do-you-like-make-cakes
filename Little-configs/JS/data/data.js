const API = document.getElementById("api");
const browser = document.getElementById("browser");
const id = document.getElementById("id");
const senha = document.getElementById("senha");
const URL = document.getElementById("URl");

// Buttons

API.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        browser.focus();
        if (check());
    }});
browser.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        id.focus();
        if (check());
    }});

id.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        senha.focus();
        if (check());
    }});

senha.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        URL.focus();
        if (check());
    }});

URL.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();

        if (check());
    }});