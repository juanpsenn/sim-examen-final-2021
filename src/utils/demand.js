const demands = [10, 20, 25, 30, 50, 70, 100];
const cumulativeFrequencies = [0.1, 0.3, 0.7, 0.8, 0.9, 0.95, 1];

export function getDemand(random) {
    let demand;

    cumulativeFrequencies.forEach((freq, index) => {
        if (!demand && random < freq) {
            demand = demands[index]
        }
    });

    return demand;
}