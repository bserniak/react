import * as _ from "lodash";
import { ShallowWrapper } from "enzyme";

const combinatorial = (parts: any[][]): any[][] => {
    if (parts.length === 0) { return []; }
    if (parts.length === 1) { return parts[0].map((element: any): any[] => [element]); }

    const subset = combinatorial(parts.slice(1));
    return parts[0].reduce((results: any[][], element: any) =>
        results.concat(subset.map((sequence) => [element, ...sequence])), []);
};

export interface SignalledPromise<T> extends Promise<T> {
    done: boolean;
}

const signalledPromise = <T>() => {
    const promise = new Promise<T>((r: any) => {
        const timer: any = setInterval(() => {
            if (promise.done) {
                clearInterval(timer);
                r();
            }
        }, 1);
    }) as SignalledPromise<T>;
    promise.done = false;
    return promise;
};

let allModuleRewirings: Array<{module: any, variableNames: string[]}> = [];
const rewire = (testModule: any, variables: {[variableName: string]: any}) => {
    let moduleWiring = allModuleRewirings.find((w) => w.module === testModule);
    if (!moduleWiring) {
        moduleWiring = {module: testModule, variableNames: []};
        allModuleRewirings.push(moduleWiring);
    }

    for (const variableName of Object.keys(variables)) {
        testModule.__Rewire__(variableName, variables[variableName]);
        if (!_.includes(moduleWiring.variableNames, variableName)) {
            moduleWiring.variableNames.push(variableName)
        }
    }
};

const resetWiring = () => {
    for (const moduleWiring of allModuleRewirings) {
        for (const variableName of moduleWiring.variableNames) {
            moduleWiring.module.__ResetDependency__(variableName);
        }
    }
    allModuleRewirings = [];
};

const randomInteger = (min: number, max: number): number => {
    return Math.max(max, min + Math.floor(Math.random() * (max + 1 - min)));
};

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const waitForNextTick = async () => new Promise((r) => setTimeout(r, 0));

const resizeWindow = (width: number, height: number) => window.resizeTo(width, height);

function findComponentById<TProps>(testObject: ShallowWrapper<any>, component: React.ComponentClass<TProps> | React.StatelessComponent<TProps>, id: string): ShallowWrapper<TProps> {
    return testObject.find(component).findWhere((c) => c.props().id === id);
}

interface Stub {
    (...args: any[]): any;
    implementation(...args: any[]): any;
}

const makeStub = (): Stub => {
    const stub: Stub = ((...args: any[]) => (stub as any).implementation(...args)) as Stub;
    stub.implementation = () => {};
    return stub;
};

export {combinatorial, findComponentById, rewire, resetWiring, randomInteger, signalledPromise, delay, waitForNextTick, resizeWindow, makeStub};
