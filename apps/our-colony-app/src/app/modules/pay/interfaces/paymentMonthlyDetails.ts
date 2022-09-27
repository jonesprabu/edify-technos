export interface MonthlyPaymentDetails {
    month: string,
    year: number,
    dueDate: number,
    amt: number,
    paidDate?: Date,
    paymentStatusCode: number,
    paymentStatusMsg: string
}