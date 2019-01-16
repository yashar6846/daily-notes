 
function GetTime() { 
    var dt = new Date();
    var def = dt.getTimezoneOffset()/60;
    var gmt = (dt.getHours() + def);
    document.clock.local.value = (IfZero(dt.getHours()) + ":" + IfZero(dt.getMinutes()) + ":" + IfZero(dt.getSeconds()));

    var ending = ":" + IfZero(dt.getMinutes()) + ":" +  IfZero(dt.getSeconds());
    var ka =check24(((gmt + 7) > 24) ? ((gmt + 7) - 24) : (gmt + 7));
    document.clock.ka.value = (IfZero(ka) + ending);
    
    var ending = ":" + IfZero(dt.getMinutes()) + ":" +  IfZero(dt.getSeconds());
    var Ir =check24(((gmt + 0) > 24) ? ((gmt + 0) - 24) : (gmt + 4));
    document.clock.Ir.value = (IfZero(Ir) + ending);

    var _GMT =check24(((gmt) > 24) ? ((gmt) - 24) : (gmt));
    
    setTimeout("GetTime()", 1000);
    }
    function IfZero(num) {
    return ((num <= 9) ? ("0" + num) : num);
    }
    function check24(hour) {
    return (hour >= 24) ? hour - 24 : hour;
    }
           