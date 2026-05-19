/* Check initial status ----------------------------------------------------- */
const leftSidebar = document.getElementById("left-sidebar");
const leftContainer = document.getElementById("left-container");
const mainContainer = document.getElementById("main-container");
const rightContainer = document.getElementById("right-container");
const rightSidebar = document.getElementById("right-sidebar");

function checkLoadStatus() {
    if (window.innerWidth > largeScreen) {
        leftSidebarStatus = true;
        leftContainerStatus = true;
        rightContainerStatus = true;
        rightSidebarStatus = true;
        console.log("3. The screen is Large.");
        leftSidebar.classList.add("TTTT");
        leftContainer.classList.add("TTTT");
        mainContainer.classList.add("TTTT");
        rightContainer.classList.add("TTTT");
        rightSidebar.classList.add("TTTT");
        
        currentContainerClass = "TTTT";
        return true;
    } else if (window.innerWidth <= largeScreen && window.innerWidth > normalScreen) {
        leftSidebarStatus = false;
        leftContainerStatus = true;
        rightContainerStatus = true;
        rightSidebarStatus = false;
        leftSidebar.classList.add("FTTF");
        leftContainer.classList.add("FTTF");
        mainContainer.classList.add("FTTF");
        rightContainer.classList.add("FTTF");
        rightSidebar.classList.add("FTTF");
        currentContainerClass = "FTTF";
        console.log("3. The screen is Normal.");
        return true;
    } else if (window.innerWidth <= normalScreen && window.innerWidth > smallScreen) {
        leftSidebarStatus = false;
        leftContainerStatus = true;
        rightContainerStatus = false;
        rightSidebarStatus = false;
        leftSidebar.classList.add("FTFF");
        leftContainer.classList.add("FTFF");
        mainContainer.classList.add("FTFF");
        rightContainer.classList.add("FTFF");
        rightSidebar.classList.add("FTFF");
        currentContainerClass = "FTFF";
        console.log("3. The screen is Small.");
        return true;
    } else if (window.innerWidth <= smallScreen) {
        leftSidebarStatus = false;
        leftContainerStatus = false;
        rightContainerStatus = false;
        rightSidebarStatus = false;
        leftSidebar.classList.add("FFFF");
        leftContainer.classList.add("FFFF");
        mainContainer.classList.add("FFFF");
        rightContainer.classList.add("FFFF");
        rightSidebar.classList.add("FFFF");
        currentContainerClass = "FFFF";
        console.log("3. The screen is really Small.");
        return true;
    } else {
        console.log("3. No initial screen size identified, please reload!");
        return false;
    }
}