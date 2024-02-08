function generateText() {
    var answer1 = document.getElementById("answer1").value;
    var answer2 = document.getElementById("answer2").value;
    var answer3 = document.getElementById("answer3").value;
    var answer4 = document.getElementById("answer4").value;
    var answer5 = document.getElementById("answer5").value;
    var answer6 = document.getElementById("answer6").value;
    var answer7 = document.getElementById("answer7").value;
    var answer8 = document.getElementById("answer8").value;
    var answer9 = document.getElementById("answer9").value;

    var queryParams = `?answer1=${encodeURIComponent(answer1)}&answer2=${encodeURIComponent(answer2)}&answer3=${encodeURIComponent(answer3)}&answer4=${encodeURIComponent(answer4)}&answer5=${encodeURIComponent(answer5)}&answer6=${encodeURIComponent(answer6)}&answer7=${encodeURIComponent(answer7)}&answer8=${encodeURIComponent(answer8)}&answer9=${encodeURIComponent(answer9)}`;

    window.location.href = "results.html" + queryParams;
}
