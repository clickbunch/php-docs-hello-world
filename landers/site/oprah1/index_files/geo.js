/*! updated; 04-22-2021 10:56 AM **/
/* updated by mrichards@fastly to replace ESI calls */

!function(GeoApp) {
    GeoApp.ENABLED = true,
    window.FNC = window.FNC || {},
    window.FNC.GEO = GeoApp
}(function() {
    const CONST_Akamai_GEO = window.CONST_Akamai_GEO || {
        continent: "NA",
        countryCode: "US",
        regionCode: "IL",
        dmaCode: "602",
        zipRange: "60607"
    },
    CONST_Akamai_TIME = window.CONST_Akamai_TIME || {
        yr: "2024",
        mm: "08",
        dd: "07",
        dy: "3",
        hr: "01",
        min: "11",
        sec: "59"
    };

    function getQS() {
        var vals = (window.location.search.slice(1) || "").split("&"),
            ret = {};
        for (let x = 0; x < vals.length; x++) {
            var sp = vals[x].split("="),
                key = sp[0] || !1,
                sp = sp[1] || !1;
            key && sp && (ret[key] = decodeURIComponent(sp))
        }
        return ret
    }
    return {
        time: new function() {
            const Proto = this,
                LOC_START_TIME = new Date;

            let d = new Date(((d) => {
                return [[d.mm, d.dd, d.yr].join("/"), [d.hr, d.min, d.sec].join(":")].join(" ") + " UTC";
            })(CONST_Akamai_TIME));

            let AKAMAI_DATETIME = new Date(d.toLocaleString('en-US', { timeZone: 'America/New_York' })),
                CUSTOM_ANNOUNCED = !1;

            function USDST(d) {
                const yr = (d = d || Proto.getCurrent()).getFullYear();
                var currYrStart = function() {
                        var dt = new Date("3/01/" + yr + " 00:00:00");
                        let found = 0;
                        for (; found < 2;) 0 === dt.getDay() && found++,
                        found < 2 && dt.setDate(dt.getDate() + 1),
                        2 <= dt.getMonth && (found = 2, dt.setHours(2));
                        return dt
                    }(),
                    currYrEnd = function() {
                        var dt = new Date("11/01/" + yr + " 00:00:00");
                        let found = !1;
                        for (; !found;) 0 === dt.getDay() ? found = !0 : dt.setDate(dt.getDate() + 1),
                        (found = 10 < dt.getMonth() ? !0 : found) && dt.setHours(2);
                        return dt
                    }();
                return {
                    val: isDSTObserved(d),
                    currYrStart: currYrStart,
                    currYrEnd: currYrEnd,
                    currYr: yr
                }
            }

            function isDSTObserved(d) {
                return true;
            }
            Proto.getCurrent = function(trueTime) {
                var diff = (new Date).getTime() - LOC_START_TIME.getTime(),
                    customDate = function() {
                        let qs = getQS(),
                            ret = null;
                        if (qs && qs.cdt) {
                            let val = qs.cdt,
                                reDate = (-1 < val.indexOf("%") && (val = decodeURIComponent(val)), /^([0-9]+){1,2}(\/|\-)([0-9]+){1,2}(\/|\-)([0-9]+){1,4}/g),
                                reDateOnly = /^([0-9]+){1,2}(\/|\-)([0-9]+){1,2}(\/|\-)([0-9]+){1,4}$/,
                                reTime = /\|([0-9]+){1,2}\:([0-9]+){1,2}\:([0-9]+){1,2}$/g,
                                date = val.match(reDate),
                                time = val.match(reTime);
                            var dateStr, dt;
                            !time && reDateOnly.test(val) && (time = ["|00:00:00"]), date && time && (date = date[0].split("-").join("/"), time = time[0].slice(1), dateStr = [date, time].join(" "), dt = new Date(dateStr), window.console && console.log && !CUSTOM_ANNOUNCED && (CUSTOM_ANNOUNCED = !0, console.log("DATE TEST OVERRIDE: " + dateStr)), ret = dt)
                        }
                        return ret
                    }(),
                    trueTime = !trueTime && customDate || AKAMAI_DATETIME,
                    trueTime = new Date(trueTime.getTime() + diff);
                return USDST(trueTime).val || customDate || trueTime.setHours(trueTime.getHours() - 1), trueTime
            }, Proto.isDST = USDST, Proto.isDSTObserved = isDSTObserved
        },
        geo: new function() {
            let CUSTOM_ANNOUNCED = !1;
            this.get = function() {
                var qs = getQS();
                if (qs && qs.cgo) {
                    var id, pairs = (arr => {
                        let res = {};
                        return arr.forEach(val => {
                            val = val.split(":");
                            res[val[0].trim()] = val[1].trim()
                        }), res
                    })(qs.cgo.split(";"));
                    for (id in CUSTOM_ANNOUNCED || (CUSTOM_ANNOUNCED = !0, console.log("GEO TEST OVERRIDE:", pairs)), CONST_Akamai_GEO) pairs[id] && (CONST_Akamai_GEO[id] = pairs[id])
                }
                return CONST_Akamai_GEO
            }
        }
    }
}());