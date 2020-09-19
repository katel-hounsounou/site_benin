function getValue(touche)
{
    document.getElementById('screen').innerHTML +=touche;
}

function calculer()
{
    var expression = document.getElementById('screen').innerHTML
    var resultatAafficher = math.evaluate(expression);
    document.getElementById('screen').innerHTML = resultatAafficher;
}

function vide()
{
    document.getElementById('screen').innerHTML="";
}
