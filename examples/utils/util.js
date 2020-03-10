import store from '../store'
// 深层copy
const deepCopy = function(sourceObject, changeObject) {	// 深复制(需要合并的对象或数组，如果key相同后面覆盖前面)
	let targetObject;
	if (Array.isArray(sourceObject)) {
		targetObject = []
		if (changeObject === undefined) changeObject = []
		sourceObject = [...sourceObject, ...changeObject]
	} else {
		targetObject = {}
		if (changeObject === undefined) changeObject = {}
		sourceObject = {...sourceObject, ...changeObject}
	}
	for (let key in sourceObject) {
		if (typeof sourceObject[key] === 'object' && sourceObject[key]) {
			targetObject[key] =
			Array.isArray(sourceObject[key])
			? Object.values(deepCopy(sourceObject[key]))
			: deepCopy(sourceObject[key])
		}
		else targetObject[key] = sourceObject[key]
	}
	return targetObject
}

const getByPickerClassify = function(data) {
	if (!data.length) return {}
	let {classify1, classify2} = store.state
	if (!classify1.length) return

	let classify1Data = classify1.filter(item => item.id === data[0])[0]
	if (!classify2[classify1Data.id]) return
	let classify2Data = data[1].map(i => ({...classify2[classify1Data.id].filter(j => j.id === i)[0]}))
	let classify2Ids = classify2Data.map(item => item.id)
	let classify2Names = classify2Data.map(item => item.name)

	return {
		classify1: {...classify1Data},
		classify2: {
			data: classify2Data,
			ids: classify2Ids,
			names: classify2Names
		},
	}
}

// 数据格式验证
const nameCheck = name => /^[\u4E00-\u9FFF]{2,6}$/.test(name)
const emailCheck = email => /^\w+@\w+(?:\.com|\.com\.cn|\.cn|\.net)$/.test(email)
const phoneCheck = phone => /^1\d\d\d\d\d\d\d\d\d\d$/.test(phone)
const authcodeCheck = authcode => /^\d\d\d\d\d\d$/.test(authcode)
const passwordCheck = password => {
	if(/[\u4E00-\u9FFF]/.test(password)) return false
	let count = 0
	if (/[a-zA-Z]+/g.test(password)) count++
	if (/\d+/g.test(password)) count++
	if (/[!@#$%^&*()\-_+={}[\]|;:\\'"<>,.?\/`~]+/g.test(password)) count++
	return count >= 2 && password.length >= 8 && password.length <= 16
}
/**
 * https://blog.csdn.net
 * http://www.chinaz.com
 * www.chinaz.com
 * com.cn|com|cn|net|cc|org|vip|xin|top|club|xyz|wang|win
 */
const urlCheck = url => /^(?:https:\/\/|http:\/\/)?[a-z]{1,9}\.[a-z]{1,9}\.(?:com\.cn|com|cn|net|cc|org|vip|xin|top|club|xyz|wang|win)$/.test(url)

export default { deepCopy, getByPickerClassify, nameCheck, emailCheck, phoneCheck, authcodeCheck, passwordCheck, urlCheck }

