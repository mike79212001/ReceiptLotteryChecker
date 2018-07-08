
function _Lottery() {
	this.winCount = 0;
	this.totalCount = 0;
	this.lotteryNumbers = [];

	this.start = function(lotteryNumbers) {

		var _this = this;
		this.clearStatistic();

		this.lotteryNumbers = lotteryNumbers;

		$('#input-number > input').focus();
		$('#input-number > input').keydown(function (event) {
			return event.keyCode !== 69; // 'e'
		});

		$('#input-number > input').on('input', function () {
			if (this.value.length >= 3) {
				var inputValue = this.value;

				if (_this.isWin(inputValue)) {
					_this.showWinMsg(inputValue);
					_this.winCount++;
				} else {
					_this.showLoseMsg(inputValue);
				}
				_this.totalCount++;

				_this.updateStatistic();
				this.value = "";
			}
		});
	};

	this.clearStatistic = function() {
		this.winCount = 0;
		this.totalCount = 0;
	};

	this.updateStatistic = function() {
		var statusText = "中獎數 / 總次數 : {0}/{1}";
		$('#statistic').html(statusText.format(this.winCount, this.totalCount));
	};

	this.showWinMsg = function(lotteryNum) {
		var output = "{0} 中獎!! <br/>";
		$('#history-list').prepend(output.format(lotteryNum));

		// FIXME: include Notify
		// Notify.beep();
	};

	this.showLoseMsg = function(lotteryNum) {
		var output = "{0} 沒中!! <br/>";
		$('#history-list').prepend(output.format(lotteryNum));
	};

	this.isWin = function(number) {
		var ret = this.lotteryNumbers.indexOf(number);

		if (-1 !== ret) {
			return true;
		}
		return false;
	};
};

var Lottery = new _Lottery();