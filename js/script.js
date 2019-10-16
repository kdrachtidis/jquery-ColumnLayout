/* Events ------------------------------------------------------------------- */
$(document).on("click", ".more button", function () {
    $(this).parent("li").toggle();
    $(this).parent("li").next(".less").toggle();
    $(this).parent("li").parent("ul").next("ul").toggle();
});
$(document).on("click", ".less button", function () {
    $(this).parent("li").toggle();
    $(this).parent("li").prev(".more").toggle();
    $(this).parent("li").parent("ul").next("ul").toggle();
});
$(document).ready(function () {
    console.log("1. jQuery version: " + $.fn.jquery);
    console.log("2. jQuery UI version: " + $.ui.version);
    calcMainWidth = Math.round(($("#main-container").width() * 100) / $(window).width());
    checkLoadStatus();
});
$(window).load(function () {
    console.log("4. Window is loaded.");
    console.log("5. Initial Sections status: " + leftSidebarStatus + " // " + leftContainerStatus + " // " + rightContainerStatus + " // " + rightSidebarStatus);
    console.log("--- --- ---");
    controls();
});