//libs
import React from 'react';
//component
import Header from './Header';
import Explorer from './Explorer';
import Route from './Route';
//calculator sets
import Economics from './economics/Economics';
import Physics from './physics/Physics';
import Mathematics from './mathematics/Mathematics';
import Accounting from './accounting/Accounting';
//accounting sets
import BalanceSheet from './accounting/balanceSheet/BalanceSheet';
import CashFlowStatement from './accounting/cashFlowStatement/CashFlowStatement';
import IncomeStatement from './accounting/incomeStatement/IncomeStatement';
//accounting: balance sheet calculators
import BasicBalanceSheet from './accounting/balanceSheet/calculators/BasicBalanceSheet';
import CurrentAssets from './accounting/balanceSheet/calculators/CurrentAssets';
import CurrentDebt from './accounting/balanceSheet/calculators/CurrentDebt';
import DebtCapital from './accounting/balanceSheet/calculators/DebtCapital';
import FixedAssets from './accounting/balanceSheet/calculators/FixedAssets';
import LongTermDebt from './accounting/balanceSheet/calculators/LongTermDebt';
import OtherAssets from './accounting/balanceSheet/calculators/OtherAssets';
import OwnersEquityCapital from './accounting/balanceSheet/calculators/OwnersEquityCapital';
import TotalAssets from './accounting/balanceSheet/calculators/TotalAssets';
import TotalDebtEquity from './accounting/balanceSheet/calculators/TotalDebtEquity';
//accounting: cash flow statement sets
import FirmCashFlow from './accounting/cashFlowStatement/firm/FirmCashFlow';
import FinancingCashFlow from './accounting/cashFlowStatement/financing/FinancingCashFlow';
//accounting: firm cash flow calculators
import CashFlowFirm from './accounting/cashFlowStatement/firm/calculators/CashFlowFirm';
import EBITDA from './accounting/cashFlowStatement/firm/calculators/EBITDA';
import ATCFO from './accounting/cashFlowStatement/firm/calculators/ATCFO';
import CashTaxes from './accounting/cashFlowStatement/firm/calculators/CashTaxes';
import DeltaNOWC from './accounting/cashFlowStatement/firm/calculators/DeltaNOWC';
import DeltaLTA from './accounting/cashFlowStatement/firm/calculators/DeltaLTA';
//accounting: financing cash flow calculators
import CashFlowFinancing from './accounting/cashFlowStatement/financing/calculators/CashFlowFinancing';
//accounting: income statement calculators
import BasicIncomeStatement from './accounting/incomeStatement/calculators/BasicIncomeStatement';
import EBIT from './accounting/incomeStatement/calculators/EBIT';
import EBT from './accounting/incomeStatement/calculators/EBT';
import GrossProfit from './accounting/incomeStatement/calculators/GrossProfit';
import NetIncome from './accounting/incomeStatement/calculators/NetIncome';
import OperatingExpenses from './accounting/incomeStatement/calculators/OperatingExpenses';
//physics: calculator sets
import Mechanics from './physics/mechanics/Mechanics';
//physics: mechanics sets
import Motion from './physics/mechanics/motion/Motion';
import NetForce from './physics/mechanics/netForce/NetForce';
import NetTorque from './physics/mechanics/netTorque/NetTorque';
import Rotation from './physics/mechanics/rotation/Rotation';
//physics: mechanics calculators
import Acceleration from './physics/mechanics/calculators/acceleration';
import AngularAcceleration from './physics/mechanics/calculators/angular-acceleration';
import AngularFrequency from './physics/mechanics/calculators/angular-frequency';
import AngularImpulse from './physics/mechanics/calculators/angular-impulse';
import AngularImpulseMomentum from './physics/mechanics/calculators/angular-impulse-momentum';
import AngularMomentum from './physics/mechanics/calculators/angular-momentum';
import AngularVelocity from './physics/mechanics/calculators/angular-velocity';
import BulkModulus from './physics/mechanics/calculators/BulkModulus';
import Buoyancy from './physics/mechanics/calculators/Buoyancy';
import CentripetalAcceleration from './physics/mechanics/calculators/CentripetalAcceleration';
import Density from './physics/mechanics/calculators/Density';
import Drag from './physics/mechanics/calculators/Drag';
import DryFriction from './physics/mechanics/calculators/DryFriction';
import DynamicViscosity from './physics/mechanics/calculators/DynamicViscosity';
import Efficiency from './physics/mechanics/calculators/Efficiency';
import EscapeSpeed from './physics/mechanics/calculators/EscapeSpeed';
import FluidPressure from './physics/mechanics/calculators/FluidPressure';
import Frequency from './physics/mechanics/calculators/Frequency';
import FroudeNumber from './physics/mechanics/calculators/FroudeNumber';
import GeneralPotentialEnergy from './physics/mechanics/calculators/GeneralPotentialEnergy';
import GravitationalField from './physics/mechanics/calculators/GravitationalField';
import GravitationalPotential from './physics/mechanics/calculators/GravitationalPotential';
import GravitationalPotentialEnergy from './physics/mechanics/calculators/GravitationalPotentialEnergy';
import GravitationalPotentialEnergy2 from './physics/mechanics/calculators/GravitationalPotentialEnergy2';
import HookesLaw from './physics/mechanics/calculators/HookesLaw';
import Impulse from './physics/mechanics/calculators/Impulse';
import ImpulseMomentum from './physics/mechanics/calculators/ImpulseMomentum';
import KinematicViscosity from './physics/mechanics/calculators/KinematicViscosity';
import KineticEnergy from './physics/mechanics/calculators/KineticEnergy';
import MachNumber from './physics/mechanics/calculators/MachNumber';
import MassFlowRate from './physics/mechanics/calculators/MassFlowRate';
import MomentOfInertia from './physics/mechanics/calculators/MomentOfInertia';
import Momentum from './physics/mechanics/calculators/Momentum';
import OrbitalSpeed from './physics/mechanics/calculators/OrbitalSpeed';
import Power from './physics/mechanics/calculators/Power';
import PowerVelocity from './physics/mechanics/calculators/PowerVelocity';
import Pressure from './physics/mechanics/calculators/Pressure';
import ReynoldsNumber from './physics/mechanics/calculators/ReynoldsNumber';
import RotationalKineticEnergy from './physics/mechanics/calculators/RotationalKineticEnergy';
import RotationalPower from './physics/mechanics/calculators/RotationalPower';
import RotationalWork from './physics/mechanics/calculators/RotationalWork';
import ShearModulus from './physics/mechanics/calculators/ShearModulus';
import SimpleHarmonicOscillator from './physics/mechanics/calculators/SimpleHarmonicOscillator';
import SimplePendulum from './physics/mechanics/calculators/SimplePendulum';
import SpringPotentialEnergy from './physics/mechanics/calculators/SpringPotentialEnergy';
import SurfaceTension from './physics/mechanics/calculators/SurfaceTension';
import Torque from './physics/mechanics/calculators/Torque';
import UniversalGravitation from './physics/mechanics/calculators/UniversalGravitation';
import Velocity from './physics/mechanics/calculators/Velocity';
import VolumeFlowRate from './physics/mechanics/calculators/VolumeFlowRate';
import Weight from './physics/mechanics/calculators/Weight';
import Work from './physics/mechanics/calculators/Work';
import WorkEnergy from './physics/mechanics/calculators/WorkEnergy';
import YoungsModulus from './physics/mechanics/calculators/YoungsModulus';
const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Route path='/'>
        <Explorer />
      </Route>
      {/* CALCULATOR SETS */}
      <Route path='/economics'>
        <Economics />
      </Route>
      <Route path='/physics'>
        <Physics />
      </Route>
      <Route path='/mathematics'>
        <Mathematics />
      </Route>
      <Route path='/accounting'>
        <Accounting />
      </Route>
      {/*ACCOUNTING SETS*/}
      <Route path='/accounting/balance-sheet'>
        <BalanceSheet />
      </Route>
      <Route path='/accounting/cash-flow-statement'>
        <CashFlowStatement />
      </Route>
      <Route path='/accounting/income-statement'>
        <IncomeStatement />
      </Route>
      {/*BALANCE SHEET CALCULATORS*/}
      <Route path='/accounting/balance-sheet/basic'>
        <BasicBalanceSheet />
      </Route>
      <Route path='/accounting/balance-sheet/current-assets'>
        <CurrentAssets />
      </Route>
      <Route path='/accounting/balance-sheet/current-debt'>
        <CurrentDebt />
      </Route>
      <Route path='/accounting/balance-sheet/debt-capital'>
        <DebtCapital />
      </Route>
      <Route path='/accounting/balance-sheet/fixed-assets'>
        <FixedAssets />
      </Route>
      <Route path='/accounting/balance-sheet/long-term-debt'>
        <LongTermDebt />
      </Route>
      <Route path='/accounting/balance-sheet/other-assets'>
        <OtherAssets />
      </Route>
      <Route path='/accounting/balance-sheet/owners-equity-capital'>
        <OwnersEquityCapital />
      </Route>
      <Route path='/accounting/balance-sheet/total-assets'>
        <TotalAssets />
      </Route>
      <Route path='/accounting/balance-sheet/total-debt-equity'>
        <TotalDebtEquity />
      </Route>
      {/* ACCOUNTING: CASH FLOW SETS*/}
      <Route path='/accounting/cash-flow-statement/firm'>
        <FirmCashFlow />
      </Route>
      <Route path='/accounting/cash-flow-statement/financing'>
        <FinancingCashFlow />
      </Route>
      {/* ACCOUNTING: FIRM CASH FLOW CALCULATORS*/}
      <Route path='/accounting/cash-flow-statement/firm/cash-flow'>
        <CashFlowFirm />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/ebitda'>
        <EBITDA />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/atcfo'>
        <ATCFO />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/cash-taxes'>
        <CashTaxes />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/deltaNOWC'>
        <DeltaNOWC />
      </Route>
      <Route path='/accounting/cash-flow-statement/firm/deltaLTA'>
        <DeltaLTA />
      </Route>
      {/* ACCOUNTING: FINANCING CASH FLOW CALCULATORS */}
      <Route path='/accounting/cash-flow-statement/financing/cash-flow'>
        <CashFlowFinancing />
      </Route>
      {/* ACCOUNTING: INCOME STATEMENT CALCULATORS */}
      <Route path='/accounting/income-statement/basic'>
        <BasicIncomeStatement />
      </Route>
      <Route path='/accounting/income-statement/ebit'>
        <EBIT />
      </Route>
      <Route path='/accounting/income-statement/ebt'>
        <EBT />
      </Route>
      <Route path='/accounting/income-statement/gross-profit'>
        <GrossProfit />
      </Route>
      <Route path='/accounting/income-statement/net-income'>
        <NetIncome />
      </Route>
      <Route path='/accounting/income-statement/operating-expenses'>
        <OperatingExpenses />
      </Route>
      {/* PHYSICS: CALCULATOR SETS */}
      <Route path='/physics/mechanics'>
        <Mechanics />
      </Route>
      {/* PHYSICS: MECHANICS SETS */}
      <Route path='/physics/mechanics/motion'>
        <Motion />
      </Route>
      <Route path='/physics/mechanics/net-force'>
        <NetForce />
      </Route>
      <Route path='/physics/mechanics/net-torque'>
        <NetTorque />
      </Route>
      <Route path='/physics/mechanics/rotation'>
        <Rotation />
      </Route>
      {/* PHYSICS: MECHANICS CALCULATORS */}
      <Route path='/physics/mechanics/acceleration'>
        <Acceleration />
      </Route>
      <Route path='/physics/mechanics/angular-acceleration'>
        <AngularAcceleration />
      </Route>
      <Route path='/physics/mechanics/angular-frequency'>
        <AngularFrequency />
      </Route>
      <Route path='/physics/mechanics/angular-impulse'>
        <AngularImpulse />
      </Route>
      <Route path='/physics/mechanics/angular-impulse-momentum'>
        <AngularImpulseMomentum />
      </Route>
      <Route path='/phsyics/mechanics/angular-momentum'>
        <AngularMomentum />
      </Route>
      <Route path='/physics/mechanics/angular-velocity'>
        <AngularVelocity />
      </Route>
      <Route path='/physics/mechanics/bulk-modulus'>
        <BulkModulus />
      </Route>
      <Route path='/physics/mechanics/buoyancy'>
        <Buoyancy />
      </Route>
      <Route path='/physics/mechanics/centripetal-acceleration'>
        <CentripetalAcceleration />
      </Route>
      <Route path='/physics/mechanics/density'>
        <Density />
      </Route>
      <Route path='/physics/mechanics/drag'>
        <Drag />
      </Route>
      <Route path='/physics/mechanics/dry-friction'>
        <DryFriction />
      </Route>
      <Route path='/physics/mechanics/dynamic-viscosity'>
        <DynamicViscosity />
      </Route>
      <Route path='/physics/mechanics/efficiency'>
        <Efficiency />
      </Route>
      <Route path='/physics/mechanics/escape-speed'>
        <EscapeSpeed />
      </Route>
      <Route path='/physics/mechanics/fluid-pressure'>
        <FluidPressure />
      </Route>
      <Route path='/physics/mechanics/frequency'>
        <Frequency />
      </Route>
      <Route path='/physics/mechanics/froude-number'>
        <FroudeNumber />
      </Route>
      <Route path='/physics/mechanics/general-potential-energy'>
        <GeneralPotentialEnergy />
      </Route>
      <Route path='/physics/mechanics/gravitational-field'>
        <GravitationalField />
      </Route>
      <Route path='/physics/mechanics/gravitational-potential'>
        <GravitationalPotential />
      </Route>
      <Route path='/physics/mechanics/gravitational-potential-energy'>
        <GravitationalPotentialEnergy />
      </Route>
      <Route path='/physics/mechanics/gravitational-potential-energy-2'>
        <GravitationalPotentialEnergy2 />
      </Route>
      <Route path='/physics/mechanics/hookes-law'>
        <HookesLaw />
      </Route>
      <Route path='/physics/mechanics/impulse'>
        <Impulse />
      </Route>
      <Route path='/physics/mechanics/impulse-momentum'>
        <ImpulseMomentum />
      </Route>
      <Route path='/physics/mechanics/kinematic-viscosity'>
        <KinematicViscosity />
      </Route>
      <Route path='/physics/mechanics/kinetic-energy'>
        <KineticEnergy />
      </Route>
      <Route path='/physics/mechanics/mach-number'>
        <MachNumber />
      </Route>
      <Route path='/physics/mechanics/mass-flow-rate'>
        <MassFlowRate />
      </Route>
      <Route path='/physics/mechanics/moment-of-inertia'>
        <MomentOfInertia />
      </Route>
      <Route path='/physics/mechanics/momentum'>
        <Momentum />
      </Route>
      <Route path='/physics/mechanics/orbital-speed'>
        <OrbitalSpeed />
      </Route>
      <Route path='/physics/mechanics/power'>
        <Power />
      </Route>
      <Route path='/physics/mechanics/power-velocity'>
        <PowerVelocity />
      </Route>
      <Route path='/physics/mechanics/pressure'>
        <Pressure />
      </Route>
      <Route path='/physics/mechanics/reynolds-number'>
        <ReynoldsNumber />
      </Route>
      <Route path='/physics/mechanics/rotational-kinetic-energy'>
        <RotationalKineticEnergy />
      </Route>
      <Route path='/physics/mechanics/rotational-power'>
        <RotationalPower />
      </Route>
      <Route path='/physics/mechanics/rotational-work'>
        <RotationalWork />
      </Route>
      <Route path='/physics/mechanics/shear-modulus'>
        <ShearModulus />
      </Route>
      <Route path='/physics/mechanics/simple-harmonics-oscillator'>
        <SimpleHarmonicOscillator />
      </Route>
      <Route path='/physics/mechanics/simple-pendulum'>
        <SimplePendulum />
      </Route>
      <Route path='/physics/mechanics/spring-potential-energy'>
        <SpringPotentialEnergy />
      </Route>
      <Route path='/physics/mechanics/surface-tension'>
        <SurfaceTension />
      </Route>
      <Route path='/physics/mechanics/torque'>
        <Torque />
      </Route>
      <Route path='/physics/mechanics/universal-gravitation'>
        <UniversalGravitation />
      </Route>
      <Route path='/physics/mechanics/velocity'>
        <Velocity />
      </Route>
      <Route path='/physics/mechanics/volume-flow-rate'>
        <VolumeFlowRate />
      </Route>
      <Route path='/physics/mechanics/weight'>
        <Weight />
      </Route>
      <Route path='/physics/mechanics/work'>
        <Work />
      </Route>
      <Route path='/physics/mechanics/work-energy'>
        <WorkEnergy />
      </Route>
      <Route path='/physis/mechanics/youngs-modulus'>
        <YoungsModulus />
      </Route>
    </div>
  );
};

export default App;
