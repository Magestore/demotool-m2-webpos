/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'jquery-intro',
    'mage/smart-keyboard-handler',
    'mage/mage',
    'mage/ie-class-fixer',
    
    'domReady!'
], function ($, introJs, keyboardHandler) {
    'use strict';
    

    $(".tutorials-panel .children > a").on( 'click', function() {
        $( this ).parent().children(".sub-menu").slideToggle();
        return false;
    }) ;

    $(".tutorials-panel .clone-pannel").on( 'click', function() {
        $( this ).parents(".tutorials-panel").toggleClass("active");
        $( this ).toggleClass("active");
        $(".open-pannel").removeClass("active");
        return false;
    }) ;

    $(".tutorials-panel a.intro").on( 'click', function() {
        $( ".tutorials-panel .clone-pannel" ).parents(".tutorials-panel").removeClass("active");
        $( ".tutorials-panel .clone-pannel" ).removeClass("active");
        $(".open-pannel").removeClass("active");
        return false;
    }) ;

    $(".open-pannel").on( 'click', function() {
        $(".tutorials-panel").toggleClass("active");
        $( this ).toggleClass("active");
        return false;
    }) ;
   
        
    var currentLocation = location.pathname.substr(1);

    var currentLocationurl = "m2/starter/01/";
   

    var welcome_link = currentLocationurl + 'admin/admin/dashboard/';
    var order_link = currentLocationurl + 'admin/sales/order/';
    var order_view_link = currentLocationurl + 'admin/sales/order/view/order_id/1/';
    var stocktaking_link = currentLocationurl + 'admin/inventorysuccess/stocktaking/new/';
    var inventorysuccess_link = currentLocationurl + 'admin/inventorysuccess/adjuststock/new/';

    var deliveryHistory_link = currentLocationurl + 'admin/inventorysuccess/stockMovement/transfer/';

    

    if ( currentLocation == inventorysuccess_link) { 
        inventory2_1();
    } 

    if ( currentLocation == welcome_link) { 
        intro_welcome();
    } 

    if ( currentLocation == order_link) { 
      
        inventory3_1();
    } 

    if ( currentLocation == deliveryHistory_link) { 
      
        inventory3_2();
    } 

    if ( currentLocation == stocktaking_link) { 
      
        inventory1_1();
    } 
    

    $("#intro1").on( 'click', function() {
       loadTutorial1();
    }) ;

    $("#webpos1").on( 'click', function() {
       webpos1();
    }) ;

    $("#webpos2").on( 'click', function() {
       webpos2();
    }) ;

    $("#webpos3").on( 'click', function() {
       webpos3();
    }) ;

    $("#inventory1").on( 'click', function() {
       inventory1();
    }) ;

    $("#inventory2").on( 'click', function() {
       inventory2();
    }) ;

    $("#inventory3").on( 'click', function() {
       inventory3();
    }) ;

    $("#inventory4").on( 'click', function() {
       inventory4();
    }) ;

    $("#inventory5").on( 'click', function() {
       inventory5();
    }) ;

    
    
    function addNextTutorialButton(element) {
        jQuery('.introjs-nextbutton').hide();
        jQuery('.introjs-prevbutton').after(''+ '<a href="javascript:void(0);" class="introjs-button introjs-nextbutton introjs-next-tutorial">Next </a> ');
        jQuery('.introjs-next-tutorial').click(function(event) {
            element.click();
        });
    }

    function addNextTutorialButton2(element) {
        
        jQuery('.introjs-skipbutton').after(''+ '<a href="javascript:void(0);" class="introjs-button introjs-skipbutton introjs-next-tutorial">Next </a> ');
        jQuery('.introjs-next-tutorial').click(function(event) {
            element.click();
        });
    }

    function removeNextTutorialButton() {
        if (jQuery('.introjs-next-tutorial') != undefined)
        {
            jQuery('.introjs-next-tutorial').remove();
            jQuery('.introjs-nextbutton').show();
        }
    }

    function scrollToTop(){
        jQuery("html, body").animate({ scrollTop: 0 }, "fast");
    }

    function openAllConfigurationTabs() {
        $('.section-config span +a').each(function(item) {
            if (!item.hasClassName('open'))
                item.click();
        });
    } 

   

    function intro_welcome() {
        var intro_welcome = introJs();
        intro_welcome.setOptions({
            steps: [
                {   
                   
                    intro: " <p style='text-align: center;'><b >Welcome to the backend demo of Omnichannel Retail Solution - Starter Edition by Magestore! </b> </p>  In this guide I will walk you through the backend interface and solution features. </br> <a class='intro-button_welcome introjs-button introjs-nextbutton introjs-next-tutorial' role='button' tabindex='0'>Start Tutorial</a>"
                }   
            ],
            showBullets: false,
            showStepNumbers: false,
            exitOnOverlayClick: false,
            doneLabel: "Close"
        });
        intro_welcome.start();

       
        $(".introjs-next-tutorial").on( 'click', function() {
            intro_welcome.exit();
            
             setTimeout(function(){

                $(".tutorials-panel").toggleClass("active");
                $(".introjs-button").toggleClass("active");

            }, 300);

        }) ;
    }

    function loadTutorial1() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
            {
                element: ('#menu-magento-backend-stores'),
                intro: ""
                + "<p class='intro-main-title'>Start Here</p>"
                ,
                position: 'right'
            },
            {
                element:("li[data-ui-id='menu-magento-config-system-config']"),
                intro: ""
                + "<p class='intro-main-title'>Click 'Locations' to manage store locations</p>",
                position: 'right'
            },
            ],

            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });


        intro1.start();

        intro1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
            if (intro1._currentStep == 1) { addNextTutorialButton($("li[data-ui-id='menu-magento-config-system-config'] a")[0]); }   
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            if (intro1._currentStep == 0) {
            $('#menu-magento-backend-stores .action-close')[0].click();
            setTimeout(function(){  intro1.refresh();
                jQuery('.introjs-helperLayer').css('z-index','99999998');
                $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
            }, 100);
            }
            if (intro1._currentStep == 1) {
            $('#menu-magento-backend-stores a')[0].click();
            setTimeout(function(){  intro1.refresh();
                jQuery('.introjs-helperLayer').css('pointer-events','none');
                jQuery('.introjs-overlay').css('pointer-events','none');
                $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

            }, 100);
            }
        });
    }

    function webpos1() {
        var webpos1 = introJs();
        webpos1.setOptions({
            steps: [
                {
                    element: ('#menu-magento-sales-sales'),
                    intro: ""
                    + "<p class='intro-main-title'>Start here to find out more WebPOS</p>"
                    ,
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-webpos-settings']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click 'webpos settings' to manage store settings</p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-webpos-zreport']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click here to view Sales & Report</p>",
                    position: 'right'
                },

                {
                    element:("li[data-ui-id='menu-magestore-webpos-reports']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click here to view Reports</p>",
                    position: 'right'
                },

                
                {
                    element:("li[data-ui-id='menu-magestore-webpos-roles']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click here to add or manage roles</p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-webpos-staffs']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click here to add or manage staff</p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-webpos-locations']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click here to add, manage or map store location </p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-webpos-pos']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click here to add Manage POS  </p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-webpos-checkout']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click 'POS Checkout' to view checkout page</p>",
                    position: 'right'
                },

            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });


        webpos1.start();

        webpos1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
            if (webpos1._currentStep == 8) { 
                addNextTutorialButton($("li[data-ui-id='menu-magestore-webpos-checkout'] a")[0]); 
            }   
        });
        
        webpos1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            if (webpos1._currentStep == 0) {
                $('#menu-magento-sales-sales .action-close')[0].click();
                setTimeout(function(){  webpos1.refresh();
                    jQuery('.introjs-helperLayer').css('z-index','99999998');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 100);
            }
            if (webpos1._currentStep == 1) {
                $('#menu-magento-sales-sales a')[0].click();
                setTimeout(function(){  webpos1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
        });

        webpos1.onexit(function() {
            removeNextTutorialButton();
            $('#menu-magento-sales-sales .action-close')[0].click();
        });
        
    }
    

    function webpos2() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
            {
                element: ('#menu-magento-sales-sales'),

                intro: ""
                + "<p class='intro-main-title'>Click here  </p>"
                ,
                position: 'right'
            },
            {
                element:("li[data-ui-id='menu-magestore-webpos-checkout']"),
                intro: ""
                + "<p class='intro-main-title'>Click 'POS Checkout' to view checkout page</p>",
                position: 'right'
            },
            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });


        intro1.start();

        intro1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
            if (intro1._currentStep == 1) { addNextTutorialButton($("li[data-ui-id='menu-magestore-webpos-checkout'] a")[0]); }   
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            if (intro1._currentStep == 0) {
            $('#menu-magento-sales-sales .action-close')[0].click();
            setTimeout(function(){  intro1.refresh();
                jQuery('.introjs-helperLayer').css('z-index','99999998');
                $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
            }, 100);
            }
            if (intro1._currentStep == 1) {
                $('#menu-magento-sales-sales a')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
        });

        intro1.onexit(function() {
           $('#menu-magento-sales-sales .action-close')[0].click();
        });
    }

    function webpos3() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
            {
                element: ('#menu-magento-sales-sales'),
                intro: ""
                + "<p class='intro-main-title'>Click here</p>"
                ,
                position: 'right'
            },
            {
                element:("li[data-ui-id='menu-magestore-webpos-reports']"),
                intro: ""
                + "<p class='intro-main-title'>Click 'Reports' to view page</p>",
                position: 'right'
            },
            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });


        intro1.start();

        intro1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
            if (intro1._currentStep == 1) { addNextTutorialButton($("li[data-ui-id='menu-magestore-webpos-reports'] a")[0]); }   
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            if (intro1._currentStep == 0) {
            $('#menu-magento-sales-sales .action-close')[0].click();
            setTimeout(function(){  intro1.refresh();
                jQuery('.introjs-helperLayer').css('z-index','99999998');
                $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
            }, 100);
            }
            if (intro1._currentStep == 1) {
            $('#menu-magento-sales-sales a')[0].click();
            setTimeout(function(){  intro1.refresh();
                jQuery('.introjs-helperLayer').css('pointer-events','none');
                jQuery('.introjs-overlay').css('pointer-events','none');
                $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

            }, 100);
            }
        });

        intro1.onexit(function() {
           $('#menu-magento-sales-sales .action-close')[0].click();
        });
    }

    function inventory3() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
            {
                element: ('#menu-magento-sales-sales'),
                intro: ""
                + "<p class='intro-main-title'>Sales module allows you to manage sales orders, invoices, shipments, and credit memos.</p>"
                ,
                position: 'right'
            },
            {
                element:("li[data-ui-id='menu-magento-sales-sales-order']"),
                intro: ""
                + "<p class='intro-main-title'>Order tab assists you to create a new order and manage all information of orders you created</p>",
                position: 'right'
            },
            ],
            scrollToElement:true,
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });


        intro1.start();


        intro1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
            if (intro1._currentStep == 1) { addNextTutorialButton($("li[data-ui-id='menu-magento-sales-sales-order'] a")[0]); }   
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();

            if (intro1._currentStep == 0) {
                $('#menu-magento-sales-sales .action-close')[0].click();
                setTimeout(function(){  intro1.refresh();
                    
                    jQuery('.introjs-helperLayer').css('z-index','99999998');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 100);
            }
            if (intro1._currentStep == 1) {
                $('#menu-magento-sales-sales a')[0].click();
                setTimeout(function(){  intro1.refresh();
                   
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
        });

        intro1.onexit(function() {
           $('#menu-magento-sales-sales .action-close')[0].click();
        });
    }

    function inventory3_1() {
       
        
        var preStartTimer = setInterval(function () { 
            if (jQuery('.admin__data-grid-loading-mask')[0].style.display == 'none') {
                clearInterval(preStartTimer);
               
                var intro1 = introJs();
                intro1.setOptions({
                    steps: [
                        
                        {
                            element:("div[data-role='grid-wrapper']"),
                            intro: ""
                            + "<p class='intro-main-title'>Select the order you want to create a shipment to ship the item to customer. <br> The quantity change of stock when creating a shipment is recorded in<b> Receipt/Delivery History </b> </p>"
                            ,
                            position: 'right'
                        },
                        {
                            element:("div[data-role='grid-wrapper']"),
                            intro: ""
                            + "<p class='intro-main-title'>Select the order you want to refund, then click 'Credit Meno' to refund the order and return items to warehouse. <br>  The quantity change of stock when the item is returned to the warehouse is recorded in <b>Receipt/Delivery History </b></p>"
                            ,
                            position: 'right'
                        },
                        {
                            element:("li[data-ui-id='menu-magestore-inventorysuccess-stock-transfer']"),
                            intro: ""
                            + "<p class='intro-main-title'>Receipt / Delivery History enables you to record the quantity change of product in the warehouse </p>"
                            ,
                            position: 'right'
                        },
                        
                    ],
                    exitOnOverlayClick:false,
                    skipLabel:'Close',
                    doneLabel:'Close',
                    showStepNumbers:false,
                    showBullets:false
                });

                setTimeout(function(){  intro1.refresh();
                    intro1.start();

                }, 700);

                intro1.onafterchange(function (targetElement) {
                    $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
                    if (intro1._currentStep == 2) { addNextTutorialButton($("li[data-ui-id='menu-magestore-inventorysuccess-stock-transfer'] a")[0]); }   
                    
                });
                
                intro1.onbeforechange(function(targetElement) {
                    removeNextTutorialButton();

                    if (intro1._currentStep == 2) {
                        $('#menu-magestore-inventorysuccess-inventory a')[0].click();
                        setTimeout(function(){  intro1.refresh();
                            
                            jQuery('.introjs-helperLayer').css('pointer-events','none');
                            jQuery('.introjs-overlay').css('pointer-events','none');
                            $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                        }, 100);
                    }
                    if (intro1._currentStep == 1) {
                        
                        $('#menu-magestore-inventorysuccess-inventory .action-close')[0].click();
                        $(".admin__data-grid-wrap").addClass("isintro");
                        setTimeout(function(){  
                            intro1.refresh();
                            
                           
                            jQuery('.introjs-helperLayer').css('z-index','99999998');
                            $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                        }, 100);

                        setTimeout(function(){ scrollToTop(); }, 400);
                    }

                    if (intro1._currentStep == 0) {
                        $(".admin__data-grid-wrap").addClass("isintro");
                     

                        setTimeout(function(){  
                            intro1.refresh();
                           
                           
                            jQuery('.introjs-helperLayer').css('z-index','99999998');
                            $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                        }, 100);

                        setTimeout(function(){ scrollToTop(); }, 400);
                        
                    }
                });

            } 
        },700)
        
    }
    //

    function inventory3_2() {
        var inventory3_2 = introJs();
        inventory3_2.setOptions({
            steps: [
                {
                  
                    intro: ""
                    + "<p class='intro-main-title'>This is a page where records all the physical quantity changes in the warehouse (ex: Sales shipment, Sales refund)</p>"
                    ,
                    position: 'right'
                }
            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });

        setTimeout(function(){ 
            inventory3_2.start();

        }, 700);

        inventory3_2.onafterchange(function(targetElement) {
                       
                        
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});

            if (inventory3_2._currentStep == 0) { 
        
                jQuery('.introjs-prevbutton').remove();
                jQuery('.introjs-nextbutton').remove();
                jQuery('.introjs-skipbutton').after(''+ '<a href="javascript:void(0);" class="introjs-button introjs-nextbutton introjs-next-tutorial2">Next </a> ');
                jQuery('.introjs-next-tutorial2').click(function(event) {
                    
                   
                    inventory3_2.exit();

                    setTimeout(function(){  
                        inventory5();

                    }, 400);
                });
            }   
        });

        
        
    }

    //New Stocktaking

    function inventory1() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
            {
                element: ('#menu-magestore-inventorysuccess-inventory'),
                intro: ""
                + "<p class='intro-main-title'>This module provides a clear overview of stock management over a single warehouse, helps easily stocktake, adjust inventory quantity and predict supply needs for the future.</p>"
                ,
                position: 'right'
            },
            {
                element:("li[data-ui-id='menu-magestore-inventorysuccess-create-stocktaking']"),
                intro: ""
                + "<p class='intro-main-title'>Stocktaking lets you double-check and set correct the mount of stock according to real amount in your physical warehouses.</p>",
                position: 'right'
            },
            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });


        intro1.start();

        intro1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
            if (intro1._currentStep == 1) { addNextTutorialButton($("li[data-ui-id='menu-magestore-inventorysuccess-create-stocktaking'] a")[0]); }   
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            if (intro1._currentStep == 0) {
                $('#menu-magestore-inventorysuccess-inventory .action-close')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('z-index','99999998');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 100);
            }
            if (intro1._currentStep == 1) {
                $('#menu-magestore-inventorysuccess-inventory a')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
        });

        intro1.onexit(function() {
           $('#menu-magestore-inventorysuccess-inventory .action-close')[0].click();
        });

        


    }
    
    function inventory1_1() {
        var preStartTimer = setInterval(function () { 
            if ($$('.admin__form-loading-mask').first().getStyle('display')=='none') {
                clearInterval(preStartTimer);
                var intro1 = introJs();
                intro1.setOptions({
                    steps: [
                        {
                           
                            intro: ""
                            + "<p class='intro-main-title'><p><b>Add new stocktaking feature </b></p>  Getting started to count and check the product quatity in your warehouse by add new stocktaking. A stocktaking includes 5 steps. Let's see how it works.</p>"
                            ,
                            position: 'right'
                        },
                        {
                            element:("#container"),
                            intro: ""
                            + "<p class='intro-main-title'><p><b>General information</b></p>  Enter information for your stocktaking by selecting warehouse, entering stocktaking code, stocktaker, time and reason to do this stocktaking.</p>"
                            ,
                            position: 'right'
                        },
                        {
                            element: ('#verify'),
                            intro: ""
                            + "<p class='intro-main-title'><p><b>Prepare product list:</b></p> Allow you add or import product list in the warehouse to stocktake</p>"
                            ,
                            position: 'right'
                        }
                    ],
                    exitOnOverlayClick:false,
                    skipLabel:'Close',
                    doneLabel:'Close',
                    showStepNumbers:false,
                    showBullets:false
                });

                setTimeout(function(){  
                    intro1.refresh();
                    intro1.start();

                }, 700);

                intro1.onafterchange(function (targetElement) {
                    if (intro1._currentStep == 2) { addNextTutorialButton($("#verify")); }   
                });
                
                intro1.onbeforechange(function(targetElement) {
                    removeNextTutorialButton();
                    
                });
            } 
        },700)
    }
    

    //New Stock Adjustment

    function inventory2() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
            {
                element: ('#menu-magestore-inventorysuccess-inventory'),
                intro: ""
                + "<p class='intro-main-title'>Start Here</p>"
                ,
                position: 'right'
            },
            {
                element:("li[data-ui-id='menu-magestore-inventorysuccess-create-adjuststock']"),
                intro: ""
                + "<p class='intro-main-title'>Stock Adjustment allows you to adjust stock if you experience an unbalance between your actual stock and the product list</p>",
                position: 'right'
            },
            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });


        intro1.start();

        intro1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
            if (intro1._currentStep == 1) { addNextTutorialButton($("li[data-ui-id='menu-magestore-inventorysuccess-create-adjuststock'] a")[0]); }   
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            if (intro1._currentStep == 0) {
            $('#menu-magestore-inventorysuccess-inventory .action-close')[0].click();
            setTimeout(function(){  intro1.refresh();
                jQuery('.introjs-helperLayer').css('z-index','99999998');
                $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
            }, 100);
            }
            if (intro1._currentStep == 1) {
                $('#menu-magestore-inventorysuccess-inventory a')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
        });

        intro1.onexit(function() {
           $('#menu-magestore-inventorysuccess-inventory .action-close')[0].click();
        });
    }

    function inventory2_1() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
                {
                   
                    intro: ""
                    + "<p class='intro-main-title'><b>Add new stock adjustment feature</b> <br>Stock Adjustment page enables you to enter details of a stock adjustment. Following the next steps to see how it works.</p>"
                    ,
                    position: 'right'
                },
                {
                    element:("#container"),
                    intro: ""
                    + "<p class='intro-main-title'><b>General information:</b><br>Enter information for your stock adjustment by selecting a warehouse, entering adjustment code and reason you associate with this stock adjustment</p>"
                    ,
                    position: 'right'
                },
                {
                    element: ('#start'),
                    intro: ""
                    + "<p class='intro-main-title'>Click here to start to enter the product, quantity & value you are adjusting by.</p>"
                    ,
                    position: 'right'
                }
            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });

        setTimeout(function(){  intro1.refresh();
            intro1.start();

        }, 700);

        intro1.onafterchange(function (targetElement) {
            if (intro1._currentStep == 2) { addNextTutorialButton($("#start")); }   
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            
        });
        
        
    }

    function inventory2_2() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
                {
                    element:("button[data-index='dynamic_button']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click on “Add Products to Adjust Stock” to select products.</p>"
                    ,
                    position: 'right'
                },

                {
                    element:("button[data-index='import_button']"),
                    intro: ""
                    + "<p class='intro-main-title'> Import products</p>"
                    ,
                    position: 'right'
                },

                 {
                    element:("#adjust"),
                    intro: ""
                    + "<p class='intro-main-title'> adjust</p>"
                    ,
                    position: 'right'
                },

               
                
                
            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });

        setTimeout(function(){  

            intro1.start();

        }, 700);

       

        intro1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            
            
        });
        
        
    }

    function inventory2_3() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
                {
                    element:("button[data-index='dynamic_button']"),
                    intro: ""
                    + "<p class='intro-main-title'>Click on “Add Products to adjust stock” to select products.</p>"
                    ,
                    position: 'right'
                },

                {
                    element:("div[data-role='grid-wrapper']"),
                    intro: ""
                    + "<p class='intro-main-title'>select item.</p>"
                    ,
                    position: 'right'
                },

                {
                    element:("#idscheck1"),
                    intro: ""
                    + "<p class='intro-main-title'>select item.</p>"
                    ,
                    position: 'right'
                },

                {
                    element: document.querySelectorAll('.page-actions-buttons .action-primary')[0],
                    intro: ""
                    + "<p class='intro-main-title'>Add Selected Products</p>"
                    ,
                    position: 'right'
                },

                {
                     element: ("#start"),
                    intro: ""
                    + "<p class='intro-main-title'>Add Selected Products</p>"
                    ,
                    position: 'right'
                },
                
                
            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });

        setTimeout(function(){  intro1.refresh();
            intro1.start();

        }, 700);

        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();

            if (intro1._currentStep == 0) {
                $('.modal-slide .action-close')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            
            if (intro1._currentStep == 1) {
                $('.admin__field-complex-elements-button-list .action-secondary')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
        });
        
        
    }
   
    //
    function inventory4() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
                {
                    element: ('#menu-magestore-inventorysuccess-inventory'),
                    intro: ""
                    + "<p class='intro-main-title'>This module provides a clear overview of stock management over a single warehouse, helps easily stocktake, adjust inventory quantity and predict supply needs for the future.</p>"
                    ,
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-supplyneeds']"),
                    intro: ""
                    + "<p class='intro-main-title'>Stock management enables you to forecast supply needs for warehouse (s) in the specific time based on sales data on the history time range</p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-list-notification-rule']"),
                    intro: ""
                    + "<p class='intro-main-title'>Low stock rules help you get notifications when the inventory level of a product at which it is low stock.</p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-list-notification']"),
                    intro: ""
                    + "<p class='intro-main-title'>Go to here to see all list of low stock notifications for your inventory</p>",
                    position: 'right'
                },
            
            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });


        intro1.start();

        intro1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            if (intro1._currentStep == 0) {
                $('#menu-magestore-inventorysuccess-inventory .action-close')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('z-index','99999998');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 100);
            }
            if (intro1._currentStep == 1) {
                $('#menu-magestore-inventorysuccess-inventory a')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }

            if (intro1._currentStep == 3) {

                jQuery('.introjs-prevbutton').remove();
                jQuery('.introjs-nextbutton').remove();
                jQuery('.introjs-skipbutton').after(''+ '<a href="javascript:void(0);" class="introjs-button introjs-next-tutorial">End Tutorial </a> ');
                jQuery('.introjs-next-tutorial').click(function(event) {
                    
                   
                    intro1.exit();

                    
                });
                setTimeout(function(){  
                    intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
        });

        intro1.onexit(function() {
           $('#menu-magestore-inventorysuccess-inventory .action-close')[0].click();
        });
        
    }
    
    function inventory5() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
                {
                    element: ('#menu-magestore-inventorysuccess-inventory'),
                    intro: ""
                    + "<p class='intro-main-title'>This module provides a clear overview of stock management over a single warehouse, helps easily stocktake, adjust inventory quantity and predict supply needs for the future.</p>"
                    ,
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-warehouse-stock-view']"),
                    intro: ""
                    + "<p class='intro-main-title'>Enable you easily to manage all stock transfered to warehouse (s) including the quantity of product in warehouse (s), quantity to ship, available quantity</p>",
                    position: 'right'
                },
                
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-product-none-in-warehouse']"),
                    intro: ""
                    + "<p class='intro-main-title'>Non-warehouse helps you control stock that has not been assigned to any warehouse</p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-warehouse-list']"),
                    intro: ""
                    + "<p class='intro-main-title'>Assist you to manage all information of warehouse (s) such as stock on-hand, stock movement, order and set permissions for different staffs </p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-configuration']"),
                    intro: ""
                    + "<p class='intro-main-title'>This is a page where allows you to config for Stock Management module</p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-supplyneeds']"),
                    intro: ""
                    + "<p class='intro-main-title'>Stock management enables you to forecast supply needs for warehouse (s) in the specific time based on sales data on the history time range</p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-list-notification-rule']"),
                    intro: ""
                    + "<p class='intro-main-title'>Low stock rules help you get notifications when the inventory level of a product at which it is low stock.</p>",
                    position: 'right'
                },
                {
                    element:("li[data-ui-id='menu-magestore-inventorysuccess-list-notification']"),
                    intro: ""
                    + "<p class='intro-main-title'>Go to here to see all list of low stock notifications for your inventory</p>",
                    position: 'right'
                },

            ],
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Close',
            showStepNumbers:false,
            showBullets:false
        });


        intro1.start();

        intro1.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
            
        });
        
        intro1.onbeforechange(function(targetElement) {
            removeNextTutorialButton();
            
            if (intro1._currentStep == 0) {
                $('#menu-magestore-inventorysuccess-inventory .action-close')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('z-index','99999998');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 300);
            }
            if (intro1._currentStep == 1) {
                $('#menu-magestore-inventorysuccess-inventory a')[0].click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 300);
            }

            if (intro1._currentStep == 7) {

                jQuery('.introjs-prevbutton').remove();
                jQuery('.introjs-nextbutton').remove();
                jQuery('.introjs-skipbutton').after(''+ '<a href="javascript:void(0);" class="introjs-button introjs-next-tutorial">End Tutorial </a> ');
                jQuery('.introjs-next-tutorial').click(function(event) {
                    
                   
                    intro1.exit();

                    
                });
                setTimeout(function(){  
                    intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
        });

        intro1.onexit(function() {
           $('#menu-magestore-inventorysuccess-inventory .action-close')[0].click();
        });
        
    }
    

    keyboardHandler.apply();
});
