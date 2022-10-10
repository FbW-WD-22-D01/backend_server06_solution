import express, {json} from 'express';
import { getData, postData, searchParamId, searchParamTitle, searchQuery } from './controller/dataController.js';

const app = express()

app.use(json())


app.get('/', getData)
app.post('/', postData)


// Gibt 2 Ansätze mit GET Routen übergebene Daten auszulesen:

// mit query Parameter --> die Adresse sieht dann so aus:
// ein Argument: localhost/searchparam?id=1245 oder searchparam?title=Mein%20Titel
// mehrere Argumente: localhost/searchparam?id=12345&title=Mein%20Titel
app.get('/searchparam/', searchQuery)


// mit "Named Route Parameters", hier kann nur ein Parameter übergeben werden
app.get('/searchParamId/:id', searchParamId)        // localhost/searchparamId/12345
app.get('/searchParamTitle/:title', searchParamTitle) // localhost/searchparamTitle/Mein%20Titel




const server = app.listen(5000, () => console.log('Server running'))