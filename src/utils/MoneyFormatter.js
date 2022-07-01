const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
})

export default function formatMoney(price) {
    return formatter.format(price)
}