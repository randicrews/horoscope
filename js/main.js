
document.getElementById("tellMe").addEventListener('click', reveal)

function reveal(e){
    // 30 DAYS ARE SEP46 & NOV EVRYBODY ELSE 31 EXCEPT FEB
    e.preventDefault()
    let month = Number(document.getElementById("bdayMonth").value)
    let day = Number(document.getElementById("bdayDay").value)

    console.log(month, day)

    if /*Aquarius (Water Bearer):120–February 18*/((month === 1 && day > 19 && day < 32) || (month === 2 && day > 0 && day < 19))  {
        document.getElementById("uGoHere").innerText = 'Aquarius ~ your home will soon be full of chaos'
    } else if /*Pisces (Fish):219–March 20*/((month === 2 && day > 18 && day < 29)||(month === 3 && day > 0 && day < 21)){
        document.getElementById("uGoHere").innerText = 'Pisces ~ your life\'s chaos will bring you headaches'
    } else if /*Aries (Ram):321–April 19*/((month === 3 && day > 20 && day < 32)||(month === 4 && day > 0 && day < 20)){
        document.getElementById("uGoHere").innerText = 'Aries ~ you\'re gonna lose a bunch of money'
    } else if /*Taurus (Bull):420–May 20*/((month === 4 && day > 19 && day < 31 )||(month === 5 && day > 0 && day < 21)){
        document.getElementById("uGoHere").innerText = 'Taurus ~ tranquillo.'
    } else if /*Gemini (Twins):521–June 21*/((month === 5 && day > 20 && day < 31 )||(month === 6 && day > 0 && day < 22)){
        document.getElementById("uGoHere").innerText = 'Gemini ~ use active recall to assist in your occult studies'
    } else if /*Cancer (Crab):622–July 22*/((month === 6 && day > 21 && day < 31 )||(month === 7 && day > 0 && day < 23)){
        document.getElementById("uGoHere").innerText = 'Cancer ~ don\'t give a loan you expect to be returned'
    } else if /*Leo (Lion):723–August 22*/((month === 7 && day > 22 && day < 31 )||(month === 8 && day > 0 && day < 23)){
        document.getElementById("uGoHere").innerText = 'Leo ~ don\'t try to fix things alone'
    } else if /*Virgo (Virgin):823–September 22*/((month === 8 && day > 22 && day < 31 )||(month === 9 && day > 0 && day < 23)){
        document.getElementById("uGoHere").innerText = 'Virgo ~ prepare for bizarre news'
    } else if /*Libra (Balance):923–October 23*/((month === 9 && day > 22 && day < 31 )||(month === 10  && day > 0 && day < 24)){
        document.getElementById("uGoHere").innerText = 'Libra ~ prioritize'
    } else if /*Scorpio (Scorpion):1024–November 21*/((month === 10  && day > 23 && day < 31 )||(month === 11  && day > 0 && day < 22)){
        document.getElementById("uGoHere").innerText = 'Scorpio ~ don\'t jump to conclusions'
    } else if /*Sagittarius (Archer):1122–December 21*/((month === 11  && day > 21 && day < 31 )||(month === 12  && day > 0 && day < 22)){
        document.getElementById("uGoHere").innerText = 'Sagittarius ~ accept adventure'
    } else if /*Capricornus (Goat):1222–January 19*/((month === 12  && day > 21 && day < 31 )||(month === 1 && day > 0 && day < 20)){
        document.getElementById("uGoHere").innerText = 'Capricorn ~ hang in there, ya big schmaltz'
    }
    
}




// if /*Aquarius (Water Bearer):120–February 18*/((month === 1 || month === 1 && day > 19 && day < 32) || (month === 2 || month === 2 && day > 0 && day < 19)) {
//     document.getElementById("uGoHere").innerText = 'aqua' 
// } else if /*Pisces (Fish):219–March 20*/((month === 2 || 2 && day > 18 && day < 29)||(month === 3 || month === 3 && day > 0 && day < 21)){
//     document.getElementById("uGoHere").innerText = 'pisces'
// } else if /*Aries (Ram):321–April 19*/((month === 3 || month === 3 && day > 20 && day < 32)||(month === 4 || month === 4 && day > 0 && day < 20)){
//     document.getElementById("uGoHere").innerText = 'aries'
// } else if /*Taurus (Bull):420–May 20*/((month === 4 || month === 4 && day > 19 && day < 31 )||(month === 5 || month === 5 && day > 0 && day < 21)){
//     document.getElementById("uGoHere").innerText = 'taurus'
// } else if /*Gemini (Twins):521–June 21*/((month === 5 || month === 5 && day > 20 && day < 31 )||(month === 6 || month === 6 && day > 0 && day < 22)){
//     document.getElementById("uGoHere").innerText = 'gemini'
// } else if /*Cancer (Crab):622–July 22*/((month === 6 || month === 6 && day > 21 && day < 31 )||(month === 7 || month === 7 && day > 0 && day < 23)){
//     document.getElementById("uGoHere").innerText = 'cancer'
// } else if /*Leo (Lion):723–August 22*/((month === 7 || month === 7 && day > 22 && day < 31 )||(month === 8 || month === 8 && day > 0 && day < 23)){
//     document.getElementById("uGoHere").innerText = 'leo'
// } else if /*Virgo (Virgin):823–September 22*/((month === 8 || month === 8 && day > 22 && day < 31 )||(month === 9 || month === 9 && day > 0 && day < 23)){
//     document.getElementById("uGoHere").innerText = 'virgo'
// } else if /*Libra (Balance):923–October 23*/((month === 9 || month === 9 && day > 22 && day < 31 )||(month === 10 || month === 10 && day > 0 && day < 24)){
//     document.getElementById("uGoHere").innerText = 'libra'
// } else if /*Scorpio (Scorpion):1024–November 21*/((month === 10 || month === 10 && day > 23 && day < 31 )||(month === 11 || month === 11 && day > 0 && day < 22)){
//     document.getElementById("uGoHere").innerText = 'scorpio'
// } else if /*Sagittarius (Archer):1122–December 21*/((month === 11 || month === 11 && day > 21 && day < 31 )||(month === 12 || month === 12 && day > 0 && day < 22)){
//     document.getElementById("uGoHere").innerText = 'sag'
// } else if /*Capricornus (Goat):1222–January 19*/((month === 12 || month === 12 && day > 21 && day < 31 )||(month === 1 || month === 1 && day > 0 && day < 20)){
//     document.getElementById("uGoHere").innerText = 'cap'
// }