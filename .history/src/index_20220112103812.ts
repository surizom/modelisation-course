type Footing = {
  duration: number;
  speedRelativeToVMA: number | null;
};

type Interval =
  | {
      distance: number;
      duration: number | null;
    }
  | {
      distance: number;
      vitesse: number | null;
    };

type IntervalTraining = {};

type TrainingSession = {};
