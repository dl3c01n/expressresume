import { Response } from "express"
const express = require("express")
const app = express()
const port = 70 || process.env.PORT
const mockData = {
    name: "Lecoin",
    firstName: "David",
    username: "dl3c01n",
    age: 20,
    job: "Developpeur Back-End",
    skills: ["JavaScript", "TypeScript", "ES6", "React", "Node", "Express", "GraphQL", "Python"],
    education: [
        {
            school: "GRETA GRAND HAINAUT",
            exam: "Titre Professionnel : Développeur Web / Web Mobile",
            level: "Bac +2",
            endDate: "10 Octobre 2019"
        },
        {
            school: "2ITECH",
            exam: "Titre Professionnel : Concepteur Développeur d'Applications",
            level: "Bac +4",
            endDate: "14 Août 2022"
        }
    ],
    jobs: [
        {
            company: "DK Digital",
            job: "Stagiaire Développeur Web",
            mission: "Développer des sites Wordpress",
            date: "Avril 2019 - Juillet 2019"
        },
        {
            company: "Link Society - Freelance",
            job: "Développeur Front",
            mission: "Réécriture de l'engine Bulma",
            date: "Septembre 2020"
        },
        {
            company: "Mon Qualiticien",
            job: "Développeur Back-End/DevOps",
            mission: "Bug Fixing, Création d'environnements, React, GraphQL",
            date: "Novembre 2020 - Aujourd'hui"
        },
    ]
}
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.get('/', (_: any, res: Response) => {
    res.render('index.ejs', { mockData })
})

app.listen(port, () => {
    console.log('App is listening on port : ' + port)
})