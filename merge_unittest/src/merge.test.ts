import { merge } from './merge';

describe('merge function', () => {
    test('merges three sorted lists with no duplicate values', () => {
        const list1: number[] = [1, 3, 5, 7];
        const list2: number[] = [2, 4, 6];
        const list3: number[] = [20, 18, 16, 14, 12];
        const expected: number[] = [1, 2, 3, 4, 5, 6, 7, 12, 14, 16, 18, 20];
        expect(merge(list1, list2, list3)).toEqual(expected);
    });

    test('merges three sorted lists with duplicate values', () => {
        const list1: number[] = [1, 1, 2, 3, 5, 7];
        const list2: number[] = [1, 2, 4, 5, 6, 6];
        const list3: number[] = [20, 18, 16, 14, 12];
        const expected: number[] = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 12, 14, 16, 18, 20];
        expect(merge(list1, list2, list3)).toEqual(expected);
    });

    test('merges when one list is empty', () => {
        const list1: number[] = [];
        const list2: number[] = [2, 4, 6];
        const list3: number[] = [20, 18, 16, 14, 12];
        const expected: number[] = [2, 4, 6, 12, 14, 16, 18, 20];
        expect(merge(list1, list2, list3)).toEqual(expected);
    });

    test('merges when two lists are empty', () => {
        const list1: number[] = [];
        const list2: number[] = [];
        const list3: number[] = [20, 18, 16, 14, 12];
        const expected: number[] = [12, 14, 16, 18, 20];
        expect(merge(list1, list2, list3)).toEqual(expected);
    });

    test('merges when all lists are empty', () => {
        const list1: number[] = [];
        const list2: number[] = [];
        const list3: number[] = [];
        const expected: number[] = [];
        expect(merge(list1, list2, list3)).toEqual(expected);
    });
});
