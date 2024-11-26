import React, { useState, useEffect } from 'react';
import { CurrencyDollarIcon, CalculatorIcon } from '@heroicons/react/24/outline';

interface MortgageCalculatorProps {
  propertyPrice: number;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ propertyPrice }) => {
  const [downPayment, setDownPayment] = useState(propertyPrice * 0.2); // 20% default
  const [loanTerm, setLoanTerm] = useState(25); // 25 years default
  const [interestRate, setInterestRate] = useState(6); // 6% default
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const principal = propertyPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(monthlyPayment);
  };

  useEffect(() => {
    calculateMortgage();
  }, [downPayment, loanTerm, interestRate, propertyPrice]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <CalculatorIcon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold text-gray-900">Mortgage Calculator</h2>
      </div>

      <div className="mt-6 space-y-4">
        {/* Property Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Property Price</label>
          <div className="mt-1 flex items-center rounded-md border border-gray-300 bg-gray-50 px-3 py-2">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
            <span className="ml-2 text-gray-900">{formatCurrency(propertyPrice)}</span>
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Down Payment ({Math.round((downPayment / propertyPrice) * 100)}%)
          </label>
          <input
            type="range"
            min={propertyPrice * 0.1}
            max={propertyPrice * 0.5}
            step={propertyPrice * 0.01}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="mt-1 w-full"
          />
          <div className="mt-1 text-sm text-gray-600">{formatCurrency(downPayment)}</div>
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Loan Term ({loanTerm} years)
          </label>
          <input
            type="range"
            min={5}
            max={30}
            step={1}
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="mt-1 w-full"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Interest Rate ({interestRate}%)
          </label>
          <input
            type="range"
            min={1}
            max={20}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-1 w-full"
          />
        </div>

        {/* Results */}
        <div className="mt-6 rounded-lg bg-primary/5 p-4">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-600">Estimated Monthly Payment</div>
            <div className="mt-1 text-2xl font-bold text-primary">
              {formatCurrency(monthlyPayment)}
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
            <div>
              <div className="font-medium text-gray-600">Total Loan Amount</div>
              <div className="mt-1 font-semibold text-gray-900">
                {formatCurrency(propertyPrice - downPayment)}
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-600">Total Interest</div>
              <div className="mt-1 font-semibold text-gray-900">
                {formatCurrency((monthlyPayment * loanTerm * 12) - (propertyPrice - downPayment))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          This calculator provides estimates only. Actual loan terms and payments will vary based on
          your individual circumstances and the lender's requirements.
        </p>
      </div>
    </div>
  );
};

export default MortgageCalculator;
