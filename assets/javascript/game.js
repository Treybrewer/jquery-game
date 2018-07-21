
$(document).ready(function(){
    // select fight event----------------------------------------------------------------------------
   // this will make all the images rise once clicked
    $(brock).click(function(){
        $("#brock").animate({top: '-=39%', left: '+=11%'}, "slow");
        $("#instructions").hide();
        $("#text").hide();
        $("#winArea").hide();
        $("#winspace").hide();
        $("#losespace").hide();
        $("#selectf").hide();
        $("#opponent").show();
        $("#opponent").animate({top: '+=100px'}, "slow");
        selectopponent();
        
    });
    $(silva).click(function(){
        $("#silva").animate({top: '-=39%', left: '-=14%'}, "slow");
        $("#instructions").hide();
        $("#text").hide();
        $("#winArea").hide();
        $("#winspace").hide();
        $("#losespace").hide();
        $("#selectf").hide();
        $("#opponent").show();
        $("#opponent").animate({top: '+=100px'}, "slow");
        selectopponent();
    });
    $(nelson).click(function(){
        $("#nelson").animate({top: '-=39%', left: '-=39%'}, "slow");
        $("#instructions").hide();
        $("#text").hide();
        $("#winArea").hide();
        $("#winspace").hide();
        $("#losespace").hide();
        $("#selectf").hide();
        $("#opponent").show();
        $("#opponent").animate({top: '+=100px'}, "slow");
        selectopponent();
    });
    $(mir).click(function(){
        $("#mir").animate({top: '-=39%', left: '-=64%'}, "slow");
        $("#instructions").hide();
        $("#text").hide();
        $("#winArea").hide();
        $("#winspace").hide();
        $("#losespace").hide();
        $("#selectf").hide();
        $("#opponent").show();
        $("#opponent").animate({top: '+=100px'}, "slow");
        selectopponent();
        // end select fighter-------------------------------------------------------------------------------------
    });
   
        // select opponent ----------------------------------------------------------------------------------------
    function selectopponent(){
        $("#brock").click(function(){
            $("#brock").stop();
        });
        $(brock).click(function(){
            $("brock").stop();
            $("#opponent").hide();
            $("#vs").show();
            $("#vs").animate({top: '+=100px'}, "slow");
            $("#brock").animate({top: '-=39%', left: '+=75%'}, "slow");
            $("#winArea").show();
            $("#winspace").show();
            $("#losespace").show();
            
        });
        $(silva).click(function(){
            $("#opponent").hide();
            $("#vs").show();
            $("#vs").animate({top: '+=100px'}, "slow");
        });
        $(nelson).click(function(){
            $("#opponent").hide();
            $("#vs").show();
            $("#vs").animate({top: '+=100px'}, "slow");
        });
        $(mir).click(function(){
            $("#opponent").hide();
            $("#vs").show();
            $("#vs").animate({top: '+=100px'}, "slow");
        });
    }
        // end select opponent------------------------------------------------------------------------------------ 
});