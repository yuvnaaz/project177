let words = [
    {
        "inputs": 5,
        "category": "sports",
        "words": ["Black", "Gorilla", "Dancing", "Madagascar", "Nice", "White", "Tigers", "Move"]
    },
    {
        "inputs": 6,
        "category": "world country name",
        "words": "france"
    },
   
]

$(document).ready(function(){
    fillblanks();
})

function fillblanks(){
    var gameOver = false;
    $(".clickable").click(function(){
        var correctGuess = false;

        let id = $(this).attr("id")
        
        var life = parseInt($("#life").text())

        for(var i = 0; i < randomWord.word.length; i++){
            if(randomWord.word.charAt(i).toLowerCase() == id){
                if(life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)){
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    if($("#blanks").text() === randomWord.word.toLowerCase()){
                        $("#result").text("You Win!")
                        correctGuess = true;
                        gameOver = true;
                    }
                }

            }
        }
        
    })

}

$(document).ready(function(){
    getTemplates();
})

function getTemplates(){
    $.ajax({
        url:"/get-template",
        type: "get",
        success: function (result){
            fillblanks(result.word)
        },
        error: function (result){
            alert(result.responseJSON.message)
        }
    })
}