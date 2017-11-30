/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'jquery-intro',
    'mage/smart-keyboard-handler',
    'Magestore_Webpos/js/model/shift/current-shift',
    'mage/mage',
    'mage/ie-class-fixer',
    'domReady!'

], function ($,introJs, keyboardHandler, currentShift) {
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

    }) ;


    function addNextTutorialButton(element) {
        jQuery('.introjs-nextbutton').hide();
        jQuery('.introjs-prevbutton').after(''+ '<a href="javascript:void(0);" class="introjs-button introjs-nextbutton introjs-next-tutorial">Next Tutorial</a> ');
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

    var currentLocation = location.pathname.substr(1);

    function intro_welcome() {
        var intro_welcome = introJs();
        intro_welcome.setOptions({
            steps: [
                {
                    intro: "Welcome to the Front-end demo of WebPOS for browser interface!"
                }
            ],
            showBullets: false,
            showStepNumbers: false,
            exitOnOverlayClick: false,
            skipLabel:'Close',
            doneLabel: "Done"
        });

        setTimeout(function(){  intro_welcome.refresh();
            intro_welcome.start();
            jQuery('#shift_container .main-content').css('height','auto!important');
        }, 1000);
        intro_welcome.onafterchange(function (targetElement) {
            $('.introjs-helperLayer').css({"background-color": 'rgba(255,255,255,.2)'});
        });


        intro_welcome.onbeforeexit(function(targetElement) {

            $('.main .open-pannel').addClass('active');
            $('.tutorials-panel').addClass('active');

        });
    }
    function session_management() {
        var session_management = introJs();
        session_management.setOptions({
            steps: [
                {
                    element: ('#c-button--push-left'),
                    intro: "Go to the Menu."
                },
                {
                    element: ('#item_register_shift'),
                    intro: "Go to Session Management."
                },
                {
                    intro: "This part allows you to open/end a session which helps keep track all the changes in order management."
                }
            ],
            showBullets: false,
            showStepNumbers: false,
            exitOnOverlayClick: false,
            skipLabel:'Close',
            doneLabel: "Done"
        });

        setTimeout(function(){  session_management.refresh();
            session_management.start();
            jQuery('#shift_container .main-content').css('height','auto!important');
        }, 1000);
        session_management.onafterchange(function (targetElement) {
            if (session_management._currentStep == 1) {
                jQuery('.introjs-prevbutton').hide();
                $('#c-button--push-left').click();
                setTimeout(function(){  session_management.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (session_management._currentStep == 2) {
                jQuery('.introjs-prevbutton').hide();
                jQuery('.introjs-nextbutton').hide();
                $('#register_shift').click();
                $('#c-mask').click();
                setTimeout(function(){  session_management.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 100);
            }
        });

        session_management.onbeforeexit(function(targetElement) {

            $('.main .open-pannel').addClass('active');
            $('.tutorials-panel').addClass('active');

        });
    }

    function making_order() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
                {
                    element: ('#c-button--push-left'),
                    intro: "Open menu."
                },
                {
                    element:  document.querySelectorAll('.c-menu__items .c-menu__item')[0],
                    intro: "Go to Checkout page to start making order. "
                },
                {
                    element: document.querySelectorAll('#block-product-list .product-item')[0],
                    intro: "Click on the product(s) to add the product(s) to cart. "
                },
                {
                    element: document.querySelectorAll('#webpos_cart .icon-iconPOS-change-customer')[0],
                    intro: "Click to here to create a new customer on your store."
                },
                {
                    element: ('#popup-change-customer'),
                    intro: "Create new customer account or use available customer on your system. "
                },
                {
                    element: document.querySelectorAll('.wrap-grand-total .icon-add .icon-iconPOS-add')[0],
                    intro: "Next, add discount(s) by percent or coupon for the customer's order."
                },
                {
                    element: ('#webpos_cart_discountpopup'),
                    intro: "Next, add discount(s) by percent or coupon for the customer's order."
                },
                {
                    element: document.querySelectorAll('.wrap-grand-total .action-button .checkout')[0],
                    intro: "Next, add discount(s) by percent or coupon for the customer's order."
                },
                {
                    intro: "In order to place an order successfully, after choosing products and add discount or promotion, continue with shipping and payment method. "
                },
                {
                    intro: " "
                }
            ],
            showBullets:false,
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Done',
            showStepNumbers:false
        });

        intro1.start();

        intro1.onbeforechange(function (targetElement) {
            if (intro1._currentStep == 0) {
                jQuery('.introjs-prevbutton').hide();
                $('#c-mask').click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('z-index','99999998');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 100);
            }
            if (intro1._currentStep == 1) {
                $('#checkout').click();
                $('#c-button--push-left').click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }

            if (intro1._currentStep == 2) {
                $('#c-mask').click();
                $('#checkout_container').addClass('newposition');
                $('.order-checkout .remove-icon').click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (intro1._currentStep == 3) {
                $('#block-product-list .product-item .product-img')[0].click();
                $('.wrap-backover').click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (intro1._currentStep == 4) {
                $('#webpos_cart .icon-iconPOS-change-customer').click();

                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (intro1._currentStep == 5) {
                $('.wrap-grand-total .icon-add .icon-iconPOS-add').click();
                $('.wrap-backover').click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (intro1._currentStep == 6) {
                jQuery('.introjs-prevbutton').hide();
                $('.wrap-grand-total .icon-add .icon-iconPOS-add').click();
                $('.ui-loader').addClass('newfont');
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (intro1._currentStep == 7) {
                jQuery('.introjs-prevbutton').hide();
                $('.wrap-backover').click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (intro1._currentStep == 8) {
                $('.ui-loader').removeClass('newfont');
                $('#checkout_container').removeClass('newposition');
                jQuery('.introjs-prevbutton').hide();
                $('.wrap-grand-total .action-button .checkout').click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);

            }

        });

        intro1.onafterchange(function (targetElement) {
            if (intro1._currentStep == 9) {
                intro1.exit();
                shipping_payment();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);

            }
        });
    }

    function refunding_order() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
                {
                    element: ('#c-button--push-left'),
                    intro: "Open menu."
                },
                {
                    element: document.querySelectorAll('.c-menu__items .c-menu__item')[1],
                    intro: "Go to Orders History to start refunding order."
                },
                {
                    intro: "Next, go to Order Processing"
                },
                {
                    element: document.querySelectorAll('.wrap-status-orders .processing')[0],
                    intro: "Click to Order Processing to proceed a refund from customer's order. "
                },
                {
                    intro: "Next, go to more information to choose refund label"
                }
            ],
            showBullets:false,
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Done',
            showStepNumbers:false
        });


        intro1.start();

        intro1.onbeforechange(function (targetElement) {
            if (intro1._currentStep == 0) {
                $('#c-mask').click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (intro1._currentStep == 1) {
                $('#c-button--push-left').click();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (intro1._currentStep == 2) {
                $('#c-button--push-left').click();
                $('.wrap-status-orders .processing').click();
                $('#orders_history').click();
                jQuery('.introjs-prevbutton').hide();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }

        });
        intro1.onafterchange(function (targetElement) {
            if (intro1._currentStep == 4) {
                intro1.exit();
                refunding_order_1();
            }
        });
    }

    function refunding_order_1() {
        var intro1 = introJs();
        intro1.setOptions({
            steps: [
                {
                    element: document.querySelectorAll('#webpos_order_view_container .o-header-nav .more-info')[0],
                    intro: "Click 3 dots icon here"
                },
                {
                    element: document.querySelectorAll('#form-add-note-order .last a')[0],
                    intro: "Click refund label"
                },
                {
                    intro: "Fill in all the refund order information and Click to submit refund to finish"
                }
            ],
            showBullets:false,
            exitOnOverlayClick:false,
            skipLabel:'Close',
            doneLabel:'Done',
            showStepNumbers:false
        });

        setTimeout(function(){intro1.start()},1000);

        intro1.onbeforechange(function (targetElement) {
            if (intro1._currentStep == 0) {
                jQuery('.introjs-prevbutton').hide();
            }
            if (intro1._currentStep == 1) {
                $('#form-add-note-order').show();
                jQuery('.introjs-prevbutton').hide();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 500);
            }
            if (intro1._currentStep == 2) {
                $('#form-add-note-order .last a')[0].click();
                $('#form-add-note-order .last a').click();
                $('#form-add-note-order').hide();
                jQuery('.introjs-prevbutton').hide();
                jQuery('.introjs-nextbutton').hide();
                setTimeout(function(){  intro1.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 500);
            }
        });
        intro1.onbeforeexit(function(targetElement) {
            $('#refund-popup .close').click();
        });
    }

    function shipping_payment() {
        var shipping_payment = introJs();
        shipping_payment.setOptions({
            steps: [
                {
                    element: ('#checkout-method'),
                    intro: "Add Shipping Info and choose Payment method. "
                },
                {
                    element: ('#checkout_button'),
                    intro: "End of placing an order."
                },
                {
                    intro: "You've just finished 'Making order' flow on webPOS! Click 'New Order' to create other orders."
                }

            ],
            showBullets: false,
            showStepNumbers: false,
            exitOnOverlayClick: false,
            skipLabel:'Close',
            doneLabel: "Done"
        });

        setTimeout(function(){  shipping_payment.refresh();
            shipping_payment.start();

        }, 1000);


        shipping_payment.onbeforechange(function (targetElement) {
            if (shipping_payment._currentStep == 0) {
                jQuery('.introjs-prevbutton').hide();
                setTimeout(function(){  shipping_payment.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (shipping_payment._currentStep == 1) {
                jQuery('.introjs-prevbutton').hide();
                $('#payment_list .payment')[0].click();
                setTimeout(function(){  shipping_payment.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
            if (shipping_payment._currentStep == 2) {
                $('#checkout_button').click();
                jQuery('.introjs-prevbutton').hide();
                jQuery('.introjs-nextbutton').hide();
                setTimeout(function(){  shipping_payment.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});

                }, 100);
            }
        });

    }
    function end_session() {
        var end_session = introJs();
        end_session.setOptions({
            steps: [
                {
                    element: ('#c-button--push-left'),
                    intro: "Go to the Menu."
                },
                {
                    element: ('#item_register_shift'),
                    intro: "Press Session Management."
                },
                {
                    intro: ""
                }

            ],
            showBullets: false,
            showStepNumbers: false,
            exitOnOverlayClick: false,
            skipLabel:'Close',
            doneLabel: "Done"
        });

        setTimeout(function(){  end_session.refresh(); end_session.start();}, 1000);

        end_session.onbeforechange(function (targetElement) {
            if (end_session._currentStep == 1) {
                jQuery('.introjs-prevbutton').hide();
                $('#c-button--push-left').click();
                setTimeout(function(){  end_session.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 100);
            }
            if (end_session._currentStep == 2) {
                jQuery('.introjs-prevbutton').hide();
                $('#register_shift').click();
                setTimeout(function(){  end_session.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 100);
            }

        });
        end_session.onafterchange(function (targetElement) {
            if (end_session._currentStep == 2) {
                end_session.exit();
                setTimeout(function(){end_session_2()},1000);
            }
        });
    }
    function end_session_2() {
        var end_session2 = introJs();
        end_session2.setOptions({
            steps: [
                {
                    element: document.querySelectorAll('.transactions-info .table .button')[2],
                    intro: "Press Session Management."
                },
                {
                    element: ('#popup-close-shift'),
                    intro: "Put the current balance at the end of the working day. "
                },
                {
                    element: document.querySelectorAll('#shift_container .footer-shift .btn-close-shift')[0],
                    intro: "Confirm and press Validate closing to end the session.  "
                }
            ],
            showBullets: false,
            showStepNumbers: false,
            exitOnOverlayClick: false,
            skipLabel:'Close',
            doneLabel: "Done"
        });

        setTimeout(function(){  end_session2.refresh();
            end_session2.start();

        }, 1000);
        end_session2.onbeforechange(function (targetElement) {
            if (end_session2._currentStep == 0) {
                jQuery('.introjs-prevbutton').hide();
            }
            if (end_session2._currentStep == 1) {
                jQuery('.introjs-prevbutton').hide();
                $('.transactions-info .table .button')[2].click();
                setTimeout(function(){  end_session2.refresh();
                    jQuery('.introjs-helperLayer').css('pointer-events','none');
                    jQuery('.introjs-overlay').css('pointer-events','none');
                    $('.introjs-helperLayer').css({'background-color':'rgba(255,255,255,.2)'});
                }, 100);
            }
            if (end_session2._currentStep == 2) {
                jQuery('.introjs-prevbutton').hide();
                $('#popup-close-shift .modal-body .btn-done')[0].click();
                //end_session2.exit();
                //setTimeout(function(){ confirm_balance()},2000);
            }
        });
        end_session2.onafterchange(function (targetElement) {
            if (end_session2._currentStep == 2) {
                jQuery('.introjs-prevbutton').hide();
                jQuery('.introjs-nextbutton').hide();
                //jQuery('#shift_container .footer-shift .btn-close-shift')[0].click();
            }
        });
    }
    function confirm_balance() {
        var confirm_balance = introJs();
        confirm_balance.setOptions({
            steps: [
                {
                    element: document.querySelectorAll('#shift_container .footer-shift .btn-close-shift')[0],
                    intro: "Confirm and press Validate closing to end the session.  "
                }
            ],
            showBullets: false,
            showStepNumbers: false,
            exitOnOverlayClick: false,
            skipLabel:'Close',
            doneLabel: "Done"
        });

        setTimeout(function(){  confirm_balance.refresh();
            confirm_balance.start();

        }, 1000);
        confirm_balance.onbeforechange(function (targetElement) {
            if (confirm_balance._currentStep == 0) {
                jQuery('.introjs-prevbutton').hide();
                jQuery('.introjs-nextbutton').hide();
            }
        });
    }

    if (localStorage.customersession) {
        localStorage.customersession = Number(localStorage.customersession) + 1;
    } else {
        localStorage.customersession = 1;
    }

    if(window.webposConfig.locationId == 1){
        if(localStorage.customersession == 1){
            intro_welcome();
        }
    }
    $("#intro-webpos1").on( 'click', function() {
        session_management();
    }) ;

    $("#intro-webpos2").on( 'click', function() {
        making_order();
    }) ;
    $("#intro-webpos3").on( 'click', function() {
        refunding_order();
    }) ;

    keyboardHandler.apply();
});
