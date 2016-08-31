function getQuintileQuadrilateralBackCoordinates(d) { 

  if (orientation == "winningPctByStanding")  {

      return "M" + 

        " "+ (xWinningPctByStanding(30)   + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(d) ) + " " +

        "L"+ (xWinningPctByStanding(30)   + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(d)) + " " +

        "L"+ (xWinningPctByStanding(1) ) + "," + 
             (yWinningPctByStanding(d) ) + " " +
 
        " ";

    } else if (orientation == "winningPctByYear")  {

      return "M" + 

        " "+ (xWinningPctByYear(2016) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d)) + " " + 

        "L"+ (xWinningPctByYear(2005)  ) + "," + 
             (yWinningPctByYear(d)) + " " +

        "L"+ (xWinningPctByYear(2005)   ) + "," + 
             (yWinningPctByYear(d) ) + " " +
 
        " ";

    } else if (orientation == "standingByYear")  {

      return "M" + 

        " "+ (xStandingByYear(2016)   + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(30)  ) + " " +

        "L"+ (xStandingByYear(2005)) + "," + 
             (yStandingByYear(30)  ) + " " +

        "L"+ (xStandingByYear(2005) ) + "," + 
             (yStandingByYear(1) + yStandingByYear.rangeBand() ) + " " +
 
        " ";

    } else if (orientation == "allThree")  {

      return "M" + 

        " "+ (xAllThree(30,2016)   + xWinningPctByYear.rangeBand()/2 + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(30,2016,d) + xWinningPctByYear.rangeBand()/5 - xWinningPctByStanding.rangeBand()/5) + " " +

        "L"+ (xAllThree(30,2005)                                     + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(30,2005,d)                                   - xWinningPctByStanding.rangeBand()/5) + " " +

        "L"+ (xAllThree(1,2005)) + "," + 
             (yAllThree(1,2005,d)) + " " +
 
        " ";
    }
  }


function getWinningPctIndicesX(d) { 

      return chartWidth +10;
}


function getWinningPctIndicesY(d) { 

  if (orientation == "winningPctByStanding")  {

      return yWinningPctByStanding(d);

    } else if (orientation == "winningPctByYear")  {

      return yWinningPctByYear(d);

    } else if (orientation == "standingByYear")  {

      return yStandingByYear(1);

    } else if (orientation == "allThree")  {

      return yAllThree(1,2005,d);

    }
  }

function getWinningPctIndicesOpacity(d) { 

  if (orientation == "winningPctByStanding")  {

      return .2;

    } else if (orientation == "winningPctByYear")  {

      return .2;

    } else if (orientation == "standingByYear")  {

      return 0;

    } else if (orientation == "allThree")  {

      return .2;

    }
  }

function getWinningPctFocusX(d) { 

      return chartWidth +10;

    }

function getWinningPctFocusY(d) { 

  if (orientation == "winningPctByStanding")  {

      return yWinningPctByStanding(d.winningPct);

    } else if (orientation == "winningPctByYear")  {

      return yWinningPctByYear(d.winningPct);

    } else if (orientation == "standingByYear")  {

      return yStandingByYear(1);

    } else if (orientation == "allThree")  {

      return yAllThree(1,2005,d.winningPct);

    }
  }


function getWinningPctFocusOpacity(d) { 

  if (orientation == "winningPctByStanding")  {

      return .8;

    } else if (orientation == "winningPctByYear")  {

      return .8;

    } else if (orientation == "standingByYear")  {

      return 0;

    } else if (orientation == "allThree")  {

      return .8;

    }
  }

function getSeasonIndicesX(d) { 

  if (orientation == "winningPctByStanding")  {

      return xWinningPctByStanding(1);

    } else if (orientation == "winningPctByYear")  {

      return xWinningPctByYear(d) + xWinningPctByYear.rangeBand()/6 ;;

    } else if (orientation == "standingByYear")  {

      return xWinningPctByYear(d) + xWinningPctByYear.rangeBand()/6 ;;

    } else if (orientation == "allThree")  {

      return xAllThree(1,d);

    }
  }
         
function getSeasonIndicesY(d) { 

  if (orientation == "winningPctByStanding")  {

    return yWinningPctByStanding(0)+20;

    } else if (orientation == "winningPctByYear")  {

      return (chartHeight + 35);

    } else if (orientation == "standingByYear")  {

      return (chartHeight + 35);

    } else if (orientation == "allThree")  {

        return yAllThree(1,d,0)+20;

    }
  }
function getStatsOpacity(d) { 

    if (d.teamID == focusTeam && d.season == year  ) {

      return .8;

    } else {

      return 0;
    }

  }

function getGivenSeasonOpacity(d) { 

    if (d == year) {

      return .8;

    } else {

      return .0;

    }

  }

function getSeasonIndicesOpacity(d) { 

    if (orientation == "winningPctByStanding")  {

      return 0;

    } else if (orientation == "winningPctByYear") {

      return 0;

    } else if (orientation == "standingByYear") {

      return 0;

    } else if (d == year) {

      return .8;

    } else {

      return .2;

    }

  }


function getStandingIndicesX(d) { 

  if (orientation == "winningPctByStanding")  {

      return xWinningPctByStanding(d)+ 6 ;

    } else if (orientation == "winningPctByYear")  {

      return (xWinningPctByYear(2016)+xWinningPctByYear.rangeBand()+12);

    } else if (orientation == "standingByYear")  {

      return xStandingByYear(2016) +xStandingByYear.rangeBand() +12;

    } else if (orientation == "allThree")  {

      return (xAllThree(d,2016)+ xWinningPctByStanding.rangeBand()/4 + xWinningPctByYear.rangeBand()/2);

    }
  }



  function getStandingIndicesY(d) { 

  if (orientation == "winningPctByStanding")  {

    return yWinningPctByStanding(0)-4;

    } else if (orientation == "winningPctByYear")  {

      return yWinningPctByYear(0)+12;

    } else if (orientation == "standingByYear")  {

      return yStandingByYear(d) + 12;

    } else if (orientation == "allThree")  {

      return (yAllThree(d,2016,0)- xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5+14);

    }
  }


function getStandingIndicesOpacity(d) { 

    if (orientation == "winningPctByYear")  {

      return 0;

    } else if (d == selectedLeagueRank)  {

      return .8;

    } else {

      return .2;

    }
  }

function getTeamlyTableY(d) { 

  if (teamOrder == "yearlyStanding") {

    return (yStandingByYear(+d.values[year-2005].leagueRank)+18);

  } else if (teamOrder == "winningest") {

    return (yStandingByYear(+d.values[year-2005].teamMeanWinningPctRank)+18);
  }

}

function getTeamlyTableOpacity(d) { 

    if (d.values[year-2005].teamID == focusTeam ) {
          
          return 1
          
          } else {
          
          return .3;
    }  
} 


function getTeamlyNamesX(d) { 

    return (chartWidth+chartMargin.left+ 2.1*xStandingByYear.rangeBand());

    } 

function getTeamlyWinsX(d) { 

    return (chartWidth+chartMargin.left+ 3.1*xStandingByYear.rangeBand());

    } 

function getTeamlyLossesX(d) { 

    return (chartWidth+chartMargin.left+ 3.6*xStandingByYear.rangeBand());

    }

function getTeamlySquaresX(d) { 

    return (chartWidth+chartMargin.left+ 1.6*xStandingByYear.rangeBand());

    }

function getTeamlySquaresFill(d) { 

    if (+d.values[year-2005].season == year && d.values[year-2005].teamID == focusTeam ) {

    return d3.rgb(teamColorScale(d.values[year-2005].teamID));

    } else if (colorSpectrum == "blues") {

    return d3.rgb(colorScale(5 + Math.floor(+d.values[year-2005].valence/2)*Math.ceil(50*d.values[year-2005].barHeight) +Math.ceil(+d.values[year-2005].valence/2 -.0001)*Math.ceil(50*+d.values[year-2005].barHeight) ) );

    } else if (colorSpectrum == "blueBorders") {

    return d3.rgb(colorScale(5 + Math.floor(+d.values[year-2005].valence/2)*Math.ceil(50*d.values[year-2005].barHeight) +Math.ceil(+d.values[year-2005].valence/2 -.0001)*Math.ceil(50*+d.values[year-2005].barHeight) ) );

    } else if (colorSpectrum == "teamPrimaries") {

    return d3.rgb(teamColorScale(d.values[year-2005].teamID));

    } else if (colorSpectrum == "teamPrimaryBorders") {

    return d3.rgb(teamColorScale(d.values[year-2005].teamID));

    }

}

function getTeamlySquaresFillOpacity(d) { 

    if (+d.values[year-2005].season == year && d.values[year-2005].teamID == focusTeam ) {
          
          return .6
          
          } else {
          
          return .1;
    }  
} 

function getTeamlyButtonsCoordinates(d) {

      if (teamOrder == "yearlyStanding") {

      return "M" + 

        " "+  (chartWidth +  4*xStandingByYear.rangeBand() ) + "," + 
              (yStandingByYear(+d.values[year-2005].leagueRank) ) + " " +
        "L" + (chartWidth+  8*xStandingByYear.rangeBand() ) + "," + 
              (yStandingByYear(+d.values[year-2005].leagueRank)  ) + " " +
        "L" + (chartWidth+ 8*xStandingByYear.rangeBand() ) + "," +
              ((yStandingByYear(+d.values[year-2005].leagueRank) + yStandingByYear.rangeBand()))+ " " +
        "L" + (chartWidth+   4*xStandingByYear.rangeBand() ) + "," + 
              ((yStandingByYear(+d.values[year-2005].leagueRank)+ yStandingByYear.rangeBand() )) +" " + 

        "Z";

      } else if (teamOrder == "winningest") {

      return "M" + 

        " "+  (chartWidth +    4*xStandingByYear.rangeBand() ) + "," + 
              (yStandingByYear(+d.values[year-2005].teamMeanWinningPctRank) ) + " " +
        "L" + (chartWidth+  8*xStandingByYear.rangeBand() ) + "," + 
              (yStandingByYear(+d.values[year-2005].teamMeanWinningPctRank)  ) + " " +
        "L" + (chartWidth+ 8*xStandingByYear.rangeBand() ) + "," +
              ((yStandingByYear(+d.values[year-2005].teamMeanWinningPctRank)+ yStandingByYear.rangeBand() ))+ " " +
        "L" + (chartWidth+   4*xStandingByYear.rangeBand() ) + "," + 
              ((yStandingByYear(+d.values[year-2005].teamMeanWinningPctRank) + yStandingByYear.rangeBand()))+" " + 

        "Z";

      }

}


function getTeamlyAntennaeCoordinates(d) {

  if (orientation == "winningPctByStanding" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xWinningPctByStanding(d.leagueRank) ) + "," + 
             (yWinningPctByStanding(0))  + " " +

        "L"+ (xWinningPctByStanding(d.leagueRank)) + "," + 
             (yWinningPctByStanding(1))  + " " +

        "L"+ (xWinningPctByStanding(d.leagueRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(1) )  + " " +

        "L"+ (xWinningPctByStanding(d.leagueRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(0) )  + " " +
              
        "Z";

  } else if (orientation == "winningPctByStanding" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xWinningPctByStanding(d.teamMeanWinningPctRank) ) + "," + 
             (yWinningPctByStanding(0))  + " " +
        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank) ) + "," + 
             (yWinningPctByStanding(1))  + " " +
        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(1) )  + " " +
        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(0) )  + " " +
        "Z";

  } else if (orientation == "winningPctByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xWinningPctByYear(d.season)) + "," + 
             (yWinningPctByYear(0))  + " " +
        "L"+ (xWinningPctByYear(d.season) ) + "," + 
             (yWinningPctByYear(1))  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(1) )  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0) )  + " " +
              
        "Z";

  } else if (orientation == "winningPctByYear" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xWinningPctByYear(d.season)) + "," + 
             (yWinningPctByYear(0))  + " " +
        "L"+ (xWinningPctByYear(d.season) ) + "," + 
             (yWinningPctByYear(1))  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(1) )  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0) )  + " " +
              
        "Z";


  } else if (orientation == "standingByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xStandingByYear(d.season)) + "," + 
             (yStandingByYear(1))  + " " +
        "L"+ (xStandingByYear(d.season)) + "," + 
             (yStandingByYear(30)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(30) + yStandingByYear.rangeBand())  + " " +
        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(1)  )  + " " +
              
        "Z";

  } else if (orientation == "standingByYear" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xStandingByYear(d.season)) + "," + 
             (yStandingByYear(1))  + " " +
        "L"+ (xStandingByYear(d.season)) + "," + 
             (yStandingByYear(30)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(30) + yStandingByYear.rangeBand())  + " " +
        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(1)  )  + " " +
              
        "Z";


  } else if (orientation == "allThree" && teamOrder == "yearlyStanding") {
    
    return "M" + 

        " "+ (xAllThree(d.leagueRank,d.season)  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,0)  - xWinningPctByStanding.rangeBand()/5) + " " +
        "L"+ (xAllThree(d.leagueRank,d.season)  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,1)  - xWinningPctByStanding.rangeBand()/5) + " " +
     
        "L" +(xAllThree(d.leagueRank,d.season)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,1)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        
        "L" +(xAllThree(d.leagueRank,d.season)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,0)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        "Z";

  } else if (orientation == "allThree" && teamOrder == "winningest") {

      return "M" + 

        " "+ (xAllThree(d.teamMeanWinningPctRank,d.season)   + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,0) - xWinningPctByStanding.rangeBand()/5) + " " +


        " "+ (xAllThree(d.teamMeanWinningPctRank,d.season)    +   xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,1) - xWinningPctByStanding.rangeBand()/5) + " " +

        "L" +(xAllThree(d.teamMeanWinningPctRank,d.season)    + xWinningPctByYear.rangeBand()/2  + 
               xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,1)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 

        "L" +(xAllThree(d.teamMeanWinningPctRank,d.season)    + xWinningPctByYear.rangeBand()/2  + 
               xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,0)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        "Z";

    }

}


function getYearlyAntennaeCoordinates(d) {

  if (orientation == "winningPctByStanding" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xWinningPctByStanding(d.leagueRank)) + "," + 
             (yWinningPctByStanding(0))  + " " +

        "L"+ (xWinningPctByStanding(d.leagueRank)) + "," + 
             (yWinningPctByStanding(1))  + " " +

        "L"+ (xWinningPctByStanding(d.leagueRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(1) )  + " " +
        "L"+ (xWinningPctByStanding(d.leagueRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(0) )  + " " +
              
        "Z";

  } else if (orientation == "winningPctByStanding" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xWinningPctByStanding(d.teamMeanWinningPctRank)) + "," + 
             (yWinningPctByStanding(0))  + " " +

        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank)) + "," + 
             (yWinningPctByStanding(1))  + " " +

        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(1) )  + " " +
        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(0) )  + " " +
              
        "Z";

  } else if (orientation == "winningPctByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0))  + " " +
        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(1))  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(1) )  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0) )  + " " +
              
        "Z";

  } else if (orientation == "winningPctByYear" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0))  + " " +
        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(1))  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(1) )  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0) )  + " " +
              
        "Z";
  } else if (orientation == "standingByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(1)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(30)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(30)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(1)+ yStandingByYear.rangeBand() )  + " " +
              
        " ";

  } else if (orientation == "standingByYear" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(1)+ yStandingByYear.rangeBand())  + " " +
             
        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(30)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(30)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(1)+ yStandingByYear.rangeBand() )  + " " +
              
        " ";

  } else if (orientation == "allThree" && teamOrder == "yearlyStanding") {
    
    return "M" + 
        " "+ (xAllThree(d.leagueRank,d.season) + xWinningPctByYear.rangeBand()/2  ) + "," + 
             (yAllThree(d.leagueRank,d.season,0) + xWinningPctByYear.rangeBand()/5  ) + " " +
        "L"+ (xAllThree(d.leagueRank,d.season) + xWinningPctByYear.rangeBand()/2 ) + "," + 
             (yAllThree(d.leagueRank,d.season,1) + xWinningPctByYear.rangeBand()/5 ) + " " +
        "L" +(xAllThree(d.leagueRank,d.season)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,1)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        "L" +(xAllThree(d.leagueRank,d.season)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,0)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        "Z";

  } else if (orientation == "allThree" && teamOrder == "winningest") {

      return "M" + 
        " "+ (xAllThree(d.teamMeanWinningPctRank,d.season)   + xWinningPctByYear.rangeBand()/2  ) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,0) + xWinningPctByYear.rangeBand()/5  ) + " " +

        "L"+ (xAllThree(d.teamMeanWinningPctRank,d.season)   + xWinningPctByYear.rangeBand()/2 ) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,1) + xWinningPctByYear.rangeBand()/5 ) + " " +

        "L" +(xAllThree(d.teamMeanWinningPctRank,d.season)    + xWinningPctByYear.rangeBand()/2  + 
               xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,1)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        "L" +(xAllThree(d.teamMeanWinningPctRank,d.season)    + xWinningPctByYear.rangeBand()/2  + 
               xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,0)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        "Z";

    }

}

function getMeshShadowBelowCoordinates(d) {

    if (orientation == "winningPctByStanding" && teamOrder == "yearlyStanding") {

      return "M" + 
//left corner
        " " + xWinningPctByStanding(d.leagueRank) + "," + 
              yWinningPctByStanding(0)  + " " + 
//top corner
        "L" + (xWinningPctByStanding(d.leagueRank)+ xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(0) + " " + 
//right corner
        "L" +(xWinningPctByStanding(d.leagueRank)+ xWinningPctByStanding.rangeBand() ) + ","  +
              yWinningPctByStanding(0) + " " + 
//bottom corner
        "L" +(xWinningPctByStanding(d.leagueRank)) + ","  +
              yWinningPctByStanding(0) + " " + 
              
        "Z";

  } else if (orientation == "winningPctByStanding" && teamOrder == "winningest") {

        return "M" +   

        " " + xWinningPctByStanding(d.teamMeanWinningPctRank) + "," + 
              yWinningPctByStanding(0)  + " " + 

        "L" + (xWinningPctByStanding(d.teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(0) + " " + 

        "L" +(xWinningPctByStanding(d.teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand() ) + ","  +
              yWinningPctByStanding(0) + " " + 

        "L" +(xWinningPctByStanding(d.teamMeanWinningPctRank)) + ","  +
              yWinningPctByStanding(0) + " " +               
        "Z";
    
  } else if (orientation == "winningPctByYear" && teamOrder == "yearlyStanding") {

    return "M" + 
//left corner
        " " + xWinningPctByYear(d.season) + "," + 
              yWinningPctByYear(0)  + " " + 
//top corner
        "L" + xWinningPctByYear(d.season) + ","  +
              yWinningPctByYear(0) + " " + 
//right corner
        "L" +(xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + ","  +
              yWinningPctByYear(0) + " " + 
//bottom corner
        "L" +(xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + ","  +
              yWinningPctByYear(0) + " " + 

        "Z";

  } else if (orientation == "winningPctByYear" && teamOrder == "winningest") {

    return "M" + 

//left corner
        " " + xWinningPctByYear(d.season) + "," + 
              yWinningPctByYear(0)  + " " + 
//top corner
        "L" + xWinningPctByYear(d.season) + ","  +
              yWinningPctByYear(0) + " " + 
//right corner
        "L" +(xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + ","  +
              yWinningPctByYear(0) + " " + 
//bottom corner
        "L" +(xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + ","  +
              yWinningPctByYear(0) + " " + 

        "Z";

  } else if (orientation == "standingByYear" && teamOrder == "yearlyStanding") {

    return "M" + 
//left corner
        " " + xStandingByYear(d.season) + "," + 
              (yStandingByYear(d.leagueRank)+yStandingByYear.rangeBand() ) + " " + 
//top corner
        "L" + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(d.leagueRank)) + " " + 
//right corner
        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand() ) + ","  +
             (yStandingByYear(d.leagueRank)) + " " + 
//bottom corner
        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand()) + ","  +
             (yStandingByYear(d.leagueRank)+yStandingByYear.rangeBand()) + " " + 

        "Z";
    
  } else if (orientation == "standingByYear" && teamOrder == "winningest") {

    return "M" + 
//left corner
        " " + xStandingByYear(d.season) + "," + 
              yStandingByYear(d.teamMeanWinningPctRank)  + " " + 
//top corner
        "L" + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(d.teamMeanWinningPctRank)-yStandingByYear.rangeBand()) + " " + 
//right corner
        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand() ) + ","  +
             (yStandingByYear(d.teamMeanWinningPctRank)-yStandingByYear.rangeBand()) + " " + 
//bottom corner
        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand()) + ","  +
             (yStandingByYear(d.teamMeanWinningPctRank)) + " " + 

        "Z";

  } else if (orientation == "allThree" && teamOrder == "yearlyStanding") {

    return "M" + 

        " " + ( xAllThree(d.leagueRank,d.season)  )  + "," + 
              ( yAllThree(d.leagueRank,d.season,0))  + " " + 

        "L" + ( xAllThree(d.leagueRank,d.season) + xWinningPctByStanding.rangeBand()/2) + "," + 
              ( yAllThree(d.leagueRank,d.season,0) - xWinningPctByStanding.rangeBand()/5) + " " + 

        "L" + ( xAllThree(d.leagueRank,d.season) + xWinningPctByStanding.rangeBand()/2 + xWinningPctByYear.rangeBand()/2) + "," + 
              ( yAllThree(d.leagueRank,d.season,0) - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5)+ " " + 

        "L" + ( xAllThree(d.leagueRank,d.season)+ xWinningPctByYear.rangeBand()/2)  +"," + 
              ( yAllThree(d.leagueRank,d.season,0) + xWinningPctByYear.rangeBand()/5) + " " + 
        "Z";
    
  } else if (orientation == "allThree" && teamOrder == "winningest") {

    return "M" +   

        " " + xAllThree(d.teamMeanWinningPctRank,d.season) + "," + 
              yAllThree(d.teamMeanWinningPctRank,d.season,0)  + " " + 
//top corner
        "L" + ( xAllThree(d.teamMeanWinningPctRank,d.season) + xWinningPctByStanding.rangeBand()/2) + "," + 
              ( yAllThree(d.teamMeanWinningPctRank,d.season,0) - xWinningPctByStanding.rangeBand()/5) + " " + 
//right corner
        "L" + ( xAllThree(d.teamMeanWinningPctRank,d.season) + xWinningPctByStanding.rangeBand()/2 + 
                xWinningPctByYear.rangeBand()/2) + "," + 
              ( yAllThree(d.teamMeanWinningPctRank,d.season,0) - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5)+ " " + 
//bottom corner
        "L" + ( xAllThree(d.teamMeanWinningPctRank,d.season)+ xWinningPctByYear.rangeBand()/2)  +"," + 
              ( yAllThree(d.teamMeanWinningPctRank,d.season,0) + xWinningPctByYear.rangeBand()/5) + " " +

              
        "Z";

  }

}



function getMeshCoordinates(d) {

  if (orientation == "winningPctByStanding" && teamOrder == "yearlyStanding" && setting == "full") { 
          
          return "M" + 

        " " + xWinningPctByStanding(d.leagueRank) + "," + 
              yWinningPctByStanding(d.doublyPriorWinningPct)  + " " + 

        "L" + (xWinningPctByStanding(d.leagueRank)+ xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(d.priorWinningPctWithinStanding) + " " + 

        "L" +(xWinningPctByStanding(d.leagueRank)+ xWinningPctByStanding.rangeBand() ) + ","  +
              yWinningPctByStanding(d.winningPct) + " " + 

        "L" +(xWinningPctByStanding(d.leagueRank)) + ","  +
              yWinningPctByStanding(d.priorWinningPctWithinYear) + " " + 
              
        "Z"; 

  } else if (orientation == "winningPctByStanding" && teamOrder == "winningest" && setting == "full") { 
          
          return "M" +   

        " " + xWinningPctByStanding(d.teamMeanWinningPctRank) + "," + 
              yWinningPctByStanding(d.priorWinningPctWithinTeam)  + " " + 

        "L" + (xWinningPctByStanding(d.teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(d.priorWinningPctWithinTeam) + " " + 

        "L" +(xWinningPctByStanding(d.teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand() ) + ","  +
              yWinningPctByStanding(d.winningPct) + " " + 

        "L" +(xWinningPctByStanding(d.teamMeanWinningPctRank)) + ","  +
              yWinningPctByStanding(d.winningPct) + " " + 
              
        "Z";
        
  } else if (orientation == "winningPctByYear" && teamOrder == "yearlyStanding" && setting == "full") { 
  
          return "M" + 
//left corner
        " " + xWinningPctByYear(d.season) + "," + 
              yWinningPctByYear(d.doublyPriorWinningPct)  + " " + 
//top corner
        "L" + (xWinningPctByYear(d.season)) + ","  +
              yWinningPctByYear(d.priorWinningPctWithinStanding) + " " + 
//right corner
        "L" +(xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand() ) + ","  +
              yWinningPctByYear(d.winningPct) + " " + 
//bottom corner
        "L" +(xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand()) + ","  +
              yWinningPctByYear(d.priorWinningPctWithinYear) + " " + 
              
        "Z"; 

  } else if (orientation == "winningPctByYear" && teamOrder == "winningest" && setting == "full") { 
       
          return "M" +   

        " " + xWinningPctByYear(d.season) + "," + 
              yWinningPctByYear(d.priorWinningPctWithinTeam)  + " " + 

        "L" + (xWinningPctByYear(d.season)) + ","  +
              yWinningPctByYear(d.priorWinningPctWithinTeam) + " " + 

        "L" +(xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand() ) + ","  +
              yWinningPctByYear(d.winningPct) + " " + 

        "L" +(xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand()) + ","  +
              yWinningPctByYear(d.winningPct) + " " + 
              
        "Z";
        
  } else if (orientation == "standingByYear" && teamOrder == "yearlyStanding" && setting == "full") { 
          return "M" + 
//left corner
        " " + xStandingByYear(d.season) + "," + 
              (yStandingByYear(d.leagueRank)+yStandingByYear.rangeBand())  + " " + 
//top corner
        "L" + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(d.leagueRank)) + " " + 
//right corner
        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand() ) + ","  +
             (yStandingByYear(d.leagueRank)) + " " + 
//bottom corner
        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand()) + ","  +
             (yStandingByYear(d.leagueRank)+yStandingByYear.rangeBand()) + " " + 

        "Z"; 

  } else if (orientation == "standingByYear" && teamOrder == "winningest" && setting == "full") { 
          return "M" +   
//left corner
        " " + xStandingByYear(d.season) + "," + 
              (yStandingByYear(d.teamMeanWinningPctRank)+yStandingByYear.rangeBand())  + " " + 
//top corner
        "L" + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(d.teamMeanWinningPctRank)) + " " + 
//right corner
        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand() ) + ","  +
             (yStandingByYear(d.teamMeanWinningPctRank)) + " " + 
//bottom corner
        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand()) + ","  +
             (yStandingByYear(d.teamMeanWinningPctRank)+yStandingByYear.rangeBand()) + " " + 
              
        "Z";

  } else if (orientation=="allThree" && teamOrder == "yearlyStanding" && setting == "full") {

    return "M" + 
//left corner
        " " + xAllThree(d.leagueRank,d.season) + "," + 
              yAllThree(d.leagueRank,d.season,d.doublyPriorWinningPct)  + " " + 
//top corner
        "L" + ( xAllThree(d.leagueRank,d.season) + xWinningPctByStanding.rangeBand()/2) + "," + 
              ( yAllThree(d.leagueRank,d.season,d.priorWinningPctWithinStanding) - xWinningPctByStanding.rangeBand()/5) + " " + 
//right corner
        "L" + ( xAllThree(d.leagueRank,d.season) + xWinningPctByStanding.rangeBand()/2 + xWinningPctByYear.rangeBand()/2) + "," + 
              ( yAllThree(d.leagueRank,d.season,d.winningPct) - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5)+ " " + 
//bottom corner
        "L" + ( xAllThree(d.leagueRank,d.season)+ xWinningPctByYear.rangeBand()/2)  +"," + 
              ( yAllThree(d.leagueRank,d.season,d.priorWinningPctWithinYear) + xWinningPctByYear.rangeBand()/5) + " " + 
        "Z"; 

  } else if (orientation=="allThree" && teamOrder == "winningest" && setting == "full") {

    return "M" +   

        " " + xAllThree(d.teamMeanWinningPctRank,d.season) + "," + 
              yAllThree(d.teamMeanWinningPctRank,d.season,d.priorWinningPctWithinTeam)  + " " + 

        "L" + ( xAllThree(d.teamMeanWinningPctRank,d.season) + xWinningPctByStanding.rangeBand()/2) + "," + 
              ( yAllThree(d.teamMeanWinningPctRank,d.season,d.priorWinningPctWithinTeam) - xWinningPctByStanding.rangeBand()/5) + " " + 

        "L" + ( xAllThree(d.teamMeanWinningPctRank,d.season) + xWinningPctByStanding.rangeBand()/2 + 
                xWinningPctByYear.rangeBand()/2) + "," + 
              ( yAllThree(d.teamMeanWinningPctRank,d.season,d.winningPct) - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5)+ " " + 

        "L" + ( xAllThree(d.teamMeanWinningPctRank,d.season)+ xWinningPctByYear.rangeBand()/2)  +"," + 
              ( yAllThree(d.teamMeanWinningPctRank,d.season,d.winningPct) + xWinningPctByYear.rangeBand()/5) + " " +
              
        "Z";

  
  } else if (orientation=="winningPctByStanding" && teamOrder == "yearlyStanding" && setting == "isolateTeams") {
          return "M" + 

        " " +(xWinningPctByStanding(d.leagueRank) ) + ","  +
              yWinningPctByStanding(0) + " " + 

        "L" +(xWinningPctByStanding(d.leagueRank) +xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(0) + " " + 

        "L" + (xWinningPctByStanding(superdataMeshTeamlyFocus[d.season-2005].leagueRank)+ xWinningPctByStanding.rangeBand() ) + ","  +
              (yWinningPctByStanding(superdataMeshTeamlyFocus[d.season-2005].winningPct

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].leagueRank)
                
                - Math.ceil((d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank)/31)*Math.abs(d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].leagueRank) ))) + " " + 

        "L" + (xWinningPctByStanding(superdataMeshTeamlyFocus[d.season-2005].leagueRank)+ xWinningPctByStanding.rangeBand() ) + ","  +
              (yWinningPctByStanding(superdataMeshTeamlyFocus[d.season-2005].winningPct

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank-1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].leagueRank)
                
                - Math.ceil((d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank)/31)*Math.abs(d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank+1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].leagueRank) ))) + " " + 


              
        "Z"; 

  } else if (orientation=="winningPctByStanding" && teamOrder == "winningest" && setting == "isolateTeams") {
          return "M" + 

        " " +(xWinningPctByStanding(d.teamMeanWinningPctRank)) + ","  +
              yWinningPctByStanding(0) + " " + 

        "L" +(xWinningPctByStanding(d.teamMeanWinningPctRank) +xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(0) + " " + 

        "L" + (xWinningPctByStanding(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand() ) + ","  +
              (yWinningPctByStanding(superdataMeshTeamlyFocus[d.season-2005].winningPct

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)
                
                - Math.ceil((d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)/31)*Math.abs(d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank) ))) + " " + 

        "L" + (xWinningPctByStanding(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand() ) + ","  +
              (yWinningPctByStanding(superdataMeshTeamlyFocus[d.season-2005].winningPct

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank-1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)
                
                - Math.ceil((d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)/31)*Math.abs(d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank+1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank) ))) + " " + 
              
        "Z"; 

  } else if (orientation=="winningPctByYear" && teamOrder == "yearlyStanding" && setting == "isolateTeams") {
          
      return "M" + 

        " " + (xWinningPctByYear(d.season)) + ","  +
              yWinningPctByStanding(0) + " " + 

        "L" +(xWinningPctByYear(d.season)) + ","  +
              yWinningPctByYear(0) + " " + 

        "L" + (xWinningPctByYear(superdataMeshTeamlyFocus[d.season-2005].season)+ xWinningPctByYear.rangeBand() ) + ","  +
              (yWinningPctByYear(superdataMeshTeamlyFocus[d.season-2005].winningPct

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].leagueRank)
                
                - Math.ceil((d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank)/31)*Math.abs(d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].leagueRank) ))) + " " + 

        "L" + (xWinningPctByYear(superdataMeshTeamlyFocus[d.season-2005].season)+ xWinningPctByYear.rangeBand() ) + ","  +
              (yWinningPctByYear(superdataMeshTeamlyFocus[d.season-2005].winningPct

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank-1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].leagueRank)
                
                - Math.ceil((d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank)/31)*Math.abs(d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank+1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].leagueRank) ))) + " " + 


              
        "Z"; 

  } else if (orientation=="winningPctByYear" && teamOrder == "winningest" && setting == "isolateTeams") {
          
      return "M" + 
        " " + (xWinningPctByYear(d.season)) + ","  +
              yWinningPctByStanding(0) + " " + 

        "L" +(xWinningPctByYear(d.season)) + ","  +
              yWinningPctByYear(0) + " " + 

         "L" + (xWinningPctByYear(superdataMeshTeamlyFocus[d.season-2005].season)+ xWinningPctByYear.rangeBand() ) + ","  +
              (yWinningPctByYear(superdataMeshTeamlyFocus[d.season-2005].winningPct

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)
                
                - Math.ceil((d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)/31)*Math.abs(d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank) ))) + " " + 

        "L" + (xWinningPctByYear(superdataMeshTeamlyFocus[d.season-2005].season)+ xWinningPctByYear.rangeBand() ) + ","  +
              (yWinningPctByYear(superdataMeshTeamlyFocus[d.season-2005].winningPct

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank-1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)
                
                - Math.ceil((d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)/31)*Math.abs(d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank+1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank) ))) + " " + 


              
        "Z"; 

  } else if (orientation=="standingByYear" && teamOrder == "yearlyStanding" && setting == "isolateTeams") {

      return "M" + 
//left corner
        " " + xStandingByYear(d.season) + "," + 
              (yStandingByYear(d.leagueRank)+yStandingByYear.rangeBand())  + " " + 
//top corner
        "L" + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(d.leagueRank)) + " " + 

        "L" + (xStandingByYear(d.season)+ xStandingByYear.rangeBand()) + ","  +
              
              (yStandingByYear(superdataMeshTeamlyFocus[d.season-2005].leagueRank))+" " + 

        "L" + (xStandingByYear(d.season)+ xStandingByYear.rangeBand()) + ","  +
              
              (yStandingByYear(superdataMeshTeamlyFocus[d.season-2005].leagueRank))+" " + 
              
        "Z"; 
  } else if (orientation=="standingByYear" && teamOrder == "winningest" && setting == "isolateTeams") {

      return "M" + 

        " " + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(d.teamMeanWinningPctRank)+yStandingByYear.rangeBand() )+ " " + 

        "L" + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(d.teamMeanWinningPctRank)  )+ " " + 

        "L" + (xStandingByYear(d.season)+ xStandingByYear.rangeBand()) + ","  +
              
              (yStandingByYear(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank) )+" " + 

        "L" + (xStandingByYear(d.season)+ xStandingByYear.rangeBand()) + ","  +
              
              (yStandingByYear(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank) )+" " + 

        "Z"; 

  } else if (orientation=="allThree" && teamOrder == "yearlyStanding" && setting == "isolateTeams") {
 
    return "M" + 

        " " + ( xAllThree(d.leagueRank,d.season)+ xWinningPctByYear.rangeBand()/2 )  +"," + 
              ( yAllThree(d.leagueRank,d.season,0) + xWinningPctByYear.rangeBand()/5 ) + " " +

        "L" + ( xAllThree(d.leagueRank,d.season)+ xWinningPctByYear.rangeBand()/2+ xWinningPctByStanding.rangeBand()/2)  +"," + 
              ( yAllThree(d.leagueRank,d.season,0) + xWinningPctByYear.rangeBand()/5- xWinningPctByStanding.rangeBand()/5) + " " +
//notice the all-important -1 & +1 in the second coordinate
        "L" + ( xAllThree(superdataMeshTeamlyFocus[d.season-2005].leagueRank,d.season) + xWinningPctByStanding.rangeBand()/2 + 
                xWinningPctByYear.rangeBand()/2) + "," + 

              ( yAllThree(superdataMeshTeamlyFocus[d.season-2005].leagueRank,d.season,superdataMeshTeamlyFocus[d.season-2005].winningPct 

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].leagueRank)
                
                - Math.ceil((d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank)/31)*Math.abs(d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].leagueRank) ) )

                - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5)+ " " + 

        "L" + ( xAllThree(superdataMeshTeamlyFocus[d.season-2005].leagueRank,d.season) + xWinningPctByStanding.rangeBand()/2 + 
                xWinningPctByYear.rangeBand()/2) + "," + 

              ( yAllThree(superdataMeshTeamlyFocus[d.season-2005].leagueRank,d.season,superdataMeshTeamlyFocus[d.season-2005].winningPct 

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].leagueRank - d.leagueRank-1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].leagueRank)
                
                - Math.ceil((d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank)/31)*Math.abs(d.leagueRank - superdataMeshTeamlyFocus[d.season-2005].leagueRank+1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].leagueRank) ) )

                - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5)+ " " + 

        "Z"; 

  } else if (orientation=="allThree" && teamOrder == "winningest" && setting == "isolateTeams") {

//notice the all-important -1 & +1 in the second coordinate
    return "M" +   

        " " + ( xAllThree(d.teamMeanWinningPctRank,d.season)+ xWinningPctByYear.rangeBand()/2 )  +"," + 
              ( yAllThree(d.teamMeanWinningPctRank,d.season,0) + xWinningPctByYear.rangeBand()/5 ) + " " +

        "L" + ( xAllThree(d.teamMeanWinningPctRank,d.season)+ xWinningPctByYear.rangeBand()/2+ xWinningPctByStanding.rangeBand()/2)  +"," + 
              ( yAllThree(d.teamMeanWinningPctRank,d.season,0) + xWinningPctByYear.rangeBand()/5- xWinningPctByStanding.rangeBand()/5) + " " +

        "L" + ( xAllThree(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank,d.season) + xWinningPctByStanding.rangeBand()/2 + 
                xWinningPctByYear.rangeBand()/2) + "," + 

              ( yAllThree(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank,d.season,superdataMeshTeamlyFocus[d.season-2005].winningPct 

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)
                
                - Math.ceil((d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)/31)*Math.abs(d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank) ) )

                - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5)+ " " + 

        "L" + ( xAllThree(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank,d.season) + xWinningPctByStanding.rangeBand()/2 + 
                xWinningPctByYear.rangeBand()/2) + "," + 

              ( yAllThree(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank,d.season,superdataMeshTeamlyFocus[d.season-2005].winningPct 

                - Math.ceil((superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank)/31)*Math.abs(superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank - d.teamMeanWinningPctRank-1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)
                
                - Math.ceil((d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank)/31)*Math.abs(d.teamMeanWinningPctRank - superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank+1)*(superdataMeshTeamlyFocus[d.season-2005].winningPct / (31- superdataMeshTeamlyFocus[d.season-2005].teamMeanWinningPctRank) ) )

                - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5)+ " " + 

        "Z"; 

  } else if (orientation=="winningPctByStanding" && teamOrder == "yearlyStanding" && setting == "isolateSeasons") {

          return "M" + 

        " " + ( xWinningPctByStanding(d.leagueRank)) + "," +
              
              ( yWinningPctByStanding(0) ) + " " + 

        "L" + ( xWinningPctByStanding(d.leagueRank)+ xWinningPctByStanding.rangeBand()) + "," + 
              
              ( yWinningPctByStanding(0) ) + " " + 

        "L" + ( xWinningPctByStanding(d.leagueRank)+ xWinningPctByStanding.rangeBand()) + "," + 
 
              (yWinningPctByStanding(superdataMeshYearlyFocus[d.leagueRank-1].winningPct 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].winningPct / (year-2004) )
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].winningPct / (2017-year)) )) + " " + 
        
        "L" + ( xWinningPctByStanding(d.leagueRank)) + "," +
 
              (yWinningPctByStanding(superdataMeshYearlyFocus[d.leagueRank-1].priorWinningPctWithinYear 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].priorWinningPctWithinYear / (year-2004) )
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].priorWinningPctWithinYear / (2017-year)) )) + " " +  
     
        "Z"; 


  } else if (orientation=="winningPctByStanding" && teamOrder == "winningest" && setting == "isolateSeasons") {
         
          return "M" + 

        " " + ( xWinningPctByStanding(d.teamMeanWinningPctRank)) + "," +
              
              ( yWinningPctByStanding(0) ) + " " + 

        "L" + ( xWinningPctByStanding(d.teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand()) + "," + 
              
              ( yWinningPctByStanding(0) ) + " " + 

        "L" + ( xWinningPctByStanding(d.teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand()) + "," + 

              (yWinningPctByYear(yearlySuperdata[30-d.teamMeanWinningPctRank].winningPct 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].winningPct / (year-2004) )
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].winningPct / (2017-year)) )) + " " + 
        
        "L" + ( xWinningPctByStanding(d.teamMeanWinningPctRank)) + "," +
 
              (yWinningPctByYear(yearlySuperdata[30-d.teamMeanWinningPctRank].priorWinningPctWithinMeanTeamRanks 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].priorWinningPctWithinMeanTeamRanks / (year-2004) )
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].priorWinningPctWithinMeanTeamRanks / (2017-year)) )) + " " + 
     
        "Z"; 
 


  } else if (orientation=="winningPctByYear" && teamOrder == "yearlyStanding" && setting == "isolateSeasons") {
         
      return "M" + 

        " " + (xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand() )+ "," + 
              
              yWinningPctByYear(0) + " " + 

        "L" + (xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand() )+ "," + 
              
              yWinningPctByYear(0) + " " + 

        "L" + (xWinningPctByYear(year)+ xWinningPctByYear.rangeBand() )+ "," + 
              
              (yWinningPctByYear(superdataMeshYearlyFocus[d.leagueRank-1].winningPct 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].winningPct / (year-2004) )
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].winningPct / (2017-year)) )) + " " + 
        
        "L" + (xWinningPctByYear(year)+ xWinningPctByYear.rangeBand() ) + "," + 
              
              (yWinningPctByYear(superdataMeshYearlyFocus[d.leagueRank-1].priorWinningPctWithinYear 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].priorWinningPctWithinYear / (year-2004) )
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].priorWinningPctWithinYear / (2017-year)) )) + " " + 
        "Z"; 

  } else if (orientation=="winningPctByYear" && teamOrder == "winningest" && setting == "isolateSeasons") {
          
      return "M" + 

        " " + (xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand() )+ "," + 
              
              yWinningPctByYear(0) + " " + 

        "L" + (xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand() )+ "," + 
              
              yWinningPctByYear(0) + " " + 

        "L" + (xWinningPctByYear(year)+ xWinningPctByYear.rangeBand() )+ "," + 
              
              (yWinningPctByYear(yearlySuperdata[30-d.teamMeanWinningPctRank].winningPct 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].winningPct / (year-2004) )
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].winningPct / (2017-year)) )) + " " + 
        
        "L" + (xWinningPctByYear(year)+ xWinningPctByYear.rangeBand() ) + "," + 
              
              (yWinningPctByYear(yearlySuperdata[30-d.teamMeanWinningPctRank].priorWinningPctWithinMeanTeamRanks

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].priorWinningPctWithinMeanTeamRanks / (year-2004) )
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].priorWinningPctWithinMeanTeamRanks / (2017-year)) )) + " " + 

        "Z";  

  } else if (orientation=="standingByYear" && teamOrder == "yearlyStanding" && setting == "isolateSeasons") {
         
      return "M" + 

        " " + ( xStandingByYear(d.season) + xStandingByYear.rangeBand() ) + "," + 

              (yStandingByYear(d.leagueRank) + yStandingByYear.rangeBand()) + " " +  

        "L" + ( xStandingByYear(d.season) + xStandingByYear.rangeBand() ) + "," + 

              (yStandingByYear(d.leagueRank)) + " " + 

        "L" + ( xStandingByYear(year) + xStandingByYear.rangeBand() ) + "," + 

              (yStandingByYear(d.leagueRank) ) + " " + 

        "L" + ( xStandingByYear(year) + xStandingByYear.rangeBand() ) + "," + 

              (yStandingByYear(d.leagueRank) + yStandingByYear.rangeBand()) + " " +  
              
        "Z"; 

  } else if (orientation=="standingByYear" && teamOrder == "winningest" && setting == "isolateSeasons") {
          
      return "M" + 

        " " + ( xStandingByYear(d.season) + xStandingByYear.rangeBand() ) + "," + 

              (yStandingByYear(d.teamMeanWinningPctRank) + yStandingByYear.rangeBand()) + " " +  

        "L" + ( xStandingByYear(d.season) + xStandingByYear.rangeBand() ) + "," + 

              (yStandingByYear(d.teamMeanWinningPctRank) ) + " " + 

        "L" + ( xStandingByYear(year) + xStandingByYear.rangeBand() ) + "," + 

              (yStandingByYear(d.teamMeanWinningPctRank) ) + " " + 

        "L" + ( xStandingByYear(year) + xStandingByYear.rangeBand() ) + "," + 
        
              (yStandingByYear(d.teamMeanWinningPctRank) + yStandingByYear.rangeBand()) + " " +  
              
        "Z"; 

  } else if (orientation=="allThree" && teamOrder == "yearlyStanding" && setting == "isolateSeasons") {
          return "M" + 
//ok ok
        " " +  (xAllThree(d.leagueRank,d.season) + xWinningPctByYear.rangeBand()/2) + "," + 

               (yAllThree(d.leagueRank,d.season,0) + xWinningPctByYear.rangeBand()/5) + " " + 

//top corner
        "L" +  (xAllThree(d.leagueRank,d.season)+ xWinningPctByYear.rangeBand()/2 + xWinningPctByStanding.rangeBand()/2) + "," + 
              
               (yAllThree(d.leagueRank,d.season,0)+xWinningPctByYear.rangeBand()/5 - xWinningPctByStanding.rangeBand()/5) +" " + 

//right corner
        "L" +  (xAllThree(d.leagueRank,year) + xWinningPctByYear.rangeBand()/2+xWinningPctByStanding.rangeBand()/2 ) + "," + 

               (yAllThree(d.leagueRank,year,superdataMeshYearlyFocus[d.leagueRank-1].winningPct 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].winningPct / (year-2004))
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].winningPct / (2017-year)) )

                    - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5 ) + " " + 
//bottom corner
        "L" +  (xAllThree(d.leagueRank,year)+xWinningPctByYear.rangeBand()/2) + "," + 

               (yAllThree(d.leagueRank,year,superdataMeshYearlyFocus[d.leagueRank-1].priorWinningPctWithinYear 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].priorWinningPctWithinYear / (year-2004))
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(superdataMeshYearlyFocus[d.leagueRank-1].priorWinningPctWithinYear / (2017-year)) )

                  + xWinningPctByYear.rangeBand()/5) + " " + 

        "Z"; 



  } else if (orientation=="allThree" && teamOrder == "winningest" && setting == "isolateSeasons") {
          return "M" + 

//ok ok
        " " +  (xAllThree(d.teamMeanWinningPctRank,d.season) + xWinningPctByYear.rangeBand()/2) + "," + 

               (yAllThree(d.teamMeanWinningPctRank,d.season,0) + xWinningPctByYear.rangeBand()/5) + " " + 

//top corner
        "L" +  (xAllThree(d.teamMeanWinningPctRank,d.season)+ xWinningPctByYear.rangeBand()/2 + xWinningPctByStanding.rangeBand()/2) + "," + 
              
               (yAllThree(d.teamMeanWinningPctRank,d.season,0)+xWinningPctByYear.rangeBand()/5 - xWinningPctByStanding.rangeBand()/5) +" " + 

//right corner
        " " +  (xAllThree(d.teamMeanWinningPctRank,year) + xWinningPctByYear.rangeBand()/2+xWinningPctByStanding.rangeBand()/2 ) + "," + 

               (yAllThree(d.teamMeanWinningPctRank,year,yearlySuperdata[30-d.teamMeanWinningPctRank].winningPct 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].winningPct / (year-2004))
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].winningPct / (2017-year)) )

                    - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5 ) + " " + 
//bottom corner
        "L" +  (xAllThree(d.teamMeanWinningPctRank,year)+xWinningPctByYear.rangeBand()/2) + "," + 

               (yAllThree(d.teamMeanWinningPctRank,year,yearlySuperdata[30-d.teamMeanWinningPctRank].priorWinningPctWithinMeanTeamRanks 

                    - Math.ceil((year - d.season+1)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].priorWinningPctWithinMeanTeamRanks / (year-2004))
                    - Math.ceil((d.season - year)/12) * Math.abs(year - d.season)*(yearlySuperdata[30-d.teamMeanWinningPctRank].priorWinningPctWithinMeanTeamRanks / (2017-year)) )

                  + xWinningPctByYear.rangeBand()/5) + " " + 

        "Z"; 
  }

}


function getMeshFill(d) {

      if (colorSpectrum == "teamPrimaries") {

        return d3.rgb(teamColorScale(d.teamID));

      } else if (colorSpectrum == "blues") {

        return d3.rgb(colorScale(5 + Math.floor(d.valence/2)*Math.ceil(50*d.barHeight) +Math.ceil(d.valence/2 -.0001)*Math.ceil(50*d.barHeight) ) );

      } else if (colorSpectrum == "blueBorders") {

        return d3.rgb(colorScale(5 + Math.floor(d.valence/2)*Math.ceil(50*d.barHeight) +Math.ceil(d.valence/2 -.0001)*Math.ceil(50*d.barHeight) ) );

      } else if (colorSpectrum == "teamPrimaryBorders") { 

        return d3.rgb(teamColorScale(d.teamID));

    } 


} 

function getMeshFillOpacity(d) {

      if (colorSpectrum == "teamPrimaries") {

        return .6;

      } else if (colorSpectrum == "blues") {

        return .6;

      } else if (colorSpectrum == "blueBorders") {

        return .1;

      } else if (colorSpectrum == "teamPrimaryBorders") { 

        return .1;

    } 


} 
function getYearlyAntennaeFill(d) {

  if (setting == "isolateSeasons") {

    return "red";

  } else {

    return "none";
  }
}

function getTeamlyAntennaeFill(d) {

  if (setting == "isolateTeams") {

    return "blue";

  } else {

    return "none";
  }
}

function getTeamlyPathOpacity(d) {

  if (setting == "isolateSeasons") {

    return 0;

  } else {

    return .4;
  }
}
function getScatterPlotCircleFillOpacity(d) {

  if (setting == "isolateSeasons") {

    return 0;

  } else {

    return .8;
  }
}

function getTeamlyPathCoordinates(d) {

  if (orientation == "winningPctByStanding" && teamOrder == "yearlyStanding") {

    return "M" + 

        " " + (xWinningPctByStanding(d.priorLeagueRankWithinTeam)+ xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(d.priorWinningPctWithinTeam) + " " + 

        "L" +(xWinningPctByStanding(d.leagueRank)+ xWinningPctByStanding.rangeBand() ) + ","  +
              yWinningPctByStanding(d.winningPct) + " " + 
              
        " ";

  } else if (orientation == "winningPctByStanding" && teamOrder == "winningest") {

    return "M" + 

        " " + (xWinningPctByStanding(d.teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(d.priorWinningPctWithinTeam) + " " + 

        "L" + (xWinningPctByStanding(d.teamMeanWinningPctRank)+ xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(d.winningPct) + " " + 
              
        " ";
    
  } else if (orientation == "winningPctByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " " + (xWinningPctByYear(d.season)) + ","  +
              yWinningPctByYear(d.priorWinningPctWithinTeam) + " " + 

        "L" +(xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand() ) + ","  +
              yWinningPctByYear(d.winningPct) + " " + 
              
        " ";
    
  } else if (orientation == "winningPctByYear" && teamOrder == "winningest") {

    return "M" + 

        " " + (xWinningPctByYear(d.season)) + ","  +
              yWinningPctByYear(d.priorWinningPctWithinTeam) + " " + 

        "L" + (xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand()) + ","  +
              yWinningPctByYear(d.winningPct) + " " + 
              
        " ";
    
  } else if (orientation == "standingByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " " + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(d.priorLeagueRankWithinTeam) )  + " " + 

        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand() ) + ","  +
             (yStandingByYear(d.leagueRank) ) + " " + 
              
        " ";
    
  } else if (orientation == "standingByYear" && teamOrder == "winningest") {

    return "M" + 

        " " + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(d.teamMeanWinningPctRank) ) + " " + 

        "L" + (xStandingByYear(d.season)+ xStandingByYear.rangeBand()) + ","  +
              (yStandingByYear(d.teamMeanWinningPctRank) ) + " " + 
              
        " ";
    
  } else if (orientation == "allThree" && teamOrder == "yearlyStanding") {

    return "M" + 

        " " +(xAllThree(d.priorLeagueRankWithinTeam, d.priorSeason)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.priorLeagueRankWithinTeam,d.priorSeason,d.priorWinningPctWithinTeam)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 

        "L" +(xAllThree(d.leagueRank,d.season)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,d.winningPct)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        " ";
    
  } else if (orientation == "allThree" && teamOrder == "winningest") {

    return "M" + 

        " " +(xAllThree(d.teamMeanWinningPctRank, d.priorSeason)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.priorSeason,d.priorWinningPctWithinTeam)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 

        "L" +(xAllThree(d.teamMeanWinningPctRank,d.season)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,d.winningPct)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        " ";
    
  }

}

//retiring these two shadows for now
/* 
function getTeamlyPathShadowCoordinates(d) {

  if (orientation == "winningPctByStanding") {

    return "M" + 

        " " + (xWinningPctByStanding(30)+ xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(0) + " " + 

        "L" + (xWinningPctByStanding(30)+ xWinningPctByStanding.rangeBand()) + ","  +
              yWinningPctByStanding(d.priorWinningPctWithinTeam) + " " + 

        "L" +(xWinningPctByStanding(30)+ xWinningPctByStanding.rangeBand() ) + ","  +
              yWinningPctByStanding(d.winningPct) + " " + 

        "L" +(xWinningPctByStanding(30)+ xWinningPctByStanding.rangeBand() ) + ","  +
              yWinningPctByStanding(0) + " " + 
              
        " ";

  }  else if (orientation == "winningPctByYear") {

    return "M" + 

        " " + (xWinningPctByYear(d.season)) + ","  +
              yWinningPctByYear(0) + " " + 

        "L" + (xWinningPctByYear(d.season)) + ","  +
              yWinningPctByYear(d.priorWinningPctWithinTeam) + " " + 

        "L" +(xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand() ) + ","  +
              yWinningPctByYear(d.winningPct) + " " + 

        "L" +(xWinningPctByYear(d.season)+ xWinningPctByYear.rangeBand() ) + ","  +
              yWinningPctByYear(0) + " " + 
              
        " ";
    
  } else if (orientation == "standingByYear") {

    return "M" + 

        " " + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(1) )  + " " + 

        "L" + (xStandingByYear(d.season)) + ","  +
              (yStandingByYear(1) )  + " " + 

        "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand() ) + ","  +
             (yStandingByYear(1) ) + " " + 
            
          "L" +(xStandingByYear(d.season)+ xStandingByYear.rangeBand() ) + ","  +
             (yStandingByYear(1) ) + " " + 

        " ";
    
  }  else if (orientation == "allThree") {

    return "M" + 

        " " +(xAllThree(30, d.priorSeason) + xWinningPctByStanding.rangeBand()/2   + xWinningPctByYear.rangeBand()/2 ) + "," + 
             (yAllThree(30,d.priorSeason,0) - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5  ) + " " + 

        "L" +(xAllThree(30, d.priorSeason)+ xWinningPctByStanding.rangeBand()/2    + xWinningPctByYear.rangeBand()/2 )  + "," + 
             (yAllThree(30,d.priorSeason,d.priorWinningPctWithinTeam) - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5  ) + " " + 

        "L" +(xAllThree(30,d.season)+ xWinningPctByStanding.rangeBand()/2    + xWinningPctByYear.rangeBand()/2 ) + "," + 
             (yAllThree(30,d.season,d.winningPct)  - xWinningPctByStanding.rangeBand()/5+ xWinningPctByYear.rangeBand()/5  ) + " " +

        "L" +(xAllThree(30,d.season) + xWinningPctByStanding.rangeBand()/2   + xWinningPctByYear.rangeBand()/2  ) + "," + 
             (yAllThree(30,d.season,0)  - xWinningPctByStanding.rangeBand()/5 + xWinningPctByYear.rangeBand()/5 ) + " " + 

        "Z";
    
  } 

}

function getYearlyPathSilhouetteCoordinates(d) {

  if (orientation == "winningPctByStanding" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xWinningPctByStanding(d.leagueRank) ) + "," + 
             (yWinningPctByStanding(0))  + " " +

        "L"+ (xWinningPctByStanding(d.leagueRank) ) + "," + 
             (yWinningPctByStanding(d.priorWinningPctWithinYear))  + " " +

        "L"+ (xWinningPctByStanding(d.leagueRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(d.winningPct) )  + " " +

        "L"+ (xWinningPctByStanding(d.leagueRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(0) )  + " " +
              
        " ";

  } else if (orientation == "winningPctByStanding" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xWinningPctByStanding(d.teamMeanWinningPctRank) ) + "," + 
             (yWinningPctByStanding(0))  + " " +

        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank) ) + "," + 
             (yWinningPctByStanding(d.priorWinningPctWithinMeanTeamRanks))  + " " +

        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(d.winningPct) )  + " " +

        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(0) )  + " " +
        " ";

  } else if (orientation == "winningPctByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xWinningPctByYear(2016) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0))  + " " +

        "L"+ (xWinningPctByYear(2016) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d.priorWinningPctWithinYear))  + " " +

        "L"+ (xWinningPctByYear(2016) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d.winningPct) )  + " " +

        "L"+ (xWinningPctByYear(2016) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0) )  + " " +
              
        " ";

  } else if (orientation == "winningPctByYear" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xWinningPctByYear(2016) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0))  + " " +

        "L"+ (xWinningPctByYear(2016) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d.priorWinningPctWithinMeanTeamRanks))  + " " +

        "L"+ (xWinningPctByYear(2016) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d.winningPct) )  + " " +

        "L"+ (xWinningPctByYear(2016) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(0) )  + " " +

        " ";

  } else if (orientation == "standingByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xStandingByYear(2016) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(d.leagueRank)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(2016) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(d.leagueRank)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(2016) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(d.leagueRank) )  + " " +

        "L"+ (xStandingByYear(2016) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(d.leagueRank) )  + " " +
              
        " ";

  } else if (orientation == "standingByYear" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xStandingByYear(2016) + xStandingByYear.rangeBand()) + "," + 
            (yStandingByYear(d.teamMeanWinningPctRank)+yStandingByYear.rangeBand() )  + " " +

        "L"+ (xStandingByYear(2016) + xStandingByYear.rangeBand()) + "," + 
            (yStandingByYear(d.teamMeanWinningPctRank) + yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(2016) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(d.teamMeanWinningPctRank)) + " " + 

        "L"+ (xStandingByYear(2016) + xStandingByYear.rangeBand()) + "," + 
            (yStandingByYear(d.teamMeanWinningPctRank) )  + " " +
        " ";

  } else if (orientation == "allThree" && teamOrder == "yearlyStanding") {
    
    return "M" + 

        " "+ (xAllThree(d.leagueRank,2016)    + xWinningPctByYear.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,2016,0)  + xWinningPctByYear.rangeBand()/5) + " " +

        "L"+ (xAllThree(d.leagueRank,2016)    + xWinningPctByYear.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,2016,d.priorWinningPctWithinYear)  + xWinningPctByYear.rangeBand()/5) + " " +

        "L" +(xAllThree(d.leagueRank,2016)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,2016,d.winningPct)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 

        "L" +(xAllThree(d.leagueRank,2016)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,2016,0)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 

        "Z";

  } else if (orientation == "allThree" && teamOrder == "winningest") {

      return "M" + 

        " "+ (xAllThree(d.teamMeanWinningPctRank,2016)    + xWinningPctByYear.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,2016,0)  + xWinningPctByYear.rangeBand()/5) + " " +

        "L"+ (xAllThree(d.teamMeanWinningPctRank,2016)    + xWinningPctByYear.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,2016,d.priorWinningPctWithinMeanTeamRanks)  + xWinningPctByYear.rangeBand()/5) + " " +

        "L" +(xAllThree(d.teamMeanWinningPctRank,2016)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,2016,d.winningPct)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 

        "L" +(xAllThree(d.teamMeanWinningPctRank,2016)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,2016,0)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 

        "Z";
    }

}
*/

function getCX(d) {

  if (orientation == "winningPctByStanding" && teamOrder == "yearlyStanding") {

    return (xWinningPctByStanding(d.leagueRank) + xWinningPctByStanding.rangeBand() );

  } else if (orientation == "winningPctByStanding" && teamOrder == "winningest") {

    return (xWinningPctByStanding(d.teamMeanWinningPctRank) + xWinningPctByStanding.rangeBand());
    
  } else if (orientation == "winningPctByYear" && teamOrder == "yearlyStanding") {

    return (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand() );
    
  } else if (orientation == "winningPctByYear" && teamOrder == "winningest") {

    return (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()); 
    
  } else if (orientation == "standingByYear" && teamOrder == "yearlyStanding") {

    return (xStandingByYear(d.season) + xStandingByYear.rangeBand() ); 
    
  } else if (orientation == "standingByYear" && teamOrder == "winningest") {

    return (xStandingByYear(d.season) + xStandingByYear.rangeBand()); 
    
  } else if (orientation == "allThree" && teamOrder == "yearlyStanding") {

    return( xAllThree(d.leagueRank,d.season) + xWinningPctByYear.rangeBand()/2 + xWinningPctByStanding.rangeBand()/2);
    
  } else if (orientation == "allThree" && teamOrder == "winningest") {

    return ( xAllThree(d.teamMeanWinningPctRank,d.season) + xWinningPctByYear.rangeBand()/2 + xWinningPctByStanding.rangeBand()/2 );
    
  }

}
function getYearlyPathOpacity(d) {

  if (orientation == "winningPctByStanding" && setting == "full") {
    return .8;
  } else  if (orientation == "winningPctByStanding" && setting == "isolateSeasons"){
    return .8;
  } else {
    return 0;
  }

}

function getYearlyPathCoordinates(d) {

  if (orientation == "winningPctByStanding" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xWinningPctByStanding(d.leagueRank) ) + "," + 
             (yWinningPctByStanding(d.priorWinningPctWithinYear))  + " " +

        "L"+ (xWinningPctByStanding(d.leagueRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(d.winningPct) )  + " " +
              
        " ";

  } else if (orientation == "winningPctByStanding" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xWinningPctByStanding(d.teamMeanWinningPctRank) ) + "," + 
             (yWinningPctByStanding(d.priorWinningPctWithinMeanTeamRanks))  + " " +

        "L"+ (xWinningPctByStanding(d.teamMeanWinningPctRank) + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(d.winningPct) )  + " " +
        " ";

  } else if (orientation == "winningPctByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d.priorWinningPctWithinYear))  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d.winningPct) )  + " " +
              
        " ";

  } else if (orientation == "winningPctByYear" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d.priorWinningPctWithinMeanTeamRanks))  + " " +

        "L"+ (xWinningPctByYear(d.season) + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d.winningPct) )  + " " +
        " ";

  } else if (orientation == "standingByYear" && teamOrder == "yearlyStanding") {

    return "M" + 

        " "+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(d.leagueRank)+ yStandingByYear.rangeBand())  + " " +

        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(d.leagueRank) )  + " " +
              
        " ";

  } else if (orientation == "standingByYear" && teamOrder == "winningest") {

    return "M" + 

        " "+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(d.teamMeanWinningPctRank)+ yStandingByYear.rangeBand() ) + " " + 

        "L"+ (xStandingByYear(d.season) + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(d.teamMeanWinningPctRank) ) + " " + 
        " ";

  } else if (orientation == "allThree" && teamOrder == "yearlyStanding") {
    
    return "M" + 

        " "+ (xAllThree(d.leagueRank,d.season)    + xWinningPctByYear.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,d.priorWinningPctWithinYear)  + xWinningPctByYear.rangeBand()/5) + " " +
/*
        "L"+ (xAllThree(d.leagueRank,d.season)    + xWinningPctByYear.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,d.priorWinningPctWithinYear)  + xWinningPctByYear.rangeBand()/5) + " " +

        "L" +(xAllThree(d.leagueRank,d.season)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,d.winningPct)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
*/             
        "L" +(xAllThree(d.leagueRank,d.season)    + xWinningPctByYear.rangeBand()/2  + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.leagueRank,d.season,d.winningPct)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        "Z";

  } else if (orientation == "allThree" && teamOrder == "winningest") {

      return "M" + 

        " "+ (xAllThree(d.teamMeanWinningPctRank,d.season)    + xWinningPctByYear.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,d.priorWinningPctWithinMeanTeamRanks)  + xWinningPctByYear.rangeBand()/5) + " " +

        "L" +(xAllThree(d.teamMeanWinningPctRank,d.season)    + xWinningPctByYear.rangeBand()/2  + 
               xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(d.teamMeanWinningPctRank,d.season,d.winningPct)  + xWinningPctByYear.rangeBand()/5  - xWinningPctByStanding.rangeBand()/5) + " " + 
        " ";

    }

}

function getCY(d) {

  if (orientation == "winningPctByStanding" && teamOrder == "yearlyStanding") {

    return yWinningPctByStanding(d.winningPct);

  } else if (orientation == "winningPctByStanding" && teamOrder == "winningest") {

    return yWinningPctByStanding(d.winningPct);
    
  } else if (orientation == "winningPctByYear" && teamOrder == "yearlyStanding") {

    return yWinningPctByYear(d.winningPct);
    
  } else if (orientation == "winningPctByYear" && teamOrder == "winningest") {

    return ( yWinningPctByYear(d.winningPct));
    
  } else if (orientation == "standingByYear" && teamOrder == "yearlyStanding") {

    return (yStandingByYear(d.leagueRank)); 
    
  } else if (orientation == "standingByYear" && teamOrder == "winningest") {

    return (yStandingByYear(d.teamMeanWinningPctRank));
    
  } else if (orientation == "allThree" && teamOrder == "yearlyStanding") {

    return ( yAllThree(d.leagueRank,d.season,d.winningPct) + xWinningPctByYear.rangeBand()/5 - xWinningPctByStanding.rangeBand()/5);
    
  } else if (orientation == "allThree" && teamOrder == "winningest") {

    return (yAllThree(d.teamMeanWinningPctRank,d.season,d.winningPct)+xWinningPctByYear.rangeBand()/5-xWinningPctByStanding.rangeBand()/5);

  }

}
/*
function getMovingQuadrilateralFrontCoordinates(d) {

  if (orientation == "winningPctByStanding")  {

      return "M" + 

        " "+ (xWinningPctByStanding(1)) + "," + 
             (yWinningPctByStanding(d)) + " " + 

        "L"+ (xWinningPctByStanding(1)) + "," + 
             (yWinningPctByStanding(d)) + " " +

        "L"+ (xWinningPctByStanding(30)   + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(d) ) + " " +
 
        " ";

    } else if (orientation == "winningPctByYear")  {

      return "M" + 

        " "+ (xWinningPctByYear(2005)) + "," + 
             (yWinningPctByYear(d)) + " " + 

        "L"+ (xWinningPctByYear(2016)   + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d)) + " " +

        "L"+ (xWinningPctByYear(2016)   + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d) ) + " " +
 
        " ";

    } else if (orientation == "standingByYear")  {

      return "M" + 
      
        " "+ (xStandingByYear(2005)) + "," + 
             (yStandingByYear(1)) + " " +

        "L"+ (xStandingByYear(2016)   + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(1)) + " " +

        "L"+ (xStandingByYear(2016)   + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(30)  - yStandingByYear.rangeBand()) + " " +
 
        " ";

    } else if (orientation == "allThree")  {

      return "M" + 

        " "+ (xAllThree(1,2005)) + "," + 
             (yAllThree(1,2005,d.winningPct)) + " " +

        " "+ (xAllThree(1,2016)   + xWinningPctByYear.rangeBand()/2) + "," + 
             (yAllThree(1,2016,d.winningPct) + xWinningPctByYear.rangeBand()/5) + " " +

        " "+ (xAllThree(30,2016)   + xWinningPctByYear.rangeBand()/2 + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(30,2016,d.winningPct) + xWinningPctByYear.rangeBand()/5 - xWinningPctByStanding.rangeBand()/5) + " " +
 
        " ";
    }
  }
*/
function getQuintileQuadrilateralFrontCoordinates(d) {

  if (orientation == "winningPctByStanding")  {

      return "M" + 

        " "+ (xWinningPctByStanding(1)) + "," + 
             (yWinningPctByStanding(d)) + " " + 

        "L"+ (xWinningPctByStanding(1)) + "," + 
             (yWinningPctByStanding(d)) + " " +

        "L"+ (xWinningPctByStanding(30)   + xWinningPctByStanding.rangeBand()) + "," + 
             (yWinningPctByStanding(d) ) + " " +
 
        " ";

    } else if (orientation == "winningPctByYear")  {

      return "M" + 

        " "+ (xWinningPctByYear(2005)) + "," + 
             (yWinningPctByYear(d)) + " " + 

        "L"+ (xWinningPctByYear(2016)   + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d)) + " " +

        "L"+ (xWinningPctByYear(2016)   + xWinningPctByYear.rangeBand()) + "," + 
             (yWinningPctByYear(d) ) + " " +
 
        " ";

    } else if (orientation == "standingByYear")  {

      return "M" + 
      
        " "+ (xStandingByYear(2005)) + "," + 
             (yStandingByYear(1)+ yStandingByYear.rangeBand()) + " " +

        "L"+ (xStandingByYear(2016)   + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(1)+ yStandingByYear.rangeBand()) + " " +

        "L"+ (xStandingByYear(2016)   + xStandingByYear.rangeBand()) + "," + 
             (yStandingByYear(30)) + " " +
 
        " ";

    } else if (orientation == "allThree")  {

      return "M" + 

        " "+ (xAllThree(1,2005)) + "," + 
             (yAllThree(1,2005,d)) + " " +

        "L"+ (xAllThree(1,2016)   + xWinningPctByYear.rangeBand()/2) + "," + 
             (yAllThree(1,2016,d) + xWinningPctByYear.rangeBand()/5) + " " +

        "L"+ (xAllThree(30,2016)   + xWinningPctByYear.rangeBand()/2 + xWinningPctByStanding.rangeBand()/2) + "," + 
             (yAllThree(30,2016,d) + xWinningPctByYear.rangeBand()/5 - xWinningPctByStanding.rangeBand()/5) + " " +
 
        " ";
    }
  }

function getTeamOrderButtonTextX(d) {

  if (d != "Sort Teams")  {
    return 30;
  } else {
    return 0;
  }
}

function getTeamOrderButtonTextY(d,i) {
      if (i == 0) {
      return 356; 
    } else if (i == 1) {
      return 376; 
    } else if (i == 2) {
      return 388; 
    } else if (i == 3) {
      return 416; 
    } else if (i == 4) {
      return 428; 
    }

} 

function getSettingButtonTextX(d) {

  if (d != "Setting")  {
    return 30;
  } else {
    return 0;
  }
}

function getSettingButtonTextY(d,i) {
      if (i == 0) {
      return 456; 
    } else if (i == 1) {
      return 476; 
    } else if (i == 2) {
      return 488; 
    } else if (i == 3) {
      return 516; 
    } else if (i == 4) {
      return 528; 
    } else if (i == 5) {
      return 556; 
    } else if (i == 6) {
      return 568; 
    }

} 
   
function getOrientationButtonTextX(d) {

  if (d != "Orientation")  {
    return 30;
  } else {
    return 0;
  }
}

function getOrientationButtonTextY(d,i) {
      if (i == 0) {
      return 164; 
    } else if (i == 1) {
      return 184; 
    } else if (i == 2) {
      return 196; 
    } else if (i == 3) {
      return 224; 
    } else if (i == 4) {
      return 236; 
    } else if (i == 5) {
      return 264; 
    } else if (i == 6) {
      return 276; 
    } else if (i == 7) {
      return 304; 
    } else if (i == 8) {
      return 316; 
    } else if (i == 9) {
      return 328; 
    }

    } 
function getOrientationButtonCoordinates(d) {

var xColumn = 0;

var yStart = 176;

var buttonUnit = 20;

  if (d == "winningPctByStanding")  {

      return "M" + 

        " "+ (xColumn) + "," + 
             (yStart + buttonUnit )+ " " + 

        "L"+ (xColumn ) + "," + 
             yStart + " " + 

        "L"+ (xColumn+ buttonUnit )+ "," + 
             yStart + " " + 

        "L"+ (xColumn+buttonUnit)+ "," + 
             (yStart + buttonUnit )  + " " + 
 
        " ";

    } else if (d == "winningPctByYear")  {

      return "M" + 

        " "+ (xColumn) + "," + 
             (yStart + 3*buttonUnit )+ " " + 

        "L"+ (xColumn) + "," + 
             (yStart + 2*buttonUnit )+ " " + 

        "L"+ (xColumn+ buttonUnit)+ "," + 
             (yStart + 2*buttonUnit )+ " " + 

        "L"+ (xColumn+buttonUnit )+ "," + 
             (yStart + 3*buttonUnit )+ " " + 
 
        " ";

    } else if (d == "standingByYear")  {

      return "M" + 

        " "+ (xColumn ) + "," + 
             (yStart + 5*buttonUnit )+ " " + 

        "L"+ (xColumn ) + "," + 
             (yStart + 4*buttonUnit )+ " " + 

        "L"+ (xColumn+ buttonUnit )+ "," + 
             (yStart + 4*buttonUnit )+ " " + 

        "L"+ (xColumn+ buttonUnit )+ "," + 
             (yStart + 5*buttonUnit )+ " " + 
 
        " ";

    } else if (d == "allThree")  {

      return "M" + 

        " "+ (xColumn  ) + "," + 
             (yStart + 6.75*buttonUnit )+ " " + 

        "L"+ (xColumn) + "," + 
             (yStart + 6.25*buttonUnit )+ " " + 

        "L"+ (xColumn+.5*buttonUnit) + "," + 
             (yStart + 6.05*buttonUnit )+ " " + 

        "L"+ (xColumn+ buttonUnit)+ "," + 
             (yStart + 6.25*buttonUnit )+ " " + 

        "L"+ (xColumn+ buttonUnit )+ "," + 
             (yStart + 6.75*buttonUnit )+ " " + 

        "L"+ (xColumn+.5*buttonUnit) + "," + 
             (yStart + 6.95*buttonUnit )+ " " + 
 
        " ";

    }
  }



function getOrientationButtonWireframeCoordinates(d) {

var xColumn = 0;

var yStart = 176;

var buttonUnit = 20;

 if (orientation == "winningPctByStanding")  {

// top square including a return to the first square, the top left in the implicit foreground, i.e. 2016, then straight back 
// to 2005, over to first place, and back to 2016, and finally back to the first square
      return "M" + 

        " "+ (xColumn) + "," + 
             (yStart )+ " " + 
        "L"+ (xColumn ) + "," + 
             yStart + " " + 

        "L"+ (xColumn+ buttonUnit )+ "," + 
             yStart + " " + 

        "L"+ (xColumn+buttonUnit )+ "," + 
             (yStart)  + " " + 

        "L"+ (xColumn) + "," + 
             (yStart )+ " " + 
//bottom square paralleling the top
        "M"+ (xColumn) + "," + 
             (yStart + buttonUnit) + " " + 

        "L"+ (xColumn ) + "," + 
             (yStart + buttonUnit) + " " + 

        "L"+ (xColumn+ buttonUnit)+ "," + 
             (yStart + buttonUnit) + " " + 

        "L"+ (xColumn+buttonUnit )+ "," + 
             (yStart + buttonUnit) + " " + 

        "L"+ (xColumn )+ "," + 
             (yStart + buttonUnit) + " " + 
//four connecting edges following the same sequence of vertices as above           
        "M"+ (xColumn) + "," + 
             (yStart) + " " + 
        "L"+ (xColumn) + "," + 
             (yStart + buttonUnit) + " " + 
        "M"+ (xColumn) + "," + 
             (yStart ) + " " + 
        "L"+ (xColumn) + "," + 
             (yStart+ buttonUnit) + " " + 
        "M"+ (xColumn+ buttonUnit) + "," + 
             (yStart) + " " + 
        "L"+ (xColumn+ buttonUnit) + "," +
             (yStart + buttonUnit) + " " + 
        "M"+ (xColumn+ buttonUnit) + "," + 
             (yStart) + " " + 
        "L"+ (xColumn+ buttonUnit) + "," +
             (yStart + buttonUnit) + " " + 

// top square clockwise from bottom left plus back-left-bottom ray to the most back vertex
 
        " ";

    } else if (orientation == "winningPctByYear")  {

// top square
      return "M" +  

        " "+ (xColumn+ buttonUnit) + "," + 
             (yStart + 2*buttonUnit )+ " " + 

        "L"+ (xColumn) + "," + 
             (yStart + 2*buttonUnit )+ " " + 

        "L"+ (xColumn )+ "," + 
             (yStart + 2*buttonUnit )+ " " + 

        "L"+ (xColumn+buttonUnit )+ "," + 
             (yStart + 2*buttonUnit )+ " " + 
        
        "L"+ (xColumn+ buttonUnit) + "," + 
             (yStart + 2*buttonUnit )+ " " + 
 
        "M"+ (xColumn+ buttonUnit) + "," + 
             (yStart + 3*buttonUnit )+ " " + 

        "L"+ (xColumn) + "," + 
             (yStart + 3*buttonUnit)+ " " + 

        "L"+ (xColumn )+ "," + 
             (yStart + 3*buttonUnit)+ " " + 

        "L"+ (xColumn+buttonUnit )+ "," + 
             (yStart + 3*buttonUnit)+ " " + 
        
        "L"+ (xColumn+ buttonUnit) + "," + 
             (yStart + 3*buttonUnit )+ " " + 


        "M"+ (xColumn+ buttonUnit) + "," + 
             (yStart + 2*buttonUnit) + " " + 
        "L"+ (xColumn+ buttonUnit) + "," + 
             (yStart + 3*buttonUnit) + " " + 

        "M"+ (xColumn) + "," + 
             (yStart + 2*buttonUnit) + " " + 
        "L"+ (xColumn) + "," + 
             (yStart + 3*buttonUnit) + " " + 

        "M"+ (xColumn) + "," + 
             (yStart + 2*buttonUnit) + " " + 
        "L"+ (xColumn) + "," +
             (yStart + 3*buttonUnit) + " " + 

        "M"+ (xColumn+ buttonUnit) + "," + 
             (yStart + 2*buttonUnit) + " " + 
        "L"+ (xColumn+ buttonUnit) + "," +
             (yStart + 3*buttonUnit) + " " + 
 
        " ";

    } else if (orientation == "standingByYear")  {

      return "M" + 

        " "+ (xColumn + buttonUnit) + "," + 
             (yStart + 5*buttonUnit )+ " " + 

        "L"+ (xColumn ) + "," + 
             (yStart + 5*buttonUnit )+ " " + 

        "L"+ (xColumn )+ "," + 
             (yStart + 4*buttonUnit )+ " " + 

        "L"+ (xColumn+ buttonUnit )+ "," + 
             (yStart + 4*buttonUnit )+ " " + 
 
        "L"+ (xColumn + buttonUnit) + "," + 
             (yStart + 5*buttonUnit )+ " " + 

        "M"+ (xColumn + buttonUnit) + "," + 
             (yStart + 5*buttonUnit)+ " " + 

        "L"+ (xColumn ) + "," + 
             (yStart + 5*buttonUnit )+ " " + 

        "L"+ (xColumn )+ "," + 
             (yStart + 4*buttonUnit )+ " " + 

        "L"+ (xColumn+ buttonUnit )+ "," + 
             (yStart + 4*buttonUnit)+ " " + 
 
        "L"+ (xColumn +buttonUnit) + "," + 
             (yStart + 5*buttonUnit )+ " " + 

        "M"+ (xColumn + buttonUnit) + "," + 
             (yStart + 5*buttonUnit)+ " " + 
        "L"+ (xColumn + buttonUnit) + "," + 
             (yStart + 5*buttonUnit )+ " " + 

        "M"+ (xColumn ) + "," + 
             (yStart + 5*buttonUnit )+ " " + 
        "L"+ (xColumn ) + "," + 
             (yStart + 5*buttonUnit)+ " " + 

        "M"+ (xColumn )+ "," + 
             (yStart + 4*buttonUnit )+ " " + 
        "L"+ (xColumn )+ "," + 
             (yStart + 4*buttonUnit)+ " " + 

        "M"+ (xColumn+ buttonUnit)+ "," + 
             (yStart + 4*buttonUnit )+ " " + 
        "L"+ (xColumn+ buttonUnit )+ "," + 
             (yStart + 4*buttonUnit )+ " " + 
 
        " ";

    
    }  else if (orientation == "allThree")  {

return "M" + 

        " "+ (xColumn +.5*buttonUnit ) + "," + 
             (yStart + 6.45*buttonUnit )+ " " + 

        "L"+ (xColumn) + "," + 
             (yStart + 6.25*buttonUnit )+ " " + 

        "L"+ (xColumn +.5*buttonUnit ) + "," + 
             (yStart + 6.05*buttonUnit )+ " " + 

        "L"+ (xColumn+buttonUnit )+ "," + 
             (yStart + 6.25*buttonUnit )+ " " + 

        "L"+ (xColumn+.5*buttonUnit )+ "," + 
             (yStart + 6.45*buttonUnit )+ " " + 

        "M"+ (xColumn +.5*buttonUnit ) + "," + 
             (yStart + 6.95*buttonUnit )+ " " + 

        "L"+ (xColumn) + "," + 
             (yStart + 6.75*buttonUnit )+ " " + 

        "L"+ (xColumn+.5*buttonUnit ) + "," + 
             (yStart + 6.55*buttonUnit )+ " " + 

        "L"+ (xColumn+buttonUnit )+ "," + 
             (yStart + 6.75*buttonUnit )+ " " + 

        "L"+ (xColumn+.5*buttonUnit )+ "," + 
             (yStart + 6.95*buttonUnit )+ " " +   

        "M" +(xColumn+.5*buttonUnit ) + "," + 
             (yStart + 6.45*buttonUnit )+ " " +
        "L"+ (xColumn +.5*buttonUnit ) + "," + 
             (yStart + 6.95*buttonUnit )+ " " +

        "M" +(xColumn) + "," + 
             (yStart + 6.25*buttonUnit )+ " " +
        "L"+ (xColumn) + "," + 
             (yStart + 6.75*buttonUnit )+ " " + 

        "M" +(xColumn+.5*buttonUnit ) + "," + 
             (yStart + 6.05*buttonUnit )+ " " +
        "L"+ (xColumn+.5*buttonUnit ) + "," + 
             (yStart + 6.55*buttonUnit )+ " " + 

        "M" +(xColumn+buttonUnit )+ "," + 
             (yStart + 6.25*buttonUnit )+ " " + 
        "L"+ (xColumn+buttonUnit )+ "," + 
             (yStart + 6.75*buttonUnit )+ " " + 
 
        " ";

      } 
  }

  function getOrdinalSuffixOf(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}