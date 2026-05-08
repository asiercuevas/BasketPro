const DB_ACB = { 
    n: "LIGA ENDESA", maxOvr: 85, 
    teams: [
        { name: "Real Madrid", ovr: 88, conf: 1, roster: [
            {n: "F. Campazzo", p: "B", o: 88, d: 7}, {n: "D. Musa", p: "E", o: 86, d: 31}, {n: "M. Hezonja", p: "A", o: 87, d: 11}, {n: "G. Deck", p: "AP", o: 84, d: 14}, {n: "E. Tavares", p: "P", o: 89, d: 22}, {n: "S. Ibaka", p: "6M", o: 83, d: 9},
            {n: "S. Llull", p: "BAN", rp: "B", o: 80, d: 23}, {n: "X. Rathan-Mayes", p: "BAN", rp: "B", o: 79, d: 0}, {n: "A. Feliz", p: "BAN", rp: "E", o: 81, d: 15}, {n: "A. Abalde", p: "BAN", rp: "A", o: 78, d: 6}, {n: "E. Ndiaye", p: "BAN", rp: "P", o: 77, d: 24}, {n: "U. Garuba", p: "BAN", rp: "AP", o: 80, d: 16}
        ]},
        { name: "Barça", ovr: 87, conf: 1, roster: [
            {n: "T. Satoransky", p: "B", o: 83, d: 13}, {n: "K. Punter", p: "E", o: 88, d: 0}, {n: "J. Parker", p: "A", o: 86, d: 22}, {n: "W. Hernangómez", p: "AP", o: 84, d: 14}, {n: "J. Vesely", p: "P", o: 86, d: 6}, {n: "N. Laprovittola", p: "6M", o: 85, d: 8},
            {n: "A. Abrines", p: "BAN", rp: "E", o: 80, d: 21}, {n: "C. Metu", p: "BAN", rp: "AP", o: 81, d: 10}, {n: "J. Núñez", p: "BAN", rp: "P", o: 79, d: 17}, {n: "J. Anderson", p: "BAN", rp: "AP", o: 80, d: 1}, {n: "D. Brizuela", p: "BAN", rp: "E", o: 78, d: 20}, {n: "Y. Fall", p: "BAN", rp: "P", o: 79, d: 19}
        ]},
        { name: "Unicaja", ovr: 85, conf: 1, roster: [
            {n: "K. Perry", p: "B", o: 84, d: 55}, {n: "T. Kalinoski", p: "E", o: 81, d: 4}, {n: "K. Taylor", p: "A", o: 82, d: 14}, {n: "D. Osetkowski", p: "AP", o: 86, d: 1}, {n: "Y. Sima", p: "P", o: 80, d: 19}, {n: "T. Carter", p: "6M", o: 83, d: 3},
            {n: "A. Díaz", p: "BAN", rp: "B", o: 81, d: 9}, {n: "O. Balcerowski", p: "BAN", rp: "P", o: 80, d: 2}, {n: "N. Djedovic", p: "BAN", rp: "E", o: 79, d: 11}, {n: "M. Ejim", p: "BAN", rp: "A", o: 78, d: 3}, {n: "J. Barreiro", p: "BAN", rp: "B", o: 77, d: 8}, {n: "K. Tillie", p: "BAN", rp: "AP", o: 79, d: 5}
        ]},
        { name: "Baskonia", ovr: 84, conf: 1, roster: [
            {n: "T. Forrest", p: "B", o: 81, d: 2}, {n: "M. Howard", p: "E", o: 87, d: 0}, {n: "T. Luwawu-C.", p: "A", o: 82, d: 9}, {n: "C. Moneke", p: "AP", o: 86, d: 95}, {n: "D. Hall", p: "P", o: 82, d: 45}, {n: "T. Sedekerskis", p: "6M", o: 82, d: 8},
            {n: "N. Rogkavopoulos", p: "BAN", rp: "E", o: 79, d: 17}, {n: "O. Ndiaye", p: "BAN", rp: "P", o: 76, d: 11}, {n: "K. Baldwin", p: "BAN", rp: "B", o: 80, d: 4}, {n: "O. Jaramaz", p: "BAN", rp: "B", o: 78, d: 10}, {n: "K. Diop", p: "BAN", rp: "P", o: 77, d: 18}, {n: "S. Savkov", p: "BAN", rp: "E", o: 74, d: 14}
        ]},
        { name: "Valencia Basket", ovr: 84, conf: 1, roster: [
            {n: "C. Jones", p: "B", o: 85, d: 32}, {n: "B. Badio", p: "E", o: 80, d: 0}, {n: "S. Ojeleye", p: "A", o: 85, d: 37}, {n: "J. Pradilla", p: "AP", o: 81, d: 4}, {n: "M. Costello", p: "P", o: 83, d: 24}, {n: "J. Montero", p: "6M", o: 82, d: 3},
            {n: "E. Happ", p: "BAN", rp: "AP", o: 80, d: 22}, {n: "X. López-Arostegui", p: "BAN", rp: "A", o: 79, d: 6}, {n: "S. Jovic", p: "BAN", rp: "B", o: 78, d: 16}, {n: "N. Sestina", p: "BAN", rp: "AP", o: 78, d: 1}, {n: "J. Puerto", p: "BAN", rp: "B", o: 76, d: 2}, {n: "G. de Larrea", p: "BAN", rp: "P", o: 75, d: 12}
        ]},
        { name: "Tenerife", ovr: 83, conf: 1, roster: [
            {n: "M. Huertas", p: "B", o: 85, d: 9}, {n: "B. Fitipaldo", p: "E", o: 81, d: 6}, {n: "J. Sastre", p: "A", o: 78, d: 15}, {n: "A. Doornekamp", p: "AP", o: 79, d: 42}, {n: "G. Shermadini", p: "P", o: 86, d: 19}, {n: "D. Kramer", p: "6M", o: 80, d: 3},
            {n: "P. Scrubb", p: "BAN", rp: "B", o: 79, d: 11}, {n: "T. Abromaitis", p: "BAN", rp: "A", o: 78, d: 21}, {n: "L. Costa", p: "BAN", rp: "B", o: 77, d: 5}, {n: "I. Diop", p: "BAN", rp: "P", o: 78, d: 12}, {n: "E. Vicedo", p: "BAN", rp: "A", o: 75, d: 10}, {n: "F. Guerra", p: "BAN", rp: "AP", o: 76, d: 35}
        ]},
        { name: "Joventut", ovr: 82, conf: 1, roster: [
            {n: "G. Vives", p: "B", o: 79, d: 16}, {n: "D. Dotson", p: "E", o: 82, d: 2}, {n: "A. Hanga", p: "A", o: 80, d: 8}, {n: "K. Gates", p: "AP", o: 80, d: 4}, {n: "A. Tomic", p: "P", o: 85, d: 44}, {n: "A. Pustovyi", p: "6M", o: 81, d: 13},
            {n: "Y. Kraag", p: "BAN", rp: "A", o: 78, d: 1}, {n: "P. Ribas", p: "BAN", rp: "B", o: 77, d: 10}, {n: "K. Robertson", p: "BAN", rp: "E", o: 80, d: 3}, {n: "K. Van der Vuurst", p: "BAN", rp: "B", o: 77, d: 6}, {n: "M. Ruzic", p: "BAN", rp: "P", o: 76, d: 23}, {n: "M. Allen", p: "BAN", rp: "AP", o: 77, d: 0}
        ]},
        { name: "Gran Canaria", ovr: 82, conf: 1, roster: [
            {n: "A. Albicy", p: "B", o: 81, d: 6}, {n: "J. Thomasson", p: "E", o: 82, d: 22}, {n: "N. Brussino", p: "A", o: 84, d: 9}, {n: "J. Shurna", p: "AP", o: 80, d: 14}, {n: "M. Tobey", p: "P", o: 81, d: 10}, {n: "C. Homesley", p: "6M", o: 81, d: 1},
            {n: "P. Pelos", p: "BAN", rp: "E", o: 79, d: 13}, {n: "C. Alocén", p: "BAN", rp: "B", o: 78, d: 12}, {n: "M. Salvó", p: "BAN", rp: "A", o: 77, d: 5}, {n: "G. Conditt IV", p: "BAN", rp: "P", o: 78, d: 11}, {n: "J. Kljajic", p: "BAN", rp: "B", o: 76, d: 3}, {n: "M. Maniema", p: "BAN", rp: "AP", o: 74, d: 20}
        ]},
        { name: "UCAM Murcia", ovr: 81, conf: 1, roster: [
            {n: "L. Hakanson", p: "B", o: 81, d: 10}, {n: "D. Ennis", p: "E", o: 84, d: 31}, {n: "R. Kurucs", p: "A", o: 82, d: 0}, {n: "V. Brodiansky", p: "AP", o: 80, d: 14}, {n: "S. Birgander", p: "P", o: 83, d: 19}, {n: "T. Caupain", p: "6M", o: 80, d: 12},
            {n: "M. Todorovic", p: "BAN", rp: "AP", o: 79, d: 11}, {n: "N. Radovic", p: "BAN", rp: "P", o: 78, d: 8}, {n: "H. Sant-Roos", p: "BAN", rp: "E", o: 80, d: 22}, {n: "J. Radebaugh", p: "BAN", rp: "B", o: 79, d: 5}, {n: "S. García", p: "BAN", rp: "B", o: 76, d: 2}, {n: "D. Diagne", p: "BAN", rp: "P", o: 77, d: 35}
        ]},
        { name: "BAXI Manresa", ovr: 80, conf: 2, roster: [
            {n: "D. Perez", p: "B", o: 82, d: 55}, {n: "C. Hunt", p: "E", o: 80, d: 21}, {n: "M. Sagnia", p: "A", o: 78, d: 12}, {n: "D. Alston Jr", p: "AP", o: 81, d: 0}, {n: "B. Massa", p: "P", o: 79, d: 23}, {n: "R. Obasohan", p: "6M", o: 80, d: 32},
            {n: "M. Steinbergs", p: "BAN", rp: "A", o: 77, d: 13}, {n: "G. Jou", p: "BAN", rp: "B", o: 76, d: 5}, {n: "R. Vescovi", p: "BAN", rp: "E", o: 78, d: 9}, {n: "A. Reyes", p: "BAN", rp: "P", o: 76, d: 10}, {n: "C. Chougkaz", p: "BAN", rp: "AP", o: 77, d: 24}, {n: "O. Hustak", p: "BAN", rp: "P", o: 75, d: 11}
        ]},
        { name: "Casademont Zaragoza", ovr: 78, conf: 2, roster: [
            {n: "T. Bell-Haynes", p: "B", o: 83, d: 2}, {n: "M. Spissu", p: "E", o: 81, d: 0}, {n: "S. Yusta", p: "A", o: 80, d: 17}, {n: "E. Sulejmanovic", p: "AP", o: 79, d: 15}, {n: "J. Bango", p: "P", o: 78, d: 8}, {n: "A. Slaughter", p: "6M", o: 80, d: 10},
            {n: "B. Dubljevic", p: "BAN", rp: "AP", o: 81, d: 14}, {n: "J. Fernandez", p: "BAN", rp: "B", o: 77, d: 4}, {n: "M. González", p: "BAN", rp: "E", o: 75, d: 5}, {n: "J. Mencía", p: "BAN", rp: "B", o: 76, d: 22}, {n: "E. Nguema", p: "BAN", rp: "A", o: 74, d: 7}, {n: "D. Ling", p: "BAN", rp: "E", o: 74, d: 11}
        ]},
        { name: "Bilbao Basket", ovr: 78, conf: 2, roster: [
            {n: "H. Frey", p: "B", o: 79, d: 3}, {n: "M. Pantzar", p: "E", o: 81, d: 22}, {n: "Z. Dragic", p: "A", o: 79, d: 10}, {n: "T. Gielo", p: "AP", o: 78, d: 14}, {n: "T. Hlinason", p: "P", o: 80, d: 32}, {n: "K. Kullamae", p: "6M", o: 79, d: 7},
            {n: "M. Jones", p: "BAN", rp: "A", o: 78, d: 2}, {n: "X. Rabaseda", p: "BAN", rp: "E", o: 76, d: 20}, {n: "A. Abdur-Rahkman", p: "BAN", rp: "E", o: 78, d: 5}, {n: "R. Domínguez", p: "BAN", rp: "B", o: 76, d: 11}, {n: "A. Sylla", p: "BAN", rp: "AP", o: 75, d: 15}, {n: "K. De Ridder", p: "BAN", rp: "E", o: 75, d: 33}
        ]},
        { name: "Río Breogán", ovr: 77, conf: 2, roster: [
            {n: "C. Moore", p: "B", o: 80, d: 2}, {n: "D. Hilliard", p: "E", o: 81, d: 14}, {n: "T. Nakic", p: "A", o: 78, d: 7}, {n: "E. Vila", p: "AP", o: 78, d: 11}, {n: "J. Sakho", p: "P", o: 77, d: 20}, {n: "A. Somogyi", p: "6M", o: 76, d: 35},
            {n: "E. Quintela", p: "BAN", rp: "A", o: 75, d: 42}, {n: "J. Davis", p: "BAN", rp: "AP", o: 77, d: 0}, {n: "A. Aranitovic", p: "BAN", rp: "B", o: 76, d: 5}, {n: "D. Apic", p: "BAN", rp: "E", o: 77, d: 1}, {n: "P. Ubal", p: "BAN", rp: "B", o: 75, d: 8}, {n: "E. Atic", p: "BAN", rp: "P", o: 76, d: 10}
        ]},
        { name: "MoraBanc Andorra", ovr: 77, conf: 2, roster: [
            {n: "S. Evans", p: "B", o: 82, d: 2}, {n: "J. Harding", p: "E", o: 83, d: 10}, {n: "S. Okoye", p: "A", o: 79, d: 5}, {n: "S. Doumbouya", p: "AP", o: 81, d: 45}, {n: "B. Lammers", p: "P", o: 80, d: 4}, {n: "N. Llovet", p: "6M", o: 76, d: 9},
            {n: "C. Ortega", p: "BAN", rp: "B", o: 75, d: 11}, {n: "F. Dos Anjos", p: "BAN", rp: "A", o: 77, d: 23}, {n: "F. Luz", p: "BAN", rp: "AP", o: 76, d: 8}, {n: "A. Kuric", p: "BAN", rp: "E", o: 80, d: 24}, {n: "J. Evans", p: "BAN", rp: "B", o: 78, d: 1}, {n: "A. Ganal", p: "BAN", rp: "P", o: 74, d: 3}
        ]},
        { name: "Bàsquet Girona", ovr: 76, conf: 2, roster: [
            {n: "I. Iroegbu", p: "B", o: 82, d: 2}, {n: "N. Sibande", p: "E", o: 80, d: 22}, {n: "M. Fjellerup", p: "A", o: 79, d: 10}, {n: "Y. Pons", p: "AP", o: 81, d: 35}, {n: "J. Nnaji", p: "P", o: 78, d: 23}, {n: "J. Marcos", p: "6M", o: 77, d: 3},
            {n: "F. Caffaro", p: "BAN", rp: "P", o: 76, d: 11}, {n: "A. Ferrando", p: "BAN", rp: "B", o: 75, d: 8}, {n: "M. Susinskas", p: "BAN", rp: "AP", o: 76, d: 13}, {n: "S. Martínez", p: "BAN", rp: "B", o: 75, d: 5}, {n: "J. Sorolla", p: "BAN", rp: "E", o: 74, d: 14}, {n: "A. Huguet", p: "BAN", rp: "AP", o: 73, d: 17}
        ]},
        { name: "Covirán Granada", ovr: 76, conf: 2, roster: [
            {n: "L. Costa", p: "B", o: 81, d: 3}, {n: "G. Clavell", p: "E", o: 79, d: 14}, {n: "E. Valtonen", p: "A", o: 78, d: 11}, {n: "A. Noua", p: "AP", o: 80, d: 12}, {n: "J. Wiley", p: "P", o: 81, d: 24}, {n: "J. Rousselle", p: "6M", o: 78, d: 0},
            {n: "P. Tomàs", p: "BAN", rp: "E", o: 76, d: 19}, {n: "R. Guerrero", p: "BAN", rp: "B", o: 75, d: 13}, {n: "S. Bamforth", p: "BAN", rp: "E", o: 79, d: 2}, {n: "A. Ubal", p: "BAN", rp: "B", o: 75, d: 8}, {n: "E. Vicedo", p: "BAN", rp: "A", o: 74, d: 21}, {n: "I. Aurrecoechea", p: "BAN", rp: "B", o: 74, d: 17}
        ]},
        { name: "Leyma Coruña", ovr: 75, conf: 2, roster: [
            {n: "B. Taylor", p: "B", o: 80, d: 2}, {n: "K. Lundqvist", p: "E", o: 81, d: 7}, {n: "Y. Barrueta", p: "A", o: 79, d: 11}, {n: "B. Burjanadze", p: "AP", o: 78, d: 14}, {n: "G. Huskić", p: "P", o: 77, d: 24}, {n: "A. Font", p: "6M", o: 76, d: 8},
            {n: "A. Diagne", p: "BAN", rp: "P", o: 75, d: 12}, {n: "O. Figueroa", p: "BAN", rp: "AP", o: 75, d: 3}, {n: "L. Scrubb", p: "BAN", rp: "B", o: 78, d: 10}, {n: "T. Thompkins", p: "BAN", rp: "A", o: 79, d: 33}, {n: "I. Jakovics", p: "BAN", rp: "E", o: 75, d: 5}, {n: "A. Lima", p: "BAN", rp: "B", o: 76, d: 9}
        ]},
        { name: "Hiopos Lleida", ovr: 74, conf: 2, roster: [
            {n: "D. Bost", p: "B", o: 79, d: 1}, {n: "K. Hasbrouck", p: "E", o: 80, d: 4}, {n: "O. Pauli", p: "A", o: 78, d: 17}, {n: "E. Muric", p: "AP", o: 77, d: 5}, {n: "P. Oriola", p: "P", o: 78, d: 18}, {n: "R. Villar", p: "6M", o: 75, d: 11},
            {n: "M. Madsen", p: "BAN", rp: "AP", o: 76, d: 9}, {n: "T. Bropleh", p: "BAN", rp: "A", o: 75, d: 10}, {n: "L. Bozic", p: "BAN", rp: "P", o: 79, d: 29}, {n: "A. Walden", p: "BAN", rp: "B", o: 78, d: 2}, {n: "P. Ferrando", p: "BAN", rp: "B", o: 74, d: 7}, {n: "J. Canka", p: "BAN", rp: "E", o: 75, d: 13}
        ]}
    ]
};
