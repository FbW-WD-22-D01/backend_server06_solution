import { Low, JSONFile } from 'lowdb';


const adapter = new JSONFile('./data/db.json')
const db = new Low(adapter)
await db.read()


// Das Ergebnis von der GET Route
export function getData(req,res){
    res.send(db.data)
}


// Die POST Route kommt hier an
export function postData(req, res){
    // Die übergebenen Werte auslesen
    const {id, label, title, artist, year} = req.body
    
    //  überprüfen ob der record schon vorhanden ist
    if (db.data.some(el => el.title === title && el.artist === artist)){
        res.send('This is record is already in collcection')
    }
    else {
        // Objekt für die Datenbank bauen
        const result = {id, label, title, artist, year}
        
        // Objekt in den Datenbank Array übertragen 
        db.data.push(result)
        db.write()
        
        // Das Ergebnis an den User zurückschicken
        res.send({
            message: "Record was added",
            newRecord: result
        })
    }
}


export function searchQuery(req,res){
    const {id, title} = req.query
    
    // Wenn ID vorhanden, such nach Id, sonst nach Titel suchen
    const result = db.data.find( el => id ? el.id === id : el.title === title)
    
    // Wenn was gefunden, dann zurückschicken sonst Fehlermeldung schicken
    if (result){
        res.send(result)
    } else {
        res.send('Nichts gefunden')
    }
}

// Get Route mit param ID
export function searchParamId(req, res){
    const id = req.params.id
    const result = db.data.find(el => el.id === id)
    if (result) res.send(result)
    else res.send('Nichts gefunden')
}

// GET Route mir param title
export function searchParamTitle(req,res){
    const title= req.params.title
    const result = db.data.find(el => el.title === title)
    if (result) res.send(result)
    else res.send('Nichts gefunden')
}