function error() {
    console.log("No XML found!");
}

function leftSidebarJSON(data) {
    $("#drop-groupslist .label, #left-sidebar .title .label").append(data.title);
    $("#drop-groupslist .count, #left-sidebar .title .count").append(" (" + data.items.length + ")");
    $(data.items).each(function () {
        $('<li><h1><a href="#">' + this.header + '</a></h1></li>').appendTo("#groupslist ol");

        if (this.header.length < 17) {
            $('<option>' + this.header + '</option>').appendTo("#drop-groupslist select");
        } else {
            $('<option>' + this.header.substr(0, 16) + '...</option>').appendTo("#drop-groupslist select");
        }
    });
}

function rightSidebarJSON(data){
    $("#right-sidebar .title .label").append(data.title);
    $("#right-sidebar .title .count").append(" (" + data.items.length + ")");

    $(data.items).each(function () {
        $('<li><a href="#">' + this.header + '</a></li>').appendTo("#resources ol");
    });
}

function leftContainerJSON(data) {
    $("#drop-masterlist .label, #left-container .title .label").append(data.title);
    $("#drop-masterlist .count, #left-container .title .count").append(" (" + data.items.length + ")");

    $(data.items).each(function () {
        $('<article class="list-object"><aside>' + this.subheader + '</aside><header><h2>' + this.header + '</h2><h3>' + this.kpi + '</h3></header><footer><ul class="switch"><li class="more"><button type="button">more</button></li><li class="less"><button type="button">less</button></li></ul><ul class="attributes"><li>' + this.attribute1 + '</li><li class="right">' + this.attribute2 + '</li><li>' + this.attribute3 + '</li><li class="right">' + this.attribute4 + '</li></ul></footer></article>').appendTo("#masterlist");

        if (this.header.length < 26) {
            $('<option>' + this.header + '</option>').appendTo("#drop-masterlist select");
        } else {
            $('<option>' + this.header.substr(0, 25) + '...</option>').appendTo("#drop-masterlist select");
        }
    });
}

function rightContainerJSON(data) {
    $("#right-container .title .label").append(data.title);
    $("#right-container .title .count").append(" (" + data.items.length + ")");
    $(data.items).each(function () {
        $('<article><h3>' + this.title + '</h3><p class="details">created on ' + this.date + ', at ' + this.timestamp + ' by <a href="#">' + this.user + '</a></p><p class="message">' + this.message + '</p></article>').appendTo("#timeline");
    });
}

function mainContainer(xml) {
    var header = $(xml).find("header1").text();
    var subheader = $(xml).find("header2").text();
    $("span.header-1").append(header);
    $("span.header-2").append(subheader);
    $(xml).find("kpi").each(function () {
        var kpi = $(this).text();
        var label = $(this).attr("title");
        $('<li><span class="kpi-amount">' + kpi + '</span><span class="kpi-title">' + label + '</span></li>').appendTo("#objectheader div.kpi ol");
    });
    $(xml).find("attribute").each(function () {
        var attribute = $(this).text();
        $('<li>' + attribute + '</li>').appendTo("#objectheader div.attribute ol");
    });
    $(xml).find("status").each(function () {
        var status = $(this).text();
        $('<li>' + status + '</li>').appendTo("#objectheader div.status ol");
    });
    $(xml).find("tabcontainer").each(function () {
        var tabcontainer = $(this).attr("tab");
        $('<li><a href="#">' + tabcontainer + '</a></li>').appendTo("#tabMenu ol");
    });
}

function simpleForm(xml) {
    $(xml).find("entry").each(function () {
        var label = $(this).attr("label");
        var amount = $(this).text();
        $('<p class="form-entry"><span class="label">' + label + '</span><span class="amount">' + amount + '</span></p>').appendTo(".form-content");
    });
}

function getXML() {
    $.ajax({
        dataType: "json",
        url: "./json/leftSidebarContent.json",
        success: leftSidebarJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./json/rightSidebarContent.json",
        success: rightSidebarJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./json/leftContainerContent.json",
        success: leftContainerJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./json/rightContainerContent.json",
        success: rightContainerJSON,
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

$(document).ready(function () {
    getXML();
});