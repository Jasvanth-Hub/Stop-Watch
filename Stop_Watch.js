

let hh = document.getElementById("hour")

let mm = document.getElementById("min")

let ss = document.getElementById("sec")

let mss = document.getElementById("ms")

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")


var h = 0

var m = 0

var s = 0

var milse = 0


function hour()
{
    h = h + 1
    
    if(h<=9)
    {
        hh.innerText=`0${h} :`
    }
    else
    {
        hh.innerText=`${h} :`

    }

}

function min()
{
    m = m + 1

    if(m>=60)
    {
        m = 0
    }
    
    if(m<=9)
    {
        mm.innerText=`: 0${m} :`
    }
    else
    {
        mm.innerText=`: ${m} :`
        
    }

}

function sec()
{
    s = s + 1
    
    if(s>=60)
    {
        s = 0
    }

    if(s<=9)
    {
        ss.innerText=`: 0${s} :`
    }
    else
    {
        ss.innerText=`: ${s} :`
        
    }

}

function ms()
{
    milse = milse + 1

    if(milse>=100)
    {
        milse = 0
    }

    if(milse<=9)
    {
        mss.innerText=`: 0${milse}`
    }
    else
    {
        mss.innerText=`: ${milse}`
    }

}

btn1.addEventListener("click",function start()
{
    var ht = setInterval(hour,3600000);

    var mt = setInterval(min,60000)

    var st = setInterval(sec,1000)

    var mst = setInterval(ms,8)

    btn2.addEventListener("click",function stop()
    {
        clearInterval(ht)
        clearInterval(mt)
        clearInterval(st)
        clearInterval(mst)
    })

    btn3.addEventListener("click",function reset()
    {

        h = 0
        m = 0
        s = 0
        milse = 0

        clearInterval(ht)
        clearInterval(mt)
        clearInterval(st)
        clearInterval(mst)

        hh.innerText=`0${h} :`

        mm.innerText=`: 0${m} :`

        ss.innerText=`: 0${s} :`

        mss.innerText=`: 0${milse}`

    })
})





