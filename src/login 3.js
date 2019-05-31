let handleLogin = function (options) {
    let loginForm = $(options.loginForm);

    $('#loginForm input').on('focus', function(e){
        e.preventDefault();
        $(this).addClass('text-danger');  
        
        $(this).animate({
            'width': '250px'
        }, 1000);

        //$(this).css(){
        //    width: '250px',
        //    'box-shadow': '0 0 3px #462677'
        //}
    });  
    
    let.onInputBlur = function(e){
        e.preventDefault();
        
        let elementName = $(this).attr('name'); 
        console.log(elementName);

        $(this).removeAttr('style');
        
        if($(this).hasClass('text-danger')){
                console.log ('IMA');
        } else {
                console.log('NEMA');
        }
    }
    $('#loginForm input').on('blur', onInputBlur(e));   

    loginForm.on('submit', function(e){
        e.preventDefault();

        let formData = $(this).getFormData();
        console.log(formData);
    });
}; 