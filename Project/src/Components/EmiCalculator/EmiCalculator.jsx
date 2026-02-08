import React, { useState, useEffect } from 'react';

export function EmiCalculator() {
    const [amount, setAmount] = useState(100000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(5);
    const [emi, setEmi] = useState(0);

    // Calculate EMI logic
    const calculateEMI = () => {
        const P = parseFloat(amount);
        const R = parseFloat(rate) / 12 / 100;
        const N = parseInt(years) * 12;

        if (R > 0) {
            const power = Math.pow(1 + R, N);
            const emiCalc = (P * R * power) / (power - 1);
            setEmi(emiCalc);
        } else {
            setEmi(P / N);
        }
    };

    // Automatically calculate when values change
    useEffect(() => {
        calculateEMI();
    }, [amount, years, rate]);

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: '100vh',
                backgroundColor: '#3a3836',
                fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
            }}
        >
            <div className="card shadow border-0 p-4" style={{ maxWidth: '450px', width: '100%', borderRadius: '20px' }}>
                <h3 className="text-center mb-4" style={{ color: '#7bca21' }}>Personal Loan EMI</h3>

                <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                        <label className="fw-bold">Amount</label>
                        <span className="text-primary fw-bold">₹ {Number(amount).toLocaleString('en-IN')}</span>
                    </div>
                    <input type="range" className="form-range" min={100000} max={10000000} step={10000} value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>

                <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                        <label className="fw-bold">Tenure (Years)</label>
                        <span className="text-primary fw-bold">{years} Years</span>
                    </div>
                    <input type="range" className="form-range" min={1} max={30} value={years} onChange={(e) => setYears(e.target.value)} />
                </div>

                <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                        <label className="fw-bold">Interest Rate</label>
                        <span className="text-primary fw-bold">{rate}%</span>
                    </div>
                    <input type="range" className="form-range" min={1} max={20} step={0.1} value={rate} onChange={(e) => setRate(e.target.value)} />
                </div>

                <div className="text-center p-3" style={{ backgroundColor: '#7bca21', borderRadius: '15px' }}>
                    <p className="mb-1 text-muted">Monthly EMI</p>
                    <h2 className="fw-bold" style={{ color: '#2c3e50' }}>
                        ₹ {Math.round(emi).toLocaleString('en-IN')}
                    </h2>
                    <p className="small text-muted mt-2">
                        Total repayment: ₹ {Math.round(emi * years * 12).toLocaleString('en-IN')}
                    </p>
                </div>
            </div>
        </div>
    );
}