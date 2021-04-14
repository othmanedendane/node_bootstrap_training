const express = require('express');
const app=express();

app.set ('views','./views'); //defini les dossier pour les views
app.set('view engine','ejs'); //defini ejs comme outil pour utiliser les views
app.use('/css',express.static('css'));// permet l'utilisation de fichiers statiques dans css
app.use('/public',express.static('public'));
app.use('/js',express.static('js'));

app.get('/L4E4',(req, res)=>{
    res.render('defi.ejs', {pageTitle:"L4E4"});
});
app.get('/L5E3',(req, res)=>{
    res.render('Album JQ3.ejs', {pageTitle:"L5E3"});
});
app.get('/L5E5',(req, res)=>{
    res.render('AlbumJQ3.ejs', {pageTitle:"L5E5"});
});
app.get('/L5E6',(req, res)=>{
    res.render('Album$JQ3.ejs', {pageTitle:"L5E6"});
});
app.get('/',(req,res)=> { //req demande la page web 
    res.render('index.ejs');
});

const PORT = 3007;
app.listen(PORT,()=> {//le serveur attend les requetes sur le port 3007
    console.log("j'ecoute le port 3007");
});