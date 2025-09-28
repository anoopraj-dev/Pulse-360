
export const generateUniqueId = (prefix: string): string => {
    const timeStampPart = Date.now().toString().slice(-5);
    const randomPart = Math.floor(100+Math.random()*900);
    return `${prefix} -${timeStampPart}-${randomPart}`
}