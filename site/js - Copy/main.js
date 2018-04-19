// function validar() {
//     if (document.form.correo.value.length==0){
//         alert("Debe de Ingresar el Correo")
//         document.form.correo.focus();
//         return false;
//     }
// };
//
// // nopeeeeee
// function validar3() {
//     $('#card_number').change(function() {
//         if ($('#card_number').hasClass('jp-card-valid') === true) {
//             // alert('woohoo');
//             console.log('woohoo');
//             $('#aaaw').attr('disabled', false);
//         } else {
//             $('#aaaw').attr('disabled', true);
//             // alert('naaah');
//             console.log('naaa');
//             return false;
//         }
//
//     })
// }
//
console.log(top.location.pathname);
if (top.location.pathname === '/ayyqr/tast') {
    $(function($) {
        console.log('I\'M INSIDE OF TAST');
        function vldtccnum() {
            var ccvalidated = false;
            $('#aaaw').attr('disabled', true);
            $('input#card_number').validateCreditCard(function(result) {
                if ((result.valid === true) &&
                    (result.length_valid === true) &&
                    (result.luhn_valid == true)) {
                        ccvalidated = true;
                        console.log('vldddd');
                    } else {
                        console.log('invalidddd');
                        ccvalidated = false;
                    }
            }, { accept: ['visa', 'mastercard', 'amex'] });

            if (!ccvalidated) {
                $('#aaaw').attr('disabled', true);
                console.log('disabled111');
                return false;
            } else {
                if (vldtccdat()) {
                    console.log('enabled111');
                    $('#aaaw').attr('disabled', false);
                    return true;
                } else {
                    console.log('disabled222');
                    $('#aaaw').attr('disabled', true);
                    return false;
                }
            }
        }

        function vldtccdat() {
            if ($('.expiry').hasClass('jp-card-valid') === true) {
                console.log('expiry true yee');
                // $('#aaaw').attr('disabled', false);
                if (vldtccnum()) {
                    console.log('vldtccnum true and expiry too');
                    return true;
                } else {
                    console.log('vldtccnum false and expiry true');
                    return false;
                }
            } else {
                // $('#aaaw').attr('disabled', true);
                // alert('naaah');
                console.log('expiry false idc');
                console.log('naaa');
                return false;
            }
        }
    });



    $(function() { // observer
        (function($) {

            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

            $.fn.attrchange = function(callback) {
                if (MutationObserver) {
                    var options = {
                        subtree: false,
                        attributes: true
                    };

                    var observer = new MutationObserver(function(mutations) {
                        mutations.forEach(function(e) {
                            callback.call(e.target, e.attributeName);
                        });
                    });

                    return this.each(function() {
                        observer.observe(this, options);
                    });
                }
            }
        })(jQuery);
    });

    $(function aaa() {
        $('.expiry').attrchange(function(attrName) {
            if (attrName=='class') {
                if (!vldtccdat()) {
                    console.log('aaa disabled 1');
                    // $('#aaaw').attr('disabled', true);
                } else {
                    if (vldtccnum()) {
                        console.log('aaa enabled 1');
                        // $('#aaaw').attr('disabled', false);
                    } else {
                        console.log('aaa disabled 2');
                        // $('#aaaw').attr('disabled', true);
                    }
                }
                console.log('class changed');
            // } else if (attrName=='id') {
            //     console.log('id changed');
            // } else { //OTHER ATTR cHANGED
            }
        });
    });
}

//
//     $(document).ready(validar2);
//
//     $(function() { // observer
//         (function($) {
//
//             var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
//
//             $.fn.attrchange = function(callback) {
//                 if (MutationObserver) {
//                     var options = {
//                         subtree: false,
//                         attributes: true
//                     };
//
//                     var observer = new MutationObserver(function(mutations) {
//                         mutations.forEach(function(e) {
//                             callback.call(e.target, e.attributeName);
//                         });
//                     });
//
//                     return this.each(function() {
//                         observer.observe(this, options);
//                     });
//                 }
//             }
//         })(jQuery);
//     });
//
//     function validateExpiryClass() {
//         if ($('.expiry').hasClass('jp-card-valid') === true) {
//             console.log('woohoo');
//             // $('#aaaw').attr('disabled', false);
//             return true;
//         } else {
//             // $('#aaaw').attr('disabled', true);
//             // alert('naaah');
//             console.log('naaa');
//             return false;
//         }
//     }
//
//
//     $(function() {
//         //Now you need to append event listener
//         validateExpiryClass();
//
//         $('.expiry').attrchange(function(attrName) {
//             if (attrName=='class') {
//                 if (!validateExpiryClass()) {
//                     $('#aaaw').attr('disabled', true);
//                 } else {
//                     if (validar2()) {
//                         $('#aaaw').attr('disabled', false);
//                     } else {
//                         $('#aaaw').attr('disabled', true);
//                     }
//                 }
//                 console.log('class changed');
//             } else if (attrName=='id') {
//                 alert('id changed');
//             } else { //OTHER ATTR cHANGED
//             }
//         });
//     });
// }
//
//
//
// function validar2() {
//     var ccvalidated = false;
//     $('#aaaw').attr('disabled', true);
//     $('input#card_number').validateCreditCard(function(result) {
//         if ((result.valid === true) &&
//             (result.length_valid === true) &&
//             (result.luhn_valid == true)) {
//                 ccvalidated = true;
//             } else {
//                 ccvalidated = false;
//             }
//     }, { accept: ['visa', 'mastercard', 'amex'] });
//
//     if (!ccvalidated) {
//         $('#aaaw').attr('disabled', true);
//         return false;
//     } else {
//
//         if (validateExpiryClass() === true) {
//             console.log('aaaaaaaaaaaaa');
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
//
