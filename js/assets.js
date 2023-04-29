/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg


MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)
*/

 /*const team = {
    name: ['Wayne Barnett', 'Angela Caroll', 'Walter Gordon', 'Angela Lopez', 'Scott Estrada', 'Barbara Ramos'],
    role: ['Founder & CEO', 'Chief Editor', 'Office Manager', 'Social Media Manager', 'Developer', 'Graphic Designer'],
    pic: ['img/wayne-barnett-founder-ceo.jpg', 'img/angela-caroll-chief-editor.jpg', 'img/walter-gordon-office-manager.jpg', 'img/angela-lopez-social-media-manager.jpg', 'img/scott-estrada-developer.jpg', 'img/barbara-ramos-graphic-designer.jpg'],
};  */







const team = [
	{
		nome: 'Wayne Barnett',
		role: 'Founder & CEO',
		pic: 'img/wayne-barnett-founder-ceo.jpg',
	},
	{
		nome: 'Angela Caroll',
		role: 'Chief Editor',
		pic: 'img/angela-caroll-chief-editor.jpg',
	},
	{
		nome: 'Walter Gordon',
		role: 'Office Manager',
		pic: 'img/walter-gordon-office-manager.jpg',
	},
	{
		nome: 'Angela Lopez',
		role: 'Social Media Manager',
		pic: 'img/angela-lopez-social-media-manager.jpg',
	},
	{
		nome: 'Scott Estrada',
		role: 'Developer',
		pic: 'img/scott-estrada-developer.jpg',
	},
	{
		nome: 'Barbara Ramos',
		role: 'Graphic Designer',
		pic: 'img/barbara-ramos-graphic-designer.jpg',
	},
];

const lista = document.querySelector('.container')


for (let key in team) {
    lista.innerHTML += `<li>${(team[key].nome) +'--'+(team[key].role) +'--'+ (team[key].pic)}</li>`
} 

console.log ((team[0].nome), (team[0].role)) 