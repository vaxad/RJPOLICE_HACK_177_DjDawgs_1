const sendMail = async () => {
    // const sendRes = await axios.put("/api/mail")
    const send = true
    if (send) {
        console.log("Mail sending")
        const htmlres = (await fetch("http://localhost:4001/mail",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' }
        }))    //to generate html from feedback analysis
        const htmlData = await htmlres.json()
        console.log(htmlData)
        const html = htmlData.html.join(" ")
        const resp = (await fetch("http://localhost:4000/mail", {         // to generate pdf and send mail
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ html: html })
         }))

        console.log( await resp.json())
    } else {
        console.log("not sending")
    }
}

sendMail()