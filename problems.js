// problem - 01
function calculateTax(income, expenses) {
    if (typeof income !== 'number' ||
        typeof expenses !== "number") {
        return 'Invalid Input'
    }
    if (expenses > income ||
        income <= 0 ||
        expenses <= 0) {
        return 'Invalid Input'
    }
    const revenue = income - expenses;
    const tax = revenue * 0.2;
    return tax
}

// const result = calculateTax(6000, -1500);
// console.log(result);





// problem - 02
function sendNotification(email) {
    if (typeof email !== 'string') {
        return "Invalid Email"
    }
    if (!email.includes('@')) {
        return "Invalid Email"
    }
    const part = email.split('@');
    const firstIndex = part[0];
    const lastIndex = part[1];
    return `${firstIndex} sent you an email from ${lastIndex}`
}

// const result = sendNotification('256');
// console.log(result);






// 3
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input '
    }
    let existNumber = false;
    for (const element of name) {
        if (isNaN(element) === false) {
            existNumber = true;
        }
    }
    return existNumber;
}

// const result = checkDigitsInName('!@#');
// console.log(result);






// 4
function calculateFinalScore(obj) {

    if (typeof obj !== 'object' ||
        typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' ||
        typeof obj.schoolGrade !== 'number' ||
        typeof obj.isFFamily !== 'boolean' ||
        obj.testScore > 50 ||
        obj.schoolGrade > 30
    ) {
        return 'Invalid Input'
    }

    const testScore = obj.testScore;
    const schoolGrade = obj.schoolGrade;
    let isFFamily;
    if (obj.isFFamily === true) {
        isFFamily = 20
    }
    else {
        isFFamily = 0;
    }
    const totalScore = testScore + schoolGrade + isFFamily;

    if (totalScore >= 80) {
        return true;
    }
    else {
        return false;
    }
}

// const info = { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }
// const result = calculateFinalScore(info);
// console.log(result)




// 05
function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) === false ||
        typeof serialNumber !== 'number'
    ) {
        return 'Invalid Input'
    }
    let totalWaitingTimes = 0;
    for (const time of waitingTimes) {
        totalWaitingTimes = totalWaitingTimes + time;
    }
    const avgWaitingTimes = totalWaitingTimes / waitingTimes.length
    const roundedAvgTimes = Math.round(avgWaitingTimes);

    const serial = serialNumber - waitingTimes.length - 1;
    const serialTime = roundedAvgTimes * serial;
    return serialTime;
}

const result = waitingTime([7, 8, 3, 4, 5], "9");
console.log(result);