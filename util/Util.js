// toast
const toast = title => (uni.showToast({
	title
}))


// showToast
const ntoast = title => (uni.showToast({
	title,
	icon: 'none'
}))

// 设置导航标题
const title = title => (uni.setNavigationBarTitle({
	title,
}))


// 取数组不同
const uniq = (array) => {
	array.sort();
	let temp = [array[0]];
	for (var i = 1, len = array.length; i < len; i++) {
		if (array[i] !== temp[temp.length - 1]) {
			temp.push(array[i]);
		}
	}
	return temp;
}


/**
 * 数组转为对象
 */
function toObj(arr) {
	let result = {};
	for (var a = 0; a < arr.length; a++) {
		result[a] = arr[a];
	}
	return result;
}



module.exports = {
	toast,
	ntoast,
	title
}
