import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
    const template = {
        "str|2-4": "lison", //值重复次数大于2，小于等于4
        "name|3": "lison", //值重复次数为3
        "num|4-10": 12, //属性值大于等于4，小于等于10，后边这个值随便写，但是必须为number类型
        "float|4-10.2-5": 0, //属性值为浮点型，整数部分大于等于4，小于等于10，小数部分最多保留5位，最少保留2位
        "bool|1": true, //属性值为true的概率为1/2
        "bool2|1-9": true, //属性值为true的概率为1/10，为false的概率为9/10
        "obj|2": { //这个对象的属性值中随机抽取2个
            a: "aa",
            b: "bb",
            c: "cc"
        },
        "obj2|1-2": { //这个对象的属性值中随机抽取1-2个
            a: "aa",
            b: "bb",
            c: "cc"
        },
        "arr|1": [1, 3, 5, 7], //从数组中随机抽取1个值
        "arr2|2-4": [1, 3, 5, 7], //数组拼接2-4次
        "arr3|2": [1, 3, 5, 7], //数组拼接2次
        "fun": () => { //属性值为函数的返回值
            return [3, 5, 6]
        },
        "reg": /[1-9][a-z]/, //属性值为符合正则表达式的字符串
        "age|+2": 18,
        email: Random.email(), //随机生成一个email
        email2: Mock.mock("@email"), //随机生成一个email
        imgsrc: Random.dataImage()
    }

    return options
}