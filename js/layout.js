/* Variables - Status ------------------------------------------------------- */
var leftSidebarStatus;
var rightSidebarStatus;
var leftContainerStatus;
var rightContainerStatus;

/* Variables - Screens ------------------------------------------------------ */
var largeScreen = 1680;
var normalScreen = 1280;
var smallScreen = 1024;

/* Container Initial Class -------------------------------------------------- */
var currentContainerClass;
/* Variables - Effects ------------------------------------------------------ */
var animDuration = 1000;

/* Print status ------------------------------------------------------------- */
function printStatus() {
    console.log("Sections status: " + leftSidebarStatus + " // " + leftContainerStatus + " // " + rightContainerStatus + " // " + rightSidebarStatus);
    console.log("Main Container's class: " + currentContainerClass);
}

/* Check initial status ----------------------------------------------------- */
function checkLoadStatus() {
    if ($(window).width() > largeScreen) {
        leftSidebarStatus = true;
        leftContainerStatus = true;
        rightContainerStatus = true;
        rightSidebarStatus = true;
        console.log("3. The screen is Large.");
        $("#left-sidebar, #left-container, #main-container, #right-container, #right-sidebar").addClass("TTTT");
        currentContainerClass = "TTTT";
        return true;
    } else if ($(window).width() <= largeScreen && $(window).width() > normalScreen) {
        leftSidebarStatus = false;
        leftContainerStatus = true;
        rightContainerStatus = true;
        rightSidebarStatus = false;
        $("#left-sidebar, #left-container, #main-container, #right-container, #right-sidebar").addClass("FTTF");
        currentContainerClass = "FTTF";
        console.log("3. The screen is Normal.");
        return true;
    } else if ($(window).width() <= normalScreen && $(window).width() > smallScreen) {
        leftSidebarStatus = false;
        leftContainerStatus = true;
        rightContainerStatus = false;
        rightSidebarStatus = false;
        $("#left-sidebar, #left-container, #main-container, #right-container, #right-sidebar").addClass("FTFF");
        currentContainerClass = "FTFF";
        console.log("3. The screen is Small.");
        return true;
    } else if ($(window).width() <= smallScreen) {
        leftSidebarStatus = false;
        leftContainerStatus = false;
        rightContainerStatus = false;
        rightSidebarStatus = false;
        $("#left-sidebar, #left-container, #main-container, #right-container, #right-sidebar").addClass("FFFF");
        currentContainerClass = "FFFF";
        console.log("3. The screen is really Small.");
        return true;
    } else {
        console.log("3. No initial screen size identified, please reload!");
        return false;
    }
}
/* Show/Hide Effect Function ------------------------------------------------ */
function toggleContainer(newContainerClass) {
    $("#left-sidebar, #left-container, #main-container, #right-container, #right-sidebar").switchClass(currentContainerClass, newContainerClass, animDuration, "linear");
    currentContainerClass = newContainerClass;
    return true;
}

/* Show/Hide Controls ------------------------------------------------------- */
function controls() {
    event.preventDefault();
    /* Hide Left Sidebar ---------------------------------------------------- */
    $("#hideLeftSidebar").click(function() {
        if (leftSidebarStatus === true && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FTTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FTTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FTFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FTFF");
            }
            console.log("Sidebar on the left side is hidden.");
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        } else if (leftSidebarStatus === true && leftContainerStatus === false) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FFTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FFTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FFFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Sidebar on the left side is hidden.");
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Show Left Sidebar ---------------------------------------------------- */
    $("#showLeftSidebar").click(function() {
        if (leftSidebarStatus === false && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("TTTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("TTTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("TTFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("TTFF");
            }
            console.log("Sidebar on the left side is again visible.");
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Hide Right Sidebar --------------------------------------------------- */
    $("#hideRightSidebar").click(function() {
        if (rightContainerStatus === true && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTF");
            }
            console.log("Sidebar on the right side is hidden.");
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        } else if (rightContainerStatus === false && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTFF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Sidebar on the right side is hidden.");
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Show Right Sidebar --------------------------------------------------- */
    $("#showRightSidebar").click(function() {
        if (rightContainerStatus === true && rightSidebarStatus === false) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTT");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTT");
            }
            console.log("Sidebar on the right side is again visible.");
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Hide Left Section ---------------------------------------------------- */
    $("#hideLeftSection").click(function() {
        if (leftSidebarStatus === true && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FFTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FFTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FFFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Both Sidebar and Container on the left side are hidden.");
            leftContainerStatus = !leftContainerStatus;
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Show Left Section ---------------------------------------------------- */
    $("#showLeftSection").click(function() {
        if (leftSidebarStatus === false && leftContainerStatus === false) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("TTTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("TTTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("TTFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("TTFF");
            }
            console.log("Both Sidebar and Container on the left side are again visible.");
            leftContainerStatus = !leftContainerStatus;
            leftSidebarStatus = !leftSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Hide Right Section --------------------------------------------------- */
    $("#hideRightSection").click(function() {
        if (rightContainerStatus === true && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTFF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Both Sidebar and Container on the right side are hidden.");
            rightContainerStatus = !rightContainerStatus;
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Show Right Section --------------------------------------------------- */
    $("#showRightSection").click(function() {
        if (rightContainerStatus === false && rightSidebarStatus === false) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTT");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTT");
            }
            console.log("Both Sidebar and Container on the right side are again visible.");
            rightContainerStatus = !rightContainerStatus;
            rightSidebarStatus = !rightSidebarStatus;
            printStatus();
            return true;
        }
    });
    /* Hide Left Container -------------------------------------------------- */
    $("#hideLeftContainer").click(function() {
        if (leftSidebarStatus === true && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("TFTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("TFTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("TFFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("TFFF");
            }
            console.log("Container on the left side is hidden.");
            leftContainerStatus = !leftContainerStatus;
            printStatus();
            return true;
        } else if (leftSidebarStatus === false && leftContainerStatus === true) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FFTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FFTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FFFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Container on the left side is hidden.");
            leftContainerStatus = !leftContainerStatus;
            printStatus();
            return true;
        }
    });
    /* Show Left Container -------------------------------------------------- */
    $("#showLeftContainer").click(function() {
        if (leftSidebarStatus === true && leftContainerStatus === false) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("TTTT", "left");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("TTTF", "left");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("TTFT", "left");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("TTFF", "left");
            }
            console.log("Container on the left side is again visible.");
            leftContainerStatus = !leftContainerStatus;
            printStatus();
            return true;
        } else if (leftSidebarStatus === false && leftContainerStatus === false) {
            if (rightContainerStatus === true && rightSidebarStatus === true) {
                toggleContainer("FTTT");
            } else if (rightContainerStatus === true && rightSidebarStatus === false) {
                toggleContainer("FTTF");
            } else if (rightContainerStatus === false && rightSidebarStatus === true) {
                toggleContainer("FTFT");
            } else if (rightContainerStatus === false && rightSidebarStatus === false) {
                toggleContainer("FTFF");
            }
            console.log("Container on the left side is again visible.");
            leftContainerStatus = !leftContainerStatus;
            printStatus();
            return true;
        }
    });
    /* Hide Right Container ------------------------------------------------- */
    $("#hideRightContainer").click(function() {
        if (rightContainerStatus === true && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTFT");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTFT");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFFT");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFFT");
            }
            console.log("Container on the right side is hidden.");
            rightContainerStatus = !rightContainerStatus;
            printStatus();
            return true;
        } else if (rightContainerStatus === true && rightSidebarStatus === false) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTFF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFFF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFFF");
            }
            console.log("Container on the right side is hidden.");
            rightContainerStatus = !rightContainerStatus;
            printStatus();
            return true;
        }
    });
    /* Show Right Container ------------------------------------------------- */
    $("#showRightContainer").click(function() {
        if (rightContainerStatus === false && rightSidebarStatus === true) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTT");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTT");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTT");
            }
            console.log("Container on the right side is again visible.");
            rightContainerStatus = !rightContainerStatus;
            printStatus();
            return true;
        } else if (rightContainerStatus === false && rightSidebarStatus === false) {
            if (leftSidebarStatus === true && leftContainerStatus === true) {
                toggleContainer("TTTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === true) {
                toggleContainer("FTTF");
            } else if (leftSidebarStatus === true && leftContainerStatus === false) {
                toggleContainer("TFTF");
            } else if (leftSidebarStatus === false && leftContainerStatus === false) {
                toggleContainer("FFTF");
            }
            console.log("Container on the right side is again visible.");
            rightContainerStatus = !rightContainerStatus;
            printStatus();
            return true;
        }
    });
}