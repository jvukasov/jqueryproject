(function($){
    $.fn.getFormData = function(){
        let data = {};
        let dataArray = $(this).serializeArray();
        /*  ovaj dio nam ne radi dobro 
        for(let item in dataArray){
            data[item.name] = item.value;
        }
        */
       for(let i = 0; i< dataArray.length; i++){
           data[dataArray[i].name] = dataArray[i].value;
       }

        return dataArray;
    }

    // ovdje dodaješ dalje ako ti treba još neka metoda

})(jQuery);