import '@testing-library/jest-dom';
import { configure } from "enzyme";
import { EnzymeAdapter } from 'enzyme';

configure({ adapter: new EnzymeAdapter() });