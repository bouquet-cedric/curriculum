clic_exp=0;
clic_for=0;
clic_comp=0;
clic_lois=0;

changeDim(80,15);

AddExp();
AddCompetences();
AddFormations();
AddLoisirs();

function cache(id)
{
    elt=document.getElementById(id);
    elt.style.display="none";
}

function montre(id)
{
    elt=document.getElementById(id);
    elt.style.display="inherit";
}

window.onload=function()
{
    cache("experiences");
    cache("formations");
    cache("competences");
    cache("loisirs");
    console.log("ok");
}
