let handleTime = function(options){

    $('body').append('<div class="clock"></div>');

    clock();
    setInterval(clock, 1000);

    function clock(){
        let date = new Date();
        let hh= date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        
        $('.clock').text(hh + ':' + mm + ':' + ss);
    }
};