function convertToBinary(num) {
    const binaryArray = new Array(8).fill('0');
    let right = 7;
    while (num > 0) {
        let remainder = num % 2;
        binaryArray[right] = remainder.toString();
        right -= 1
        num = Math.floor(num / 2);
    }
    return binaryArray.join('');
};

function createNetmask(num) {
    const netmaskArray = new Array(32).fill('0');
    for (let number = 0; number < num; number++) {
        netmaskArray[number] = '1';
    }
    return netmaskArray.join('');
}

function createBinaryAddress(arr) {
    const fullBinaryAddress = [];
    for (let value of arr) {
        const byte = convertToBinary(value);
        fullBinaryAddress.push(byte);
    }
    return fullBinaryAddress.join('');
}

function getBitwiseAnd(address, netmask) {
    const bitwiseAnd = [];
    for (let idx = 0; idx < address.length; idx++) {
        let bit = parseInt(address[idx]);
        let netmaskBit = parseInt(netmask[idx]);
        let bitwiseAndResult = bit & netmaskBit;
        bitwiseAnd.push(bitwiseAndResult.toString());
    }
    return bitwiseAnd.join("");
}

function separateBytes(address) {
    const byteArray = [];
    let left = 0;
    let right = 8;
    for (let idx = 0; idx < 4; idx++) {
        byteArray.push(address.slice(left, right));
        left += 8;
        right += 8;
    }

    return byteArray;
}

function convertToDecimal(num) {
    let decimal = 0;
    let power = 0;
    for (let idx = (num.length) - 1; idx >= 0; idx--) {
        let bit = parseInt(num[idx]);
        decimal += (2 ** power * (bit));
        power += 1;
    }
    return decimal;
}

function getDecimalAddress(arr) {
    let result = [];
    for (let item of arr) {
        const decimal = convertToDecimal(item);
        result.push(decimal);
    }
    return result;
}

export function extractNetworkAddress(arr, netmask) {
    const binaryAddress = createBinaryAddress(arr);
    const mask = createNetmask(netmask);
    const bitwiseAnd = getBitwiseAnd(binaryAddress, mask);
    const splitAddress = separateBytes(bitwiseAnd);
    const result = getDecimalAddress(splitAddress);
    return result;
    console.log(result);
}