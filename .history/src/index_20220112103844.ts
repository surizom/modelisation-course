type Footing = {
  duration: number;
  speedRelativeToVMA: number | null;
};

type Interval =
  | {
      duration: number;
      vitesse: number | null;
    }
  | {
      distance: number;
      vitesse: number | null;
    }
  | {
      distance: number;
      vitesse: number | null;
    };

type IntervalTraining = {};

type TrainingSession = {};
