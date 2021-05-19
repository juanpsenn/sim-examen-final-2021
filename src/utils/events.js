import {toFixed, uniform} from "./generator";
import {getDemand} from "./demand";

function getDailyWaste(dailyStock, demand) {
    return dailyStock > demand ? dailyStock - demand : 0;
}

function getDailySalesLost(dailyStock, demand) {
    return dailyStock < demand ? demand - dailyStock : 0;
}

function getDailyUtility(demand, unitPrice, dailyStock, unitCost, isCaught, penaltyAmount) {
    let dailySales = demand < dailyStock ? demand : dailyStock;
    return (dailySales * unitPrice) - (dailyStock * unitCost) - (isCaught ? penaltyAmount : 0);
}

function getDailyUtilityWithPermission(demand, unitPrice, dailyStock, unitCost, hasPermission, permissionCost) {
    let dailySales = demand < dailyStock ? demand : dailyStock;
    return (dailySales * unitPrice) - (dailyStock * unitCost) - (hasPermission ? 0 : permissionCost);
}

export function getSimulation({initPrice, initCost, initPenalty, initStock, simulationDays, fromDay, toDay}) {
    let dslAvg;
    let dwAvg;
    let duAvg;
    let dupAvg;

    let unitCost = Number(initCost);
    let unitPrice = Number(initPrice);
    let penaltyAmount = Number(initPenalty);
    let permissionCost = 200;
    let dailyStock = Number(initStock);

    let randDemand = uniform(0, 1);
    let demand = getDemand(randDemand);

    let dailyWaste = getDailyWaste(dailyStock, demand);
    let dailySalesLost = getDailySalesLost(dailyStock, demand);
    let dailyWasteAcumulator = dailyWaste;
    let dailySalesLostAcumulator = dailySalesLost;


    let randPoliceOcurrance = uniform(0.2, 0.4)
    let randPolice = uniform(0, 1)
    let isCaught = randPolice < randPoliceOcurrance;
    let hasPermission = false;

    let dailyUtility = getDailyUtility(demand, unitPrice, dailyStock, unitCost, isCaught, penaltyAmount);
    let dailyUtilityAcumulator = dailyUtility;

    let dailyUtilityWithPermission = getDailyUtilityWithPermission(demand, unitPrice, dailyStock, unitCost, hasPermission, permissionCost);
    let dailyUtilityWithPermissionAcumulator = dailyUtilityWithPermission;

    let rows = (1 >= fromDay && 1 <= toDay) ? [[1, randDemand, demand, dailyStock, dailyWaste, dailySalesLost, dailyWasteAcumulator, dailySalesLostAcumulator,
        randPoliceOcurrance, randPolice, isCaught ? `SI (-${penaltyAmount})` : 'NO', dailyUtility, dailyUtilityAcumulator, dailyUtilityWithPermission, dailyUtilityWithPermissionAcumulator]] : []
    let lastRow = rows.length > 0 ? rows : [];
    let tail = [];

    for (let i = 2; i <= simulationDays; i++) {

        randDemand = uniform(0, 1);
        demand = getDemand(randDemand);

        dailyWaste = getDailyWaste(dailyStock, demand);
        dailySalesLost = getDailySalesLost(dailyStock, demand);
        dailyWasteAcumulator += dailyWaste;
        dailySalesLostAcumulator += dailySalesLost;

        randPoliceOcurrance = uniform(0.2, 0.4)
        randPolice = uniform(0, 1)
        isCaught = randPolice < randPoliceOcurrance;
        hasPermission = i % 7 !== 0;

        dailyUtility = getDailyUtility(demand, unitPrice, dailyStock, unitCost, isCaught, penaltyAmount);
        dailyUtilityAcumulator += dailyUtility

        dailyUtilityWithPermission = getDailyUtilityWithPermission(demand, unitPrice, dailyStock, unitCost, hasPermission, permissionCost);
        dailyUtilityWithPermissionAcumulator += dailyUtilityWithPermission;

        dwAvg = Number(toFixed(dailyWasteAcumulator / i, 4))
        dslAvg = Number(toFixed(dailySalesLostAcumulator / i, 4))
        duAvg = Number(toFixed(dailyUtilityAcumulator / i, 4))
        dupAvg = Number(toFixed(dailyUtilityWithPermissionAcumulator / i, 4))

        lastRow = [i, randDemand, demand, dailyStock, dailyWaste, dailySalesLost, dwAvg, dslAvg,
            randPoliceOcurrance, randPolice, isCaught ? `SI (-${penaltyAmount})` : 'NO', dailyUtility, duAvg, dailyUtilityWithPermission, dupAvg]

        if (i >= fromDay && i <= toDay) {
            rows.push([...lastRow])
        }

        if (simulationDays >= 25 && simulationDays - 25 <= i) {
            tail.push([...lastRow])
        }
    }
    return {_rows: rows, _lastRow: [lastRow], _tail: tail};
}