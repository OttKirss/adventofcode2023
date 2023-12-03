import * as fs from 'fs';

export function day01() {
    const fileContents: string = fs.readFileSync('./input.txt', 'utf-8');
    let total: number = 0;

    const replaceNumberTextsWithNumbers = (text: string): string => {
        const numberMap: { [key: string]: string } = {
            'one': 'o1e',
            'two': 't2o',
            'three': 't3e',
            'four': 'f4r',
            'five': 'f5e',
            'six': 's6x',
            'seven': 's7e',
            'eight': 'e8t',
            'nine': 'n9e',
        };

        // g = global, all matches
        const regex = new RegExp(Object.keys(numberMap).join('|'), 'g');
        text = text.replace(regex, (matched) => {
            return numberMap[matched];
        });

        if (Object.keys(numberMap).some(numberKey => text.includes(numberKey))) {
            return replaceNumberTextsWithNumbers(text);
        }
        
        return text;
    };
    
    fileContents.split('\n').map((row) => {
        row = replaceNumberTextsWithNumbers(row);

        let firstNumber: string = '';
        let lastNumber: string = '';
        row.trim().split('').forEach((character) => {
            if (!isNaN(Number(character))) {
                if (firstNumber.length === 0) {
                    firstNumber = character;
                }
                
                lastNumber = character;
            }
        });

        total += Number(firstNumber + lastNumber);
    });
    
    console.log(total);
}

day01();
