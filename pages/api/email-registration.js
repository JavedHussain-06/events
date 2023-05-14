import path from 'path'
import fs  from 'fs'

function bulidPath(){
    return path.join(process.cwd(), 'data', 'data.json')
}

function exractData(filePath){
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData)
    return data

}


export default function handler(req, res) {
    const filePath = bulidPath()
    const { allEvents} = exractData(filePath)

    if(!allEvents){
        res.status(404).json({
            Status : 404,
            message : `Event not found!` 
        })
    }
    
    const { method } = req
    if (method === 'POST') {
        const { email, eventId } = req.body
        if(!email || !email.includes('@')){
            res.status(422).json({message : `Invalid email address.`})
        }

        const newAllEvents = allEvents.map(ev => {
            if(ev.id === eventId){
                if(ev.emails_registered.includes(email)){
                    res.status(409).json({
                        message : `This email has been alredy registers.`
                    })
                    return ev
                }
              return  {...ev , emails_registered :[...ev.emails_registered , email] }
            }
            return ev
        })
        fs.writeFileSync(filePath , JSON.stringify({allEvents : newAllEvents}))
        res.status(200).json({ message: `You have been successfully registerd with email : ${email} for the event: ${eventId}` })
    }

} 