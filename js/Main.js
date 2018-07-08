
var selectYear = '107';
var selectMonth = '1';

var specialNumber = ['21735266'];
var grandNumber = ['91874254'];
var regularNumber = ['56065209', '05739340', '69001612'];
var additionalNumber = ['591', '342'];

var allThreeNumber = [];
allThreeNumber = allThreeNumber.concat(specialNumber);
allThreeNumber = allThreeNumber.concat(grandNumber);
allThreeNumber = allThreeNumber.concat(regularNumber);
allThreeNumber = allThreeNumber.concat(additionalNumber);
allThreeNumber = allThreeNumber.map(function(item) {
	return item.substr(-3);
});

// main
$( document ).ready(function() {
	// TODO: get lottery array
	Lottery.start(allThreeNumber);
});
