(function(){"use strict";Modernizr.touch||$.stellar(),$("a").smoothScroll({offset:-70}),$("#contactform").submit(function(a){a.preventDefault(),$.ajax({url:"//formspree.io/info@doon.nu",method:"POST",data:{message:"hello!"},dataType:"json"}),$("#contactform_ok").fadeIn()})}).call(this);