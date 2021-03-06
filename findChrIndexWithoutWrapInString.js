/**
 * 获取字符串中下一个指定字符的索引，规避()[]""''等字符的包裹
 * @param {string} str
 * @param {string} chrs
 * @param {number} [start = 0]
 * @return {number}
 */
function findChrIndexWithoutWrapInString(str, chrs, start = 0){
	let index = -1;
	let wraps = {
		'{': '}',
		'[': ']',
		'(': ')',
		'"': '"',
		'\'': '\'',
	};
	let lastWrap;
	for(let i = start, l = str.length, chr; i < str.length; i++){
		chr = str[i];
		if(lastWrap == null && chrs.includes(chr)){
			if(str[i - 1] !== '\\'){
				index = i;
				break;
			}
		}else if(lastWrap == null && wraps[chr]){
			lastWrap = wraps[chr];
		}else if(lastWrap != null && chr === lastWrap){
			lastWrap = null;
		}
	}
	return index;
}