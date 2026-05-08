const DB_NBA = { 
    n: "NBA", maxOvr: 99, 
    teams: [
        // CONFERENCIA ESTE (1)
        { name: "Celtics", ovr: 96, conf: 1, roster: [
            {n: "J. Holiday", p: "B", o: 87, d: 4}, {n: "D. White", p: "E", o: 86, d: 9}, {n: "J. Brown", p: "A", o: 93, d: 7}, {n: "J. Tatum", p: "AP", o: 96, d: 0}, {n: "K. Porzingis", p: "P", o: 88, d: 8}, {n: "A. Horford", p: "6M", o: 82, d: 42},
            {n: "P. Pritchard", p: "BAN", rp: "B", o: 80, d: 11}, {n: "S. Hauser", p: "BAN", rp: "A", o: 78, d: 30}, {n: "L. Kornet", p: "BAN", rp: "P", o: 76, d: 40}, {n: "X. Tillman", p: "BAN", rp: "AP", o: 77, d: 26}, {n: "N. Queta", p: "BAN", rp: "P", o: 76, d: 88}, {n: "J. Springer", p: "BAN", rp: "E", o: 75, d: 44}, {n: "J. Walsh", p: "BAN", rp: "AP", o: 74, d: 27}, {n: "B. Scheierman", p: "BAN", rp: "E", o: 73, d: 55}
        ]},
        { name: "Bucks", ovr: 92, conf: 1, roster: [
            {n: "D. Lillard", p: "B", o: 91, d: 0}, {n: "G. Trent Jr", p: "E", o: 81, d: 5}, {n: "K. Middleton", p: "A", o: 85, d: 22}, {n: "G. Antetokounmpo", p: "AP", o: 96, d: 34}, {n: "B. Lopez", p: "P", o: 83, d: 11}, {n: "B. Portis", p: "6M", o: 82, d: 9},
            {n: "P. Connaughton", p: "BAN", rp: "E", o: 76, d: 24}, {n: "T. Prince", p: "BAN", rp: "A", o: 77, d: 12}, {n: "D. Wright", p: "BAN", rp: "AP", o: 78, d: 55}, {n: "A. Jackson Jr", p: "BAN", rp: "E", o: 76, d: 44}, {n: "A. Green", p: "BAN", rp: "A", o: 75, d: 20}, {n: "M. Beauchamp", p: "BAN", rp: "A", o: 74, d: 3}, {n: "C. Livingston", p: "BAN", rp: "B", o: 73, d: 7}, {n: "T. Smith", p: "BAN", rp: "AP", o: 72, d: 15}
        ]},
        { name: "Knicks", ovr: 92, conf: 1, roster: [
            {n: "J. Brunson", p: "B", o: 93, d: 11}, {n: "M. Bridges", p: "E", o: 86, d: 25}, {n: "O. Anunoby", p: "A", o: 84, d: 8}, {n: "J. Randle", p: "AP", o: 87, d: 30}, {n: "M. Robinson", p: "P", o: 82, d: 23}, {n: "J. Hart", p: "6M", o: 83, d: 3},
            {n: "D. DiVincenzo", p: "BAN", rp: "E", o: 82, d: 0}, {n: "M. McBride", p: "BAN", rp: "B", o: 78, d: 2}, {n: "P. Achiuwa", p: "BAN", rp: "AP", o: 78, d: 5}, {n: "C. Payne", p: "BAN", rp: "B", o: 76, d: 22}, {n: "J. Sims", p: "BAN", rp: "P", o: 75, d: 20}, {n: "K. Bates-Diop", p: "BAN", rp: "AP", o: 74, d: 13}, {n: "T. Kolek", p: "BAN", rp: "B", o: 73, d: 14}, {n: "A. Toppin", p: "BAN", rp: "AP", o: 72, d: 0}
        ]},
        { name: "76ers", ovr: 91, conf: 1, roster: [
            {n: "T. Maxey", p: "B", o: 89, d: 0}, {n: "K. Oubre Jr", p: "E", o: 81, d: 9}, {n: "P. George", p: "A", o: 89, d: 8}, {n: "C. Martin", p: "AP", o: 79, d: 16}, {n: "J. Embiid", p: "P", o: 96, d: 21}, {n: "E. Gordon", p: "6M", o: 78, d: 23},
            {n: "A. Drummond", p: "BAN", rp: "P", o: 79, d: 5}, {n: "K. Martin", p: "BAN", rp: "E", o: 76, d: 1}, {n: "J. McCain", p: "BAN", rp: "B", o: 75, d: 20}, {n: "R. Jackson", p: "BAN", rp: "B", o: 76, d: 7}, {n: "G. Yabusele", p: "BAN", rp: "AP", o: 77, d: 28}, {n: "A. Bona", p: "BAN", rp: "P", o: 74, d: 14}, {n: "R. Council IV", p: "BAN", rp: "A", o: 73, d: 11}, {n: "J. Dowtin", p: "BAN", rp: "B", o: 72, d: 15}
        ]},
        { name: "Cavaliers", ovr: 90, conf: 1, roster: [
            {n: "D. Garland", p: "B", o: 85, d: 10}, {n: "D. Mitchell", p: "E", o: 92, d: 45}, {n: "M. Strus", p: "A", o: 80, d: 1}, {n: "E. Mobley", p: "AP", o: 86, d: 4}, {n: "J. Allen", p: "P", o: 85, d: 31}, {n: "C. LeVert", p: "6M", o: 81, d: 3},
            {n: "I. Okoro", p: "BAN", rp: "E", o: 78, d: 35}, {n: "D. Wade", p: "BAN", rp: "B", o: 76, d: 32}, {n: "G. Niang", p: "BAN", rp: "AP", o: 77, d: 20}, {n: "S. Merrill", p: "BAN", rp: "E", o: 76, d: 5}, {n: "T. Jerome", p: "BAN", rp: "B", o: 75, d: 2}, {n: "J. Tyson", p: "BAN", rp: "P", o: 74, d: 24}, {n: "T. Thompson", p: "BAN", rp: "P", o: 75, d: 13}, {n: "C. Porter Jr", p: "BAN", rp: "A", o: 74, d: 9}
        ]},
        { name: "Pacers", ovr: 89, conf: 1, roster: [
            {n: "T. Haliburton", p: "B", o: 90, d: 0}, {n: "A. Nembhard", p: "E", o: 81, d: 2}, {n: "A. Nesmith", p: "A", o: 80, d: 23}, {n: "P. Siakam", p: "AP", o: 87, d: 43}, {n: "M. Turner", p: "P", o: 84, d: 33}, {n: "B. Mathurin", p: "6M", o: 81, d: 0},
            {n: "T. McConnell", p: "BAN", rp: "B", o: 80, d: 9}, {n: "O. Toppin", p: "BAN", rp: "AP", o: 78, d: 1}, {n: "A. Jackson", p: "BAN", rp: "A", o: 77, d: 22}, {n: "B. Sheppard", p: "BAN", rp: "E", o: 76, d: 26}, {n: "J. Wiseman", p: "BAN", rp: "P", o: 75, d: 13}, {n: "J. Walker", p: "BAN", rp: "B", o: 75, d: 5}, {n: "Q. Jackson", p: "BAN", rp: "E", o: 73, d: 29}, {n: "T. Freeman", p: "BAN", rp: "B", o: 72, d: 12}
        ]},
        { name: "Heat", ovr: 88, conf: 1, roster: [
            {n: "T. Rozier", p: "B", o: 83, d: 2}, {n: "T. Herro", p: "E", o: 84, d: 14}, {n: "J. Butler", p: "A", o: 90, d: 22}, {n: "N. Jovic", p: "AP", o: 79, d: 5}, {n: "B. Adebayo", p: "P", o: 88, d: 13}, {n: "J. Jaquez Jr", p: "6M", o: 81, d: 11},
            {n: "D. Robinson", p: "BAN", rp: "E", o: 78, d: 55}, {n: "K. Love", p: "BAN", rp: "AP", o: 76, d: 42}, {n: "H. Highsmith", p: "BAN", rp: "A", o: 76, d: 24}, {n: "J. Richardson", p: "BAN", rp: "E", o: 77, d: 0}, {n: "T. Bryant", p: "BAN", rp: "P", o: 75, d: 31}, {n: "K. Ware", p: "BAN", rp: "B", o: 74, d: 7}, {n: "P. Larsson", p: "BAN", rp: "E", o: 73, d: 9}, {n: "A. Burks", p: "BAN", rp: "E", o: 75, d: 8}
        ]},
        { name: "Magic", ovr: 87, conf: 1, roster: [
            {n: "J. Suggs", p: "B", o: 83, d: 4}, {n: "K. Caldwell-Pope", p: "E", o: 81, d: 3}, {n: "F. Wagner", p: "A", o: 85, d: 22}, {n: "P. Banchero", p: "AP", o: 88, d: 5}, {n: "W. Carter Jr", p: "P", o: 82, d: 34}, {n: "C. Anthony", p: "6M", o: 80, d: 50},
            {n: "M. Wagner", p: "BAN", rp: "AP", o: 79, d: 21}, {n: "J. Isaac", p: "BAN", rp: "AP", o: 80, d: 1}, {n: "A. Black", p: "BAN", rp: "B", o: 77, d: 0}, {n: "G. Harris", p: "BAN", rp: "E", o: 76, d: 14}, {n: "C. Houstan", p: "BAN", rp: "A", o: 74, d: 2}, {n: "J. Howard", p: "BAN", rp: "P", o: 73, d: 13}, {n: "T. da Silva", p: "BAN", rp: "AP", o: 74, d: 23}, {n: "G. Bitadze", p: "BAN", rp: "P", o: 76, d: 35}
        ]},
        { name: "Bulls", ovr: 84, conf: 1, roster: [
            {n: "J. Giddey", p: "B", o: 81, d: 3}, {n: "C. White", p: "E", o: 84, d: 0}, {n: "Z. LaVine", p: "A", o: 85, d: 8}, {n: "P. Williams", p: "AP", o: 79, d: 44}, {n: "N. Vucevic", p: "P", o: 83, d: 9}, {n: "A. Dosunmu", p: "6M", o: 80, d: 12},
            {n: "L. Ball", p: "BAN", rp: "B", o: 78, d: 2}, {n: "J. Smith", p: "BAN", rp: "AP", o: 77, d: 7}, {n: "M. Buzelis", p: "BAN", rp: "AP", o: 76, d: 14}, {n: "T. Craig", p: "BAN", rp: "A", o: 75, d: 13}, {n: "D. Terry", p: "BAN", rp: "B", o: 74, d: 25}, {n: "C. Duarte", p: "BAN", rp: "E", o: 74, d: 27}, {n: "J. Carter", p: "BAN", rp: "A", o: 75, d: 5}, {n: "T. Tucker", p: "BAN", rp: "AP", o: 75, d: 11}
        ]},
        { name: "Hawks", ovr: 83, conf: 1, roster: [
            {n: "T. Young", p: "B", o: 89, d: 11}, {n: "B. Bogdanovic", p: "E", o: 82, d: 13}, {n: "D. Hunter", p: "A", o: 80, d: 12}, {n: "J. Johnson", p: "AP", o: 83, d: 1}, {n: "C. Capela", p: "P", o: 83, d: 15}, {n: "Z. Risacher", p: "6M", o: 79, d: 10},
            {n: "O. Okongwu", p: "BAN", rp: "P", o: 80, d: 17}, {n: "D. Daniels", p: "BAN", rp: "B", o: 77, d: 5}, {n: "L. Nance Jr", p: "BAN", rp: "AP", o: 78, d: 22}, {n: "G. Mathews", p: "BAN", rp: "E", o: 75, d: 24}, {n: "K. Bufkin", p: "BAN", rp: "B", o: 74, d: 4}, {n: "D. Roddy", p: "BAN", rp: "A", o: 74, d: 21}, {n: "C. Zeller", p: "BAN", rp: "P", o: 75, d: 40}, {n: "V. Krejci", p: "BAN", rp: "P", o: 73, d: 27}
        ]},
        { name: "Raptors", ovr: 82, conf: 1, roster: [
            {n: "I. Quickley", p: "B", o: 83, d: 5}, {n: "G. Dick", p: "E", o: 78, d: 1}, {n: "R. Barrett", p: "A", o: 84, d: 9}, {n: "S. Barnes", p: "AP", o: 86, d: 4}, {n: "J. Poeltl", p: "P", o: 82, d: 19}, {n: "K. Olynyk", p: "6M", o: 79, d: 41},
            {n: "B. Brown", p: "BAN", rp: "B", o: 78, d: 11}, {n: "D. Mitchell", p: "BAN", rp: "E", o: 77, d: 45}, {n: "C. Boucher", p: "BAN", rp: "AP", o: 76, d: 25}, {n: "O. Agbaji", p: "BAN", rp: "E", o: 75, d: 30}, {n: "J. Walter", p: "BAN", rp: "A", o: 74, d: 17}, {n: "B. Fernando", p: "BAN", rp: "P", o: 75, d: 24}, {n: "J. Mogbo", p: "BAN", rp: "AP", o: 73, d: 2}, {n: "J. Shead", p: "BAN", rp: "B", o: 72, d: 0}
        ]},
        { name: "Hornets", ovr: 81, conf: 1, roster: [
            {n: "L. Ball", p: "B", o: 87, d: 1}, {n: "J. Green", p: "E", o: 79, d: 8}, {n: "B. Miller", p: "A", o: 83, d: 24}, {n: "M. Bridges", p: "AP", o: 83, d: 0}, {n: "M. Williams", p: "P", o: 81, d: 5}, {n: "V. Micic", p: "6M", o: 78, d: 22},
            {n: "G. Williams", p: "BAN", rp: "AP", o: 78, d: 2}, {n: "T. Mann", p: "BAN", rp: "E", o: 77, d: 23}, {n: "N. Richards", p: "BAN", rp: "P", o: 77, d: 4}, {n: "C. Martin", p: "BAN", rp: "A", o: 76, d: 11}, {n: "T. Salaun", p: "BAN", rp: "A", o: 74, d: 31}, {n: "S. Curry", p: "BAN", rp: "B", o: 75, d: 30}, {n: "K. Simpson", p: "BAN", rp: "B", o: 72, d: 14}, {n: "J. Green", p: "BAN", rp: "E", o: 74, d: 0}
        ]},
        { name: "Nets", ovr: 80, conf: 1, roster: [
            {n: "D. Schroder", p: "B", o: 80, d: 17}, {n: "C. Thomas", p: "E", o: 84, d: 24}, {n: "C. Johnson", p: "A", o: 81, d: 2}, {n: "D. Finney-Smith", p: "AP", o: 79, d: 28}, {n: "N. Claxton", p: "P", o: 83, d: 33}, {n: "B. Simmons", p: "6M", o: 78, d: 10},
            {n: "D. Sharpe", p: "BAN", rp: "AP", o: 76, d: 20}, {n: "B. Bogdanovic", p: "BAN", rp: "E", o: 79, d: 44}, {n: "Z. Williams", p: "BAN", rp: "A", o: 75, d: 8}, {n: "K. Johnson", p: "BAN", rp: "E", o: 74, d: 14}, {n: "D. Whitehead", p: "BAN", rp: "B", o: 73, d: 0}, {n: "N. Clowney", p: "BAN", rp: "AP", o: 74, d: 21}, {n: "T. Watford", p: "BAN", rp: "AP", o: 75, d: 9}, {n: "M. Milton", p: "BAN", rp: "B", o: 74, d: 13}
        ]},
        { name: "Pistons", ovr: 78, conf: 1, roster: [
            {n: "C. Cunningham", p: "B", o: 85, d: 2}, {n: "J. Ivey", p: "E", o: 80, d: 23}, {n: "A. Thompson", p: "A", o: 80, d: 9}, {n: "T. Harris", p: "AP", o: 81, d: 12}, {n: "J. Duren", p: "P", o: 82, d: 0}, {n: "I. Stewart", p: "6M", o: 78, d: 28},
            {n: "M. Beasley", p: "BAN", rp: "E", o: 77, d: 5}, {n: "T. Hardaway Jr", p: "BAN", rp: "E", o: 77, d: 10}, {n: "S. Fontecchio", p: "BAN", rp: "A", o: 76, d: 19}, {n: "P. Reed", p: "BAN", rp: "AP", o: 75, d: 44}, {n: "R. Holland II", p: "BAN", rp: "B", o: 74, d: 0}, {n: "M. Sasser", p: "BAN", rp: "B", o: 74, d: 25}, {n: "W. Moore", p: "BAN", rp: "E", o: 73, d: 14}, {n: "B. Klintman", p: "BAN", rp: "AP", o: 72, d: 34}
        ]},
        { name: "Wizards", ovr: 77, conf: 1, roster: [
            {n: "J. Poole", p: "B", o: 80, d: 13}, {n: "B. Coulibaly", p: "E", o: 78, d: 0}, {n: "K. Kuzma", p: "A", o: 83, d: 33}, {n: "A. Sarr", p: "AP", o: 79, d: 20}, {n: "J. Valanciunas", p: "P", o: 82, d: 17}, {n: "M. Brogdon", p: "6M", o: 80, d: 15},
            {n: "C. Kispert", p: "BAN", rp: "E", o: 78, d: 24}, {n: "M. Bagley III", p: "BAN", rp: "P", o: 77, d: 35}, {n: "C. Carrington", p: "BAN", rp: "E", o: 75, d: 17}, {n: "K. George", p: "BAN", rp: "B", o: 74, d: 18}, {n: "R. Holmes", p: "BAN", rp: "P", o: 75, d: 22}, {n: "S. Bey", p: "BAN", rp: "A", o: 78, d: 41}, {n: "J. Davis", p: "BAN", rp: "B", o: 73, d: 1}, {n: "P. Baldwin Jr", p: "BAN", rp: "A", o: 73, d: 7}
        ]},

        // CONFERENCIA OESTE (2)
        { name: "Nuggets", ovr: 95, conf: 2, roster: [
            {n: "J. Murray", p: "B", o: 89, d: 27}, {n: "C. Braun", p: "E", o: 80, d: 0}, {n: "M. Porter Jr", p: "A", o: 85, d: 1}, {n: "A. Gordon", p: "AP", o: 86, d: 50}, {n: "N. Jokic", p: "P", o: 98, d: 15}, {n: "R. Westbrook", p: "6M", o: 79, d: 4},
            {n: "P. Watson", p: "BAN", rp: "E", o: 78, d: 8}, {n: "D. Saric", p: "BAN", rp: "AP", o: 77, d: 9}, {n: "Z. Nnaji", p: "BAN", rp: "P", o: 75, d: 22}, {n: "J. Strawther", p: "BAN", rp: "E", o: 75, d: 3}, {n: "D. Jordan", p: "BAN", rp: "P", o: 74, d: 6}, {n: "V. Cancar", p: "BAN", rp: "A", o: 74, d: 31}, {n: "H. Tyson", p: "BAN", rp: "P", o: 72, d: 5}, {n: "J. Pickett", p: "BAN", rp: "B", o: 72, d: 24}
        ]},
        { name: "Thunder", ovr: 94, conf: 2, roster: [
            {n: "S. Gilgeous-A.", p: "B", o: 96, d: 2}, {n: "A. Caruso", p: "E", o: 83, d: 9}, {n: "J. Williams", p: "A", o: 88, d: 8}, {n: "L. Dort", p: "AP", o: 82, d: 5}, {n: "C. Holmgren", p: "P", o: 89, d: 7}, {n: "I. Hartenstein", p: "6M", o: 83, d: 55},
            {n: "I. Joe", p: "BAN", rp: "E", o: 79, d: 11}, {n: "A. Wiggins", p: "BAN", rp: "A", o: 77, d: 21}, {n: "C. Wallace", p: "BAN", rp: "E", o: 78, d: 22}, {n: "J. Williams", p: "BAN", rp: "B", o: 76, d: 6}, {n: "O. Dieng", p: "BAN", rp: "P", o: 75, d: 13}, {n: "K. Williams", p: "BAN", rp: "B", o: 75, d: 34}, {n: "N. Topic", p: "BAN", rp: "B", o: 76, d: 1}, {n: "D. Jones", p: "BAN", rp: "A", o: 73, d: 3}
        ]},
        { name: "Timberwolves", ovr: 93, conf: 2, roster: [
            {n: "M. Conley", p: "B", o: 83, d: 10}, {n: "A. Edwards", p: "E", o: 94, d: 5}, {n: "J. McDaniels", p: "A", o: 83, d: 3}, {n: "J. Randle", p: "AP", o: 87, d: 30}, {n: "R. Gobert", p: "P", o: 86, d: 27}, {n: "N. Reid", p: "6M", o: 84, d: 11},
            {n: "N. Alexander-W.", p: "BAN", rp: "B", o: 79, d: 9}, {n: "J. Ingles", p: "BAN", rp: "A", o: 76, d: 7}, {n: "R. Dillingham", p: "BAN", rp: "B", o: 75, d: 4}, {n: "T. Shannon Jr", p: "BAN", rp: "E", o: 74, d: 14}, {n: "L. Garza", p: "BAN", rp: "P", o: 75, d: 55}, {n: "P. Dozier", p: "BAN", rp: "E", o: 74, d: 35}, {n: "J. Minott", p: "BAN", rp: "A", o: 73, d: 8}, {n: "L. Miller", p: "BAN", rp: "AP", o: 73, d: 33}
        ]},
        { name: "Mavericks", ovr: 93, conf: 2, roster: [
            {n: "L. Doncic", p: "B", o: 97, d: 77}, {n: "K. Irving", p: "E", o: 92, d: 11}, {n: "K. Thompson", p: "A", o: 83, d: 31}, {n: "P. Washington", p: "AP", o: 81, d: 25}, {n: "D. Lively II", p: "P", o: 83, d: 2}, {n: "D. Gafford", p: "6M", o: 82, d: 21},
            {n: "N. Marshall", p: "BAN", rp: "A", o: 78, d: 13}, {n: "Q. Grimes", p: "BAN", rp: "E", o: 77, d: 5}, {n: "S. Dinwiddie", p: "BAN", rp: "B", o: 76, d: 26}, {n: "M. Kleber", p: "BAN", rp: "AP", o: 76, d: 42}, {n: "J. Hardy", p: "BAN", rp: "E", o: 75, d: 1}, {n: "D. Powell", p: "BAN", rp: "AP", o: 74, d: 7}, {n: "D. Exum", p: "BAN", rp: "B", o: 75, d: 0}, {n: "O. Prosper", p: "BAN", rp: "AP", o: 73, d: 18}
        ]},
        { name: "Suns", ovr: 91, conf: 2, roster: [
            {n: "T. Jones", p: "B", o: 82, d: 21}, {n: "D. Booker", p: "E", o: 93, d: 1}, {n: "B. Beal", p: "A", o: 86, d: 3}, {n: "K. Durant", p: "AP", o: 95, d: 35}, {n: "J. Nurkic", p: "P", o: 83, d: 20}, {n: "G. Allen", p: "6M", o: 81, d: 8},
            {n: "R. O'Neale", p: "BAN", rp: "A", o: 77, d: 23}, {n: "M. Plumlee", p: "BAN", rp: "P", o: 76, d: 44}, {n: "J. Okogie", p: "BAN", rp: "E", o: 75, d: 2}, {n: "M. Morris", p: "BAN", rp: "AP", o: 76, d: 11}, {n: "R. Dunn", p: "BAN", rp: "B", o: 73, d: 0}, {n: "O. Ighodaro", p: "BAN", rp: "P", o: 72, d: 4}, {n: "B. Bol", p: "BAN", rp: "P", o: 74, d: 10}, {n: "D. Lee", p: "BAN", rp: "B", o: 74, d: 10}
        ]},
        { name: "Clippers", ovr: 88, conf: 2, roster: [
            {n: "J. Harden", p: "B", o: 88, d: 1}, {n: "T. Mann", p: "E", o: 79, d: 14}, {n: "D. Jones Jr", p: "A", o: 80, d: 5}, {n: "K. Leonard", p: "AP", o: 93, d: 2}, {n: "I. Zubac", p: "P", o: 83, d: 40}, {n: "N. Powell", p: "6M", o: 83, d: 24},
            {n: "N. Batum", p: "BAN", rp: "AP", o: 77, d: 33}, {n: "K. Porter Jr", p: "BAN", rp: "B", o: 78, d: 77}, {n: "K. Dunn", p: "BAN", rp: "B", o: 76, d: 8}, {n: "B. Hyland", p: "BAN", rp: "B", o: 75, d: 4}, {n: "A. Coffey", p: "BAN", rp: "A", o: 75, d: 7}, {n: "K. Jones", p: "BAN", rp: "P", o: 74, d: 23}, {n: "P. Tucker", p: "BAN", rp: "AP", o: 73, d: 17}, {n: "C. Christie", p: "BAN", rp: "E", o: 72, d: 12}
        ]},
        { name: "Lakers", ovr: 89, conf: 2, roster: [
            {n: "D. Russell", p: "B", o: 82, d: 1}, {n: "A. Reaves", p: "E", o: 84, d: 15}, {n: "L. James", p: "A", o: 95, d: 23}, {n: "R. Hachimura", p: "AP", o: 81, d: 28}, {n: "A. Davis", p: "P", o: 95, d: 3}, {n: "J. Vanderbilt", p: "6M", o: 79, d: 2},
            {n: "G. Vincent", p: "BAN", rp: "B", o: 77, d: 7}, {n: "D. Knecht", p: "BAN", rp: "E", o: 75, d: 4}, {n: "C. Wood", p: "BAN", rp: "AP", o: 76, d: 35}, {n: "M. Christie", p: "BAN", rp: "E", o: 75, d: 10}, {n: "J. Hayes", p: "BAN", rp: "P", o: 75, d: 11}, {n: "C. Reddish", p: "BAN", rp: "A", o: 74, d: 5}, {n: "J. Hood-Schifino", p: "BAN", rp: "B", o: 72, d: 0}, {n: "B. James", p: "BAN", rp: "E", o: 68, d: 9}
        ]},
        { name: "Kings", ovr: 88, conf: 2, roster: [
            {n: "D. Fox", p: "B", o: 89, d: 5}, {n: "K. Huerter", p: "E", o: 80, d: 9}, {n: "D. DeRozan", p: "A", o: 87, d: 10}, {n: "K. Murray", p: "AP", o: 83, d: 13}, {n: "D. Sabonis", p: "P", o: 89, d: 11}, {n: "M. Monk", p: "6M", o: 84, d: 0},
            {n: "K. Ellis", p: "BAN", rp: "E", o: 78, d: 23}, {n: "T. Lyles", p: "BAN", rp: "AP", o: 77, d: 41}, {n: "A. Len", p: "BAN", rp: "P", o: 75, d: 25}, {n: "D. Carter", p: "BAN", rp: "B", o: 74, d: 22}, {n: "M. Jones", p: "BAN", rp: "B", o: 73, d: 20}, {n: "J. McLaughlin", p: "BAN", rp: "B", o: 74, d: 3}, {n: "O. Robinson", p: "BAN", rp: "P", o: 73, d: 25}, {n: "C. Jones", p: "BAN", rp: "A", o: 72, d: 17}
        ]},
        { name: "Pelicans", ovr: 86, conf: 2, roster: [
            {n: "D. Murray", p: "B", o: 86, d: 5}, {n: "C. McCollum", p: "E", o: 85, d: 3}, {n: "B. Ingram", p: "A", o: 87, d: 14}, {n: "Z. Williamson", p: "AP", o: 89, d: 1}, {n: "D. Theis", p: "P", o: 77, d: 27}, {n: "T. Murphy III", p: "6M", o: 82, d: 25},
            {n: "H. Jones", p: "BAN", rp: "E", o: 83, d: 2}, {n: "J. Alvarado", p: "BAN", rp: "B", o: 78, d: 15}, {n: "J. Hawkins", p: "BAN", rp: "A", o: 76, d: 24}, {n: "Y. Missi", p: "BAN", rp: "P", o: 74, d: 21}, {n: "J. Green", p: "BAN", rp: "A", o: 75, d: 24}, {n: "J. Robinson-Earl", p: "BAN", rp: "AP", o: 74, d: 50}, {n: "M. Ryan", p: "BAN", rp: "E", o: 73, d: 37}, {n: "A. Reeves", p: "BAN", rp: "B", o: 72, d: 12}
        ]},
        { name: "Warriors", ovr: 87, conf: 2, roster: [
            {n: "S. Curry", p: "B", o: 95, d: 30}, {n: "B. Podziemski", p: "E", o: 81, d: 2}, {n: "J. Kuminga", p: "A", o: 82, d: 0}, {n: "D. Green", p: "AP", o: 84, d: 23}, {n: "T. Jackson-Davis", p: "P", o: 79, d: 32}, {n: "B. Hield", p: "6M", o: 81, d: 7},
            {n: "A. Wiggins", p: "BAN", rp: "A", o: 82, d: 22}, {n: "K. Anderson", p: "BAN", rp: "AP", o: 77, d: 1}, {n: "G. Payton II", p: "BAN", rp: "B", o: 76, d: 8}, {n: "M. Moody", p: "BAN", rp: "E", o: 76, d: 4}, {n: "D. Melton", p: "BAN", rp: "E", o: 77, d: 8}, {n: "L. Waters III", p: "BAN", rp: "B", o: 74, d: 43}, {n: "Q. Post", p: "BAN", rp: "P", o: 72, d: 21}, {n: "K. Looney", p: "BAN", rp: "P", o: 76, d: 5}
        ]},
        { name: "Grizzlies", ovr: 86, conf: 2, roster: [
            {n: "J. Morant", p: "B", o: 91, d: 12}, {n: "D. Bane", p: "E", o: 85, d: 22}, {n: "M. Smart", p: "A", o: 82, d: 36}, {n: "J. Jackson Jr", p: "AP", o: 86, d: 13}, {n: "Z. Edey", p: "P", o: 79, d: 14}, {n: "B. Clarke", p: "6M", o: 79, d: 15},
            {n: "V. Williams Jr", p: "BAN", rp: "E", o: 78, d: 5}, {n: "L. Kennard", p: "BAN", rp: "E", o: 78, d: 10}, {n: "S. Aldama", p: "BAN", rp: "AP", o: 77, d: 7}, {n: "G. Jackson II", p: "BAN", rp: "B", o: 76, d: 45}, {n: "J. LaRavia", p: "BAN", rp: "A", o: 74, d: 3}, {n: "J. Konchar", p: "BAN", rp: "E", o: 74, d: 46}, {n: "J. Huff", p: "BAN", rp: "P", o: 75, d: 30}, {n: "Y. Kawamura", p: "BAN", rp: "B", o: 70, d: 17}
        ]},
        { name: "Rockets", ovr: 85, conf: 2, roster: [
            {n: "F. VanVleet", p: "B", o: 83, d: 5}, {n: "J. Green", p: "E", o: 83, d: 4}, {n: "D. Brooks", p: "A", o: 80, d: 9}, {n: "J. Smith Jr", p: "AP", o: 81, d: 10}, {n: "A. Sengun", p: "P", o: 86, d: 28}, {n: "A. Thompson", p: "6M", o: 81, d: 1},
            {n: "C. Whitmore", p: "BAN", rp: "AP", o: 79, d: 7}, {n: "S. Adams", p: "BAN", rp: "P", o: 80, d: 12}, {n: "T. Eason", p: "BAN", rp: "A", o: 78, d: 17}, {n: "R. Sheppard", p: "BAN", rp: "E", o: 75, d: 15}, {n: "A. Holiday", p: "BAN", rp: "B", o: 75, d: 0}, {n: "J. Landale", p: "BAN", rp: "P", o: 74, d: 2}, {n: "J. Tate", p: "BAN", rp: "AP", o: 74, d: 8}, {n: "J. Green", p: "BAN", rp: "E", o: 75, d: 32}
        ]},
        { name: "Spurs", ovr: 81, conf: 2, roster: [
            {n: "C. Paul", p: "B", o: 81, d: 3}, {n: "D. Vassell", p: "E", o: 83, d: 24}, {n: "K. Johnson", p: "A", o: 81, d: 3}, {n: "J. Sochan", p: "AP", o: 80, d: 10}, {n: "V. Wembanyama", p: "P", o: 91, d: 1}, {n: "S. Castle", p: "6M", o: 78, d: 5},
            {n: "T. Jones", p: "BAN", rp: "B", o: 79, d: 33}, {n: "Z. Collins", p: "BAN", rp: "P", o: 77, d: 23}, {n: "H. Barnes", p: "BAN", rp: "AP", o: 78, d: 40}, {n: "M. Branham", p: "BAN", rp: "E", o: 75, d: 22}, {n: "B. Wesley", p: "BAN", rp: "B", o: 74, d: 14}, {n: "J. Champagnie", p: "BAN", rp: "A", o: 75, d: 30}, {n: "S. Cissoko", p: "BAN", rp: "B", o: 72, d: 25}, {n: "C. Bassey", p: "BAN", rp: "P", o: 74, d: 28}
        ]},
        { name: "Jazz", ovr: 79, conf: 2, roster: [
            {n: "K. George", p: "B", o: 79, d: 3}, {n: "C. Sexton", p: "E", o: 83, d: 2}, {n: "L. Markkanen", p: "A", o: 86, d: 23}, {n: "T. Hendricks", p: "AP", o: 77, d: 0}, {n: "W. Kessler", p: "P", o: 81, d: 24}, {n: "J. Clarkson", p: "6M", o: 80, d: 0},
            {n: "J. Collins", p: "BAN", rp: "AP", o: 81, d: 20}, {n: "C. Collier", p: "BAN", rp: "B", o: 74, d: 13}, {n: "K. Williams", p: "BAN", rp: "E", o: 75, d: 1}, {n: "P. Mills", p: "BAN", rp: "B", o: 74, d: 8}, {n: "J. Juzang", p: "BAN", rp: "E", o: 73, d: 33}, {n: "S. Mykhailiuk", p: "BAN", rp: "E", o: 73, d: 19}, {n: "K. Filipowski", p: "BAN", rp: "P", o: 72, d: 22}, {n: "D. Eubanks", p: "BAN", rp: "P", o: 74, d: 14}
        ]},
        { name: "Trail Blazers", ovr: 79, conf: 2, roster: [
            {n: "S. Henderson", p: "B", o: 79, d: 0}, {n: "A. Simons", p: "E", o: 83, d: 1}, {n: "D. Avdija", p: "A", o: 80, d: 8}, {n: "J. Grant", p: "AP", o: 83, d: 14}, {n: "D. Ayton", p: "P", o: 83, d: 2}, {n: "S. Sharpe", p: "6M", o: 80, d: 17},
            {n: "D. Clingan", p: "BAN", rp: "P", o: 77, d: 23}, {n: "T. Camara", p: "BAN", rp: "A", o: 76, d: 33}, {n: "D. Banton", p: "BAN", rp: "B", o: 75, d: 5}, {n: "M. Thybulle", p: "BAN", rp: "E", o: 76, d: 4}, {n: "K. Murray", p: "BAN", rp: "B", o: 74, d: 8}, {n: "R. Williams III", p: "BAN", rp: "AP", o: 78, d: 35}, {n: "J. Walker", p: "BAN", rp: "B", o: 74, d: 34}, {n: "R. Rupert", p: "BAN", rp: "E", o: 72, d: 21}
        ]}
    ]
};
