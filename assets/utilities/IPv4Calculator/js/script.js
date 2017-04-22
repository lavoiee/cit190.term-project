const MAX_OCTET_VALUE = 255;
var ipBin = '';
var smBin = '';
var netBits = '';
var newSM = '';
var networkBitLength = '';
var increment = '';
var numberOfHosts = 0;

//
// Document on ready function.
//
$(function(){
  // Set event listener on submit button
  // Collect the user input
  $("li#submit").on("click", function(){
    var ipAddress = $('input#ipAddress').val();
    var subnetMask = $('option:selected').val();
    var maxSubnets = $('input#maxSubnets').val();
    var netClass = $('input:checked').val();

    ValidateIPaddress(ipAddress);
    ipBin = ToBase2(ipAddress);
    smBin = ToBase2(subnetMask);
    netBits = CalcNetBits(maxSubnets);
    newSM = CalcNewSM(smBin);
    increment = CalcIncrement();
    DisplaySubnets(ipAddress, maxSubnets);

  });

  $('li#reset').on("click", function(){
    $("input#ipAddress").val('');
    $("input#maxSubnets").val('');
    $('input[name="network-class"]').prop('checked', false);
    $('input#octetRange').val('');
    $('select#subnetMask').val('');
    $('input#newSubnetMask').val('');
    $('input#subnetIncrement').val('');
    $('textarea').val('');
    $('input#hosts').val('');
    ipBin = '';
    smBin = '';
    netBits = '';
    newSM = '';
    networkBitLength = '';
    increment = '';
    numberOfHosts = 0;
  });

  //
  // Display range of first octet for network class
  // specified by user.
  $('input:radio').on('change', function(){
    var networkClass = $(this).val();
    switch (networkClass) {
      case 'A':
        $('input#octetRange').val('1 - 126');
        break;
      case 'B':
        $('input#octetRange').val('128 - 191');
        break;
      case 'C':
        $('input#octetRange').val('192 - 223');
        break;
      default:
    }
  });
});

//
// Function to display networks.
//
function DisplaySubnets(x, y){
  var counter = 0;
  var hosts = increment - 2;
  var networksNeeded = y;
  var ipAddress = x;
  var octets = new Array(4);
  var networkList = new Array(networksNeeded);
  octets = ipAddress.match(/\d{1,255}/g);
  octets[3] = 0;

  //
  // Only works correctly for subnet mask of 255.255.255.0
  // Need to add some type of test for the case where the
  // number of networks exceeds 100.
  for (var i = 0; i <= (parseInt(MAX_OCTET_VALUE/increment)); i++) {
    if ((octets[3] + increment) < MAX_OCTET_VALUE) {
      octets[3] = i * increment;
      networkList[i] = octets.join('.');
    }
    else if ((octets[3] + increment) >= MAX_OCTET_VALUE) {
      counter += 1;
      octets[2] = counter;
      octets[3] = counter * increment;
      networkList[i] = octets.join('.');
    }

    // $('textarea').append(octets.join('.') + '\n');
    $('textarea').append(networkList[i] + '\n');
    $('input#hosts').val(hosts);
  }
}

//
// Funciton to calculate the network increment.
//
function CalcIncrement(){
  increment = Math.pow(2, (32 - networkBitLength));
  $('input#subnetIncrement').val(increment);
  return increment;
}

//
//Function to calculate the new subnet mask.
//
function CalcNewSM(x){
  var sm = x;
  var subnetMaskBin = '';
  var subnetMaskDec = new Array(4);
  var smBinArray = sm.toString().split('');
  var pos = smBinArray.indexOf('0');
  for (var i = 0; i < (32 - pos); i++) {
    smBinArray.pop();
    // alert(smBinArray.length);
  }
  var networkBits = smBinArray;
  for (var index = 0; index <= (netBits - 1); index++) {
    networkBits.push('1');
  }
  networkBitLength = networkBits.length;
  for (var j = 0; j < (32 - networkBitLength); j++) {
    networkBits.push('0');
  }
  var subnetMask = networkBits.join('');
  subnetMask = subnetMask.match(/.{1,8}/g);
  for (var k = 0; k < subnetMask.length; k++) {
    subnetMaskDec[k] = parseInt(subnetMask[k], 2);
  }
  subnetMaskDecString = subnetMaskDec.join('.');
  $('input#newSubnetMask').val(subnetMaskDecString);
  subnetMaskBin = subnetMask.join('');
  return subnetMaskBin;
}

// function BinToInt(x){
//   var BinaryElement = x;
//   return parseInt(x, 2);
// }

//
// Function to calculate the number of host bits to
// borrow.
function CalcNetBits(maxSubnets){
  var numberOfNetworks = maxSubnets;
  var netBits;
  for (var i = 0; i < Math.pow(2, i); i++) {
    if (numberOfNetworks <= Math.pow(2, i)) {
      netBits = Math.pow(2, i);
      return i;
    }
  }
}

//
// Validate the IP Address the user entered.
//
function ValidateIPaddress(inputText){
  // Regular expression to match against.
  var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;
  if(inputText.match(ipformat)){
  return true;
  }
  else{
  alert("You have entered an invalid IP address!");
  return false;
  }
}

//
// Function to convert the IP Address the user entered into
// it's binary representation.
function ToBase2(ipBase10){
  var number;
  var binaryResult = '';
  var split = ipBase10.split('\.');
  for(i=0; i<split.length; i++) {
      if(split[i].length > 0){
          if(split[i] <= 255) {
              number=parseInt(split[i]);
              // to a binary octet
              // we need to add leading zeroes
              switch(number.toString(2).length) {
                  case 1:
                      binaryResult += "0000000"+number.toString(2);
                      break;
                  case 2:
                      binaryResult += "000000"+number.toString(2);
                      break;
                  case 3:
                      binaryResult += "00000"+number.toString(2);
                      break;
                  case 4:
                      binaryResult += "0000"+number.toString(2);
                      break;
                  case 5:
                      binaryResult += "000"+number.toString(2);
                      break;
                  case 6:
                      binaryResult += "00"+number.toString(2);
                      break;
                  case 7:
                      binaryResult += "0"+number.toString(2);
                      break;
                  default:
                      binaryResult += number.toString(2);
                      break;
              }
            }
          }
}
return binaryResult;
}
