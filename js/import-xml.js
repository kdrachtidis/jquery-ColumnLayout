function error() {
    console.log("No XML found!");
}

function leftSidebar(xml) {
    var title = $(xml).find("list").attr("title");
    var count = $(xml).find("category").size();
    $("#drop-groupslist .label, #left-sidebar .title .label").append(title);
    $("#drop-groupslist .count, #left-sidebar .title .count").append(" (" + count + ")");
    $(xml).find("category").each(function() {
        var header = $(this).find("header").text();
        var sheader = header.substr(0, 16);
        $('<li><h1><a href="#">' + title + '</a></h1></li>').appendTo("#groupslist ol");
        if (header.length < 17) {
            $('<option>' + header + '</option>').appendTo("#drop-groupslist select");
        } else {
            $('<option>' + sheader + '...</option>').appendTo("#drop-groupslist select");
        }
    });
}

function rightSidebar(xml) {
    var title = $(xml).find("list").attr("title");
    var count = $(xml).find("source").size();
    $("#right-sidebar .title .label").append(title);
    $("#right-sidebar .title .count").append(" (" + count + ")");
    $(xml).find("source").each(function() {
        var header = $(this).find("header").text();
        $('<li><a href="#">' + header + '</a></li>').appendTo("#resources ol");
    });
}

function leftContainer(xml) {
    var title = $(xml).find("list").attr("title");
    var count = $(xml).find("element").size();
    $("#drop-masterlist .label, #left-container .title .label").append(title);
    $("#drop-masterlist .count, #left-container .title .count").append(" (" + count + ")");
    $(xml).find("element").each(function() {
        var header = $(this).find("header").text();
        var sheader = header.substr(0, 25);
        var subheader = $(this).find("subheader").text();
        var kpi = $(this).find("kpi").text();
        var attribute1 = $(this).find("attribute1").text();
        var attribute2 = $(this).find("attribute2").text();
        var attribute3 = $(this).find("attribute3").text();
        var attribute4 = $(this).find("attribute3").text();
        $('<article class="list-object"><aside>' + subheader + '</aside><header><h2>' + header + '</h2><h3>' + kpi + '</h3></header><footer><ul class="switch"><li class="more"><button type="button">more</button></li><li class="less"><button type="button">less</button></li></ul><ul class="attributes"><li>' + attribute1 + '</li><li class="right">' + attribute2 + '</li><li>' + attribute3 + '</li><li class="right">' + attribute4 + '</li></ul></footer></article>').appendTo("#masterlist");
        if (header.length < 26) {
            $('<option>' + header + '</option>').appendTo("#drop-masterlist select");
        } else {
            $('<option>' + sheader + '...</option>').appendTo("#drop-masterlist select");
        }
    });
}

function rightContainer(xml) {
    var title = $(xml).find("feed").attr("title");
    var count = $(xml).find("entry").size();
    $("#right-container .title .label").append(title);
    $("#right-container .title .count").append(" (" + count + ")");
    $(xml).find("entry").each(function() {
        var header = $(this).find("title").text();
        var date = $(this).find("date").text();
        var time = $(this).find("timestamp").text();
        var user = $(this).find("user").text();
        var message = $(this).find("message").text();
        $('<article><h3>' + header + '</h3><p class="details">created on ' + date + ', at ' + time + ' by <a href="#">' + user + '</a></p><p class="message">' + message + '</p></article>').appendTo("#timeline");
    });
}

function mainContainer(xml) {
    var header = $(xml).find("header1").text();
    var subheader = $(xml).find("header2").text();
    $("span.header-1").append(header);
    $("span.header-2").append(subheader);
    $(xml).find("kpi").each(function() {
        var kpi = $(this).text();
        var label = $(this).attr("title");
        $('<li><span class="kpi-amount">' + kpi + '</span><span class="kpi-title">' + label + '</span></li>').appendTo("#objectheader div.kpi ol");
    });
    $(xml).find("attribute").each(function() {
        var attribute = $(this).text();
        $('<li>' + attribute + '</li>').appendTo("#objectheader div.attribute ol");
    });
    $(xml).find("status").each(function() {
        var status = $(this).text();
        $('<li>' + status + '</li>').appendTo("#objectheader div.status ol");
    });
    $(xml).find("tabcontainer").each(function() {
        var tabcontainer = $(this).attr("tab");
        $('<li><a href="#">' + tabcontainer + '</a></li>').appendTo("#tabMenu ol");
    });
}

function simpleForm(xml) {
    $(xml).find("entry").each(function() {
        var label = $(this).attr("label");
        var amount = $(this).text();
        $('<p class="form-entry"><span class="label">' + label + '</span><span class="amount">' + amount + '</span></p>').appendTo(".form-content");
    });
}

function getXML() {
    $.ajax({
        type: "GET",
        url: "./xml/leftSidebarContent.xml",
        dataType: "xml",
        success: leftSidebar,
        error: error
    });
    $.ajax({
        type: "GET",
        url: "./xml/rightSidebarContent.xml",
        dataType: "xml",
        success: rightSidebar,
        error: error
    });
    $.ajax({
        type: "GET",
        url: "./xml/leftContainerContent.xml",
        dataType: "xml",
        success: leftContainer,
        error: error
    });
    $.ajax({
        type: "GET",
        url: "./xml/rightContainerContent.xml",
        dataType: "xml",
        success: rightContainer,
        error: error
    });
    $.ajax({
        type: "GET",
        url: "./xml/ObjectContent.xml",
        dataType: "xml",
        success: mainContainer,
        error: error
    });
    $.ajax({
        type: "GET",
        url: "./xml/simpleFormContent.xml",
        dataType: "xml",
        success: simpleForm,
        error: error
    });
}

$(document).ready(function() {
    getXML();
});