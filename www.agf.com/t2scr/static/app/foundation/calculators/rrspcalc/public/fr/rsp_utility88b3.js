

//Define some global variables
var RRSP_MAP_SIZE = 7;
var debugOn = false;
// 
var gRRSPPeriods = new Array(RRSP_MAP_SIZE);
var gRRSPPeriodValue = new Array(RRSP_MAP_SIZE);
var helpWindow;

//TODO. Will this call the method on startup??
initRRSPMap();

// -- String formatting routines
// - Take 12122.34639 and return $12,122.35
// -- 
function convertToMoney(amount, decplace)
{
  var _dollars=parseInt(amount);
  var _cents=parseInt((amount - _dollars)*100);
  var _negative = _dollars <0;
  if(_negative)
  {  _dollars = -_dollars;
     _cents=-_cents;
  }
  
  while(_cents.toString().length < 2)
     _cents="0"+_cents;
  
  var _dA=_dollars.toString().split("");
  var _d="";
  for(var i=_dA.length-1;i>=0;i--)
  {
    var _comma="";
	if((_dA.length-i)%3==0 && i!=0)_comma=",";
    _d=_comma+_dA[i]+_d;
  }
  var _neg_sign=_negative?"-":"";
  var _result=""+_neg_sign+_d+"."+_cents;
  return _result;
}


// --
// This function ensures that only valid numbers are entered in the field.
// Valid numbers are 0-9, . - and , A regular expression is the best way
// to parse this field
// 
function validateNumber(str, min, max)
{
   
   var temp = str.replace("$",'');
   var temp2 = temp.replace(",",'');
   var val = parseFloat(temp2);
   var minval = parseFloat(min);
   var maxval = parseFloat(max);

  // alert (val)
   if ( isNaN(val) )
   {
      alert("Lentrée doit être un chiffre.");
      return false;
   }
   else
   {
	   if ( minval == null && maxval == null )
	   {
 	      return true;
 	   }
 	   
 	   if( isNaN(minval) == false )
 	   {
 	       if ( isNaN(maxval) == false )
 	       {
 	          if ( val >= minval && val <= maxval )
 	          {
 	             return true;
 	          }
		      else
	          {
	         	 // alert("Value must be equal to or less than: " + maxval);
		          return false;
		      }   
		    }
		    if ( val < minval )
		    {
		     	  //alert("Value must be greater than or equal to : " + minval);
		          return false;
		    }
		    return true; 
	   }

       return true;
   }
}





///
// Ensure that the number of years to retirment is less than 100 
//
//
function checkYearsToRetirement(myForm)
{
     var str = myForm.yearsToRetire.value;
     if ( validateNumber(str,0,80) == true )
     {
        return true;
     }
     else
     {
        alert("Le nombre dannées avant la retraite ne peut pas être plus que 80.");
	    myForm.yearsToRetire.value = "80.0";
	    myForm.yearsToRetire.focus();
	    return false;
     }
 }
 
 //-- Check the number of years funds should last for
 function checkYearsFundToLast(myForm)
 {
     var str = myForm.txtYearsFundToLast.value;
     if ( validateNumber(str, 0, 50) == true )
     {
        return true;
     }
     else
     {
        alert("Les fonds ne peuvent pas durer plus de 50 ans.");
	    myForm.txtYearsFundToLast.value = "50.0";
	    myForm.txtYearsFundToLast.focus();
	    return false;
     }
 
 }
///
// Ensure that the inflation rate cannot be more than 50%
//
//
function checkInflationRate(myForm)
{
     var str = myForm.inflationRate.value;
     if ( validateNumber(str, 0, 50) == true )
     {
         return true;
     }
     else
     {
	    alert("Le taux dinflation ne peut pas être supérieur à 50%.");
	    myForm.inflationRate.value = "50.0";
	    myForm.inflationRate.focus();
	    return false;
     }
 }
          
// -- This method initializes all the periods used within the calculators
function initRRSPMap()
{
	//TODO - Ensure that these arrays never passed the RRSP_MAP_SIZE
	gRRSPPeriods[0] = "Annuelle";       gRRSPPeriodValue[0] = 1.0;
}

//-- 
// Build a list of all contribution/income frequencies
//--
	
	$('#rrspRetirementGoalValidationError').hide();
	$('#rrspCurrentSavingValidationError').hide();
	$('#rrspContributionAmountValidationError').hide();
	$('#rrspRORValidationError').hide();
	$('#rrspFormNumberValidationError').hide();
	$('#rrspNumberValidationError').hide();
	$('#rrspCurrentAgeValidationError').hide();
	$('#rrspRetireAgeValidationError').hide();
	$('#rrspGreaterThanZeroValidationError').hide();	
	$('#rrspRORValueValidationError').hide();	
	$('#rrspRetirementGoalGreaterThanZeroValidationError').hide();
	$('#rrspCurrentAgeGreaterThanZeroValidationError').hide();
	$('#rrspRetireAgeGreaterThanZeroValidationError').hide();
	
}
function buildRRSPPeriodList()
{
  var descriptions ="";
  for ( i = 0; i < RRSP_MAP_SIZE; i++)
  { 
     descriptions =  descriptions + "<option>" + gRRSPPeriods[i] + "<br>";
  }
  return descriptions;
}

// -- Parse dates




//--
// Validate all the fields in a form
//

function resetRRSPForm(myForm)
{
  myForm.reset();
  return ;
}

