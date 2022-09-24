$("document").ready(function () {
        
    //ayam
    $(".ayam").click(function () {
        $(this).css({
            "background-image" : "url(images/ayam1.jpeg)"
        });
    });
    $(".ayam").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/ayam.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#unggas");
    });

    //bebek
    $(".bebek").click(function () {
        $(this).css({
            "background-image" : "url(images/duck1.jpg)"
        });
    });
    $(".bebek").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/duck.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#unggas");
    });

    //angsa
    $(".angsa").click(function () {
        $(this).css({
            "background-image" : "url(images/swan.jpg)"
        });
    });
    $(".angsa").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/swan.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#unggas");
    });

    //kalkun
    $(".kalkun").click(function () {
        $(this).css({
            "background-image" : "url(images/turkey.jpg)"
        });
    });
    $(".kalkun").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/turkey.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#unggas");
    });

    //----------------------------------------------mammals----------------------------------------------
    //harimau
    $(".harimau").click(function () {
        $(this).css({
            "background-image" : "url(images/tiger1.jpg)"
        });
    });
    $(".harimau").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/Tiger-roaring.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#mamals");
    });

    //kucing
    $(".kucing").click(function () {
        $(this).css({
            "background-image" : "url(images/cat1.jpg)"
        });
    });
    $(".kucing").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/cat.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#mamals");
    });

    //singa
    $(".singa").click(function () {
        $(this).css({
            "background-image" : "url(images/lion.jpg)"
        });
    });
    $(".singa").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/lion.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#mamals");
    });

    //anjing
    $(".anjing").click(function () {
        $(this).css({
            "background-image" : "url(images/golden-retriever1.jpg)"
        });
    });
   $(".anjing").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/dog.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#mamals");
    });

    //----------------------------------------------ternak----------------------------------------------
    //sapi
    $(".sapi").click(function () {
        $(this).css({
            "background-image" : "url(images/cow1.jpg)"
        });
    });
    $(".sapi").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/cow.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#ternak");
    });

    //kambing
    $(".kambing").click(function () {
        $(this).css({
            "background-image" : "url(images/goat1.jpg)"
        });
    });
    $(".kambing").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/goat.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#ternak");
    });

    //kuda
    $(".kuda").click(function () {
        $(this).css({
            "background-image" : "url(images/horse1.jpg)"
        });
    });
    $(".kuda").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/horse.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#ternak");
    });

    //lebah
    $(".lebah").click(function () {
        $(this).css({
            "background-image" : "url(images/bee1.jpg)"
        });
    });
    $(".lebah").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/bee-buzzing.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#ternak");
    });

    //----------------------------------------------buas----------------------------------------------
    //coyote
    $(".coyote").click(function () {
        $(this).css({
            "background-image" : "url(images/coyote.jpg)"
        });
    });
    $(".coyote").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/coyote.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#buas");
    });

    //wolf
    $(".wolf").click(function () {
        $(this).css({
            "background-image" : "url(images/wolf.jpg)"
        });
    });
    $(".wolf").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/wolf.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#buas");
    });

    //fox
    $(".fox").click(function () {
        $(this).css({
            "background-image" : "url(images/fox.jpg)"
        });
    });
    $(".bebek").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/fox.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#buas");
    });

    //bear
    $(".bear").click(function () {
        $(this).css({
            "background-image" : "url(images/bear.jpg)"
        });
    });
    $(".bear").click(function () {
        $("<audio></audio>").attr({
            'src': 'audio/bear.mp3',
            'volume': 0.4,
            'autoplay': 'autoplay'
        }).appendTo("div#unggas2");
    });
});
