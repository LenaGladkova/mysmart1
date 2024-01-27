var urlParams = new URLSearchParams(window.location.search);
var answersDiv = document.getElementById('answers');

if (urlParams.has('answer1') && urlParams.has('answer2') && urlParams.has('answer3')) {
    var answer1 = urlParams.get('answer1');
    var answer2 = urlParams.get('answer2');
    var answer3 = urlParams.get('answer3');

    answersDiv.innerHTML = `
      <strong>Меня зовут</strong> ${answer1}
     <strong>, и мне</strong> ${answer2}
     <strong>лет. Моя професия мечты это</strong> ${answer3}
    `;
} else {
    answersDiv.innerHTML = '<p>Ответы не найдены.</p>';
}
