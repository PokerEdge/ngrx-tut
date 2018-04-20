// Import each model in application
import { Tutorial } from './models/tutorial.model'

export interface AppState {
  // All model containing varaibles
  readonly tutorial: Tutorial[];
}
