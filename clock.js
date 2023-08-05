setInterval(() => {
    let d = new Date()
    let htime = d.getHours()
    let mtime = d.getMinutes()
    let stime = d.getSeconds()
    let mstime = d.getMilliseconds()
    let mitime = mstime*1000

    hrotation = 30*htime + mtime/2 + stime*1/12;
    mrotation = 6*mtime + stime*1/6;
    srotation = 6*stime;
    // console.log(srotation)

    console.log(`HOURS ${htime} MINUTES ${mtime} SECONDS ${stime}`)

   
    hours.style.transform = `rotate(${hrotation}deg)`
    minutes.style.transform = `rotate(${mrotation}deg)`
    seconds.style.transform = `rotate(${srotation}deg)`

}, 1000);