const a = "/hiragana/3042.svg"
const i = "/hiragana/3044.svg"

const charsSVG = [{charPath:a},{charPath:i}]

const extractCharCode = (fileArray) => {
    fileArray.forEach((obj) => {
        const code = obj.charPath.match(/(\d+)/)
        obj.charCode = code[0]
    })
    return fileArray;
}

export const newCharsSVG = extractCharCode(charsSVG)


