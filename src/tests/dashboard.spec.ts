/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Dashboard from '../components/Dashboard.vue';

describe('Dashboard.vue', () => {
  it('calculates monthly salary correctly', () => {
    const annualSalary = '$60,000'; 

    const wrapper = shallowMount(Dashboard);

    const monthlySalary = wrapper.vm.calculateMonthlySalary(annualSalary);

    expect(monthlySalary).toBe('5000.00');
  });

  it('returns null for invalid annual salary', () => {
    const annualSalary = 'invalid_salary';

    const wrapper = shallowMount(Dashboard);

    const monthlySalary = wrapper.vm.calculateMonthlySalary(annualSalary);

    expect(monthlySalary).toBeNull();
  });
});
