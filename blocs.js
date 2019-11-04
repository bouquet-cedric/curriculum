function AddFormations()
{

    ajouteAnnee("formations",2019);
    ajouteDetails("formations",2019,"Bac +2 en Informatique");
    ajouteDetails("formations",2019,"Faculté Jean Perrin, Université d'Artois",2);
    
    ajouteAnnee("formations",2017);
    ajouteDetails("formations",2017,"Brevet d'aptitude aux fonctions d'animateur");
    
    ajouteAnnee("formations",2016);
    ajouteDetails("formations",2016,"Baccalauréat Scientifique");
    ajouteDetails("formations",2016,"Lycée Ismaël Dauphin, Cavaillon",2);
}

function AddLoisirs()
{
    addComp("loisirs","Musique : Guitare et piano");
    addComp("loisirs","Littérature : Mangas, Heroic Fantasy, Roman ...");
    addComp("loisirs","Sport : Tennis de table, Tir à l'arc, Handball ...");
}

function AddCompetences()
{
    addComp("competences","Maîtrise du pack office",1);
    addComp("competences");
    addComp("competences","Langages informatiques : ",1);
    addComp("competences");
    addComp("competences","Programmation : ",2);
    addComp("competences");
    addComp("competences","Java, C, C++, Python, SQLite, Bash & Batch",3);
    addComp("competences");
    addComp("competences","Réseaux : ",2);
    addComp("competences");
    addComp("competences","HTML, CSS, JavaScript, PHP",3);
}

function AddExp()
{
    ajouteAnnee("experiences",2018);
    ajouteDetails("experiences",2018,"Animateur en colonie de vacances");
    ajouteDetails("experiences",2018,"Compagnon des Jours Heureux, Gap",2);
    
    ajouteAnnee("experiences",2017);
    ajouteDetails("experiences",2017,"Création de site web");
    ajouteDetails("experiences",2017,"AGH Croix Rousse, Lyon",2);
    ajouteDetails("experiences",2017,"https://agh-croix-rousse.000webhostapp.com",3);
    ajouteDetails("experiences",2017,"Animateur en centre socio-culturel");
    ajouteDetails("experiences",2017,"La Mulatière, Lyon",2);
    
    ajouteAnnee("experiences",2016);
    ajouteDetails("experiences",2016,"Animateur en colonie de vacances");
    ajouteDetails("experiences",2016,"AVEA La Poste, Luc-en-Diois",2);
}

