# Record Store Backend with lowDB


Erstelle ein kleines Backend mit lowDB für einen Record Shop. Die API sollte folgende Endpunkte haben:

- `api/records` --> eine `POST` Route die eine neue Platte entgegennimmt und in die Datenbank einträgt (JSON Datei)
- `api/records` --> eine `GET` Route die alle vorhandenen Platten ausliefert
-  ***Bonus**: `api/records/:id` --> eine `GET` Route, die nach einer Id in der Datenbank sucht und das Item zurückgibt*

--> Nach dem erfolgreichen Eintragen, soll die `POST` Route einen kurzen String zurückgeben, dass der Vorgang erfolgreich war...

Die Datenstruktur der einzelnen Records sollte wie folgt aussehen:
```
const record = {
  id: '12345'
  label: 'I am a record label',
  title: 'My greatest hits',
  artist: 'The Humpas',
  year: '1981',
  category: ['Schlager', 'Kneipenhits']
}
```
