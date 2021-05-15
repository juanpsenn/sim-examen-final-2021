export const data = ({rows}) => ({
    labels: rows.map(r => r[0]),
    datasets: [
        {
            label: 'Ventas perdidas',
            data: rows.map(r => r[5]),
            borderColor: '#457b9d',
        },
        {
            label: 'Tortas tiradas',
            data: rows.map(r => r[4]),
            borderColor: '#a8dadc',
        },
        {
            label: 'Utilidad',
            data: rows.map(r => r[11]),
            borderColor: '#e63946',
        },
        {
            label: 'Utilidad c/permiso',
            data: rows.map(r => r[14]),
            borderColor: '#1d3557',
        }
    ],
});