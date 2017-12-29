var config = {

    paths: {
        "jquery.intro": 'Magestore_Tutorial/js/intro',
        "jquery.main": 'Magestore_Tutorial/js/main'
        
    },
    shim:{
        
        'jquery.intro':{
            'deps':['jquery']
        },
        'jquery.main':{
            'deps':['jquery.intro']
        }
    }
    /*deps: [
        
        "Magestore_Tutorial/js/main"
        
    ]*/
};