function error() {
    console.log("No JSON found!");
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

function mainContainerJSON(data){
    $("span.header-1").append(data.header);
    $("span.header-2").append(data.subheader);

    $(data.kpis).each(function () {
        $('<li><span class="kpi-amount">' + this.label + '</span><span class="kpi-title">' + this.value + '</span></li>').appendTo("#objectheader div.kpi ol");
    });

    $(data.attributes).each(function () {
        $('<li>' + this.value + '</li>').appendTo("#objectheader div.attribute ol");
    });

    $(data.status).each(function () {
        $('<li>' + this.value + '</li>').appendTo("#objectheader div.status ol");
    });

    $(data.tabs).each(function () {
        $('<li><a href="#">' + this.label + '</a></li>').appendTo("#tabMenu ol");
    });
}

function simpleFormJSON(data){
    $(data.items).each(function () {
        $('<p class="form-entry"><span class="label">' + this.label + '</span><span class="amount">' + this.amount + '</span></p>').appendTo(".form-content");
    });
}

function getData() {
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
        dataType: "json",
        url: "./json/ObjectContent.json",
        success: mainContainerJSON,
        error: error
    });

    $.ajax({
        dataType: "json",
        url: "./json/simpleFormContent.json",
        success: simpleFormJSON,
        error: error
    });
}

$(document).ready(function () {
    getData();
});