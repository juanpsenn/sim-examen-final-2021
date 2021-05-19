import {useEffect, useState} from 'react';
import {getSimulation} from "../utils/events";

const useSimulation = () => {
    const [rows, setRows] = useState([]);
    const [results, setResults] = useState([]);
    const [lastRow, setLastRow] = useState([]);
    const [tail, setTail] = useState([]);

    const simulate = ({unitPrice, unitCost, penaltyAmount, dailyStock, simulationDays, fromDay, toDay}) => {
        const {_rows, _lastRow, _tail} = getSimulation({
            initPrice: unitPrice,
            initCost: unitCost,
            initPenalty: penaltyAmount,
            initStock: dailyStock,
            simulationDays,
            fromDay,
            toDay
        })
        setRows(_rows);
        setLastRow(_lastRow);
        setTail(_tail);
    }

    useEffect(() => {
        if (rows.length > 0) {
            const last = rows.slice(-1).pop();
            setResults([
                {
                    name: 'AVG. VENTAS PERDIDAS',
                    value: last[7]
                },
                {
                    name: 'AVG. TORTAS TIRADAS',
                    value: last[6]
                },
                {
                    name: 'AVG. UTILIDAD',
                    value: last[12]
                },
                {
                    name: 'AVG. UTILIDAD PERMISO',
                    value: last[14]
                }
            ])
        }
    }, [rows])
    return {
        rows,
        results,
        lastRow,
        tail,
        simulate
    }
};

export default useSimulation;