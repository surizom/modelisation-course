type DistanceUnit = "kilometers" | "meters" | "miles";

type Distance = {
  value: number;
  unit: DistanceUnit;
};

type SpeedUnit = "km/h" | "min/km" | "%VMA";

type Speed = {
  value: number;
  unit: SpeedUnit;
};

type DurationUnit = "hours" | "minutes" | "seconds";

type Duration = {
  value: number;
  unit: DurationUnit;
};

type Segment =
  | {
      duration: Duration;
    }
  | {
      distance: Distance;
    }
  | {
      duration: Duration;
      speed: Speed;
    }
  | {
      distance: Distance;
      duration: Duration;
    }
  | {
      speed: Speed;
      distance: Distance;
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
