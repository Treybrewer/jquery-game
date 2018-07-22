var choosenPlayer = [];
var choosenPlayerAp = [];
var enemyPlayer = [];
var enemyPlayerCA = [];
var enemyPlayerAp = [];
var playerhealth = [];
var enemyhealth = [];
var winArea = [0];
var loseArea = [0];
$("#winArea").html(winArea);
$("#loseArea").html(loseArea);
$("#playerhealth").html(playerhealth);
$("#enemyhealth").html(enemyhealth);
$(document).ready(function () {


    // select fight event----------------------------------------------------------------------------
    // this will alter the text on the page to show certain elements and hide the rest as well as applying animations
    function start() {
        
        // ---------------------------------------------------------------------------
        $(brock).click(function () {
            $("#brock").animate({ top: '-=39%', left: '+=11%' }, "slow");
            $("#instructions").hide();
            $("#text").hide();
            $("#winArea").hide();
            $("#winspace").hide();
            $("#losespace").hide();
            $("#selectf").hide();
            $("#opponent").show();
            $("#opponent").animate({ top: '+=100px' }, "slow");
            choosenPlayer.push(brock);
            choosenPlayerAp.push(25);
            playerhealth.push(120);
            $("#playerhealth").html(playerhealth);
            
            selectopponent();
        });
        // ---------------------------------------------------------------------------
        $(silva).click(function () {
            $("#silva").animate({ top: '-=39%', left: '-=14%' }, "slow");
            $("#instructions").hide();
            $("#text").hide();
            $("#winArea").hide();
            $("#winspace").hide();
            $("#losespace").hide();
            $("#selectf").hide();
            $("#opponent").show();
            $("#opponent").animate({ top: '+=100px' }, "slow");
            choosenPlayer.push(silva);
            choosenPlayerAp.push(20);
            playerhealth.push(75);
            $("#playerhealth").html(playerhealth);
            selectopponent();
        });
        // ---------------------------------------------------------------------------
        $(nelson).click(function () {
            $("#nelson").animate({ top: '-=39%', left: '-=39%' }, "slow");
            $("#instructions").hide();
            $("#text").hide();
            $("#winArea").hide();
            $("#winspace").hide();
            $("#losespace").hide();
            $("#selectf").hide();
            $("#opponent").show();
            $("#opponent").animate({ top: '+=100px' }, "slow");
            choosenPlayer.push(nelson);
            choosenPlayerAp.push(25);
            selectopponent();
        });
        // ---------------------------------------------------------------------------
        $(mir).click(function () {
            $("#mir").animate({ top: '-=39%', left: '-=64%' }, "slow");
            $("#instructions").hide();
            $("#text").hide();
            $("#winArea").hide();
            $("#winspace").hide();
            $("#losespace").hide();
            $("#selectf").hide();
            $("#opponent").show();
            $("#opponent").animate({ top: '+=100px' }, "slow");
            choosenPlayer.push(mir);
            choosenPlayerAp.push(32);
            selectopponent();
            // end select fighter-------------------------------------------------------------------------------------
        });

    };
    start();





    // select opponent ----------------------------------------------------------------------------------------
    function selectopponent() {

        var removeItem = choosenPlayer[1];
        var removeItem1 = choosenPlayerAp[1];
        var removeItem2 = playerhealth[1];
        // --------------------------------------------------------------
        $(brock).click(function () {
            $("#brock").show()
            $("#brock").stop();
            $("#opponent").hide();
            $("#vs").show();
            $("#vs").animate({ top: '+=100px' }, "slow");
            $("#brock").animate({ top: '-=39%', left: '+=60%' }, "slow");
            $("#winArea").show();
            $("#winspace").show();
            $("#losespace").show();
            $("#silva").hide();
            $("#nelson").hide();
            $("#mir").hide();
            $(choosenPlayer).show();
            $("#attack").show();
            $("#attack").animate({ top: '+=70%' }, "slow");
            $("#playerhealthtext").show();
            $("#playerhealthtext").animate({ top: '+=80%', left: '-=10%' }, "slow");
            $("#enemyhealthtext").show();
            $("#enemyhealthtext").animate({ top: '+=80%', left: '+=10%' }, "slow");
            $("#playerhealth").show();
            $("#enemyhealth").show();
            enemyPlayer.push(brock);
            enemyPlayerAp.push(15);
            choosenPlayer.splice($.inArray(removeItem, choosenPlayer), 1);
            choosenPlayerAp.splice($.inArray(removeItem1, choosenPlayerAp), 1);
            playerhealth.splice($.inArray(removeItem2, playerhealth), 1);
            fight();
        });
        // --------------------------------------------------------------
        $(silva).click(function () {
            $("#silva").show();
            $("#silva").stop();
            $("#opponent").hide();
            $("#vs").show();
            $("#vs").animate({ top: '+=10%' }, "slow");
            $("#silva").animate({ top: '-=39%', left: '+=35%' }, "slow");
            $("#brock").hide();
            $("#nelson").hide();
            $("#mir").hide();
            $(choosenPlayer).show();
            $("#playerhealth").show();
            $("#attack").show();
            $("#attack").animate({ top: '+=70%' }, "slow");
            $("#playerhealthtext").show();
            $("#playerhealthtext").animate({ top: '+=80%', left: '-=10%' }, "slow");
            $("#enemyhealthtext").show();
            $("#enemyhealthtext").animate({ top: '+=80%', left: '+=10%' }, "slow");
            $("#playerhealth").show();
            $("#enemyhealth").show();
            enemyPlayer.push(silva);
            enemyPlayerAp.push(29);
            choosenPlayer.splice($.inArray(removeItem, choosenPlayer), 1);
            choosenPlayerAp.splice($.inArray(removeItem1, choosenPlayerAp), 1);
            playerhealth.splice($.inArray(removeItem2, playerhealth), 1);
            fight();
        });
        // --------------------------------------------------------------
        $(nelson).click(function () {
            $("nelson").show();
            $("#nelson").stop();
            $("#opponent").hide();
            $("#vs").show();
            $("#vs").animate({ top: '+=100px' }, "slow");
            $("#nelson").animate({ top: '-=39%', left: '+=10%' }, "slow");
            $("#brock").hide();
            $("#silva").hide();
            $("#mir").hide();
            $(choosenPlayer).show();
            $("#attack").show();
            $("#attack").animate({ top: '+=70%' }, "slow");
            $("#playerhealthtext").show();
            $("#playerhealthtext").animate({ top: '+=80%', left: '-=10%' }, "slow");
            $("#enemyhealthtext").show();
            $("#enemyhealthtext").animate({ top: '+=80%', left: '+=10%' }, "slow");
            $("#playerhealth").show();
            $("#enemyhealth").show();
            enemyPlayer.push(nelson);
            enemyPlayerAp.push(25);
            choosenPlayer.splice($.inArray(removeItem, choosenPlayer), 1);
            choosenPlayerAp.splice($.inArray(removeItem1, choosenPlayerAp), 1);
            playerhealth.splice($.inArray(removeItem2, playerhealth), 1);
            fight();
        });
        // --------------------------------------------------------------
        $(mir).click(function () {
            $("mir").show();
            $("#mir").stop();
            $("#opponent").hide();
            $("#vs").show();
            $("#vs").animate({ top: '+=100px' }, "slow");
            $("#mir").animate({ top: '-=39%', left: '-=15%' }, "slow");
            $("#silva").hide();
            $("#nelson").hide();
            $("#brock").hide();
            $(choosenPlayer).show();
            $("#attack").show();
            $("#attack").animate({ top: '+=70%' }, "slow");
            $("#playerhealthtext").show();
            $("#playerhealthtext").animate({ top: '+=80%', left: '-=10%' }, "slow");
            $("#enemyhealthtext").show();
            $("#enemyhealthtext").animate({ top: '+=80%', left: '+=10%' }, "slow");
            $("#playerhealth").show();
            $("#enemyhealth").show();
            enemyPlayer.push(mir);
            enemyPlayerAp.push(32);
            choosenPlayer.splice($.inArray(removeItem, choosenPlayer), 1);
            choosenPlayerAp.splice($.inArray(removeItem1, choosenPlayerAp), 1);
            fight();
        });
    };
    // end select opponent------------------------------------------------------------------------------------


    // attack function----------------------------------------------------------------------------------------
    function fight() {
        $(brock).unbind("click");
        $(silva).unbind("click");
        $(nelson).unbind("click");
        $(mir).unbind("click");
        $(attack).click(function () {
            playerhealth -= enemyPlayerAp;
            $("#playerhealth").html(playerhealth);
            enemyhealth -= choosenPlayerAp;
            $("#enemyhealth").html(enemyhealth);
            if (enemyhealth < 14) {
                $("#winArea").html(winArea += 1);
                victory();
            };
            if (playerhealth < 14) {
                $("#loseArea").html(loseArea += 1);
                defeat();
            };

        });
    };
    // end attack function-------------------------------------------------------------------------------------

    // select second opponent----------------------------------------------------------------------------------
    function select2opponent() {

    };

    // end select second opponent------------------------------------------------------------------------------


    // win function--------------------------------------------------------------------------------------------
    function victory() {
        $(enemyPlayer).hide();
        $("#victory").show();
        $("#vs").hide();
        $("#winArea").show();
        $("#winspace").show();
        $("#loseArea").show();
        $("#losespace").show();
        $("#attack").hide();
        $("#tryagain").show();
        $("#playerhealth").hide();
        $("#enemyhealth").hide();
        $("#playerhealthtext").hide();
        $("#enemyhealthtext").hide();
    };
    // end win function----------------------------------------------------------------------------------------

    // lose function-------------------------------------------------------------------------------------------
    function defeat() {
        $(choosenPlayer).hide();
        $("#defeat").show();
        $("#vs").hide();
        $("#winArea").show();
        $("#winspace").show();
        $("#loseArea").show();
        $("#losespace").show();
        $("#attack").hide();
        $("#tryagain").show();
        $("#playerhealth").hide();
        $("#enemyhealth").hide();
        $("#playerhealthtext").hide();
        $("#enemyhealthtext").hide();
    };
    // end lose function---------------------------------------------------------------------------------------

    // restart function----------------------------------------------------------------------------------------
    function restart() {
        $("#")
    }
    // end restart function------------------------------------------------------------------------------------
});