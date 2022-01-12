type Footing = {
  duration: number;
  speedRelativeToVMA: number | null;
};

type IntervalType = "rest" | "run";

type Interval =
  | {
      type: "rest";
      duration: number;
    }
  | {
      type: "run";
      duration: number;
      vitesse: number | null;
    }
  | {
      type: "run";
      distance: number;
      vitesse: number | null;
    }
  | {
      type: "run";
      distance: number;
      vitesse: number | null;
    };

type IntervalTraining = {};

type TrainingSession = {};
