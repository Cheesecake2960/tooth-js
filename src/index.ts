const words = [
    "は", "ハ", "歯",
    "🦷", "Teeth",
    "Tooth", "は～",
    "ハハッハー", "歯。",
    "ハ。", "ハハッハー！",
    "は？", "ハ！",
    "GPTooth", "Toothday",
    "Teethday"
];

const randRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export function generateAnswer(input: string, wordList: string[] = words) {
    const answerLength = randRange(input.length / 2, input.length * 2);
    let answer = "";

    for (let i = 0; i < answerLength; i++) {
        answer += wordList[Math.floor(Math.random() * words.length)]
    }

    return answer;
}