var urlParams = new URLSearchParams(window.location.search);
var answersDiv = document.getElementById('answers');

if (urlParams.has('answer1') && urlParams.has('answer2') && urlParams.has('answer3') &&
    urlParams.has('answer4') && urlParams.has('answer5') && urlParams.has('answer6') && urlParams.has('answer7') && urlParams.has('answer8') && urlParams.has('answer9')) {
    
    var answer1 = urlParams.get('answer1');
    var answer2 = urlParams.get('answer2');
    var answer3 = urlParams.get('answer3');
    var answer4 = urlParams.get('answer4');
    var answer5 = urlParams.get('answer5');
    var answer6 = urlParams.get('answer6');
    var answer7 = urlParams.get('answer7');
    var answer8 = urlParams.get('answer8');
    var answer9 = urlParams.get('answer9');

    answersDiv.innerHTML = `
        <strong><i> Меня зовут</i></strong> ${answer1}
        <strong><i>  , и мне</i></strong> ${answer2}
        <strong><i> лет. <p>Я нахожусь в том удивительном периоде жизни, когда каждый день происходит что-то захватывающее и потрясающее! Моя профессия мечты это</i></strong> ${answer3}
        <strong><i> , но</i></strong> ${answer4}
        <strong><i>.<p> Я довольно интересная личность и хорош(а) во всем! Но хобби, которое ближе всего мне к сердцу, это</i></strong> ${answer5}
        <strong><i>.<p> У меня, как и у большинства людей, есть место, где я хотел(а) бы побывать. Для кого-то это кровать ранним холодным утром, для кого-то шумный город с сотнями людей, а у меня... У меня</i></strong> ${answer6}
        <strong><i> .<p> У меня есть любимый жанр фильмов, и это</i></strong> ${answer7}
        <strong><i> . У меня есть любимый жанр фильмов, и это</i></strong> ${answer8}
        <strong><i> . <p>И под конец. В этом году я хочу</i></strong> ${answer9}
    `;
} else {
    answersDiv.innerHTML = '<p>Ответы не найдены.</p>';
}
