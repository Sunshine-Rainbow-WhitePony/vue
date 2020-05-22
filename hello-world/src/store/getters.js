const getters = {
	//这个state是同级目录的state.js的对象
	appNameWithVersion: (state) => {
		return `${state.appName}v2.0`
	}
}

export default getters