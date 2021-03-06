﻿/*
 =========================================================
 msCronjs
 https://github.com/onterumahendra/CronScheduler
 Copyright (c) 2016 MSquare Solutions
 =========================================================
 */
/*
 * Contributions:
 *  - Onteru Mahendra (msbrother445@gmail.com)
 *  - Padala Mallikarjuna (mallikarjuna.909@gmail.com)
 */


(function ($) {

    $.fn.msCron = function (options) {
        if (typeof options === "undefined") {
            options = {
                getCron: "",
                setCron: "",
                activeTab: "MINUTES"
            };
        }
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            getCron: "",
            setCron: "",
            activeTab: ""
        }, options);
      
        var mainDiv = $("<div/>", { id: "CronGenMainDiv", style: "padding:15px;" });
        var topMenu = $("<ul/>", { "class": "nav nav-tabs", id: "msCronTabs" });
        $('<li/>', { 'class': 'active' }).html($('<a id="msMinutesTab" role="tab" data-toggle="tab" href="#Minutes">每分钟</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msHourlyTab" role="tab" data-toggle="tab" href="#Hourly">每小时</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msDailyTab" role="tab" data-toggle="tab" href="#Daily">每天</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msWeeklyTab" role="tab" data-toggle="tab" href="#Weekly">每周</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msMonthlyTab" role="tab" data-toggle="tab" href="#Monthly">每月</a>')).appendTo(topMenu);
        $('<li/>').html($('<a id="msYearlyTab" role="tab" data-toggle="tab" href="#Yearly">每年</a>')).appendTo(topMenu);
        $(topMenu).appendTo(mainDiv);
        var tabContent = $("<div/>", { "class": "tab-content" });
        //creating the minutesTab
        var minutesTab = $("<div/>", { "class": "tab-pane active", id: "Minutes" });
        var minutesTabSection = $("<div/>", { "style": "padding:15px" });
        $(minutesTabSection).append("每&nbsp;");
        $("<input/>", { id: "MinutesInput", type: "text", value: "1", class: "form-control", style: "width: 43px;display:inline" }).appendTo(minutesTabSection);
        $(minutesTabSection).append("&nbsp;分钟");
        $(minutesTabSection).appendTo(minutesTab);
        $(minutesTab).appendTo(tabContent);
        //creating the hourlyTab
        var hourlyTab = $("<div/>", { "class": "tab-pane", id: "Hourly" });
        var hourlyOption1 = $("<div/>", { "style": "padding:15px" });
        $("<input/>", { id:"EveryHour", type: "radio", value: "1", name: "HourlyRadio", checked: "checked" }).appendTo(hourlyOption1);
        $(hourlyOption1).append("<label for='EveryHour'>每&nbsp;</label>");
        $("<input/>", { id: "HoursInput", type: "text", class: "form-control", value: "1", style: "width: 42px;display:inline" }).appendTo(hourlyOption1);
        $(hourlyOption1).append("&nbsp;小时");
        $(hourlyOption1).appendTo(hourlyTab);
        var hourlyOption2 = $("<div/>", { "style": "padding:15px" });
        $("<input/>", { id: "HourlyAAA", type: "radio", value: "2", name: "HourlyRadio" }).appendTo(hourlyOption2);
        $(hourlyOption2).append("<label for='HourlyAAA'>&nbsp;在&nbsp;</label>");
        $(hourlyOption2).append('<select id="AtHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(hourlyOption2).append('<select id="AtMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(hourlyOption2).appendTo(hourlyTab);
        $(hourlyTab).appendTo(tabContent);
        //creating the dailyTab
        var dailyTab = $("<div/>", { "class": "tab-pane", id: "Daily" });
        var dailyOption1 = $("<div/>", { "style": "padding:15px" });
        $("<input/>", { id: "EveryDay", type: "radio", value: "1", name: "DailyRadio", checked: "checked" }).appendTo(dailyOption1);
        $(dailyOption1).append("<label for='EveryDay'>每</label>");
        $("<input/>", { id: "DaysInput", type: "text", value: "1", class: "form-control", style: "width: 42px;display:inline" }).appendTo(dailyOption1);
        $(dailyOption1).append("&nbsp;天");
        $(dailyOption1).appendTo(dailyTab);
        var dailyOption2 = $("<div/>", { "style": "padding:15px" });
        $("<input/>", { id:"workday", type: "radio", value: "2", name: "DailyRadio" }).appendTo(dailyOption2);
        $(dailyOption2).append("<label for='workday'>工作日</label>");
        $(dailyOption2).appendTo(dailyTab);
        var startTimePaddingBox = $("<div/>", { "style": "padding:15px" });
        $(startTimePaddingBox).append("开始时间&nbsp;");
        $(startTimePaddingBox).append('<select id="DailyHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(startTimePaddingBox).append('<select id="DailyMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(dailyTab).append(startTimePaddingBox);
        $(dailyTab).appendTo(tabContent);
        //creating the weeklyTab
        var weeklyTab = $("<div/>", { "class": "tab-pane", id: "Weekly" });
        var weeklyWell = $("<div/>", { "style": "padding:25px 5px 15px 0px" });
        var monLabel = $("<label/>", { "class": "checkbox-inline" }).appendTo(weeklyWell);
        $("<input/>", { id:"chkMON", type: "checkbox", value: "MON", title:"星期一" }).appendTo(monLabel);
        $(monLabel).append("<label for='chkMON'>星期一</label>");
        var tueLabel = $("<label/>", { "class": "checkbox-inline" }).appendTo(weeklyWell);
        $("<input/>", { id: "chkTUE", type: "checkbox", value: "TUE", title: "星期二" }).appendTo(tueLabel);
        $(tueLabel).append("<label for='chkTUE'>星期二</label>");
        var wedLabel = $("<label/>", { "class": "checkbox-inline" }).appendTo(weeklyWell);
        $("<input/>", { id:"chkWED", type: "checkbox", value: "WED", title: "星期三" }).appendTo(wedLabel);
        $(wedLabel).append("<label for='chkWED'>星期三</label>");
        var thuLabel = $("<label/>", { "class": "checkbox-inline" }).appendTo(weeklyWell);
        $("<input/>", { id: "chkTHU", type: "checkbox", value: "THU", title: "星期四" }).appendTo(thuLabel);
        $(thuLabel).append("<label for='chkTHU'>星期四</label>");
        var friLabel = $("<label/>", { "class": "checkbox-inline" }).appendTo(weeklyWell);
        $("<input/>", { id: "chkFRI", type: "checkbox", value: "FRI", title: "星期五" }).appendTo(friLabel);
        $(friLabel).append("<label for='chkFRI'>星期五</label>");

        var satLabel = $("<label/>", { "class": "checkbox-inline" }).appendTo(weeklyWell);
        $("<input/>", { id: "chkSAT", type: "checkbox", value: "SAT", title: "星期六" }).appendTo(satLabel);
        $(satLabel).append("<label for='chkSAT'>星期六</label>");

        var sunLabel = $("<label/>", { "class": "checkbox-inline" }).appendTo(weeklyWell);
        $("<input/>", { id: "chkSUN", type: "checkbox", value: "SUN", title: "星期天" }).appendTo(sunLabel);
        $(sunLabel).append("<label for='chkSUN'>星期天</label>");

        //Hack to fix the well box
        $(weeklyWell).appendTo(weeklyTab);
        var startTimePaddingBox2 = $("<div/>", { "style": "padding:15px" });
        $(startTimePaddingBox2).append("开始时间&nbsp;");
        $(startTimePaddingBox2).append('<select id="WeeklyHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(startTimePaddingBox2).append('<select id="WeeklyMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(weeklyTab).append(startTimePaddingBox2);
        $(weeklyTab).appendTo(tabContent);

        //creating the monthlyTab
        var monthlyTab = $("<div/>", { "class": "tab-pane", id: "Monthly" });
        var monthlyOption1 = $("<div/>", { "style": "padding:15px" });
        $("<input/>", { id:"MonthlyAAA", type: "radio", value: "1", name: "MonthlyRadio", checked: "checked" }).appendTo(monthlyOption1);

        $(monthlyOption1).append("<label for='MonthlyAAA'>&nbsp;每&nbsp</label>");
        $("<input/>", { id: "MonthInput", type: "text", class: "form-control", value: "1", style: "width: 42px;display:inline;" }).appendTo(monthlyOption1);
        $(monthlyOption1).append("&nbsp;个月的第");
        $("<input/>", { id: "DayOfMOnthInput", type: "text", class: "form-control", value: "1", style: "width: 42px;display:inline" }).appendTo(monthlyOption1);
        $(monthlyOption1).append("&nbsp;天&nbsp;");
        $(monthlyOption1).appendTo(monthlyTab);
        var monthlyOption2 = $("<div/>", { "style": "padding:15px" });

        $("<input/>", { id: "MonthlyBBB", type: "radio", value: "2", name: "MonthlyRadio" }).appendTo(monthlyOption2);
       
        $(monthlyOption2).append("<label for='MonthlyBBB'>&nbsp;每&nbsp;</label>");
        $("<input/>", { id: "EveryMonthInput", type: "text", class: "form-control", value: "1", style: "width: 42px;display:inline;" }).appendTo(monthlyOption2);
        $(monthlyOption2).append("&nbsp;个月");
        $(monthlyOption2).append('<select id="WeekDay" class="form-control day-order-in-month" style="width: 100px;display:inline;margin-right:5px;"></select>');
        $(monthlyOption2).append('<select id="DayInWeekOrder" class="form-control week-days" style="width: 100px;display:inline"></select>');
        
        $(monthlyOption2).appendTo(monthlyTab);
        var startTimePaddingBox3 = $("<div/>", { "style": "padding:15px" });
        $(startTimePaddingBox3).append("开始时间&nbsp;");
        $(startTimePaddingBox3).append('<select id="MonthlyHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(startTimePaddingBox3).append('<select id="MonthlyMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(monthlyTab).append(startTimePaddingBox3);
        $(monthlyTab).appendTo(tabContent);
        //creating the yearlyTab
        var yearlyTab = $("<div/>", { "class": "tab-pane", id: "Yearly" });
        var yearlyOption1 = $("<div/>", { "style": "padding:15px" });
        $("<input/>", { id:"YearlyAAA", type: "radio", value: "1", name: "YearlyRadio", checked: "checked" }).appendTo(yearlyOption1);
        $(yearlyOption1).append("<label for='YearlyAAA'>&nbsp;</label>");
        $(yearlyOption1).append('<select id="MonthsOfYear" class="form-control months" style="width: 88px;display:inline"></select>');
        $(yearlyOption1).append("&nbsp;第&nbsp;");
        $("<input/>", { id: "YearInput", type: "text", class: "form-control", value: "1", style: "width: 42px;display:inline;" }).appendTo(yearlyOption1);
        $(yearlyOption1).append("&nbsp;天&nbsp;");
        $(yearlyOption1).appendTo(yearlyTab);
        var yearlyOption2 = $("<div/>", { "style": "padding:15px" });
        $("<input/>", { id:"YearlyBBB", type: "radio", value: "2", name: "YearlyRadio" }).appendTo(yearlyOption2);
        $(yearlyOption2).append("<label for='YearlyBBB'>&nbsp;</label>");
        $(yearlyOption2).append('<select id="MonthsOfYear2" class="form-control months" style="width: 88px;display:inline;margin-right:5px;"></select>');
        $(yearlyOption2).append('<select id="DayOrderInYear" class="form-control day-order-in-month" style="width: 88px;display:inline;margin-right:5px;"></select>');
        $(yearlyOption2).append('<select id="DayWeekForYear" class="form-control week-days" style="width: 88px;display:inline"></select>');
        
        $(yearlyOption2).appendTo(yearlyTab);
        var startTimePaddingBox4 = $("<div/>", { "style": "padding:15px" });
        $(startTimePaddingBox4).append("开始时间&nbsp;");
        $(startTimePaddingBox4).append('<select id="YearlyHours" class="form-control hours" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(startTimePaddingBox4).append('<select id="YearlyMinutes" class="form-control minutes" style="width: 80px;display:inline;margin-right:5px;"></select>');
        $(yearlyTab).append(startTimePaddingBox4);
        $(yearlyTab).appendTo(tabContent);
        $(tabContent).appendTo(mainDiv);
        $(this).html(mainDiv);

        fillDataOfMinutesAndHoursSelectOptions();
        fillDayWeekInMonth();
        fillInWeekDays();
        fillInMonths();

        //$("#CronGenMainDiv select,input").change(function (e) {
        //    generate();
        //});
        //$("#CronGenMainDiv input").focus(function (e) {
        //    generate();
        //});
        if (options.setCron !== "") {
            populateCron(options.activeTab, options.setCron);
        } 

        options.getCron = getCron;

        function fillInMonths() {
            var days = [
                { text: "一月", val: "1" },
                { text: "二月", val: "2" },
                { text: "三月", val: "3" },
                { text: "四月", val: "4" },
                { text: "五月", val: "5" },
                { text: "六月", val: "6" },
                { text: "七月", val: "7" },
                { text: "八月", val: "8" },
                { text: "九月", val: "9" },
                { text: "十月", val: "10" },
                { text: "十一月", val: "11" },
                { text: "十二月", val: "12" }
            ];
            $(".months").each(function () {
                fillOptions(this, days);
            });
        }

        function fillOptions(elements, options) {
            for (var i = 0; i < options.length; i++)
                $(elements).append("<option value='" + options[i].val + "'>" + options[i].text + "</option>");
        }

        function fillDataOfMinutesAndHoursSelectOptions() {
            for (var i = 0; i < 60; i++) {
                if (i < 24) {
                    $(".hours").each(function () {
                        $(this).append(timeSelectOption(i));
                    });
                }
                $(".minutes").each(function () {
                    $(this).append(timeSelectOption(i));
                });
            }
        }

        function fillInWeekDays() {
            var days = [
                { text: "星期一", val: "MON" },
                { text: "星期二", val: "TUE" },
                { text: "星期三", val: "WED" },
                { text: "星期四", val: "THU" },
                { text: "星期五", val: "FRI" },
                { text: "星期六", val: "SAT" },
                { text: "星期天", val: "SUN" }
            ];
            $(".week-days").each(function () {
                fillOptions(this, days);
            });
        }

        function fillDayWeekInMonth() {
            var days = [
                { text: "第一个", val: "1" },
                { text: "第二个", val: "2" },
                { text: "第三个", val: "3" },
                { text: "第四个", val: "4" }
            ];
            $(".day-order-in-month").each(function () {
                fillOptions(this, days);
            });
        }

        function displayTimeUnit(unit) {
            if (unit.toString().length == 1)
                return "0" + unit;
            return unit;
        }

        function timeSelectOption(i) {
            return "<option value='" + i + "'>" + displayTimeUnit(i) + "</option>";
        }

        function getCron() {
            var activeTab = $("ul#msCronTabs li.active a").prop("id");
            var results = "", description="";
            switch (activeTab) {
                case "msMinutesTab":
                    results = "0 0/" + $("#MinutesInput").val() + " * 1/1 * * *";
                    description = "每" + $("#MinutesInput").val() + "分钟";
                    activeTab = "MINUTES";
                    break;
                case "msHourlyTab":
                    switch ($("input:radio[name=HourlyRadio]:checked").val()) {
                        case "1":
                            results = "0 0 0/" + $("#HoursInput").val() + " 1/1 * * *";
                            description = "每" + $("#HoursInput").val() + "小时";
                            break;
                        case "2":
                            results = "0 " + Number($("#AtMinutes").val()) + " " + Number($("#AtHours").val()) + " 1/1 * * *";
                            description = "每小时的" + $("#AtHours").val() + "分" + $("#AtMinutes").val() +"秒";
                            break;
                    }
                    activeTab = "HOURLY";
                    break;
                case "msDailyTab":
                    switch ($("input:radio[name=DailyRadio]:checked").val()) {
                        case "1":
                            results = "0 " + Number($("#DailyMinutes").val()) + " " + Number($("#DailyHours").val()) + " 1/" + $("#DaysInput").val() + " * * *";
                            description = "每" + $("#DaysInput").val() + "天的" + $("#DailyHours").val() + "时" + $("#DailyMinutes").val() + "分";
                            break;
                        case "2":
                            results = "0 " + Number($("#DailyMinutes").val()) + " " + Number($("#DailyHours").val()) + " * * MON-FRI *";
                            description = "每个工作日的" + $("#DailyHours").val() + "时" + $("#DailyMinutes").val() + "分";
                            break;
                    }
                    activeTab = "DAILY";
                    break;
                case "msWeeklyTab":
                    var selectedDays = "";
                    $("#Weekly input:checkbox:checked").each(function () {
                        selectedDays += $(this).val() + ",";
                        description += $(this).attr("title") + ",";
                    });
                    if (selectedDays.length > 0) {
                        selectedDays = selectedDays.substr(0, selectedDays.length - 1);
                        description = description.substr(0, description.length - 1);
                    }
                        
                    results = "0 " + Number($("#WeeklyMinutes").val()) + " " + Number($("#WeeklyHours").val()) + " * * " + selectedDays + " *";
                    description += "的" + $("#WeeklyHours").val() + "时" + $("#WeeklyMinutes").val()+"分"

                    activeTab = "WEEKLY";
                    break;
                case "msMonthlyTab":
                    switch ($("input:radio[name=MonthlyRadio]:checked").val()) {
                        case "1":
                            results = "0 " + Number($("#MonthlyMinutes").val()) + " " + Number($("#MonthlyHours").val()) + " " + $("#DayOfMOnthInput").val() + " 1/" + $("#MonthInput").val() + " * *";
                            description = "每" + $("#MonthInput").val() + "个月第" + $("#DayOfMOnthInput").val() + "天" + $("#MonthlyHours").val() + "时" + $("#MonthlyMinutes").val() + "分";
                            break;
                        case "2":
                            results = "0 " + Number($("#MonthlyMinutes").val()) + " " + Number($("#MonthlyHours").val()) + " * 1/" + Number($("#EveryMonthInput").val()) + " " + $("#DayInWeekOrder").val() + "#" + $("#WeekDay").val() + " *";
                            description = "每" + $("#EveryMonthInput").val() + "个月" + $("#WeekDay :selected").text() + $("#DayInWeekOrder :selected").text() + $("#MonthlyHours").val() + "时" + $("#MonthlyMinutes").val() + "分";
                            break;
                    }
                    activeTab = "MONTHLY";
                    break;
                case "msYearlyTab":
                    switch ($("input:radio[name=YearlyRadio]:checked").val()) {
                        case "1":
                            results = "0 " + Number($("#YearlyMinutes").val()) + " " + Number($("#YearlyHours").val()) + " " + $("#YearInput").val() + " " + $("#MonthsOfYear").val() + " * *";
                            description = "每年" + $("#MonthsOfYear :selected").text() + "第" + $("#YearInput").val() + "天" + $("#YearlyHours").val() + "时" + $("#YearlyMinutes").val() + "分";
                            break;
                        case "2":
                            results = "0 " + Number($("#YearlyMinutes").val()) + " " + Number($("#YearlyHours").val()) + " * " + $("#MonthsOfYear2").val() + " " + $("#DayWeekForYear").val() + "#" + $("#DayOrderInYear").val() + " *";
                            description = "每年" + $("#MonthsOfYear2 :selected").text() + $("#DayOrderInYear :selected").text() + $("#DayWeekForYear :selected").text() + $("#YearlyHours").val() + "时" + $("#YearlyMinutes").val() + "分";
                            break;
                    }
                    activeTab = "YEARLY";
                    break;
            }

            return { cron: results.substr(2, results.length - 4), tab: activeTab, info: description };
        }

        function populateCron(actTab, expression) {
            validExp = expression.replace(/ +(?= )/g, '').trim();
            var validExp = validExp.split(" ");
            if (validExp.length === 7) {
                switch (actTab) {
                    case "MINUTES":
                        $('#msCronTabs a[href="#Minutes"]').tab('show');
                        expression = expression.match(/\d+/g);
                        $("#MinutesInput").val(expression[2]);
                        break
                    case "HOURLY":
                        $('#msCronTabs a[href="#Hourly"]').tab('show');
                        expression = expression.match(/\d+/g);
                        if (expression.length === 6) {
                            $("#HoursInput").val(expression[3]);
                            $("input:radio[name=HourlyRadio][value=1]").prop("checked", true);
                        } else {
                            $("#AtMinutes ").val(expression[1]);
                            $("#AtHours ").val(expression[2]);
                            $("input:radio[name=HourlyRadio][value=2]").prop("checked", true);
                        }
                        break
                    case "DAILY":
                        $('#msCronTabs a[href="#Daily"]').tab('show');
                        expression = expression.match(/\d+/g);
                        if (expression.length === 5) {
                            $("#DaysInput").val(expression[4]);
                            $("input:radio[name=DailyRadio][value=1]").prop("checked", true);
                        } else {

                            $("input:radio[name=DailyRadio][value=2]").prop("checked", true);
                        }
                        $("#DailyHours ").val(expression[2]);
                        $("#DailyMinutes ").val(expression[1]);

                        break
                    case "WEEKLY":
                        $('#msCronTabs a[href="#Weekly"]').tab('show');
                        var weekdays = expression;
                        expression = expression.match(/\d+/g);
                        $("#WeeklyMinutes").val(expression[1]);
                        $("#WeeklyHours").val(expression[2]);
                        $("#Weekly input:checkbox").each(function () {
                            if (weekdays.indexOf($(this).val()) >= 0) {
                                $(this).prop('checked', true);
                            }
                        });
                        break
                    case "MONTHLY":
                        $('#msCronTabs a[href="#Monthly"]').tab('show');
                        if (expression.indexOf('#') !== -1) {
                            $("input:radio[name=MonthlyRadio][value=2]").prop("checked", true);
                            $("#DayInWeekOrder").val(expression.substring(expression.indexOf('#'), expression.indexOf('#') - 3));
                            expression = expression.match(/\d+/g);
                            $("#WeekDay").val(expression[5]);
                            $("#EveryMonthInput").val(expression[4]);
                        } else {
                            expression = expression.match(/\d+/g);
                            $("#DayOfMOnthInput").val(expression[3]);
                            $("#MonthInput").val(expression[5]);
                            $("input:radio[name=MonthlyRadio][value=1]").prop("checked", true);
                        }
                        $("#MonthlyHours").val(expression[1]);
                        $("#MonthlyMinutes").val(expression[2]);


                        break
                    case "YEARLY":
                        $('#msCronTabs a[href="#Yearly"]').tab('show');
                        if (expression.indexOf('#') !== -1) {
                            $("input:radio[name=YearlyRadio][value=2]").prop("checked", true);
                            $("#DayWeekForYear").val(expression.substring(expression.indexOf('#'), expression.indexOf('#') - 3));
                            expression = expression.match(/\d+/g);
                            $("#DayOrderInYear").val(expression[4]);
                            $("#MonthsOfYear2").val(expression[3]);
                        } else {
                            expression = expression.match(/\d+/g);
                            $("#MonthsOfYear").val(expression[4]);
                            $("#YearInput").val(expression[3]);
                            $("input:radio[name=YearlyRadio][value=1]").prop("checked", true);
                        }
                        $("#YearlyHours").val(expression[2]);
                        $("#YearlyMinutes").val(expression[1]);

                        break
                }
            } else {
                alert("Invalid Cron Expression..!");
            }

        }
        function findSlash(str) {
            str.indexOf('/') === -1 ? false : true;
        }
        function findOneSlash(str) {
            str.indexOf('1/1') === -1 ? false : true;
        }

        return options;
    };
}(jQuery));