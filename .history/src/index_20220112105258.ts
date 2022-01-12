type DurationUnit = "h" | "m" | "s";

type Duration = {
  value: number;
  unit: DurationUnit;
};

type Footing = {
  duration: Duration;
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
