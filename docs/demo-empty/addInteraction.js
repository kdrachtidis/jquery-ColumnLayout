$(document).ready(function () {
    // Left sidebar
    $('<button type="button" id="hideLeftSidebar">Hide left sidebar</button>').prependTo('#left-sidebar');
    // Left container
    $('<button type="button" id="showLeftSidebar">Show left sidebar</button>').prependTo('#left-container');
    $('<button type="button" id="hideLeftContainer">Hide left container</button>').appendTo('#left-container');
    // Main container
    $('<button type="button" id="showLeftSection">Show left section</button>').prependTo('#main-container');
    $('<button type="button" id="showLeftContainer">Show left container</button>').prependTo('#main-container');
    $('<button type="button" id="hideLeftSection" class="left">Hide left section</button>').prependTo('#main-container');
    $('<button type="button" id="showRightSection" class="right">Show right section</button>').appendTo('#main-container');
    $('<button type="button" id="showRightContainer" class="right">Show right container</button>').appendTo('#main-container');
    $('<button type="button" id="hideRightSection" class="right">Hide right container</button>').appendTo('#main-container');
    // Right container
    $('<button type="button" id="showRightSidebar" class="right">Show right sidebar</button>').prependTo('#right-container');
    $('<button type="button" id="hideRightContainer">Hide right container</button>').appendTo('#right-container');
    // Right sidebar
    $('<button type="button" id="hideRightSidebar">Hide right sidebar</button>').prependTo('#right-sidebar');
});