// 工具函数
export const util = {

  time: { // 时间函数
    // 年月日，时分秒
    timestampToTime(date) {
      date = new Date(date);
      let Y = date.getFullYear() + '.';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '.';
      let D = date.getDate() < 10 ? '0' + (date.getDate()) + ' ' : date.getDate() + ' ';
      let h = date.getHours() < 10 ? '0' + (date.getHours()) + ':' : date.getHours() + ':';
      let m = date.getMinutes() < 10 ? '0' + (date.getMinutes()) + ':' : date.getMinutes();
      // let s = date.getSeconds < 10 ? '0' + (date.getSeconds()) : date.getSeconds();
      return Y + M + D + h + m;
    },
    // 年月日
    timestampToTime2(date) {
      date = new Date(date);
      let Y = date.getFullYear() + '.';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '.';
      let D = date.getDate() < 10 ? '0' + (date.getDate()) + ' ' : date.getDate() + ' ';
      let h = date.getHours() < 10 ? '0' + (date.getHours()) + ':' : date.getHours() + ':';
      let m = date.getMinutes() < 10 ? '0' + (date.getMinutes()) + ':' : date.getMinutes();
      return Y + M + D;
    },
    timestampToTime3(date) {
      date = new Date(date);
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = date.getDate() < 10 ? '0' + (date.getDate()) + ' ' : date.getDate() + ' ';
      let h = date.getHours() < 10 ? '0' + (date.getHours()) + ':' : date.getHours() + ':';
      let m = date.getMinutes() < 10 ? '0' + (date.getMinutes()) + ':' : date.getMinutes();
      return Y + M + D;
    },
    
    
    // 时分秒
    dutationToTime(date) {
      date = date / 1000;
      if (isNaN(date) || date == 0) return "00:00:00";
      let hour = Math.floor(date / 3600);
      let min = Math.floor(date % 3600 / 60);
      let sec = (date % 60).toFixed(0);
      if (hour < 10) hour = "0" + hour;
      if (min < 10) min = "0" + min;
      if (sec < 10) sec = "0" + sec;
      return hour + ":" + min + ":" + sec;
    }
  },
  // 千分位
  numChange: {
    /**
     * 
     * @param {*} num ：需要转化的数字
     * @param {*} n ： 保留小数位数
     * @param {*} symbol  ： 根据什么隔开 “，” 或者 “-”
     */
    splitNum(num, n, symbol) {
      if (!num) throw new Error('splitNum需要传入一个待转换的数据');
      if (typeof num !== 'number') throw new TypeError('num参数应该是一个number类型');
      if (n < 0) throw new Error('参数n不应该小于0');
      var hasDot = parseInt(num) != num;//这里检测num是否为小数，true表示小数
      var m = (n != undefined && n != null) ? n : 1;
      num = m == 0 ? num.toFixed(m) + '.' : hasDot ? (n ? num.toFixed(n) : num) : num.toFixed(m);
      symbol = symbol || ',';
      num = num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function (match, p1, p2) {
        return p1 + symbol;
      });
      if (n == 0 || (!hasDot && !n)) {//如果n为0或者传入的num是整数并且没有指定整数的保留位数，则去掉前面操作中的小数位
        num = num.substring(0, num.indexOf('.'));
      }
      return num;
    }
  },
  check: {
    // 判断是否是数组
    isArray(arr) {
      if (Array.isArray(arr))
        return !!arr.length
    },
    // 手机号码验证
    testPhoneNum(num) {
      if (!num)
        return '0'
      let phone = /^1[34578]\d{9}$/
      if (phone.test(num))
        return '1'
    },
    // 四位验证码验证
    testCode(num) {
      if (!num)
        return '0'
      let code = /^\d{4}$/
      if (code.test(num))
        return '1'
    }
  },

	
	// 标题长度
	titleMaxLength: {
		splitTitle(str, len) {
			var newLength = 0;
			var newStr = "";
			var chineseRegex = /[^\x00-\xff]/g;
			var singleChar = "";
			var strLength = str.replace(chineseRegex, "**").length;
			for(var i = 0; i < strLength; i++) {
				singleChar = str.charAt(i).toString();
				if(singleChar.match(chineseRegex) != null) {
					newLength += 2;
				} else {
					newLength++;
				}
				if(newLength > len) {
					break;
				}
				newStr += singleChar;
			}

			if(strLength > len) {
				newStr = newStr + "...";
			}
			return newStr;
		},

	},
	//byte转换为MB
	conver(limit) {
		var size = "";
		if(limit < 0.1 * 1024) { //如果小于0.1KB转化成B  
			size = limit.toFixed(2) + "B";
		} else if(limit < 0.1 * 1024 * 1024) { //如果小于0.1MB转化成KB  
			size = (limit / 1024).toFixed(2) + "KB";
		} else if(limit < 0.1 * 1024 * 1024 * 1024) { //如果小于0.1GB转化成MB  
			size = (limit / (1024 * 1024)).toFixed(2) + "MB";
		} else { //其他转化成GB  
			size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
		}

		var sizestr = size + "";
		var len = sizestr.indexOf("\.");
		var dec = sizestr.substr(len + 1, 2);
		if(dec == "00") { //当小数点后为00时 去掉小数部分  
			return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
		}
		return sizestr;
	},
	//秒转换
	SecondToDate(msd) {
		var time = msd
		if(null != time && "" != time) {
			if(time > 60 && time < 60 * 60) {
				time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) -
					parseInt(time / 60.0)) * 60) + "秒";
			} else if(time >= 60 * 60 && time < 60 * 60 * 24) {
				time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
						parseInt(time / 3600.0)) * 60) + "分钟" +
					parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
						parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
			} else if(time >= 60 * 60 * 24) {
				time = parseInt(time / 3600.0 / 24) + "天" + parseInt((parseFloat(time / 3600.0 / 24) -
						parseInt(time / 3600.0 / 24)) * 24) + "小时" + parseInt((parseFloat(time / 3600.0) -
						parseInt(time / 3600.0)) * 60) + "分钟" +
					parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
						parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
			} else {
				time = parseInt(time) + "秒";
			}
		}
		return time;
	},


};