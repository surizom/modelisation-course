type Footing = {
  duration: number;
  speedRelativeToVMA: number | null;
};

type IntervalType = "rest" | "run";

type Interval =
  | {
      type: IntervalType;
      duration: number;
      vitesse: number | null;
    }
  | {
      type: IntervalType;
      distance: number;
      vitesse: number | null;
    }
  | {
      type: IntervalType;
      distance: number;
      vitesse: number | null;
    };

type IntervalTraining = {};

type TrainingSession = {};
