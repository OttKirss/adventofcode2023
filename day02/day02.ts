import * as fs from 'fs';

export function day02(redCubeCount: number, greenCubeCount: number, blueCubeCount: number) {
    const fileContents: string = fs.readFileSync('./input.txt', 'utf-8');
    let total: number = 0;
    
    const isValidGame = (gameRedCount: number, gameGreenCount: number, gameBlueCount: number): boolean => {
        if (gameRedCount > redCubeCount) {
            return false;
        }
        
        if (gameGreenCount > greenCubeCount) {
            return false;
        }
        
        if (gameBlueCount > blueCubeCount) {
            return false;
        }
        
        return true;
    }

    fileContents.split('\n').map((row) => {
        let isSetOfGamesValid: boolean = true;
        row.split(':')[1].trim().split(';').map((gameSet) => {
            let redCount: number = 0;
            let greenCount: number = 0;
            let blueCount: number = 0;
            gameSet.trim().split(',').map((cubesFromBag) => {
                if (cubesFromBag.includes('green')) {
                    greenCount = Number(cubesFromBag.replace('green', '').trim());
                }

                if (cubesFromBag.includes('red')) {
                    redCount = Number(cubesFromBag.replace('red', '').trim());
                }

                if (cubesFromBag.includes('blue')) {
                    blueCount = Number(cubesFromBag.replace('blue', '').trim());
                }
            });

            if (!isValidGame(redCount, greenCount, blueCount)) {
                isSetOfGamesValid = false;
            }
        });
        
        if (isSetOfGamesValid) {
            total += Number(row.split(':')[0].replace('Game', '').trim());
        } else {
            
        }
    });
    
    console.log(total);
}

day02(12, 13, 14);
