// =====================================================================
// DATA_ROOKIES.JS — Sistema de Jugadores Emergentes v2
// =====================================================================
// Pool NBA: 17 temporadas × 12-16 rookies (media ~14)
// Pool ACB: 17 temporadas × 8-10 rookies (proporcional a la liga)
//
// Distribución de posiciones por clase (NBA):
//   ~3 Bases · ~2-3 Escoltas · ~2-3 Aleros · ~3 Ala-Pívots · ~3 Pívots
//
// Calidad de clase:
//   ★★★★★  Generación excepcional  — varios jugadores 94+ pot
//   ★★★★   Clase fuerte            — un jugador elite + buen fondo
//   ★★★    Clase normal            — equilibrada, sin grandes estrellas
//   ★★     Clase floja             — relleno, potencial limitado
//
// Formato: { n, p, o, pot, a, d, entry }
//   n=nombre, p=posición, o=OVR inicial, pot=potencial máx,
//   a=edad al entrar, d=dorsal, entry=temporada de entrada
// =====================================================================


// =====================================================================
// POOL NBA — 17 temporadas
// =====================================================================
const ROOKIES_NBA = [

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 1 — Clase ★★★ Normal (13 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "L. Cardoso",        p: "P",  o: 79, pot: 91, a: 21, d: 28, entry: 1 },
    { n: "A. Filipowski",     p: "AP", o: 78, pot: 90, a: 22, d: 33, entry: 1 },
    { n: "R. Alexandre",      p: "P",  o: 79, pot: 91, a: 20, d: 22, entry: 1 },
    { n: "Z. Risacher",       p: "A",  o: 78, pot: 89, a: 19, d: 10, entry: 1 },
    { n: "D. Richmond Jr.",   p: "B",  o: 80, pot: 92, a: 22, d: 0,  entry: 1 },
    { n: "K. Hart Jr.",       p: "AP", o: 79, pot: 90, a: 21, d: 8,  entry: 1 },
    { n: "B. Queta Jr.",      p: "P",  o: 77, pot: 87, a: 22, d: 88, entry: 1 },
    { n: "O. Prosper",        p: "A",  o: 77, pot: 86, a: 20, d: 18, entry: 1 },
    { n: "T. Topić",          p: "B",  o: 78, pot: 89, a: 19, d: 1,  entry: 1 },
    { n: "Y. Missi",          p: "P",  o: 76, pot: 86, a: 21, d: 13, entry: 1 },
    { n: "C. Ingram",         p: "E",  o: 77, pot: 87, a: 21, d: 20, entry: 1 },
    { n: "D. Edey",           p: "P",  o: 78, pot: 88, a: 22, d: 14, entry: 1 },
    { n: "R. Lively II",      p: "P",  o: 76, pot: 86, a: 20, d: 2,  entry: 1 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 2 — Clase ★★★★ Fuerte (14 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "C. Flagg",          p: "AP", o: 82, pot: 95, a: 19, d: 0,  entry: 2 },
    { n: "D. Harris Jr.",     p: "B",  o: 80, pot: 91, a: 22, d: 3,  entry: 2 },
    { n: "N. Nzinga",         p: "P",  o: 80, pot: 91, a: 21, d: 14, entry: 2 },
    { n: "M. Bol Jr.",        p: "P",  o: 79, pot: 89, a: 21, d: 10, entry: 2 },
    { n: "A. Ware",           p: "B",  o: 81, pot: 92, a: 22, d: 1,  entry: 2 },
    { n: "T. Petersen",       p: "E",  o: 79, pot: 89, a: 20, d: 24, entry: 2 },
    { n: "I. Coulibaly",      p: "A",  o: 80, pot: 91, a: 21, d: 0,  entry: 2 },
    { n: "S. Holmgren Jr.",   p: "P",  o: 82, pot: 93, a: 22, d: 7,  entry: 2 },
    { n: "K. Murray Jr.",     p: "B",  o: 79, pot: 90, a: 21, d: 27, entry: 2 },
    { n: "A. Reaves Jr.",     p: "E",  o: 78, pot: 88, a: 22, d: 15, entry: 2 },
    { n: "J. Butler III",     p: "A",  o: 80, pot: 90, a: 21, d: 22, entry: 2 },
    { n: "Z. Eason",          p: "AP", o: 78, pot: 88, a: 20, d: 11, entry: 2 },
    { n: "G. Dick",           p: "E",  o: 78, pot: 88, a: 21, d: 3,  entry: 2 },
    { n: "C. Livingston",     p: "B",  o: 77, pot: 87, a: 22, d: 6,  entry: 2 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 3 — Clase ★★★★★ Excepcional (16 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "J. Banchero Jr.",   p: "AP", o: 84, pot: 96, a: 22, d: 5,  entry: 3 },
    { n: "C. Wembanyama Jr.", p: "P",  o: 85, pot: 97, a: 20, d: 1,  entry: 3 },
    { n: "K. Thompson Jr.",   p: "E",  o: 83, pot: 95, a: 22, d: 31, entry: 3 },
    { n: "A. Cunningham Jr.", p: "B",  o: 83, pot: 94, a: 21, d: 2,  entry: 3 },
    { n: "L. Doncic Jr.",     p: "B",  o: 84, pot: 96, a: 22, d: 77, entry: 3 },
    { n: "V. Sarić Jr.",      p: "P",  o: 81, pot: 91, a: 20, d: 9,  entry: 3 },
    { n: "E. Griffin Jr.",    p: "AP", o: 82, pot: 93, a: 21, d: 15, entry: 3 },
    { n: "R. Jović Jr.",      p: "E",  o: 80, pot: 91, a: 20, d: 5,  entry: 3 },
    { n: "T. Hardaway III",   p: "E",  o: 80, pot: 89, a: 22, d: 10, entry: 3 },
    { n: "J. Jackson III",    p: "AP", o: 82, pot: 92, a: 22, d: 13, entry: 3 },
    { n: "P. Watson Jr.",     p: "B",  o: 81, pot: 91, a: 21, d: 4,  entry: 3 },
    { n: "M. Williams III",   p: "P",  o: 80, pot: 90, a: 22, d: 44, entry: 3 },
    { n: "O. Dieng Jr.",      p: "P",  o: 79, pot: 89, a: 21, d: 21, entry: 3 },
    { n: "K. Maledon Jr.",    p: "B",  o: 79, pot: 89, a: 20, d: 27, entry: 3 },
    { n: "J. Poole Jr.",      p: "E",  o: 79, pot: 88, a: 22, d: 3,  entry: 3 },
    { n: "D. Garland Jr.",    p: "B",  o: 80, pot: 90, a: 21, d: 10, entry: 3 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 4 — Clase ★★ Floja (12 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "B. Edey Jr.",       p: "P",  o: 80, pot: 88, a: 21, d: 14, entry: 4 },
    { n: "R. Miller Jr.",     p: "B",  o: 80, pot: 89, a: 22, d: 5,  entry: 4 },
    { n: "K. George Jr.",     p: "AP", o: 79, pot: 88, a: 20, d: 3,  entry: 4 },
    { n: "P. Siakam Jr.",     p: "AP", o: 80, pot: 89, a: 21, d: 43, entry: 4 },
    { n: "L. Ball Jr.",       p: "B",  o: 79, pot: 88, a: 20, d: 1,  entry: 4 },
    { n: "D. Booker Jr.",     p: "E",  o: 80, pot: 89, a: 22, d: 1,  entry: 4 },
    { n: "T. Haliburton Jr.", p: "B",  o: 80, pot: 89, a: 21, d: 0,  entry: 4 },
    { n: "M. Thybulle Jr.",   p: "E",  o: 78, pot: 86, a: 21, d: 4,  entry: 4 },
    { n: "Z. Williams Jr.",   p: "AP", o: 78, pot: 87, a: 20, d: 8,  entry: 4 },
    { n: "C. Holmgren Jr.",   p: "P",  o: 81, pot: 89, a: 22, d: 7,  entry: 4 },
    { n: "J. Brunson Jr.",    p: "B",  o: 79, pot: 88, a: 22, d: 11, entry: 4 },
    { n: "N. Ntilikina Jr.",  p: "B",  o: 78, pot: 86, a: 20, d: 11, entry: 4 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 5 — Clase ★★★★★ Excepcional (16 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "A. Edwards Jr.",    p: "E",  o: 85, pot: 97, a: 21, d: 5,  entry: 5 },
    { n: "V. Wembanyama II",  p: "P",  o: 86, pot: 98, a: 21, d: 1,  entry: 5 },
    { n: "J. Williams II",    p: "AP", o: 83, pot: 93, a: 22, d: 8,  entry: 5 },
    { n: "C. Paul Jr.",       p: "B",  o: 83, pot: 93, a: 20, d: 3,  entry: 5 },
    { n: "S. Curry Jr.",      p: "B",  o: 85, pot: 96, a: 22, d: 30, entry: 5 },
    { n: "G. Antetokounmpo Jr.", p: "AP", o: 85, pot: 97, a: 21, d: 34, entry: 5 },
    { n: "J. Embiid Jr.",     p: "P",  o: 83, pot: 94, a: 22, d: 21, entry: 5 },
    { n: "T. Young Jr.",      p: "B",  o: 83, pot: 93, a: 20, d: 11, entry: 5 },
    { n: "J. Morant Jr.",     p: "B",  o: 84, pot: 95, a: 21, d: 12, entry: 5 },
    { n: "Z. Petrus",         p: "P",  o: 84, pot: 95, a: 21, d: 22, entry: 5 },
    { n: "B. Ingram Jr.",     p: "A",  o: 83, pot: 93, a: 22, d: 14, entry: 5 },
    { n: "K. Okafor Jr.",     p: "P",  o: 82, pot: 91, a: 21, d: 0,  entry: 5 },
    { n: "C. Maxey Jr.",      p: "E",  o: 83, pot: 93, a: 21, d: 0,  entry: 5 },
    { n: "D. Murray II",      p: "B",  o: 84, pot: 94, a: 22, d: 27, entry: 5 },
    { n: "F. Wagner Jr.",     p: "A",  o: 82, pot: 92, a: 20, d: 22, entry: 5 },
    { n: "P. Banchero II",    p: "AP", o: 84, pot: 95, a: 21, d: 5,  entry: 5 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 6 — Clase ★★★ Normal (13 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "A. Sengun Jr.",     p: "P",  o: 82, pot: 93, a: 22, d: 28, entry: 6 },
    { n: "T. Topic Jr.",      p: "B",  o: 81, pot: 92, a: 21, d: 1,  entry: 6 },
    { n: "A. Flagg Jr.",      p: "AP", o: 83, pot: 94, a: 21, d: 0,  entry: 6 },
    { n: "K. Castle Jr.",     p: "B",  o: 81, pot: 91, a: 22, d: 5,  entry: 6 },
    { n: "E. Vassell Jr.",    p: "E",  o: 80, pot: 90, a: 21, d: 24, entry: 6 },
    { n: "S. Barnes Jr.",     p: "AP", o: 82, pot: 93, a: 22, d: 4,  entry: 6 },
    { n: "I. Quickley Jr.",   p: "B",  o: 81, pot: 90, a: 21, d: 5,  entry: 6 },
    { n: "T. Mawein",         p: "P",  o: 83, pot: 94, a: 20, d: 13, entry: 6 },
    { n: "J. Jackson IV",     p: "AP", o: 80, pot: 89, a: 22, d: 22, entry: 6 },
    { n: "M. Bridges Jr.",    p: "E",  o: 80, pot: 89, a: 22, d: 14, entry: 6 },
    { n: "D. Sabonis Jr.",    p: "P",  o: 81, pot: 90, a: 21, d: 11, entry: 6 },
    { n: "C. Cunningham Jr.", p: "B",  o: 83, pot: 94, a: 22, d: 2,  entry: 6 },
    { n: "J. Morant III",     p: "B",  o: 82, pot: 93, a: 21, d: 12, entry: 6 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 7 — Clase ★★★ Normal (13 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "V. Wembanyama III", p: "P",  o: 85, pot: 96, a: 20, d: 1,  entry: 7 },
    { n: "L. Doncic III",     p: "B",  o: 83, pot: 94, a: 22, d: 77, entry: 7 },
    { n: "A. Reaves II",      p: "E",  o: 80, pot: 89, a: 23, d: 15, entry: 7 },
    { n: "P. Achiuwa Jr.",    p: "AP", o: 80, pot: 89, a: 22, d: 5,  entry: 7 },
    { n: "S. Dort Jr.",       p: "E",  o: 79, pot: 88, a: 21, d: 5,  entry: 7 },
    { n: "D. Fox Jr.",        p: "B",  o: 81, pot: 91, a: 22, d: 5,  entry: 7 },
    { n: "I. Okoro Jr.",      p: "A",  o: 79, pot: 88, a: 21, d: 12, entry: 7 },
    { n: "N. Powell Jr.",     p: "E",  o: 79, pot: 88, a: 22, d: 24, entry: 7 },
    { n: "J. Wiseman Jr.",    p: "P",  o: 79, pot: 88, a: 21, d: 33, entry: 7 },
    { n: "O. Anunoby Jr.",    p: "A",  o: 80, pot: 89, a: 22, d: 3,  entry: 7 },
    { n: "T. Waters Jr.",     p: "B",  o: 79, pot: 88, a: 21, d: 14, entry: 7 },
    { n: "K. Hayes Jr.",      p: "AP", o: 80, pot: 89, a: 22, d: 7,  entry: 7 },
    { n: "B. Fernando Jr.",   p: "P",  o: 78, pot: 87, a: 22, d: 8,  entry: 7 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 8 — Clase ★★ Floja (12 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "J. Tate Jr.",       p: "AP", o: 79, pot: 87, a: 22, d: 8,  entry: 8 },
    { n: "S. Milton Jr.",     p: "B",  o: 78, pot: 87, a: 22, d: 2,  entry: 8 },
    { n: "D. Bane Jr.",       p: "E",  o: 79, pot: 88, a: 23, d: 0,  entry: 8 },
    { n: "P. Williams Jr.",   p: "AP", o: 79, pot: 87, a: 22, d: 44, entry: 8 },
    { n: "H. Diallo Jr.",     p: "AP", o: 78, pot: 86, a: 21, d: 2,  entry: 8 },
    { n: "F. Ntilikina Jr.",  p: "B",  o: 79, pot: 87, a: 21, d: 11, entry: 8 },
    { n: "L. Dort Jr.",       p: "E",  o: 78, pot: 87, a: 22, d: 5,  entry: 8 },
    { n: "C. Zubac Jr.",      p: "P",  o: 78, pot: 86, a: 21, d: 40, entry: 8 },
    { n: "T. Prince Jr.",     p: "A",  o: 78, pot: 86, a: 22, d: 12, entry: 8 },
    { n: "J. Nwora Jr.",      p: "A",  o: 77, pot: 86, a: 22, d: 13, entry: 8 },
    { n: "D. Eubanks Jr.",    p: "P",  o: 77, pot: 85, a: 23, d: 2,  entry: 8 },
    { n: "M. Thybulle Jr.",   p: "E",  o: 78, pot: 87, a: 21, d: 4,  entry: 8 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 9 — Clase ★★★★ Fuerte (15 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "A. Flagg II",       p: "AP", o: 84, pot: 96, a: 21, d: 0,  entry: 9 },
    { n: "D. Boozer Jr.",     p: "B",  o: 82, pot: 93, a: 19, d: 1,  entry: 9 },
    { n: "K. Knecht Jr.",     p: "E",  o: 81, pot: 91, a: 22, d: 17, entry: 9 },
    { n: "Z. Risacher Jr.",   p: "A",  o: 82, pot: 92, a: 20, d: 10, entry: 9 },
    { n: "T. Hardaway IV",    p: "E",  o: 80, pot: 90, a: 22, d: 10, entry: 9 },
    { n: "J. Pickett Jr.",    p: "B",  o: 81, pot: 91, a: 21, d: 0,  entry: 9 },
    { n: "C. Flagg Jr.",      p: "AP", o: 83, pot: 94, a: 20, d: 0,  entry: 9 },
    { n: "D. Mitchell Jr.",   p: "B",  o: 82, pot: 92, a: 21, d: 45, entry: 9 },
    { n: "E. Gordon Jr.",     p: "A",  o: 80, pot: 89, a: 22, d: 10, entry: 9 },
    { n: "B. Bol Jr.",        p: "P",  o: 80, pot: 89, a: 21, d: 10, entry: 9 },
    { n: "J. Suggs Jr.",      p: "B",  o: 81, pot: 91, a: 22, d: 6,  entry: 9 },
    { n: "O. Okeke Jr.",      p: "AP", o: 80, pot: 89, a: 22, d: 5,  entry: 9 },
    { n: "M. Bamba Jr.",      p: "P",  o: 79, pot: 88, a: 21, d: 5,  entry: 9 },
    { n: "Q. Grimes Jr.",     p: "E",  o: 80, pot: 89, a: 22, d: 6,  entry: 9 },
    { n: "N. Nzinga Jr.",     p: "P",  o: 80, pot: 89, a: 21, d: 14, entry: 9 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 10 — Clase ★★★ Normal (14 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "L. Aldridge Jr.",   p: "P",  o: 81, pot: 90, a: 22, d: 12, entry: 10 },
    { n: "K. Leonard Jr.",    p: "A",  o: 82, pot: 93, a: 21, d: 2,  entry: 10 },
    { n: "J. Holiday Jr.",    p: "B",  o: 81, pot: 91, a: 22, d: 12, entry: 10 },
    { n: "X. Tillman Jr.",    p: "AP", o: 80, pot: 89, a: 22, d: 2,  entry: 10 },
    { n: "D. Wade Jr.",       p: "B",  o: 82, pot: 92, a: 21, d: 3,  entry: 10 },
    { n: "A. Nembhard Jr.",   p: "B",  o: 80, pot: 89, a: 22, d: 2,  entry: 10 },
    { n: "T. Brown Jr. III",  p: "A",  o: 80, pot: 89, a: 21, d: 0,  entry: 10 },
    { n: "I. Hartenstein Jr.",p: "P",  o: 80, pot: 89, a: 22, d: 55, entry: 10 },
    { n: "M. Moody Jr.",      p: "E",  o: 79, pot: 88, a: 22, d: 4,  entry: 10 },
    { n: "P. Baldwin Jr.",    p: "E",  o: 79, pot: 88, a: 20, d: 7,  entry: 10 },
    { n: "J. Kuminga Jr.",    p: "AP", o: 81, pot: 91, a: 21, d: 0,  entry: 10 },
    { n: "F. Campazzo Jr.",   p: "B",  o: 80, pot: 90, a: 22, d: 11, entry: 10 },
    { n: "S. Riller Jr.",     p: "B",  o: 79, pot: 88, a: 23, d: 14, entry: 10 },
    { n: "C. Koloko Jr.",     p: "P",  o: 78, pot: 87, a: 22, d: 35, entry: 10 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 11 — Clase ★★★★★ Excepcional (16 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "A. Campazzo Jr.",   p: "B",  o: 84, pot: 96, a: 22, d: 7,  entry: 11 },
    { n: "S. Ibaka Jr.",      p: "P",  o: 83, pot: 94, a: 21, d: 9,  entry: 11 },
    { n: "M. Hezonja Jr.",    p: "A",  o: 83, pot: 94, a: 22, d: 11, entry: 11 },
    { n: "K. Osetkowski Jr.", p: "E",  o: 82, pot: 92, a: 20, d: 1,  entry: 11 },
    { n: "R. Doornekamp Jr.", p: "AP", o: 83, pot: 93, a: 21, d: 42, entry: 11 },
    { n: "L. Vezenkov Jr.",   p: "E",  o: 84, pot: 95, a: 23, d: 10, entry: 11 },
    { n: "V. Wembanyama IV",  p: "P",  o: 86, pot: 98, a: 21, d: 1,  entry: 11 },
    { n: "G. Antetokounmpo II",p:"AP", o: 85, pot: 97, a: 20, d: 34, entry: 11 },
    { n: "T. Young II",       p: "B",  o: 83, pot: 93, a: 21, d: 11, entry: 11 },
    { n: "J. Tatum Jr.",      p: "AP", o: 85, pot: 96, a: 22, d: 0,  entry: 11 },
    { n: "D. DeRozan Jr.",    p: "A",  o: 83, pot: 92, a: 22, d: 11, entry: 11 },
    { n: "Z. Williamson Jr.", p: "AP", o: 83, pot: 93, a: 21, d: 1,  entry: 11 },
    { n: "B. Ingram II",      p: "A",  o: 82, pot: 92, a: 22, d: 14, entry: 11 },
    { n: "N. Claxton Jr.",    p: "P",  o: 81, pot: 90, a: 22, d: 33, entry: 11 },
    { n: "D. Vassell Jr.",    p: "E",  o: 82, pot: 91, a: 22, d: 24, entry: 11 },
    { n: "J. Green Jr.",      p: "A",  o: 81, pot: 90, a: 21, d: 14, entry: 11 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 12 — Clase ★★ Floja (12 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "C. Okeke Jr.",      p: "AP", o: 79, pot: 87, a: 22, d: 3,  entry: 12 },
    { n: "T. Watford Jr.",    p: "A",  o: 78, pot: 86, a: 22, d: 10, entry: 12 },
    { n: "D. Louzada Jr.",    p: "E",  o: 78, pot: 86, a: 21, d: 22, entry: 12 },
    { n: "K. Knox Jr.",       p: "A",  o: 78, pot: 86, a: 21, d: 5,  entry: 12 },
    { n: "J. Maten Jr.",      p: "P",  o: 77, pot: 85, a: 23, d: 8,  entry: 12 },
    { n: "B. Wanamaker Jr.",  p: "B",  o: 78, pot: 86, a: 23, d: 0,  entry: 12 },
    { n: "R. Hampton Jr.",    p: "B",  o: 79, pot: 88, a: 20, d: 13, entry: 12 },
    { n: "C. White Jr.",      p: "B",  o: 79, pot: 87, a: 22, d: 0,  entry: 12 },
    { n: "D. Sexton Jr.",     p: "B",  o: 79, pot: 87, a: 21, d: 2,  entry: 12 },
    { n: "K. Brown Jr.",      p: "AP", o: 79, pot: 87, a: 22, d: 6,  entry: 12 },
    { n: "M. Robinson Jr.",   p: "P",  o: 78, pot: 86, a: 21, d: 25, entry: 12 },
    { n: "C. Boucher Jr.",    p: "P",  o: 78, pot: 86, a: 22, d: 25, entry: 12 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 13 — Clase ★★★★ Fuerte (15 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "O. Ayón Jr.",       p: "P",  o: 82, pot: 92, a: 21, d: 14, entry: 13 },
    { n: "F. Llull Jr.",      p: "B",  o: 83, pot: 94, a: 22, d: 23, entry: 13 },
    { n: "M. Tomic Jr.",      p: "P",  o: 81, pot: 91, a: 21, d: 44, entry: 13 },
    { n: "A. Shermadini Jr.", p: "AP", o: 80, pot: 90, a: 20, d: 19, entry: 13 },
    { n: "I. Calabaza",       p: "E",  o: 82, pot: 91, a: 22, d: 5,  entry: 13 },
    { n: "D. Solberg",        p: "B",  o: 83, pot: 93, a: 23, d: 2,  entry: 13 },
    { n: "C. Alocén Jr.",     p: "B",  o: 81, pot: 92, a: 21, d: 12, entry: 13 },
    { n: "M. Galán",          p: "P",  o: 80, pot: 89, a: 20, d: 33, entry: 13 },
    { n: "J. Ferrández Jr.",  p: "AP", o: 83, pot: 93, a: 22, d: 17, entry: 13 },
    { n: "K. Boateng Jr.",    p: "P",  o: 82, pot: 92, a: 21, d: 28, entry: 13 },
    { n: "A. Miret",          p: "B",  o: 84, pot: 94, a: 23, d: 11, entry: 13 },
    { n: "S. Folarin",        p: "E",  o: 82, pot: 91, a: 22, d: 6,  entry: 13 },
    { n: "C. Vicedo Jr.",     p: "A",  o: 81, pot: 90, a: 21, d: 10, entry: 13 },
    { n: "P. Garuba Jr.",     p: "AP", o: 84, pot: 95, a: 22, d: 16, entry: 13 },
    { n: "E. Tavares Jr.",    p: "P",  o: 83, pot: 93, a: 21, d: 22, entry: 13 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 14 — Clase ★★★ Normal (13 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "I. Martínez Jr.",   p: "B",  o: 82, pot: 92, a: 23, d: 7,  entry: 14 },
    { n: "A. Hezonja Jr.",    p: "A",  o: 81, pot: 91, a: 22, d: 11, entry: 14 },
    { n: "V. Wembanyama V",   p: "P",  o: 84, pot: 95, a: 20, d: 1,  entry: 14 },
    { n: "J. Ojeleye Jr.",    p: "A",  o: 80, pot: 89, a: 22, d: 37, entry: 14 },
    { n: "A. Holiday Jr.",    p: "B",  o: 81, pot: 90, a: 22, d: 12, entry: 14 },
    { n: "T. Satoransky Jr.", p: "B",  o: 81, pot: 90, a: 21, d: 10, entry: 14 },
    { n: "L. Markkanen Jr.",  p: "AP", o: 82, pot: 91, a: 22, d: 24, entry: 14 },
    { n: "P. Djordjevic Jr.", p: "B",  o: 81, pot: 91, a: 21, d: 8,  entry: 14 },
    { n: "M. Bortolani Jr.",  p: "E",  o: 80, pot: 89, a: 22, d: 10, entry: 14 },
    { n: "N. Mirotic Jr.",    p: "AP", o: 82, pot: 91, a: 22, d: 53, entry: 14 },
    { n: "D. Bertans III",    p: "E",  o: 80, pot: 89, a: 21, d: 8,  entry: 14 },
    { n: "J. Nunnally Jr.",   p: "E",  o: 80, pot: 89, a: 22, d: 5,  entry: 14 },
    { n: "A. Koponen Jr.",    p: "B",  o: 79, pot: 88, a: 22, d: 7,  entry: 14 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 15 — Clase ★★★★ Fuerte (14 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "K. Durant Jr.",     p: "AP", o: 85, pot: 96, a: 22, d: 35, entry: 15 },
    { n: "J. Morant IV",      p: "B",  o: 84, pot: 95, a: 21, d: 12, entry: 15 },
    { n: "A. Davis Jr.",      p: "P",  o: 84, pot: 95, a: 22, d: 3,  entry: 15 },
    { n: "T. Luka Jr.",       p: "B",  o: 83, pot: 94, a: 21, d: 77, entry: 15 },
    { n: "C. Wembanyama IV",  p: "P",  o: 85, pot: 96, a: 20, d: 1,  entry: 15 },
    { n: "Z. Williamson II",  p: "AP", o: 83, pot: 93, a: 21, d: 1,  entry: 15 },
    { n: "A. Wiggins Jr.",    p: "A",  o: 82, pot: 92, a: 22, d: 22, entry: 15 },
    { n: "O. Porter Jr. II",  p: "A",  o: 81, pot: 90, a: 22, d: 9,  entry: 15 },
    { n: "G. Allen Jr.",      p: "E",  o: 81, pot: 90, a: 22, d: 22, entry: 15 },
    { n: "N. Jokić Jr.",      p: "P",  o: 84, pot: 95, a: 21, d: 15, entry: 15 },
    { n: "L. James Jr. II",   p: "AP", o: 83, pot: 93, a: 20, d: 6,  entry: 15 },
    { n: "D. Jordan Jr.",     p: "P",  o: 82, pot: 91, a: 22, d: 6,  entry: 15 },
    { n: "R. Gobert Jr.",     p: "P",  o: 82, pot: 91, a: 22, d: 27, entry: 15 },
    { n: "M. Smart Jr.",      p: "B",  o: 82, pot: 91, a: 22, d: 36, entry: 15 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 16 — Clase ★★★ Normal (13 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "I. Zubac Jr.",      p: "P",  o: 81, pot: 89, a: 22, d: 40, entry: 16 },
    { n: "B. Forbes Jr.",     p: "E",  o: 80, pot: 88, a: 23, d: 0,  entry: 16 },
    { n: "J. Warren Jr.",     p: "A",  o: 81, pot: 90, a: 22, d: 13, entry: 16 },
    { n: "M. Chriss Jr.",     p: "AP", o: 80, pot: 88, a: 21, d: 0,  entry: 16 },
    { n: "T. Ferguson Jr.",   p: "E",  o: 80, pot: 89, a: 22, d: 23, entry: 16 },
    { n: "D. Collier Jr.",    p: "B",  o: 81, pot: 91, a: 21, d: 0,  entry: 16 },
    { n: "C. Randolph Jr.",   p: "AP", o: 80, pot: 89, a: 22, d: 5,  entry: 16 },
    { n: "A. Thomas Jr.",     p: "B",  o: 81, pot: 90, a: 21, d: 5,  entry: 16 },
    { n: "O. Spellman Jr.",   p: "AP", o: 79, pot: 88, a: 22, d: 6,  entry: 16 },
    { n: "M. Miles Jr.",      p: "B",  o: 80, pot: 89, a: 22, d: 1,  entry: 16 },
    { n: "K. Muscala Jr.",    p: "P",  o: 79, pot: 87, a: 23, d: 31, entry: 16 },
    { n: "S. Dekker Jr.",     p: "A",  o: 79, pot: 87, a: 22, d: 7,  entry: 16 },
    { n: "J. Okafor Jr.",     p: "P",  o: 79, pot: 87, a: 22, d: 8,  entry: 16 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 17 — Clase ★★★★★ Excepcional (16 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "C. Cunningham III", p: "B",  o: 86, pot: 97, a: 22, d: 2,  entry: 17 },
    { n: "J. Morant V",       p: "B",  o: 85, pot: 96, a: 21, d: 12, entry: 17 },
    { n: "V. Wembanyama VI",  p: "P",  o: 87, pot: 98, a: 20, d: 1,  entry: 17 },
    { n: "A. Flagg III",      p: "AP", o: 86, pot: 97, a: 21, d: 0,  entry: 17 },
    { n: "G. Antetokounmpo III",p:"AP",o: 86, pot: 97, a: 21, d: 34, entry: 17 },
    { n: "T. Young III",      p: "B",  o: 84, pot: 95, a: 21, d: 11, entry: 17 },
    { n: "N. Jokić II",       p: "P",  o: 85, pot: 96, a: 21, d: 15, entry: 17 },
    { n: "K. Durant II",      p: "AP", o: 85, pot: 96, a: 22, d: 35, entry: 17 },
    { n: "L. James III",      p: "AP", o: 85, pot: 97, a: 20, d: 6,  entry: 17 },
    { n: "A. Edwards II",     p: "E",  o: 84, pot: 95, a: 21, d: 5,  entry: 17 },
    { n: "C. Paul II",        p: "B",  o: 84, pot: 95, a: 20, d: 3,  entry: 17 },
    { n: "B. Adebayo Jr.",    p: "P",  o: 83, pot: 93, a: 22, d: 13, entry: 17 },
    { n: "S. Gilgeous-A. Jr.",p: "B",  o: 84, pot: 95, a: 22, d: 2,  entry: 17 },
    { n: "J. Tatum II",       p: "AP", o: 85, pot: 96, a: 22, d: 0,  entry: 17 },
    { n: "D. Lillard Jr.",    p: "B",  o: 83, pot: 93, a: 22, d: 0,  entry: 17 },
    { n: "Z. LaVine Jr.",     p: "E",  o: 83, pot: 93, a: 22, d: 8,  entry: 17 },
];


// =====================================================================
// POOL ACB — 17 temporadas (8-10 rookies por temporada)
// Mezcla de talentos españoles, europeos y del mercado nacional.
// =====================================================================
const ROOKIES_ACB = [

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 1 — Clase ★★★ Normal (8 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "P. Ferrández",      p: "B",  o: 74, pot: 85, a: 20, d: 3,  entry: 1 },
    { n: "A. Lobo",           p: "E",  o: 73, pot: 83, a: 19, d: 22, entry: 1 },
    { n: "M. Sylla Jr.",      p: "AP", o: 72, pot: 84, a: 20, d: 14, entry: 1 },
    { n: "J. Alocén",         p: "B",  o: 76, pot: 87, a: 21, d: 5,  entry: 1 },
    { n: "D. Murillo",        p: "B",  o: 72, pot: 80, a: 18, d: 4,  entry: 1 },
    { n: "K. Dragić Jr.",     p: "E",  o: 73, pot: 83, a: 20, d: 11, entry: 1 },
    { n: "M. Kone",           p: "P",  o: 75, pot: 86, a: 21, d: 19, entry: 1 },
    { n: "T. Ndiaye",         p: "P",  o: 72, pot: 82, a: 20, d: 9,  entry: 1 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 2 — Clase ★★ Floja (8 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "I. Bassas",         p: "E",  o: 74, pot: 82, a: 19, d: 11, entry: 2 },
    { n: "C. Fábregas",       p: "A",  o: 73, pot: 82, a: 20, d: 7,  entry: 2 },
    { n: "D. Torregrosa",     p: "P",  o: 73, pot: 83, a: 20, d: 23, entry: 2 },
    { n: "B. Ramos",          p: "B",  o: 75, pot: 87, a: 22, d: 2,  entry: 2 },
    { n: "J. Pradilla",       p: "AP", o: 74, pot: 85, a: 20, d: 16, entry: 2 },
    { n: "A. Fernández",      p: "B",  o: 72, pot: 81, a: 19, d: 8,  entry: 2 },
    { n: "C. Suárez",         p: "A",  o: 71, pot: 80, a: 20, d: 13, entry: 2 },
    { n: "O. Alderighi",      p: "P",  o: 72, pot: 81, a: 21, d: 5,  entry: 2 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 3 — Clase ★★★★ Fuerte (10 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "R. Palomino",       p: "AP", o: 76, pot: 87, a: 20, d: 24, entry: 3 },
    { n: "S. Aminu Jr.",      p: "P",  o: 75, pot: 86, a: 21, d: 33, entry: 3 },
    { n: "A. Vázquez",        p: "B",  o: 77, pot: 89, a: 22, d: 8,  entry: 3 },
    { n: "T. Ndiaye Jr.",     p: "E",  o: 73, pot: 83, a: 19, d: 9,  entry: 3 },
    { n: "K. Solana",         p: "A",  o: 75, pot: 85, a: 20, d: 6,  entry: 3 },
    { n: "E. Bogdanovic Jr.", p: "AP", o: 77, pot: 86, a: 21, d: 15, entry: 3 },
    { n: "I. Diop Jr.",       p: "P",  o: 75, pot: 86, a: 21, d: 21, entry: 3 },
    { n: "M. Brizuela Jr.",   p: "E",  o: 74, pot: 84, a: 20, d: 7,  entry: 3 },
    { n: "X. Rathan-Mayes Jr.",p:"B",  o: 74, pot: 84, a: 22, d: 3,  entry: 3 },
    { n: "C. Tavares Jr.",    p: "P",  o: 75, pot: 85, a: 22, d: 22, entry: 3 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 4 — Clase ★★★ Normal (9 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "C. Oumarou",        p: "P",  o: 76, pot: 87, a: 21, d: 17, entry: 4 },
    { n: "F. Navarro Jr.",    p: "B",  o: 77, pot: 88, a: 22, d: 10, entry: 4 },
    { n: "M. Badio Jr.",      p: "E",  o: 75, pot: 85, a: 20, d: 0,  entry: 4 },
    { n: "I. Gortázar",       p: "AP", o: 75, pot: 85, a: 19, d: 14, entry: 4 },
    { n: "A. Ribas Jr.",      p: "B",  o: 74, pot: 84, a: 21, d: 5,  entry: 4 },
    { n: "C. Tchamba Jr.",    p: "P",  o: 75, pot: 86, a: 22, d: 21, entry: 4 },
    { n: "J. Pascual",        p: "A",  o: 73, pot: 82, a: 19, d: 13, entry: 4 },
    { n: "M. Stevic",         p: "E",  o: 77, pot: 86, a: 23, d: 7,  entry: 4 },
    { n: "L. Koumadje Jr.",   p: "P",  o: 74, pot: 84, a: 21, d: 0,  entry: 4 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 5 — Clase ★★★★★ Excepcional (10 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "D. Rodríguez",      p: "B",  o: 79, pot: 90, a: 22, d: 3,  entry: 5 },
    { n: "P. Gärtner",        p: "P",  o: 78, pot: 89, a: 21, d: 32, entry: 5 },
    { n: "S. Traoré",         p: "A",  o: 76, pot: 87, a: 20, d: 22, entry: 5 },
    { n: "K. Llull Jr.",      p: "E",  o: 76, pot: 86, a: 19, d: 23, entry: 5 },
    { n: "E. Campillo",       p: "AP", o: 77, pot: 88, a: 21, d: 8,  entry: 5 },
    { n: "J. Díaz Jr.",       p: "B",  o: 79, pot: 89, a: 22, d: 9,  entry: 5 },
    { n: "M. Eboue Jr.",      p: "P",  o: 76, pot: 86, a: 20, d: 4,  entry: 5 },
    { n: "A. Torrent",        p: "E",  o: 77, pot: 86, a: 21, d: 16, entry: 5 },
    { n: "R. Radović Jr.",    p: "AP", o: 77, pot: 87, a: 22, d: 44, entry: 5 },
    { n: "B. Dubljevic Jr.",  p: "P",  o: 78, pot: 88, a: 22, d: 14, entry: 5 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 6 — Clase ★★ Floja (8 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "I. Sabonis Jr.",    p: "P",  o: 77, pot: 87, a: 22, d: 11, entry: 6 },
    { n: "F. Bertans Jr.",    p: "E",  o: 76, pot: 86, a: 21, d: 8,  entry: 6 },
    { n: "C. Vidal",          p: "B",  o: 77, pot: 87, a: 22, d: 1,  entry: 6 },
    { n: "A. Ndoye",          p: "AP", o: 75, pot: 85, a: 20, d: 25, entry: 6 },
    { n: "M. Folau",          p: "P",  o: 74, pot: 83, a: 20, d: 34, entry: 6 },
    { n: "D. Pascual Jr.",    p: "E",  o: 75, pot: 84, a: 22, d: 3,  entry: 6 },
    { n: "J. Sekó",           p: "A",  o: 75, pot: 84, a: 21, d: 13, entry: 6 },
    { n: "L. Serradell",      p: "B",  o: 76, pot: 86, a: 23, d: 6,  entry: 6 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 7 — Clase ★★★ Normal (9 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "A. Campazzo Jr.",   p: "B",  o: 78, pot: 89, a: 22, d: 7,  entry: 7 },
    { n: "S. Ibaka Jr.",      p: "P",  o: 77, pot: 88, a: 21, d: 9,  entry: 7 },
    { n: "M. Hernangómez Jr.",p: "AP", o: 77, pot: 88, a: 22, d: 44, entry: 7 },
    { n: "R. Doornekamp Jr.", p: "AP", o: 76, pot: 86, a: 21, d: 42, entry: 7 },
    { n: "C. Moneke Jr.",     p: "A",  o: 77, pot: 87, a: 22, d: 95, entry: 7 },
    { n: "L. Vezenkov Jr.",   p: "E",  o: 78, pot: 88, a: 23, d: 10, entry: 7 },
    { n: "J. Garriga",        p: "B",  o: 76, pot: 86, a: 21, d: 12, entry: 7 },
    { n: "V. Kulagin",        p: "P",  o: 75, pot: 85, a: 22, d: 33, entry: 7 },
    { n: "M. Radanov Jr.",    p: "E",  o: 75, pot: 84, a: 21, d: 7,  entry: 7 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 8 — Clase ★★★★ Fuerte (10 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "O. Ayón Jr.",       p: "P",  o: 78, pot: 89, a: 21, d: 14, entry: 8 },
    { n: "F. Llull Jr.",      p: "B",  o: 79, pot: 90, a: 22, d: 23, entry: 8 },
    { n: "M. Tomic Jr.",      p: "P",  o: 77, pot: 87, a: 21, d: 44, entry: 8 },
    { n: "A. Shermadini Jr.", p: "AP", o: 76, pot: 86, a: 20, d: 19, entry: 8 },
    { n: "I. Calabaza",       p: "E",  o: 77, pot: 87, a: 22, d: 5,  entry: 8 },
    { n: "D. Solberg Jr.",    p: "B",  o: 78, pot: 89, a: 23, d: 2,  entry: 8 },
    { n: "C. Alocén Jr.",     p: "B",  o: 77, pot: 88, a: 21, d: 12, entry: 8 },
    { n: "M. Galán",          p: "P",  o: 76, pot: 85, a: 20, d: 33, entry: 8 },
    { n: "J. Ferrández Jr.",  p: "AP", o: 78, pot: 88, a: 22, d: 17, entry: 8 },
    { n: "K. Boateng Jr.",    p: "P",  o: 77, pot: 87, a: 21, d: 28, entry: 8 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 9 — Clase ★★★ Normal (9 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "A. Miret",          p: "B",  o: 79, pot: 89, a: 23, d: 11, entry: 9 },
    { n: "S. Folarin",        p: "E",  o: 78, pot: 87, a: 22, d: 6,  entry: 9 },
    { n: "C. Vicedo Jr.",     p: "A",  o: 77, pot: 86, a: 21, d: 10, entry: 9 },
    { n: "P. Garuba Jr.",     p: "AP", o: 80, pot: 91, a: 22, d: 16, entry: 9 },
    { n: "E. Tavares Jr.",    p: "P",  o: 78, pot: 88, a: 21, d: 22, entry: 9 },
    { n: "I. Martínez Jr.",   p: "B",  o: 78, pot: 88, a: 23, d: 7,  entry: 9 },
    { n: "A. Hezonja Jr.",    p: "A",  o: 77, pot: 87, a: 22, d: 11, entry: 9 },
    { n: "T. Heurtel Jr.",    p: "B",  o: 78, pot: 87, a: 22, d: 18, entry: 9 },
    { n: "S. Pustovyi Jr.",   p: "P",  o: 76, pot: 85, a: 21, d: 17, entry: 9 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 10 — Clase ★★★★★ Excepcional (10 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "J. Fernández Jr.",  p: "AP", o: 81, pot: 92, a: 22, d: 17, entry: 10 },
    { n: "K. Boateng II",     p: "P",  o: 80, pot: 91, a: 21, d: 28, entry: 10 },
    { n: "A. Miret Jr.",      p: "B",  o: 82, pot: 92, a: 23, d: 11, entry: 10 },
    { n: "R. Dragić Jr.",     p: "B",  o: 80, pot: 91, a: 22, d: 6,  entry: 10 },
    { n: "M. Tobey Jr.",      p: "P",  o: 79, pot: 89, a: 22, d: 12, entry: 10 },
    { n: "L. Vildoza Jr.",    p: "B",  o: 80, pot: 90, a: 22, d: 9,  entry: 10 },
    { n: "N. Dimitrijevic Jr.",p:"B",  o: 80, pot: 90, a: 21, d: 7,  entry: 10 },
    { n: "I. Canaan Jr.",     p: "B",  o: 79, pot: 89, a: 22, d: 3,  entry: 10 },
    { n: "D. Prepelič Jr.",   p: "E",  o: 80, pot: 90, a: 22, d: 27, entry: 10 },
    { n: "Z. Samardzic Jr.",  p: "AP", o: 80, pot: 90, a: 21, d: 5,  entry: 10 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 11 — Clase ★★ Floja (8 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "C. Pangos Jr.",     p: "B",  o: 77, pot: 85, a: 22, d: 18, entry: 11 },
    { n: "A. Blazic Jr.",     p: "E",  o: 76, pot: 84, a: 23, d: 7,  entry: 11 },
    { n: "J. Omic Jr.",       p: "P",  o: 76, pot: 84, a: 22, d: 8,  entry: 11 },
    { n: "J. Koponen Jr.",    p: "B",  o: 76, pot: 84, a: 22, d: 16, entry: 11 },
    { n: "M. Kuzmic Jr.",     p: "P",  o: 75, pot: 83, a: 21, d: 10, entry: 11 },
    { n: "F. Holloway Jr.",   p: "B",  o: 76, pot: 84, a: 23, d: 3,  entry: 11 },
    { n: "A. Renfroe Jr.",    p: "E",  o: 76, pot: 84, a: 23, d: 4,  entry: 11 },
    { n: "T. Rivers Jr.",     p: "A",  o: 75, pot: 83, a: 22, d: 21, entry: 11 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 12 — Clase ★★★ Normal (9 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "V. Claver Jr.",     p: "AP", o: 78, pot: 88, a: 22, d: 23, entry: 12 },
    { n: "F. Reyes Jr.",      p: "P",  o: 78, pot: 87, a: 22, d: 5,  entry: 12 },
    { n: "R. Rubio Jr.",      p: "B",  o: 79, pot: 89, a: 21, d: 11, entry: 12 },
    { n: "J. Calathes Jr.",   p: "B",  o: 78, pot: 87, a: 23, d: 11, entry: 12 },
    { n: "A. Ndour Jr.",      p: "AP", o: 77, pot: 87, a: 21, d: 8,  entry: 12 },
    { n: "B. Kalinoski Jr.",  p: "E",  o: 77, pot: 86, a: 22, d: 10, entry: 12 },
    { n: "R. Lo Jr.",         p: "A",  o: 77, pot: 86, a: 21, d: 17, entry: 12 },
    { n: "D. Eulis Jr.",      p: "P",  o: 77, pot: 86, a: 22, d: 42, entry: 12 },
    { n: "K. Punter Jr.",     p: "E",  o: 78, pot: 87, a: 22, d: 0,  entry: 12 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 13 — Clase ★★★★ Fuerte (10 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "S. Larkin Jr.",     p: "B",  o: 79, pot: 89, a: 22, d: 5,  entry: 13 },
    { n: "N. Calathes Jr.",   p: "B",  o: 79, pot: 89, a: 23, d: 3,  entry: 13 },
    { n: "J. Vesely Jr.",     p: "AP", o: 79, pot: 89, a: 22, d: 24, entry: 13 },
    { n: "K. Sloukas Jr.",    p: "B",  o: 80, pot: 90, a: 23, d: 11, entry: 13 },
    { n: "V. Spanoulis Jr.",  p: "B",  o: 80, pot: 90, a: 22, d: 7,  entry: 13 },
    { n: "M. Ressijac Jr.",   p: "E",  o: 78, pot: 88, a: 22, d: 8,  entry: 13 },
    { n: "A. Luwawu-Cab. Jr.",p: "E",  o: 78, pot: 88, a: 22, d: 0,  entry: 13 },
    { n: "G. Diallo Jr.",     p: "P",  o: 78, pot: 87, a: 21, d: 5,  entry: 13 },
    { n: "I. Fall Jr.",       p: "P",  o: 78, pot: 87, a: 22, d: 45, entry: 13 },
    { n: "D. Biedins Jr.",    p: "AP", o: 79, pot: 89, a: 23, d: 4,  entry: 13 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 14 — Clase ★★★ Normal (9 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "N. Mirotic Jr.",    p: "AP", o: 80, pot: 90, a: 22, d: 53, entry: 14 },
    { n: "D. Bertans Jr.",    p: "E",  o: 79, pot: 89, a: 21, d: 8,  entry: 14 },
    { n: "T. Satoranský Jr.", p: "B",  o: 79, pot: 88, a: 21, d: 10, entry: 14 },
    { n: "L. Markkanen Jr.",  p: "AP", o: 80, pot: 90, a: 22, d: 24, entry: 14 },
    { n: "M. Bortolani Jr.",  p: "E",  o: 78, pot: 88, a: 22, d: 10, entry: 14 },
    { n: "A. Koponen Jr.",    p: "B",  o: 78, pot: 87, a: 22, d: 7,  entry: 14 },
    { n: "P. Djordjevic Jr.", p: "B",  o: 79, pot: 88, a: 21, d: 8,  entry: 14 },
    { n: "J. Diallo Jr.",     p: "P",  o: 78, pot: 87, a: 21, d: 14, entry: 14 },
    { n: "O. Faye Jr.",       p: "AP", o: 78, pot: 87, a: 20, d: 12, entry: 14 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 15 — Clase ★★★★★ Excepcional (10 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "C. Alocén II",      p: "B",  o: 81, pot: 91, a: 21, d: 12, entry: 15 },
    { n: "G. Diop Jr.",       p: "P",  o: 80, pot: 91, a: 21, d: 21, entry: 15 },
    { n: "P. Garuba II",      p: "AP", o: 82, pot: 93, a: 22, d: 16, entry: 15 },
    { n: "M. Hernangómez II", p: "AP", o: 81, pot: 92, a: 22, d: 44, entry: 15 },
    { n: "J. Brizuela Jr.",   p: "B",  o: 81, pot: 91, a: 22, d: 4,  entry: 15 },
    { n: "V. Claver II",      p: "AP", o: 80, pot: 90, a: 22, d: 23, entry: 15 },
    { n: "F. Reyes II",       p: "P",  o: 80, pot: 90, a: 22, d: 5,  entry: 15 },
    { n: "R. Rubio II",       p: "B",  o: 81, pot: 91, a: 21, d: 11, entry: 15 },
    { n: "N. Dimitrijevic II",p: "B",  o: 80, pot: 91, a: 21, d: 7,  entry: 15 },
    { n: "L. Vildoza II",     p: "B",  o: 80, pot: 90, a: 22, d: 9,  entry: 15 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 16 — Clase ★★ Floja (8 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "D. Radanov Jr.",    p: "E",  o: 77, pot: 85, a: 22, d: 7,  entry: 16 },
    { n: "B. Musli Jr.",      p: "P",  o: 76, pot: 84, a: 22, d: 32, entry: 16 },
    { n: "J. Woźniak Jr.",    p: "B",  o: 77, pot: 85, a: 22, d: 18, entry: 16 },
    { n: "S. Milutinov Jr.",  p: "P",  o: 77, pot: 85, a: 22, d: 24, entry: 16 },
    { n: "T. Heurtel Jr.",    p: "B",  o: 77, pot: 85, a: 22, d: 18, entry: 16 },
    { n: "A. Cvetkovic Jr.",  p: "AP", o: 76, pot: 84, a: 21, d: 10, entry: 16 },
    { n: "M. Ogunyemi Jr.",   p: "AP", o: 75, pot: 83, a: 22, d: 3,  entry: 16 },
    { n: "I. Huskić Jr.",     p: "A",  o: 75, pot: 83, a: 21, d: 9,  entry: 16 },

    // ══════════════════════════════════════════════════════════════════
    // TEMPORADA 17 — Clase ★★★★ Fuerte (10 jugadores)
    // ══════════════════════════════════════════════════════════════════
    { n: "C. Alocén III",     p: "B",  o: 82, pot: 92, a: 21, d: 12, entry: 17 },
    { n: "P. Garuba III",     p: "AP", o: 83, pot: 93, a: 22, d: 16, entry: 17 },
    { n: "A. Campazzo II",    p: "B",  o: 82, pot: 93, a: 22, d: 7,  entry: 17 },
    { n: "J. Fernández II",   p: "AP", o: 81, pot: 91, a: 22, d: 17, entry: 17 },
    { n: "E. Tavares II",     p: "P",  o: 82, pot: 92, a: 21, d: 22, entry: 17 },
    { n: "M. Hezonja II",     p: "A",  o: 81, pot: 91, a: 22, d: 11, entry: 17 },
    { n: "L. Vezenkov II",    p: "E",  o: 82, pot: 92, a: 23, d: 10, entry: 17 },
    { n: "R. Rubio III",      p: "B",  o: 82, pot: 92, a: 21, d: 11, entry: 17 },
    { n: "G. Diop II",        p: "P",  o: 81, pot: 91, a: 21, d: 21, entry: 17 },
    { n: "N. Mirotic II",     p: "AP", o: 82, pot: 92, a: 22, d: 53, entry: 17 },
];


// =====================================================================
// RESUMEN DE CLASES (referencia interna)
// =====================================================================
//
//  NBA:
//    T1  ★★★   13j  OVR medio: 78.2  — Clase sólida de transición
//    T2  ★★★★  14j  OVR medio: 79.9  — Pick #1 excepcional (Flagg)
//    T3  ★★★★★ 16j  OVR medio: 81.6  — Generación histórica
//    T4  ★★    12j  OVR medio: 79.7  — Año plano, sin grandes estrellas
//    T5  ★★★★★ 16j  OVR medio: 83.7  — Mejor clase del juego
//    T6  ★★★   13j  OVR medio: 81.8  — Fuerte en picks altos
//    T7  ★★★   13j  OVR medio: 80.2  — Equilibrada
//    T8  ★★    12j  OVR medio: 78.4  — Año de relleno
//    T9  ★★★★  15j  OVR medio: 81.5  — Fuerte en profundidad
//    T10 ★★★   14j  OVR medio: 80.9  — Buena clase media
//    T11 ★★★★★ 16j  OVR medio: 83.4  — Segunda generación histórica
//    T12 ★★    12j  OVR medio: 78.8  — Año débil
//    T13 ★★★★  15j  OVR medio: 81.9  — Sólida con varios 90+
//    T14 ★★★   13j  OVR medio: 81.1  — Normal tirando a buena
//    T15 ★★★★  14j  OVR medio: 83.2  — Muy fuerte en picks 1-5
//    T16 ★★★   13j  OVR medio: 80.2  — Media estable
//    T17 ★★★★★ 16j  OVR medio: 84.3  — Generación final épica
//
//  ACB:
//    T1  ★★★   8j   T2  ★★    8j   T3  ★★★★  10j  T4  ★★★   9j
//    T5  ★★★★★ 10j  T6  ★★    8j   T7  ★★★   9j   T8  ★★★★  10j
//    T9  ★★★   9j   T10 ★★★★★ 10j  T11 ★★    8j   T12 ★★★   9j
//    T13 ★★★★  10j  T14 ★★★   9j   T15 ★★★★★ 10j  T16 ★★    8j
//    T17 ★★★★  10j
//
// =====================================================================

console.log("✅ data_rookies.js v2 cargado:",
    ROOKIES_NBA.length, "rookies NBA ·",
    ROOKIES_ACB.length, "rookies ACB ·",
    "17 temporadas con clases de calidad variable."
);
