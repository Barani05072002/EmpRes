const mobileCheck = (data) =>{
    const re = /^[7-9][0-9]{9}$/
    return re.test(data)
}

const emailCheck = (data) => {
    const re = /^[a-zA-Z0-9._%+-]+@[cstech.-]+\\.[com.-]+$/
    return re.test(data)
}

console.log(emailCheck("barani@cstech.com"))
module.exports = {mobileCheck}