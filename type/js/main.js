
$(window).on('load', function(){
	ui.init();
    
    AOS.init();
});
var ui = {
	init : function() {
		ui.common.init();
		ui.mVisual.init();
	},
	common : {
        init : function(){
            $("html, body").easeScroll({
                frameRate: 200,
                animationTime: 1800,
                stepSize: 150,
                pulseAlgorithm: !0,
                pulseScale: 8,
                pulseNormalize: 1,
                accelerationDelta: 20,
                accelerationMax: 1,
                keyboardSupport: !0,
                arrowScroll: 50
            });
        }
    },
    mVisual : {
        init : function(){
            setTimeout(() => {
                $('body').addClass('startAni')
              }, 500);
        }   
    }
}

