let handleLogin = function (options) {
    let loginForm = $(options.loginForm);

    // dodajemo event  listener
    $('#loginForm input').on('focus', function(e){
        e.preventDefault();
        $(this).addClass('text-danger');    //  ima i ~ removeClass
        $(this).css('box-shadow', '0 0 5px #38367f');
    });      

    $('#loginForm input').on('blur', function(e){
        e.preventDefault();
        let elementName = $(this).attr('name');  //ime atriguta tzv. get
        // let elementName = $(this).attr('name', 'novaVrijednostAtributa');  // promjena imena atr tzv. set
        console.log(elementName);

        //$(this).removeAttr('style');
        if($(this).hasClass('text-danger')){
            //$(this).removeClass('text-danger'){
                console.log ('ima');
            } else {
                console.log('nema');
            }
        }
        //$(this).removeClass('text-dange');  // namjerna greška (na kraju fali slovo r), klasu nije pronašao i ništa se ne gogađa

    });   


    // console.log(loginForm);    
    // dodavanje event listenera
    // loginForm.on('submit', function(e){      one - listener radi samo jednom  DRŽI se ONE ili ON iako postoji dosta drugih tehnika
    loginForm.on('submit', function(e){
        e.preventDefault();

        // let formData = $(this).serialize();
        // let formData = $(this).serializeArray();
        // let formData = new FormData($(this)[0]);  // ne radi dobro zbog nekog razloga
        let formData = $(this).getFormData();
        console.log(formData);
    });
    // loginForm.off('submit');  // s ovim ste ubili gornji   loginForm.on('submit', ...
    

    };

    // ima još 