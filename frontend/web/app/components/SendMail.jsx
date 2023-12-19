"use client"
import axios from 'axios'
import React, { useEffect } from 'react'

export default function SendMail() {
        
    var ctr = 0
    useEffect(() => {
        const sendMail = async () => {
            const sendRes = await axios.put("/api/mail")
            if (sendRes.data.send) {
                console.log("Mail sending")
                const htmlData = (await axios.post("https://rakshakrita-v2.onrender.com/mail")).data    //to generate html from feedback analysis
                const html = htmlData.html.join(" ")
                const resp = (await fetch("https://rakshakrita-v1.onrender.com/mail", {         // to generate pdf and send mail
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ html: html })
                 }))

                console.log( await resp.json())
            } else {
                console.log("not sending")
            }
        }
        console.log("useEffect")
        if (ctr === 0) {
            ctr++;
            sendMail()
        }
    }, [])

    return (
        <div></div>
    )
}
