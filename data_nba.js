const DB_NBA = { 
    n: "NBA", maxOvr: 99, 
    teams: [
        { name: "Celtics", ovr: 96, star: "Tatum", roster: [
            {n: "J. Holiday", p: "B", o: 87}, {n: "D. White", p: "E", o: 86}, {n: "J. Brown", p: "A", o: 93}, {n: "J. Tatum", p: "AP", o: 96}, {n: "K. Porzingis", p: "P", o: 88}, {n: "A. Horford", p: "6M", o: 82}, {n: "P. Pritchard", p: "BAN", o: 80}
        ]},
        { name: "Nuggets", ovr: 95, star: "Jokic", roster: [
            {n: "J. Murray", p: "B", o: 89}, {n: "C. Braun", p: "E", o: 80}, {n: "M. Porter Jr", p: "A", o: 85}, {n: "A. Gordon", p: "AP", o: 86}, {n: "N. Jokic", p: "P", o: 98}, {n: "P. Watson", p: "6M", o: 78}, {n: "D. Saric", p: "BAN", o: 77}
        ]},
        { name: "Thunder", ovr: 94, star: "SGA", roster: [
            {n: "S. Gilgeous-A.", p: "B", o: 96}, {n: "A. Caruso", p: "E", o: 83}, {n: "J. Williams", p: "A", o: 88}, {n: "L. Dort", p: "AP", o: 82}, {n: "C. Holmgren", p: "P", o: 89}, {n: "I. Hartenstein", p: "6M", o: 83}, {n: "I. Joe", p: "BAN", o: 79}
        ]},
        { name: "Timberwolves", ovr: 93, star: "Edwards", roster: [
            {n: "M. Conley", p: "B", o: 83}, {n: "A. Edwards", p: "E", o: 94}, {n: "J. McDaniels", p: "A", o: 83}, {n: "J. Randle", p: "AP", o: 87}, {n: "R. Gobert", p: "P", o: 86}, {n: "N. Reid", p: "6M", o: 84}, {n: "D. DiVincenzo", p: "BAN", o: 82}
        ]},
        { name: "Mavericks", ovr: 93, star: "Doncic", roster: [
            {n: "L. Doncic", p: "B", o: 97}, {n: "K. Irving", p: "E", o: 92}, {n: "K. Thompson", p: "A", o: 83}, {n: "P. Washington", p: "AP", o: 82}, {n: "D. Lively", p: "P", o: 84}, {n: "D. Gafford", p: "6M", o: 83}, {n: "D. Exum", p: "BAN", o: 77}
        ]},
        { name: "Bucks", ovr: 92, star: "Giannis", roster: [
            {n: "D. Lillard", p: "B", o: 92}, {n: "G. Trent Jr", p: "E", o: 80}, {n: "K. Middleton", p: "A", o: 85}, {n: "G. Antetokounmpo", p: "AP", o: 97}, {n: "B. Lopez", p: "P", o: 83}, {n: "B. Portis", p: "6M", o: 83}, {n: "P. Connaughton", p: "BAN", o: 76}
        ]},
        { name: "Lakers", ovr: 90, star: "LeBron", roster: [
            {n: "D. Russell", p: "B", o: 83}, {n: "A. Reaves", p: "E", o: 84}, {n: "L. James", p: "A", o: 96}, {n: "R. Hachimura", p: "AP", o: 81}, {n: "A. Davis", p: "P", o: 95}, {n: "D. Knecht", p: "6M", o: 78}, {n: "G. Vincent", p: "BAN", o: 76}
        ]},
        { name: "Warriors", ovr: 89, star: "Curry", roster: [
            {n: "S. Curry", p: "B", o: 95}, {n: "B. Podziemski", p: "E", o: 81}, {n: "A. Wiggins", p: "A", o: 82}, {n: "J. Kuminga", p: "AP", o: 84}, {n: "D. Green", p: "P", o: 85}, {n: "B. Hield", p: "6M", o: 81}, {n: "D. Melton", p: "BAN", o: 79}
        ]},
        { name: "Knicks", ovr: 91, star: "Brunson", roster: [
            {n: "J. Brunson", p: "B", o: 93}, {n: "M. Bridges", p: "E", o: 86}, {n: "O. Anunoby", p: "A", o: 85}, {n: "J. Hart", p: "AP", o: 83}, {n: "K. Towns", p: "P", o: 90}, {n: "M. McBride", p: "6M", o: 80}, {n: "M. Robinson", p: "BAN", o: 82}
        ]},
        { name: "Spurs", ovr: 85, star: "Wembanyama", roster: [
            {n: "C. Paul", p: "B", o: 82}, {n: "D. Vassell", p: "E", o: 84}, {n: "S. Castle", p: "A", o: 78}, {n: "J. Sochan", p: "AP", o: 80}, {n: "V. Wembanyama", p: "P", o: 91}, {n: "K. Johnson", p: "6M", o: 82}, {n: "T. Jones", p: "BAN", o: 79}
        ]},
        { name: "Cavaliers", ovr: 89, star: "Mitchell", roster: [
            {n: "D. Garland", p: "B", o: 86}, {n: "D. Mitchell", p: "E", o: 92}, {n: "M. Strus", p: "A", o: 80}, {n: "E. Mobley", p: "AP", o: 87}, {n: "J. Allen", p: "P", o: 86}, {n: "C. LeVert", p: "6M", o: 81}, {n: "I. Okoro", p: "BAN", o: 78}
        ]},
        { name: "Magic", ovr: 88, star: "Banchero", roster: [
            {n: "J. Suggs", p: "B", o: 84}, {n: "K. Caldwell-Pope", p: "E", o: 81}, {n: "F. Wagner", p: "A", o: 87}, {n: "P. Banchero", p: "AP", o: 89}, {n: "W. Carter Jr", p: "P", o: 82}, {n: "C. Anthony", p: "6M", o: 80}, {n: "J. Isaac", p: "BAN", o: 81}
        ]},
        { name: "Pacers", ovr: 88, star: "Haliburton", roster: [
            {n: "T. Haliburton", p: "B", o: 90}, {n: "A. Nembhard", p: "E", o: 81}, {n: "A. Nesmith", p: "A", o: 80}, {n: "P. Siakam", p: "AP", o: 88}, {n: "M. Turner", p: "P", o: 84}, {n: "B. Mathurin", p: "6M", o: 81}, {n: "T. McConnell", p: "BAN", o: 80}
        ]},
        { name: "76ers", ovr: 87, star: "Embiid", roster: [
            {n: "T. Maxey", p: "B", o: 89}, {n: "K. Oubre Jr", p: "E", o: 81}, {n: "P. George", p: "A", o: 90}, {n: "C. Martin", p: "AP", o: 79}, {n: "J. Embiid", p: "P", o: 97}, {n: "A. Drummond", p: "6M", o: 80}, {n: "E. Gordon", p: "BAN", o: 76}
        ]},
        { name: "Heat", ovr: 87, star: "Butler", roster: [
            {n: "T. Rozier", p: "B", o: 83}, {n: "T. Herro", p: "E", o: 84}, {n: "J. Butler", p: "A", o: 90}, {n: "N. Jovic", p: "AP", o: 79}, {n: "B. Adebayo", p: "P", o: 88}, {n: "J. Jaquez Jr", p: "6M", o: 81}, {n: "D. Robinson", p: "BAN", o: 78}
        ]},
        { name: "Suns", ovr: 89, star: "Durant", roster: [
            {n: "T. Jones", p: "B", o: 81}, {n: "D. Booker", p: "E", o: 93}, {n: "B. Beal", p: "A", o: 86}, {n: "K. Durant", p: "AP", o: 95}, {n: "J. Nurkic", p: "P", o: 83}, {n: "G. Allen", p: "6M", o: 81}, {n: "R. O'Neale", p: "BAN", o: 77}
        ]},
        { name: "Clippers", ovr: 88, star: "Kawhi", roster: [
            {n: "J. Harden", p: "B", o: 88}, {n: "T. Mann", p: "E", o: 79}, {n: "D. Jones Jr", p: "A", o: 80}, {n: "K. Leonard", p: "AP", o: 93}, {n: "I. Zubac", p: "P", o: 83}, {n: "N. Powell", p: "6M", o: 83}, {n: "N. Batum", p: "BAN", o: 77}
        ]},
        { name: "Pelicans", ovr: 86, star: "Zion", roster: [
            {n: "D. Murray", p: "B", o: 86}, {n: "C. McCollum", p: "E", o: 85}, {n: "B. Ingram", p: "A", o: 87}, {n: "Z. Williamson", p: "AP", o: 89}, {n: "Y. Missi", p: "P", o: 76}, {n: "H. Jones", p: "6M", o: 83}, {n: "T. Murphy", p: "BAN", o: 82}
        ]},
        { name: "Kings", ovr: 86, star: "De'Aaron Fox", roster: [
            {n: "D. Fox", p: "B", o: 89}, {n: "K. Ellis", p: "E", o: 79}, {n: "D. DeRozan", p: "A", o: 87}, {n: "K. Murray", p: "AP", o: 83}, {n: "D. Sabonis", p: "P", o: 89}, {n: "M. Monk", p: "6M", o: 84}, {n: "K. Huerter", p: "BAN", o: 79}
        ]},
        { name: "Grizzlies", ovr: 84, star: "Ja Morant", roster: [
            {n: "J. Morant", p: "B", o: 91}, {n: "D. Bane", p: "E", o: 86}, {n: "M. Smart", p: "A", o: 83}, {n: "J. Jackson Jr", p: "AP", o: 87}, {n: "Z. Edey", p: "P", o: 78}, {n: "B. Clarke", p: "6M", o: 79}, {n: "L. Kennard", p: "BAN", o: 78}
        ]}
    ]
};