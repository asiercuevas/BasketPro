const DB_ACB = { 
    n: "LIGA ENDESA", maxOvr: 85, 
    teams: [
        { name: "Real Madrid", ovr: 88, conf: 1, roster: [
            {n: "F. Campazzo", p: "B", o: 88, d: 7, a: 33}, {n: "D. Musa", p: "E", o: 86, d: 31, a: 24}, {n: "M. Hezonja", p: "A", o: 87, d: 11, a: 29}, {n: "G. Deck", p: "AP", o: 84, d: 14, a: 29}, {n: "E. Tavares", p: "P", o: 89, d: 22, a: 32}, {n: "S. Ibaka", p: "AP", o: 83, d: 9, a: 35},
            {n: "S. Llull", p: "BAN", rp: "B", o: 80, d: 23, a: 36}, {n: "X. Rathan-Mayes", p: "BAN", rp: "B", o: 79, d: 0, a: 27}, {n: "A. Feliz", p: "BAN", rp: "E", o: 81, d: 15, a: 27}, {n: "A. Abalde", p: "BAN", rp: "A", o: 78, d: 6, a: 28}, {n: "E. Ndiaye", p: "BAN", rp: "P", o: 77, d: 24, a: 22}, {n: "U. Garuba", p: "BAN", rp: "AP", o: 80, d: 16, a: 23}
        ]},
        { name: "Barça", ovr: 87, conf: 1, roster: [
            {n: "T. Satoransky", p: "B", o: 83, d: 13, a: 32}, {n: "K. Punter", p: "E", o: 88, d: 0, a: 31}, {n: "J. Parker", p: "A", o: 86, d: 22, a: 31}, {n: "W. Hernangómez", p: "AP", o: 84, d: 14, a: 28}, {n: "J. Vesely", p: "P", o: 86, d: 6, a: 30}, {n: "N. Laprovittola", p: "B", o: 85, d: 8, a: 30},
            {n: "A. Abrines", p: "BAN", rp: "E", o: 80, d: 21, a: 31}, {n: "C. Metu", p: "BAN", rp: "AP", o: 81, d: 10, a: 27}, {n: "J. Núñez", p: "BAN", rp: "P", o: 79, d: 17, a: 23}, {n: "J. Anderson", p: "BAN", rp: "AP", o: 80, d: 1, a: 30}, {n: "D. Brizuela", p: "BAN", rp: "E", o: 78, d: 20, a: 27}, {n: "Y. Fall", p: "BAN", rp: "P", o: 79, d: 19, a: 28}
        ]},
        { name: "Unicaja", ovr: 85, conf: 1, roster: [
            {n: "K. Perry", p: "B", o: 84, d: 55, a: 28}, {n: "T. Kalinoski", p: "E", o: 81, d: 4, a: 31}, {n: "K. Taylor", p: "A", o: 82, d: 14, a: 29}, {n: "D. Osetkowski", p: "AP", o: 86, d: 1, a: 27}, {n: "Y. Sima", p: "P", o: 80, d: 19, a: 23}, {n: "T. Carter", p: "A", o: 83, d: 3, a: 32},
            {n: "A. Díaz", p: "BAN", rp: "B", o: 81, d: 9, a: 34}, {n: "O. Balcerowski", p: "BAN", rp: "P", o: 80, d: 2, a: 23}, {n: "N. Djedovic", p: "BAN", rp: "E", o: 79, d: 11, a: 26}, {n: "M. Ejim", p: "BAN", rp: "A", o: 78, d: 3, a: 34}, {n: "J. Barreiro", p: "BAN", rp: "B", o: 77, d: 8, a: 24}, {n: "K. Tillie", p: "BAN", rp: "AP", o: 79, d: 5, a: 28}
        ]},
        { name: "Baskonia", ovr: 84, conf: 1, roster: [
            {n: "T. Forrest", p: "B", o: 81, d: 2, a: 26}, {n: "M. Howard", p: "E", o: 87, d: 0, a: 27}, {n: "T. Luwawu-C.", p: "A", o: 82, d: 9, a: 28}, {n: "C. Moneke", p: "A", o: 86, d: 95, a: 27}, {n: "D. Hall", p: "P", o: 82, d: 45, a: 24}, {n: "T. Sedekerskis", p: "A", o: 82, d: 8, a: 28},
            {n: "N. Rogkavopoulos", p: "BAN", rp: "E", o: 79, d: 17, a: 26}, {n: "O. Ndiaye", p: "BAN", rp: "P", o: 76, d: 11, a: 22}, {n: "K. Baldwin", p: "BAN", rp: "B", o: 80, d: 4, a: 27}, {n: "O. Jaramaz", p: "BAN", rp: "B", o: 78, d: 10, a: 27}, {n: "K. Diop", p: "BAN", rp: "P", o: 77, d: 18, a: 22}, {n: "S. Savkov", p: "BAN", rp: "E", o: 74, d: 14, a: 21}
        ]},
        { name: "Valencia Basket", ovr: 84, conf: 1, roster: [
            {n: "C. Jones", p: "B", o: 85, d: 32, a: 30}, {n: "B. Badio", p: "E", o: 80, d: 0, a: 29}, {n: "S. Ojeleye", p: "A", o: 85, d: 37, a: 29}, {n: "J. Pradilla", p: "AP", o: 81, d: 4, a: 21}, {n: "M. Costello", p: "P", o: 83, d: 24, a: 30}, {n: "J. Montero", p: "B", o: 82, d: 3, a: 26},
            {n: "E. Happ", p: "BAN", rp: "AP", o: 80, d: 22, a: 33}, {n: "X. López-Arostegui", p: "BAN", rp: "A", o: 79, d: 6, a: 25}, {n: "S. Jovic", p: "BAN", rp: "B", o: 78, d: 16, a: 24}, {n: "N. Sestina", p: "BAN", rp: "AP", o: 78, d: 1, a: 25}, {n: "J. Puerto", p: "BAN", rp: "B", o: 76, d: 2, a: 22}, {n: "G. de Larrea", p: "BAN", rp: "P", o: 75, d: 12, a: 20}
        ]},
        { name: "Tenerife", ovr: 83, conf: 1, roster: [
            {n: "M. Huertas", p: "B", o: 85, d: 9, a: 39}, {n: "B. Fitipaldo", p: "E", o: 81, d: 6, a: 33}, {n: "J. Sastre", p: "A", o: 78, d: 15, a: 23}, {n: "A. Doornekamp", p: "AP", o: 79, d: 42, a: 34}, {n: "G. Shermadini", p: "P", o: 86, d: 19, a: 33}, {n: "D. Kramer", p: "AP", o: 80, d: 3, a: 30},
            {n: "P. Scrubb", p: "BAN", rp: "B", o: 79, d: 11, a: 30}, {n: "T. Abromaitis", p: "BAN", rp: "A", o: 78, d: 21, a: 32}, {n: "L. Costa", p: "BAN", rp: "B", o: 77, d: 5, a: 27}, {n: "I. Diop", p: "BAN", rp: "P", o: 78, d: 12, a: 26}, {n: "E. Vicedo", p: "BAN", rp: "A", o: 75, d: 10, a: 33}, {n: "F. Guerra", p: "BAN", rp: "AP", o: 76, d: 35, a: 30}
        ]},
        { name: "Joventut", ovr: 82, conf: 1, roster: [
            {n: "G. Vives", p: "B", o: 79, d: 16, a: 26}, {n: "D. Dotson", p: "E", o: 82, d: 2, a: 27}, {n: "A. Hanga", p: "A", o: 80, d: 8, a: 34}, {n: "K. Gates", p: "AP", o: 80, d: 4, a: 26}, {n: "A. Tomic", p: "P", o: 85, d: 44, a: 35}, {n: "A. Pustovyi", p: "P", o: 81, d: 13, a: 30},
            {n: "Y. Kraag", p: "BAN", rp: "A", o: 78, d: 1, a: 25}, {n: "P. Ribas", p: "BAN", rp: "B", o: 77, d: 10, a: 38}, {n: "K. Robertson", p: "BAN", rp: "E", o: 80, d: 3, a: 27}, {n: "K. Van der Vuurst", p: "BAN", rp: "B", o: 77, d: 6, a: 22}, {n: "M. Ruzic", p: "BAN", rp: "P", o: 76, d: 23, a: 25}, {n: "M. Allen", p: "BAN", rp: "AP", o: 77, d: 0, a: 28}
        ]},
        { name: "Gran Canaria", ovr: 82, conf: 1, roster: [
            {n: "A. Albicy", p: "B", o: 81, d: 6, a: 37}, {n: "J. Thomasson", p: "E", o: 82, d: 22, a: 30}, {n: "N. Brussino", p: "A", o: 84, d: 9, a: 28}, {n: "J. Shurna", p: "AP", o: 80, d: 14, a: 36}, {n: "M. Tobey", p: "P", o: 81, d: 10, a: 32}, {n: "C. Homesley", p: "A", o: 81, d: 1, a: 27},
            {n: "P. Pelos", p: "BAN", rp: "E", o: 79, d: 13, a: 24}, {n: "C. Alocén", p: "BAN", rp: "B", o: 78, d: 12, a: 22}, {n: "M. Salvó", p: "BAN", rp: "A", o: 77, d: 5, a: 27}, {n: "G. Conditt IV", p: "BAN", rp: "P", o: 78, d: 11, a: 26}, {n: "J. Kljajic", p: "BAN", rp: "B", o: 76, d: 3, a: 26}, {n: "M. Maniema", p: "BAN", rp: "AP", o: 74, d: 20, a: 21}
        ]},
        { name: "UCAM Murcia", ovr: 81, conf: 1, roster: [
            {n: "L. Hakanson", p: "B", o: 81, d: 10, a: 24}, {n: "D. Ennis", p: "E", o: 84, d: 31, a: 32}, {n: "R. Kurucs", p: "A", o: 82, d: 0, a: 25}, {n: "V. Brodiansky", p: "AP", o: 80, d: 14, a: 27}, {n: "S. Birgander", p: "P", o: 83, d: 19, a: 29}, {n: "T. Caupain", p: "B", o: 80, d: 12, a: 29},
            {n: "M. Todorovic", p: "BAN", rp: "AP", o: 79, d: 11, a: 27}, {n: "N. Radovic", p: "BAN", rp: "P", o: 78, d: 8, a: 31}, {n: "H. Sant-Roos", p: "BAN", rp: "E", o: 80, d: 22, a: 24}, {n: "J. Radebaugh", p: "BAN", rp: "B", o: 79, d: 5, a: 25}, {n: "S. García", p: "BAN", rp: "B", o: 76, d: 2, a: 22}, {n: "D. Diagne", p: "BAN", rp: "P", o: 77, d: 35, a: 26}
        ]},
        { name: "BAXI Manresa", ovr: 80, conf: 2, roster: [
            {n: "D. Perez", p: "B", o: 82, d: 55, a: 32}, {n: "C. Hunt", p: "E", o: 80, d: 21, a: 29}, {n: "M. Sagnia", p: "A", o: 78, d: 12, a: 25}, {n: "D. Alston Jr", p: "AP", o: 81, d: 0, a: 27}, {n: "B. Massa", p: "P", o: 79, d: 23, a: 30}, {n: "R. Obasohan", p: "B", o: 80, d: 32, a: 32},
            {n: "M. Steinbergs", p: "BAN", rp: "A", o: 77, d: 13, a: 24}, {n: "G. Jou", p: "BAN", rp: "B", o: 76, d: 5, a: 26}, {n: "R. Vescovi", p: "BAN", rp: "E", o: 78, d: 9, a: 23}, {n: "A. Reyes", p: "BAN", rp: "P", o: 76, d: 10, a: 29}, {n: "C. Chougkaz", p: "BAN", rp: "AP", o: 77, d: 24, a: 22}, {n: "O. Hustak", p: "BAN", rp: "P", o: 75, d: 11, a: 22}
        ]},
        { name: "Casademont Zaragoza", ovr: 78, conf: 2, roster: [
            {n: "T. Bell-Haynes", p: "B", o: 83, d: 2, a: 29}, {n: "M. Spissu", p: "E", o: 81, d: 0, a: 27}, {n: "S. Yusta", p: "A", o: 80, d: 17, a: 26}, {n: "E. Sulejmanovic", p: "AP", o: 79, d: 15, a: 24}, {n: "J. Bango", p: "P", o: 78, d: 8, a: 35}, {n: "A. Slaughter", p: "P", o: 80, d: 10, a: 34},
            {n: "B. Dubljevic", p: "BAN", rp: "AP", o: 81, d: 14, a: 33}, {n: "J. Fernandez", p: "BAN", rp: "B", o: 77, d: 4, a: 27}, {n: "M. González", p: "BAN", rp: "E", o: 75, d: 5, a: 24}, {n: "J. Mencía", p: "BAN", rp: "B", o: 76, d: 22, a: 22}, {n: "E. Nguema", p: "BAN", rp: "A", o: 74, d: 7, a: 25}, {n: "D. Ling", p: "BAN", rp: "E", o: 74, d: 11, a: 23}
        ]},
        { name: "Bilbao Basket", ovr: 78, conf: 2, roster: [
            {n: "H. Frey", p: "B", o: 79, d: 3, a: 33}, {n: "M. Pantzar", p: "E", o: 81, d: 22, a: 28}, {n: "Z. Dragic", p: "A", o: 79, d: 10, a: 33}, {n: "T. Gielo", p: "AP", o: 78, d: 14, a: 32}, {n: "T. Hlinason", p: "P", o: 80, d: 32, a: 25}, {n: "K. Kullamae", p: "E", o: 79, d: 7, a: 28},
            {n: "M. Jones", p: "BAN", rp: "A", o: 78, d: 2, a: 26}, {n: "X. Rabaseda", p: "BAN", rp: "E", o: 76, d: 20, a: 35}, {n: "A. Abdur-Rahkman", p: "BAN", rp: "E", o: 78, d: 5, a: 28}, {n: "R. Domínguez", p: "BAN", rp: "B", o: 76, d: 11, a: 27}, {n: "A. Sylla", p: "BAN", rp: "AP", o: 75, d: 15, a: 23}, {n: "K. De Ridder", p: "BAN", rp: "E", o: 75, d: 33, a: 25}
        ]},
        { name: "Río Breogán", ovr: 77, conf: 2, roster: [
            {n: "C. Moore", p: "B", o: 80, d: 2, a: 28}, {n: "D. Hilliard", p: "E", o: 81, d: 14, a: 27}, {n: "T. Nakic", p: "A", o: 78, d: 7, a: 34}, {n: "E. Vila", p: "AP", o: 78, d: 11, a: 25}, {n: "J. Sakho", p: "P", o: 77, d: 20, a: 27}, {n: "A. Somogyi", p: "AP", o: 76, d: 35, a: 24},
            {n: "E. Quintela", p: "BAN", rp: "A", o: 75, d: 42, a: 26}, {n: "J. Davis", p: "BAN", rp: "AP", o: 77, d: 0, a: 27}, {n: "A. Aranitovic", p: "BAN", rp: "B", o: 76, d: 5, a: 25}, {n: "D. Apic", p: "BAN", rp: "E", o: 77, d: 1, a: 28}, {n: "P. Ubal", p: "BAN", rp: "B", o: 75, d: 8, a: 24}, {n: "E. Atic", p: "BAN", rp: "P", o: 76, d: 10, a: 25}
        ]},
        { name: "MoraBanc Andorra", ovr: 77, conf: 2, roster: [
            {n: "S. Evans", p: "B", o: 82, d: 2, a: 28}, {n: "J. Harding", p: "E", o: 83, d: 10, a: 27}, {n: "S. Okoye", p: "A", o: 79, d: 5, a: 26}, {n: "S. Doumbouya", p: "AP", o: 81, d: 45, a: 24}, {n: "B. Lammers", p: "P", o: 80, d: 4, a: 26}, {n: "N. Llovet", p: "B", o: 76, d: 9, a: 24},
            {n: "C. Ortega", p: "BAN", rp: "B", o: 75, d: 11, a: 27}, {n: "F. Dos Anjos", p: "BAN", rp: "A", o: 77, d: 23, a: 29}, {n: "F. Luz", p: "BAN", rp: "AP", o: 76, d: 8, a: 26}, {n: "A. Kuric", p: "BAN", rp: "E", o: 80, d: 24, a: 30}, {n: "J. Evans", p: "BAN", rp: "B", o: 78, d: 1, a: 25}, {n: "A. Ganal", p: "BAN", rp: "P", o: 74, d: 3, a: 22}
        ]},
        { name: "Bàsquet Girona", ovr: 76, conf: 2, roster: [
            {n: "I. Iroegbu", p: "B", o: 82, d: 2, a: 27}, {n: "N. Sibande", p: "E", o: 80, d: 22, a: 24}, {n: "M. Fjellerup", p: "A", o: 79, d: 10, a: 26}, {n: "Y. Pons", p: "AP", o: 81, d: 35, a: 27}, {n: "J. Nnaji", p: "P", o: 78, d: 23, a: 23}, {n: "J. Marcos", p: "B", o: 77, d: 3, a: 24},
            {n: "F. Caffaro", p: "BAN", rp: "P", o: 76, d: 11, a: 28}, {n: "A. Ferrando", p: "BAN", rp: "B", o: 75, d: 8, a: 24}, {n: "M. Susinskas", p: "BAN", rp: "AP", o: 76, d: 13, a: 22}, {n: "S. Martínez", p: "BAN", rp: "B", o: 75, d: 5, a: 23}, {n: "J. Sorolla", p: "BAN", rp: "E", o: 74, d: 14, a: 22}, {n: "A. Huguet", p: "BAN", rp: "AP", o: 73, d: 17, a: 21}
        ]},
        { name: "Covirán Granada", ovr: 76, conf: 2, roster: [
            {n: "L. Costa", p: "B", o: 81, d: 3, a: 30}, {n: "G. Clavell", p: "E", o: 79, d: 14, a: 35}, {n: "E. Valtonen", p: "A", o: 78, d: 11, a: 30}, {n: "A. Noua", p: "AP", o: 80, d: 12, a: 26}, {n: "J. Wiley", p: "P", o: 81, d: 24, a: 33}, {n: "J. Rousselle", p: "A", o: 78, d: 0, a: 26},
            {n: "P. Tomàs", p: "BAN", rp: "E", o: 76, d: 19, a: 30}, {n: "R. Guerrero", p: "BAN", rp: "B", o: 75, d: 13, a: 25}, {n: "S. Bamforth", p: "BAN", rp: "E", o: 79, d: 2, a: 27}, {n: "A. Ubal", p: "BAN", rp: "B", o: 75, d: 8, a: 23}, {n: "E. Vicedo", p: "BAN", rp: "A", o: 74, d: 21, a: 32}, {n: "I. Aurrecoechea", p: "BAN", rp: "B", o: 74, d: 17, a: 22}
        ]},
        { name: "Leyma Coruña", ovr: 75, conf: 2, roster: [
            {n: "B. Taylor", p: "B", o: 80, d: 2, a: 30}, {n: "K. Lundqvist", p: "E", o: 81, d: 7, a: 26}, {n: "Y. Barrueta", p: "A", o: 79, d: 11, a: 27}, {n: "B. Burjanadze", p: "AP", o: 78, d: 14, a: 30}, {n: "G. Huskić", p: "P", o: 77, d: 24, a: 30}, {n: "A. Font", p: "E", o: 76, d: 8, a: 28},
            {n: "A. Diagne", p: "BAN", rp: "P", o: 75, d: 12, a: 27}, {n: "O. Figueroa", p: "BAN", rp: "AP", o: 75, d: 3, a: 28}, {n: "L. Scrubb", p: "BAN", rp: "B", o: 78, d: 10, a: 30}, {n: "T. Thompkins", p: "BAN", rp: "A", o: 79, d: 33, a: 35}, {n: "I. Jakovics", p: "BAN", rp: "E", o: 75, d: 5, a: 28}, {n: "A. Lima", p: "BAN", rp: "B", o: 76, d: 9, a: 24}
        ]},
        { name: "Hiopos Lleida", ovr: 74, conf: 2, roster: [
            {n: "D. Bost", p: "B", o: 79, d: 1, a: 36}, {n: "K. Hasbrouck", p: "E", o: 80, d: 4, a: 32}, {n: "O. Pauli", p: "A", o: 78, d: 17, a: 30}, {n: "E. Muric", p: "AP", o: 77, d: 5, a: 26}, {n: "P. Oriola", p: "P", o: 78, d: 18, a: 34}, {n: "R. Villar", p: "B", o: 75, d: 11, a: 25},
            {n: "M. Madsen", p: "BAN", rp: "AP", o: 76, d: 9, a: 31}, {n: "T. Bropleh", p: "BAN", rp: "A", o: 75, d: 10, a: 25}, {n: "L. Bozic", p: "BAN", rp: "P", o: 79, d: 29, a: 30}, {n: "A. Walden", p: "BAN", rp: "B", o: 78, d: 2, a: 27}, {n: "P. Ferrando", p: "BAN", rp: "B", o: 74, d: 7, a: 22}, {n: "J. Canka", p: "BAN", rp: "E", o: 75, d: 13, a: 24}
        ]}
    ]
};
