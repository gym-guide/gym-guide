export interface Exercise {
  id: number;
  title: string;
  description: string;
  category: string;
  sub_category: string;
  image_path: string;
  gif_path: string;
}

export interface initialStateForExercises {
  exercisesData: Array<Exercise>,
  exerciseData: Array<Exercise>,
  loading: boolean,
  success: boolean,
  message: string,
  error: boolean,
}
