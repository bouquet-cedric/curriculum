function changeDim(taille,marge)
{
    if (marge<=20)
    {
        res=document.getElementById("resume");
        tit=document.getElementById("titre");
        tit.style.width=taille-marge+"%";
        res.style.width=(100-taille)+"%";
        tit.style.marginLeft=marge+"%";
        res.style.marginRight=marge+"%";
    }

}

function ajouteAnnee(id,annee)
{
    div=document.getElementById(id);
    year=document.createElement("div");
    br=document.createElement("br");
    div.appendChild(br);
    div.appendChild(year);
    blocAn=document.createElement("year_value");
    year.id=id+" "+annee;
    year.classList.add("year");
    blocAn.textContent=annee+" :";
    year.appendChild(blocAn);
}

function ajouteDetails(id,annee,details,val)
{
    an=document.getElementById(id+" "+annee);
    tab=document.createElement("tab");
    det=document.createElement("det");
    br=document.createElement("br");
    an.appendChild(br);
    an.appendChild(tab);
    if (val)
    {
        tab2=document.createElement("tab");
        an.appendChild(tab2);
    }
    an.appendChild(det);
    if (val==3)
    {
        br2=document.createElement("br");
        an.appendChild(br2);
    }
    det.textContent=details;
}

function addComp(id,comp,val)
{
    div=document.getElementById(id);
    tab=document.createElement("tab");
    br=document.createElement("br");
    det=document.createElement("det");
    if (val==undefined || val==1)
    {
        div.appendChild(br);
        div.appendChild(tab);
        div.appendChild(det);
    }
    if (val==2)
    {
        tab2=document.createElement("tab");
        div.appendChild(br);
        div.appendChild(tab);
        div.appendChild(tab2);
        div.appendChild(det);
    }
    if (val==3)
    {
        tab2=document.createElement("tab");
        tab3=document.createElement("tab");
        div.appendChild(br);
        div.appendChild(tab);
        div.appendChild(tab2);
        div.appendChild(tab3);
        div.appendChild(det);
    }
    det.textContent=comp;
    if (val)
    det.id="det_"+val;
    else
    det.id="hobbie"
}

function EXP()
{
    if (clic_exp==1)
    {
        expX=document.getElementById("experience");
        exp=document.getElementById("experiences");
        exp.style.display="none";
        expX.style.overflow="hidden";
        clic_exp=0;
    }
    else if (clic_exp==0)
    {
        exp=document.getElementById("experiences");
        exp.style.display="inherit";
        clic_exp=1;
    }
}

function FOR()
{
    if (clic_for==1)
    {
        expX=document.getElementById("formation");
        exp=document.getElementById("formations");
        exp.style.display="none";
        expX.style.overflow="hidden";
        clic_for=0;
    }
    else if (clic_for==0)
    {
        exp=document.getElementById("formations");
        exp.style.display="inherit";
        clic_for=1;
    }
}

function COMP()
{
    if (clic_comp==1)
    {
        expX=document.getElementById("competence");
        exp=document.getElementById("competences");
        exp.style.display="none";
        expX.style.overflow="hidden";
        clic_comp=0;
    }
    else if (clic_comp==0)
    {
        exp=document.getElementById("competences");
        exp.style.display="inherit";
        clic_comp=1;
    }
}

function LOIS()
{
    if (clic_lois==1)
    {
        expX=document.getElementById("loisir");
        exp=document.getElementById("loisirs");
        exp.style.display="none";
        expX.style.overflow="hidden";
        clic_lois=0;
    }
    else if (clic_lois==0)
    {
        exp=document.getElementById("loisirs");
        exp.style.display="inherit";
        clic_lois=1;
    }
}
