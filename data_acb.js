const DB_ACB = { 
    n: "LIGA ENDESA", maxOvr: 85, 
    teams: [
        { name: "Real Madrid", ovr: 88, star: "Tavares", roster: [
            {n: "F. Campazzo", p: "B", o: 88}, {n: "D. Musa", p: "E", o: 86}, {n: "M. Hezonja", p: "A", o: 87}, {n: "G. Deck", p: "AP", o: 84}, {n: "E. Tavares", p: "P", o: 89}, {n: "S. Ibaka", p: "6M", o: 83}, {n: "S. Llull", p: "BAN", o: 80}
        ]},
        { name: "Barça", ovr: 87, star: "Laprovittola", roster: [
            {n: "T. Satoransky", p: "B", o: 83}, {n: "K. Punter", p: "E", o: 88}, {n: "J. Parker", p: "A", o: 86}, {n: "W. Hernangómez", p: "AP", o: 84}, {n: "J. Vesely", p: "P", o: 86}, {n: "N. Laprovittola", p: "6M", o: 85}, {n: "A. Abrines", p: "BAN", o: 80}
        ]},
        { name: "Unicaja", ovr: 85, star: "Osetkowski", roster: [
            {n: "K. Perry", p: "B", o: 84}, {n: "T. Kalinoski", p: "E", o: 81}, {n: "K. Taylor", p: "A", o: 82}, {n: "D. Osetkowski", p: "AP", o: 86}, {n: "Y. Sima", p: "P", o: 80}, {n: "T. Carter", p: "6M", o: 83}, {n: "A. Díaz", p: "BAN", o: 81}
        ]},
        { name: "Baskonia", ovr: 84, star: "M. Howard", roster: [
            {n: "T. Forrest", p: "B", o: 81}, {n: "M. Howard", p: "E", o: 87}, {n: "T. Luwawu-C.", p: "A", o: 82}, {n: "C. Moneke", p: "AP", o: 86}, {n: "D. Hall", p: "P", o: 82}, {n: "T. Sedekerskis", p: "6M", o: 82}, {n: "N. Rogkavopoulos", p: "BAN", o: 79}
        ]},
        { name: "Valencia Basket", ovr: 83, star: "Ojeleye", roster: [
            {n: "C. Jones", p: "B", o: 85}, {n: "J. Montero", p: "E", o: 83}, {n: "S. Ojeleye", p: "A", o: 86}, {n: "J. Pradilla", p: "AP", o: 80}, {n: "M. Costello", p: "P", o: 83}, {n: "X. López-Arostegui", p: "6M", o: 80}, {n: "B. Davies", p: "BAN", o: 82}
        ]},
        { name: "Joventut", ovr: 81, star: "A. Tomic", roster: [
            {n: "G. Vives", p: "B", o: 79}, {n: "K. Robertson", p: "E", o: 82}, {n: "A. Hanga", p: "A", o: 80}, {n: "K. Gates", p: "AP", o: 81}, {n: "A. Tomic", p: "P", o: 85}, {n: "A. Pustovyi", p: "6M", o: 82}, {n: "Y. Kraag", p: "BAN", o: 76}
        ]},
        { name: "Gran Canaria", ovr: 81, star: "Brussino", roster: [
            {n: "A. Albicy", p: "B", o: 80}, {n: "J. Thomasson", p: "E", o: 81}, {n: "N. Brussino", p: "A", o: 84}, {n: "J. Shurna", p: "AP", o: 82}, {n: "M. Tobey", p: "P", o: 81}, {n: "P. Pelos", p: "6M", o: 79}, {n: "C. Alocén", p: "BAN", o: 77}
        ]},
        { name: "Tenerife", ovr: 82, star: "M. Huertas", roster: [
            {n: "M. Huertas", p: "B", o: 85}, {n: "B. Fitipaldo", p: "E", o: 81}, {n: "T. Scrubb", p: "A", o: 80}, {n: "A. Doornekamp", p: "AP", o: 79}, {n: "G. Shermadini", p: "P", o: 84}, {n: "F. Guerra", p: "6M", o: 79}, {n: "D. Kramer", p: "BAN", o: 78}
        ]},
        { name: "UCAM Murcia", ovr: 80, star: "D. Ennis", roster: [
            {n: "L. Hakanson", p: "B", o: 81}, {n: "D. Ennis", p: "E", o: 84}, {n: "R. Kurucs", p: "A", o: 80}, {n: "N. Radovic", p: "AP", o: 79}, {n: "S. Birgander", p: "P", o: 83}, {n: "H. Sant-Roos", p: "6M", o: 80}, {n: "M. Todorovic", p: "BAN", o: 79}
        ]},
        { name: "Bilbao Basket", ovr: 78, star: "Kullamae", roster: [
            {n: "M. Pantzar", p: "B", o: 80}, {n: "K. Kullamae", p: "E", o: 81}, {n: "X. Rabaseda", p: "A", o: 76}, {n: "D. Andersson", p: "AP", o: 78}, {n: "T. Hlinason", p: "P", o: 79}, {n: "H. Frey", p: "6M", o: 78}, {n: "T. Gielo", p: "BAN", o: 75}
        ]},
        { name: "Zaragoza", ovr: 77, star: "S. Yusta", roster: [
            {n: "T. Bell-Haynes", p: "B", o: 81}, {n: "S. Yusta", p: "E", o: 82}, {n: "A. Slaughter", p: "A", o: 79}, {n: "E. Sulejmanovic", p: "AP", o: 78}, {n: "J. Bango", p: "P", o: 80}, {n: "M. Spissu", p: "6M", o: 78}, {n: "J. Rodriguez", p: "BAN", o: 75}
        ]},
        { name: "Manresa", ovr: 76, star: "D. Pérez", roster: [
            {n: "D. Pérez", p: "B", o: 80}, {n: "C. Hunt", p: "E", o: 79}, {n: "M. Sagnia", p: "A", o: 76}, {n: "D. Alston", p: "AP", o: 78}, {n: "E. Cate", p: "P", o: 78}, {n: "R. Obasohan", p: "6M", o: 78}, {n: "M. Steinbergs", p: "BAN", o: 75}
        ]},
        { name: "Andorra", ovr: 75, star: "J. Harding", roster: [
            {n: "S. Evans", p: "B", o: 79}, {n: "J. Harding", p: "E", o: 81}, {n: "S. Okoye", p: "A", o: 76}, {n: "N. Llovet", p: "AP", o: 74}, {n: "F. Dos Anjos", p: "P", o: 77}, {n: "K. Kuric", p: "6M", o: 79}, {n: "S. Doumbouya", p: "BAN", o: 76}
        ]},
        { name: "Breogán", ovr: 74, star: "Moore", roster: [
            {n: "C. Moore", p: "B", o: 79}, {n: "D. Hilliard", p: "E", o: 78}, {n: "A. Aranitovic", p: "A", o: 76}, {n: "T. Nakic", p: "AP", o: 75}, {n: "J. Sakho", p: "P", o: 76}, {n: "E. Vila", p: "6M", o: 74}, {n: "J. Davis", p: "BAN", o: 73}
        ]},
        { name: "Bàsquet Girona", ovr: 74, star: "Iroegbu", roster: [
            {n: "I. Iroegbu", p: "B", o: 79}, {n: "J. Marcos", p: "E", o: 76}, {n: "M. Susinskas", p: "A", o: 75}, {n: "Y. Pons", p: "AP", o: 77}, {n: "F. Caffaro", p: "P", o: 75}, {n: "M. Fjellerup", p: "6M", o: 74}, {n: "N. Sibande", p: "BAN", o: 74}
        ]},
        { name: "Covirán Granada", ovr: 73, star: "Bamforth", roster: [
            {n: "S. Garcia", p: "B", o: 75}, {n: "S. Bamforth", p: "E", o: 78}, {n: "E. Valtonen", p: "A", o: 74}, {n: "A. Noua", p: "AP", o: 76}, {n: "J. Wiley", p: "P", o: 77}, {n: "J. Rousselle", p: "6M", o: 75}, {n: "A. Ubal", p: "BAN", o: 72}
        ]},
        { name: "Leyma Coruña", ovr: 72, star: "B. Taylor", roster: [
            {n: "B. Taylor", p: "B", o: 77}, {n: "P. Scrubb", p: "E", o: 76}, {n: "Y. Barrueta", p: "A", o: 74}, {n: "T. Thompkins", p: "AP", o: 77}, {n: "A. Lima", p: "P", o: 75}, {n: "O. Lundqvist", p: "6M", o: 73}, {n: "G. Huskic", p: "BAN", o: 73}
        ]},
        { name: "Força Lleida", ovr: 71, star: "Hasbrouck", roster: [
            {n: "C. Walden", p: "B", o: 76}, {n: "K. Hasbrouck", p: "E", o: 75}, {n: "O. Paulí", p: "A", o: 74}, {n: "L. Bozic", p: "AP", o: 75}, {n: "P. Oriola", p: "P", o: 75}, {n: "R. Villar", p: "6M", o: 72}, {n: "A. Madsen", p: "BAN", o: 72}
        ]}
    ]
};