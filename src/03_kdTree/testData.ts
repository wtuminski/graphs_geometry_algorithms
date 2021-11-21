import { PointType } from 'types';

import { AreaProps } from './getArea';

interface DataType {
  points: PointType[];
  area: AreaProps;
}

export const testData: Record<number, DataType> = {
  1: {
    points: [
      [5.38, 3.11],
      [4.69, 3.68],
      [3.88, 2.32],
      [3, 0.31],
      [4.78, 1.59],
      [5.91, 0.34],
      [6.45, 1.75],
      [7.62, 1.01],
      [6.51, 4.02],
    ],
    area: {
      pMin: [5.3, 1],
      pMax: [6.5, 3.5],
    },
  },
  2: {
    points: [
      [3.46, 6.25],
      [2.82, 6.81],
      [2.14, 5.51],
      [2.61, 0.82],
      [3.22, 1.96],
      [3.53, 0.83],
      [4.16, 2.25],
      [5.69, 1.26],
      [6.43, 2.0],
      [6.62, 6.18],
      [6.14, 5.38],
      [5.67, 6.21],
      [4.67, 3.23],
      [4.19, 3.73],
      [4.58, 4.45],
      [4.04, 5.66],
      [3.74, 5.01],
      [3.3, 5.27],
    ],
    area: {
      pMin: [3, 4],
      pMax: [6, 7],
    },
  },
  3: {
    points: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [9, 10],
    ],
    area: {
      pMin: [3, 4],
      pMax: [6, 7],
    },
  },
};
