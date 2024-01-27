function generateText() {
    var answer1 = document.getElementById("answer1").value;
    var answer2 = document.getElementById("answer2").value;
    var answer3 = document.getElementById("answer3").value;


    var queryParams = `?answer1=${encodeURIComponent(answer1)}&answer2=${encodeURIComponent(answer2)}&answer3=${encodeURIComponent(answer3)}`;

 
    window.location.href = "results.html" + queryParams;
}
