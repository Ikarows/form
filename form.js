'use strict';

/*!
 * validation.js - https://github.com/Ikarows/validation
 * Version - 1.0.0
 * author: Ikarows
 * date: 2018-6-13
 * Copyright (c) 2018 Daniel Eden
 */

(function($){

	$.fn.extend({
		//不能为空
		empty: function () {
			if($(this).val() == ""){
				return this;
			}
		},
		//限制长度 
		len: function (minLength, maxLength) {
			var len = $(this).val().length;
			if(len < minLength || len > maxLength){
				return this;
			}
		},
		//身份证号
		card: function () {
			var str = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
            if(!baseTest(str, this)){
            	return this;
            }
		},
		//电话号码
		phone: function () {
			var str = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
            if(!baseTest(str, this)){
            	return this;
            }
		},
		//邮箱
		email: function () {
			var str = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if(!baseTest(str, this)){
            	return this;
            }
		},
		//汉字
		china: function () {
			var str = /^[\u4e00-\u9fa5]{0,}$/;
            if(!baseTest(str, this)){
            	return this;
            }
		},
		//日期
		time: function () {
			var str = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/
			if(!baseTest(str, this)){
            	return this;
            }
		},
		//只能以数字开头和结尾,只能输入数字
		num: function () {
			var str = /^[0-9]$/g; 
            if(!baseTest(str, this)){
            	return this;
            }
		},
		//只能输入字母
		let: function () {
			var str = /[A-Za-z]$/g;
            if(!baseTest(str, this)){
            	return this;
            }
		}
	});

	var baseTest = function (str, _this) {
		var value = $(_this).val();
        if (!str.test(value)) {
            return false;
        }else{
        	return true;
        }
	}
})(jQuery);