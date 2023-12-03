import * as fs from 'fs';

export function day02() {
    const fileContents: string = fs.readFileSync('./input.txt', 'utf-8');
    let total: number = 0;

    fileContents.split('\n').map((row) => {
        let redCount: number = 0;
        let greenCount: number = 0;
        let blueCount: number = 0;
        
        row.split(':')[1].trim().split(';').map((gameSet) => {
            gameSet.trim().split(',').map((cubesFromBag) => {
                if (cubesFromBag.includes('green')) {
                    const tempNumb: number = Number(cubesFromBag.replace('green', '').trim());
                    if (tempNumb > greenCount) {
                        greenCount = tempNumb;
                    }
                }

                if (cubesFromBag.includes('red')) {
                    const tempNumb: number = Number(cubesFromBag.replace('red', '').trim());
                    if (tempNumb > redCount) {
                        redCount = tempNumb;
                    }
                }

                if (cubesFromBag.includes('blue')) {
                    const tempNumb: number = Number(cubesFromBag.replace('blue', '').trim());
                    if (tempNumb > blueCount) {
                        blueCount = tempNumb;
                    }
                }
            });
        });

        total += (redCount * greenCount * blueCount);
    });
    
    console.log(total);
}

day02();
