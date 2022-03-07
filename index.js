"use strict";

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function(item){
            item.classList.remove("active");
        });

        tabsItems.forEach(function(item){
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
});
/////////////////////////////////////
const tabsCont = document.querySelectorAll(".tabs__item-btn");
const itemImg = document.querySelectorAll(".item__content-img");

tabsCont.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentContBtn = item;
        let tabContId = currentContBtn.getAttribute("data-tab");
        let currentTabCont = document.querySelector(tabContId);

        tabsCont.forEach(function(item) {
            item.classList.remove("active");
        });

        tabsCont.forEach(function(item) {
            item.classList.remove("active");
        });

        itemImg.forEach(function(item){
            item.classList.remove("active");
        });

        currentContBtn.classList.add("active");
        currentTabCont.classList.add("active");
    });
});