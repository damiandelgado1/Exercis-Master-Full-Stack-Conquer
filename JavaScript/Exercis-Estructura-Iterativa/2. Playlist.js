// Enter name playlist and number music
let namePlaylist = prompt(`Indique el Nombre de la Playlist`);
let numberMusic = parseInt(prompt(`¿Cuantas canciones va a agregar?`), 10);

let playlist = [];

// Request every music to save in Playlist
for (let i = 0; i < numberMusic; i++) {
    let nameMusic = prompt(`Indique el Nombre de la Cancion`);
    playlist.push(nameMusic);

    console.log(`Cancion ${nameMusic} agregada a la Playlist ${namePlaylist}`);

    // Display quantity music remains to be added on Playlist
    console.log(`Quedan por añadir ${numberMusic - i - 1} en la playlist.`);
}

// Display with name Playlist and qunatity music
console.log(`Playlist ${namePlaylist}\n
    Canciones añadidas: ${playlist.join(", ")}`);